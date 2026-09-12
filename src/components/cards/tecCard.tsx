import { IoStar } from "react-icons/io5";
import type { Itecnology } from "../../type";
import { useState, type Dispatch, type SetStateAction } from "react";
interface cardProps { //without interface you can not use the type 
    Teitem: Itecnology;
    sellected: Itecnology[]
    setSellected: Dispatch<SetStateAction<Itecnology[]>>
    
}

export default function TechCard({ Teitem, sellected,setSellected }: cardProps) {//this give me more para all time
 //{ Teitem, sellected,setSellected }: cardProps is called destracturing without destracturing the varivls are not accessable                                                 
    const handelItem =()=>{
        setAdded(true);
        setSellected((prev) =>[... prev,Teitem])
    }
    const [added,setAdded] = useState(false)
    return (
        <>
            <div className="border border-amber-200 rounded-md m-2 p-2">
                <div className="flex justify-between ">
                    <div className="">
                        <img src={Teitem.icon} alt=''
                            width={36}
                            height={36} />
                    </div>
                    <div>
                        <span className="badge bg-amber-200 font-medium">{Teitem.badge}</span>
                    </div>
                </div>
                        <h3 className="font-bold text-lg">{Teitem.name}</h3>
                <p>{Teitem.description}</p>
                <div className="flex justify-between gap-2 text-sm mt-2 mb-2">
                    <span className="badge bg-gray-100">{Teitem.category}</span>
                    <span>{Teitem.difficulty}</span>
                    <span className="flex items-center gap-1">
                        <IoStar className="text-amber-400" />
                        {Teitem.rating}
                    </span>
                </div>
                <button onClick={() =>{ handelItem()
                    }} disabled={added}
                className={`btn btn-md ${added? "bg-gray-400": "bg-gray-800"} w-full text-white`}
                >{added ? "Added":"Add to Stack"}</button>
            </div>

        </>
    )
}