import { useHistory } from "react-router"
import styled from "styled-components"


export default function Test({test}){
    const history = useHistory();
    return(
        <Component>
            <Name onClick={() => history.push(`/tests-by-professor/`)} >{test.name}</Name>
            <Discipline>Discipline: {test.discipline.name}</Discipline>
            <Professor>Professor: {test.professor.name}</Professor>
            <Type>Type: {test.category.name}</Type>
            <Link href={test.pdf}>Link </Link>
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
`

const Name = styled.div`
    cursor: pointer;

`
const Discipline = styled.div`
    color: yellow;
`

const Professor = styled.div`
    color: yellow;
`

const Type = styled.div`
     color: gray;
`

const Link = styled.a`
    color: blue;
    font-size: 30px;
`