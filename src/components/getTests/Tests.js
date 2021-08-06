import Test from "./Test";
export default function({tests}){
    return(
        tests.map(t => <Test test={t} />)
    )
}