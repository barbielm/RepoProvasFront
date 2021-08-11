import Test from "./Test";
import styled from "styled-components"
export default function Tests({tests}){
    return(
        <Element>
            {tests.map((t,i) => <Test key={i} test={t} />)}
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
@media(max-width: 600px){
    width: 100%;
    border-radius: 0;
}

`