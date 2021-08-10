import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Professors from "../TestsFilters/Professors";
import Disciplines from "../TestsFilters/Disciplines";

export default function Homepage(){
    const history = useHistory();
    const [option, setOption] = useState('');
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const url = (option === "Professores") ? "https://repo-provass.herokuapp.com/tests-professor" : "https://repo-provass.herokuapp.com/tests-discipline"
        if(option === "Escolha uma opção" || option === "" ) return;
        const request = axios.get(url);
        request.then(reply => {
            setElements(reply.data);
            
        })
        request.catch((error) =>{
            alert("Error! Try reloading the page");
        })
    },[option])
    

    return(
        <Home>
            <Title>Bem-Vindo! Escolha uma das opções abaixo:</Title>
            <Subtitle>Ordenar provas por:</Subtitle>
            <select id="order-by" value={option} onChange={e => {setOption(e.target.value)}} >
                <option>Escolha uma opção</option>
                <option>Professores</option>
                <option>Disciplinas</option>
            </select>

            <PostTestLink onClick={() => history.push('/post-test')} >Clique aqui para enviar um arquivo de prova</PostTestLink>
            {option === "Professores" ? <Professors professors={elements} /> : ''}
            {option === "Disciplinas" ? <Disciplines disciplines={elements} /> : ''}

        </Home>
    )
}

const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;

    select{
        width: 200px;
        height: 40px;
        border-radius: 25px;
        padding: 0 10px;
        background: #000;
        color: #FFF;
        font-family: 'Courier New', Courier, monospace;
    }
`
const Title = styled.div`
    font-size: 25px;
    margin: 20px 0;
`
const Subtitle = styled.div`
    font-size: 20px;
    margin: 10px 0;
`


const PostTestLink = styled.div`
    font-size: 23px;
    font-weight: bold;
    cursor: pointer;
    color: blue;
    text-decoration: underline;
    margin-top: 10px;
`

