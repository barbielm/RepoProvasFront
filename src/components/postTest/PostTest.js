import axios from 'axios';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function PostTest(){
    const [professors, setProfessors] = useState([]);
    const [disciplines, setDisciplines] = useState([]);
    const[discipline, setDiscipline] = useState('');
    const[professor, setProfessor] = useState('')
    const [allProfessors, setAllProfessors] = useState('');
    const [pdf, setPdf] = useState('');
    const [name, setName] = useState('');
    const [types, setTypes] = useState(["P1","P2","P3","2ch","Outras"]);
    const [type, setType] = useState("");
    const history = useHistory();

    useEffect(() => {
        const request = axios.get("http://localhost:4000/informations");
        request.then(reply => {
            console.log(reply.data)
            setDisciplines(reply.data.disciplines);
            setAllProfessors(reply.data.professors);
        })
    },[])


    function selectDiscipline(d){
        setDiscipline(d.name);
        alert("Você selecionou a disciplina " + d.name);
        setProfessors(allProfessors.filter(p => p.discipline.name === d.name));
    }

    function selectProfessor(p){
        setProfessor(p.name);
        alert("Você selecionou o professor " + p.name);

    }

    function selectType(t){
        setType(t)
        alert("Você escolheu o tipo " + t);
    }

    function sendTest(){
        if(pdf === "" || professor ==="" || name==="" || type ==="") {
            alert("preencha todas as opções")
            return;
        }
        const selectedProfessor = professors.filter(p => p.name === professor)[0].id
        const selectedDiscipline = disciplines.filter(d => d.name === discipline)[0].id
        const body = {name: name, pdf: pdf, categoryName: type, professorId: selectedProfessor, disciplineId: selectedDiscipline }
        
        const request = axios.post("http://localhost:4000/newtest", body);

        request.then(() => {
            alert("Prova enviada com sucesso!")
            history.push("/")
        })
        request.catch(() => {
            alert("dados inválidos");
        })
    }

    return(
        <Page>
            <Title>Selecione uma disciplina: </Title>
        
            {disciplines.map(d => <button onClick={() => selectDiscipline(d)} >{d.name}</button>)}
            

            {discipline === '' ? '' :
            <>
            <Title>Selecione um professor: </Title> 
            {professors.map(p => <button onClick={() => selectProfessor(p)} >{p.name}</button>)}
            
            </>
            }
            {(discipline !=='' && professor !==''   ) ?
            <>
            <Title>Link para o pdf: </Title> 
            <input type="text" placeholder="Digite o link para o pdf" value={pdf} onChange={e => setPdf(e.target.value)} />
            <Title>Nome: </Title> 
            <input type="text" placeholder="Digite o ano da prova" value={name} onChange={e => setName(e.target.value)} />
            <Title>Tipo: </Title> 
            {types.map(t => <button onClick={() => selectType(t)} >{t}</button>)}
            
            <button id="send" onClick={sendTest} >Enviar</button>
            </>
            : ''}
        </Page>
    )

}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;

    input{
        margin: 20px 0;
    }

    button{
        margin: 20px 0;
    }

    #send{
        background: #000000;
        color: #FFF;
        font-size: 20px;
    }
    
`
const Title = styled.div`
    font-size: 30px;
    margin: 20px 0;
`