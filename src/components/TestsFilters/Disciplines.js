import Discipline from "./Discipline"

export default function Disciplines({disciplines}){
    return(
        disciplines.map(d => <Discipline discipline={d} />)
    )
}