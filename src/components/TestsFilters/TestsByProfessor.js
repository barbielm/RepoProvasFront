import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Professors from "./Professors"

export default function TestsByProfessor(){
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        const request = axios.get("http://localhost:4000/tests-professor");
        request.then(reply => {
            console.log(reply.data)
            setProfessors([... reply.data]);
        })
        request.catch((error) =>{
            alert("Error! Try reloading the page");
        })
    },[])
    return(
        <Page>
            <Title>Professores</Title>
            <Professors professors={professors}/>
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
