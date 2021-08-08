import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tests from "./Tests";

export default function DisciplinesTests(){
    const {disciplineId} = useParams();
    const [tests, setTests] = useState([]);
    const [testsP1, setTestsP1] = useState([]);
    const [testsP2, setTestsP2] = useState([]);
    const [testsP3, setTestsP3] = useState([]);
    const [tests2Ch, setTests2Ch] = useState([]);
    const [testsOutras, setTestsOutras] = useState([]);

    useEffect(() => {
        const request = axios.get(`http://localhost:4000/tests-by-discipline/${disciplineId}`);
        request.then(reply => {

            setTests(reply.data);
            setTestsP1(reply.data.filter(t => t.category.name === "P1"))
            setTestsP2(reply.data.filter(t => t.category.name === "P2"))
            setTestsP3(reply.data.filter(t => t.category.name === "P3"))
            setTests2Ch(reply.data.filter(t => t.category.name === "2ch"))
            setTestsOutras(reply.data.filter(t => t.category.name === "Outras"))
       
        })
        request.catch(() => {
            alert("Error! try refreshing the page.")
        })
    },[])
    
    return(
        <Page>
            <Title> {tests.length > 0 ? `Provas da disciplina de ${tests[0].discipline.name}` : 'Ainda não foram adicionadas provas dessa disciplina'} </Title>
            {testsP1.length > 0 ?   <>
                                    <Section>P1</Section>
                                    <Tests tests={testsP1} />
                                    </>
                                    : '' }
            {testsP2.length > 0 ? <>
                                  <Section>P2</Section>
                                  <Tests tests={testsP2} />
                                  </>
                                    : '' }
            
            {testsP3.length > 0 ? <>
                                  <Section>P3</Section> 
                                  <Tests tests={testsP3} />
                                  </>
                                : '' }
            {tests2Ch.length > 0 ? 
            <>
            <Section>2Ch</Section> 
            <Tests tests={tests2Ch} />
            </>
            : '' }
            {testsOutras.length > 0 ? 
            <>
            <Section>Outras</Section> 
            <Tests tests={testsOutras} />
            </> 
            : '' }
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    
`
const Title = styled.div`
    font-size: 30px;
    margin: 20px 0;
`
const Section = styled.div`
    font-size: 25px;
    width: 100%;
    text-align: start;
    padding: 10px;
    border-bottom: 1px solid #ffffff;
    &:not(:nth-child(2)){
        margin-top: 80px;
    }
    
`