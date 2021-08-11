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
    const [pdf, setPdf] = useState(null);
    const [name, setName] = useState('');
    const types = ["P1","P2","P3","2ch","Outras"];
    const [type, setType] = useState("");
    const history = useHistory();

    useEffect(() => {
        const request = axios.get("https://repo-provass.herokuapp.com/informations");
        request.then(reply => {
            setDisciplines(reply.data.disciplines);
            setAllProfessors(reply.data.professors);
        })
    },[])

    function checkName(name){
        const year = parseInt(name.substring(0,4))
        const semester = parseInt(name.substring(5,))
        if(name[4] !== '.' || isNaN(year) || isNaN(semester) || semester > 2 || semester < 1) return false;
        else return true
    }

    function sendTest(e){
        e.preventDefault()
        
        if(!pdf || professor ==="" || name==="" || type ==="") {
            alert("preencha todas as opções")
            return;
        }
        
        if(!pdf.name.endsWith(".pdf")){
            alert("selecione um arquivo pdf")
            return;
        }
        if(!checkName(name)){
            alert("nome inválido")
            return;
        }
        const formData = new FormData();
        const selectedProfessor = professors.filter(p => p.name === professor)[0].id
        const selectedDiscipline = disciplines.filter(d => d.name === discipline)[0].id
        
        formData.append("name",name);
        formData.append("categoryName",type);
        formData.append("professorId",selectedProfessor);
        formData.append("disciplineId",selectedDiscipline);
        formData.append("file",pdf);
        console.log(pdf)
        const config = {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        }
        
        const request = axios.post("http://localhost:4000/newtest", formData, config);

        request.then(() => {
            alert("Prova enviada com sucesso!")
            history.push("/")
        })
        request.catch(() => {
            alert("dados inválidos");
        })
    }

    return(
        <Page onSubmit={sendTest} name="form" >
            <Title>Selecione uma disciplina: </Title>
            <select id="discipline" name="discipline" value={discipline} onChange={e => {setDiscipline(e.target.value); setProfessors(allProfessors.filter(p => p.discipline.name === e.target.value))} } >
                <option>Escolha uma opção</option>
                {disciplines.map((d,i) => <option key={i} >{d.name}</option>)}
            </select>
        
            
            

            {(discipline === '' || discipline === "Escolha uma opção") ? '' :
            <>
            <Title>Selecione um professor: </Title> 
            <select id="professor" name="professor" value={professor} onChange={e => setProfessor(e.target.value)} >
                <option>Escolha uma opção</option>
                {professors.map((p,i) => <option key={i} >{p.name}</option>)}
            </select>
            
            
            </>
            }
            {(discipline ==='' || professor ==='' ||  discipline === "Escolha uma opção" || professor === "Escolha uma opção") ? '' :
            <>
            <Title>Adicione o arquivo pdf: </Title> 
            <input type="file" id="pdf" name="pdf"  onChange={e => setPdf(e.target.files[0])}  />
            <Title>Nome: </Title> 
            <input type="text" id="name" name="name" placeholder="formato: XXXX.X" value={name} onChange={e => setName(e.target.value)} />
            <Title>Tipo: </Title> 
            <select id="type" name="type" value={type} onChange={e => {if(e.target.value !== "Escolha uma opção") setType(e.target.value)}} >
                <option>Escolha uma opção</option>
                {types.map((t,i) => <option key={i} >{t}</option>)}
            </select>
            
            <button id="send" >Enviar</button>
            </>
            }
        </Page>
    )

}

const Page = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    width: 60%;
    margin: 0 auto;
    
    input{
        margin-bottom: 10px 0;
        width: 400px;
        height: 40px;
        border-radius: 5px;
        font-size: 20px;
        padding: 10px;
        border: none;
        animation: toRight 300ms ease-in-out forwards;
        @keyframes toRight{
            0%{
                transform: translateX(-50%);
            }
            80%{
                transform: translateX(20px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
    input::placeholder{
        font-size: 20px;
    }

    button{
        margin: 20px 0;
    }

    #send{
        background: cadetblue;
        color: #fff;
        font-size: 20px;
        width: 270px;
        height: 40px;
        border: none;
        border-radius: 5px;
        margin-top: 40px;
        animation: toRight 300ms ease-in-out forwards;
        @keyframes toRight{
            0%{
                transform: translateX(-50%);
            }
            80%{
                transform: translateX(20px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }

    select{
        width: 200px;
        height: 40px;
       
        padding: 0 10px;
        background: #000;
        border: none;
        color: #FFF;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        animation: toRight 300ms ease-in-out forwards;
        @keyframes toRight{
            0%{
                transform: translateX(-50%);
            }
            80%{
                transform: translateX(20px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
    @media(max-width: 600px){
        width: 100%;
        input{
            width: 90%;
        }
    }
    
`
const Title = styled.div`
    font-size: 30px;
    margin: 40px 0 20px 0;
    animation: toRight 300ms ease-in-out forwards;
        @keyframes toRight{
            0%{
                transform: translateX(-50%);
            }
            80%{
                transform: translateX(20px);
            }
            100%{
                transform: translateX(0);
            }
        }
`