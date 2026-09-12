import type { Dispatch, SetStateAction } from "react"
import type { Itecnology } from "../../type"
import { FaTimes } from "react-icons/fa";
interface sellectedCardprop {
    item: Itecnology
    sellected: Itecnology[]
    setSellected: Dispatch<SetStateAction<Itecnology[]>>
}
export default function SellectedCaed({item,sellected,setSellected }: sellectedCardprop) {
    return (
        <>
        <div className="flex justify-between items-center border border-amber-800 rounded-md p-2 mb-2.5">
            <div className="flex gap-1.5">
                <img src={item.icon} alt="" width={38} height={38}/>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                </div>
            </div>
            <button className="btn p-2 hover:bg-red-500 "><FaTimes /></button>
        </div>
        </>
    )
}