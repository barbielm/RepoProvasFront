import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Disciplines from "./Disciplines";

export default function TestsByDiscipline(){
    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        const request = axios.get("http://localhost:4000/tests-discipline");
        request.then(reply => {
            console.log(reply.data)
            setDisciplines([... reply.data]);
        })
        request.catch((error) =>{
            alert("Error! Try reloading the page");
        })
    },[])
    return(
        <Page>
            <Title>Disciplinas</Title>
            <Disciplines disciplines={disciplines} />
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
