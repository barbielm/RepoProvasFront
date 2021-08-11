import styled from "styled-components"


export default function Test({test}){
    
    return(
        <Component>
            <Name >{test.name}</Name>
            <Discipline>Discipline: {test.discipline.name}</Discipline>
            <Professor>Professor: {test.professor.name}</Professor>
            <Type>Type: {test.category.name}</Type>
            <Link href={`http://localhost:4000/files/${test.pdf}`} target="_blank" >{test.pdf} </Link>
        </Component>
    )
}

const Component = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #ffffff;
    font-size: 20px;
    margin: 15px 0;
    padding: 10px;
    @media(max-width: 600px){
        font-size: 11px;
        padding: 5px;
    }
`

const Name = styled.div`
    color: #000;
    @media(max-width: 600px){
        margin-right: 5px;
    }

`
const Discipline = styled.div`
    color: blueviolet;
`

const Professor = styled.div`
    color: blueviolet;
`

const Type = styled.div`
     color: gray;
`

const Link = styled.a`
    color: blue;
    font-size: 22px;
    cursor: pointer;
    text-decoration: underline;
    @media(max-width: 600px){
        font-size: 11px;
    }
`