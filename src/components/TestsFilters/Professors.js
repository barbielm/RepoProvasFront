import Professor from "./Professor"
import styled from "styled-components"
export default function Professors({professors}){
    return(
        <Element>
            {professors.map(p => <Professor professor={p} />)}
        </Element>
    )
}

const Element = styled.div`
    width: 60%;
    background: #fff;
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
    margin-top: 20px;
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