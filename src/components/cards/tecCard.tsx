import type { Itecnology } from "../../type";
interface cardProps { //without interface you can not use the type 
    Teitem: Itecnology
}
export default function TechCard({ Teitem }: cardProps) {//this give me more para all time

    return (
        <>
            <div>
                <h2 className="text-green-500">{Teitem.name}</h2>
            </div>

        </>
    )
}