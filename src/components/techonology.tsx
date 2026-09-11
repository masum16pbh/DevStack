import { use } from 'react'
import type { Itecnology } from '../type'
interface I_TechProps{
    //  = is assignment
    //  : is type anotation
    aItProp : Promise<Itecnology[]>
}
export default function Techonology({aItProp}:I_TechProps){
    const TecData = use(aItProp)
    return(
        <>
        <h1>{TecData.length}</h1>
        <div>
            <ul>{
                TecData.map(tec => <li>{tec.name}</li> )
                }</ul>
        </div>
        </>
    )
}