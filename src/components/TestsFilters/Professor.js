import { useHistory } from "react-router"
import styled from "styled-components"

export default function Professor({professor}){
    const history = useHistory();
    return(
        <Component>
            <Name onClick={() => history.push(`/tests-by-professor/${professor.name}`)} >Professor: {professor.name}</Name>
            <NumberOfTests>{professor.numberOfTests}</NumberOfTests>
        </Component>
    )
}

const Component = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    &:not(:last-child){
        border-bottom: 1px solid #000;
    }
    
    font-size: 20px;
    margin: 15px 0;
    padding: 10px;
`

const Name = styled.div`
    cursor: pointer;
    color: #000;

`
const NumberOfTests = styled.div`
    color: blue;
    font-size: 25px;
    font-weight: bold;
`