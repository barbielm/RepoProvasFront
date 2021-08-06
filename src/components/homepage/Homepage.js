import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Homepage(){
    const history = useHistory();
    return(
        <Home>
            <Title>Bem-Vindo! Escolha uma das opções abaixo:</Title>
            <SeeTestButton onClick={() => history.push('/see-tests-by-professor')}>Vizualizar provas por professor</SeeTestButton>
            <SeeTestButton onClick={() => history.push('/see-tests-by-discipline')}>Vizualizar provas por disciplinas</SeeTestButton>
            <PostTestLink onClick={() => history.push('/post-test')} >Clique aqui para enviar um arquivo de prova</PostTestLink>
        </Home>
    )
}

const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
`
const Title = styled.div`
    font-size: 25px;
    margin: 20px 0;
`

const PostTestLink = styled.div`
    font-size: 20px;
    cursor: pointer;
    color: blue;
    text-decoration: underline;
`

const SeeTestButton = styled.button`
    font-size: 20px;
    margin: 20px 0;
    width: 250px;
    height: 80px;
    border-radius: 40px;
`