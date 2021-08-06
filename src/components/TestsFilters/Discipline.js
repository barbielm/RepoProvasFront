import { useHistory } from "react-router"
import styled from "styled-components"

export default function Discipline({discipline}){
    const history = useHistory();
    return(
        <Component>
            <Name onClick={() => history.push(`/tests-by-discipline/${discipline.id}`)} >Discipline: {discipline.name}</Name>
            <Semester>Semester: {discipline.semester}</Semester>
            <NumberOfTests>Number of tests: {discipline.numberOfTests}</NumberOfTests>
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
const Semester = styled.div`
    color: yellow;
`

const NumberOfTests = styled.div`
    color: blue;
`