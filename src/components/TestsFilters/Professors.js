import Professor from "./Professor"
export default function Professors({professors}){
    return(
        professors.map(p => <Professor professor={p} />)
    )
}