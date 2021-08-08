import Discipline from "./Discipline"
import styled from "styled-components"
export default function Disciplines({disciplines}){
    return(
        <Element>
            {disciplines.map(d => <Discipline discipline={d} />)}
        </Element>
    )
}

const Element = styled.div`
    width: 70%;
    background: #fff;
    margin-top: 20px;
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
    border-radius: 7px;
    box-shadow: 0 2px 6px 4px #000;
    @keyframes growDown {
    0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
}

`