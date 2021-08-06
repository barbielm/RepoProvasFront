import { useHistory } from "react-router"
import styled from "styled-components"

export default function Professor({professor}){
    const history = useHistory();
    return(
        <Component>
            <Name onClick={() => history.push(`/tests-by-professor/${professor.name}`)} >Professor: {professor.name}</Name>
            <NumberOfTests>Number of tests: {professor.numberOfTests}</NumberOfTests>
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
const NumberOfTests = styled.div`
    color: blue;
`