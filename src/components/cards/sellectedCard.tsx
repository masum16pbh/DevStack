import type { Dispatch, SetStateAction } from "react"
import type { Itecnology } from "../../type"
import { FaTimes } from "react-icons/fa";
import { toast, Zoom } from "react-toastify";
interface sellectedCardprop {
    item: Itecnology
    sellected: Itecnology[]
    setSellected: Dispatch<SetStateAction<Itecnology[]>>
}
export default function SellectedCaed({item,sellected,setSellected }: sellectedCardprop) {
    const handelRemoveItem=(Ditem:Itecnology)=>{
        setSellected((prev)=>prev.filter((item)=> item.id != Ditem.id))
        toast.warning(`${Ditem.name} is un-sellected`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        })
    }
    
        return (
            <>
            <div className="flex justify-between items-center border border-amber-800 rounded-md p-2 m-2">
                <div className="flex gap-1.5">
                    <img src={item.icon} alt="" width={38} height={38}/>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.category}</p>
                    </div>
                </div>
                <button onClick={()=>handelRemoveItem(item)} className="btn p-2 hover:bg-red-500 "><FaTimes /></button>
            </div>
            </>
        )

    
    
}