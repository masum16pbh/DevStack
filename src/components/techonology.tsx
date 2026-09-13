import { use, useState } from 'react'
import type { Itecnology } from '../type'
import TechCard from './cards/tecCard'
import SellectedCaed from './cards/sellectedCard'
import { toast, Zoom } from 'react-toastify'
interface I_TechProps {
    //  = is assignment
    //  : is type anotation
    aItProp: Promise<Itecnology[]>
}

export default function Techonology({ aItProp }: I_TechProps) {
    const TecData = use(aItProp)
    const [sellected, setSellected] = useState<Itecnology[]>([]) //I forget this snipt
    const handelRemoveAll = () => {
        setSellected([])
        toast.warning("All items are desellected", {
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
            <div className="flex flex-col md:flex-row md:gap-4">
                <div className='justify-center md:grid md:grid-cols-3 md:flex-3'>
                    {
                        TecData.map((item, key) => <TechCard key={key} Teitem={item}
                            sellected={sellected}//it not nesessaty hear
                            setSellected={setSellected} />)
                    }
                </div>
                <div className="p-2 md:flex-1 sticky top-12 max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
                    <h2 className='font-bold text-black text-[1.25rem]'>Your Stack</h2>
                    <p className='text-gray-700'>{sellected.length} Techonology Selected</p>
                    <p className="border border-gray-100 text-center p-4">{sellected.length <1 && "Your stack is empty"}</p>
                    <div> {/**item data rendating dive */}
                        {sellected.map((item, ind) => <SellectedCaed key={ind} item={item} sellected={sellected} setSellected={setSellected}></SellectedCaed>)}</div>
                    <button onClick={() => handelRemoveAll()} className={`btn font-medium w-full text-red-600 ${sellected.length < 1 ? "hidden" : "visible"}`}
                    >Remove All</button>
                </div>
            </div>

        </>
    )
}