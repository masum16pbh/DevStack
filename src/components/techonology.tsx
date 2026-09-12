import { use, useState } from 'react'
import type { Itecnology } from '../type'
import TechCard from './cards/tecCard'
import SellectedCaed from './cards/sellectedCard'
interface I_TechProps {
    //  = is assignment
    //  : is type anotation
    aItProp: Promise<Itecnology[]>
}

export default function Techonology({ aItProp }: I_TechProps) {
    const TecData = use(aItProp)
    const [sellected, setSellected] = useState<Itecnology[]>([]) //I forget this snipt
    const handelRemoveAll = ()=>{
setSellected([])
    }
    return (
        <>
            <div>
                <div className='justify-center '>
                    {
                        TecData.map((item, key) => <TechCard key={key} Teitem={item}
                            sellected={sellected}//it not nesessaty hear
                            setSellected={setSellected} />)
                    }
                </div>
                <div>
                <div>{sellected.map((item, ind)=> <SellectedCaed key={ind} item={item} sellected={sellected} setSellected={setSellected}></SellectedCaed>)}</div>
                <button onClick={() =>handelRemoveAll()}  className={`btn font-medium text-red-600 ${sellected.length <1? "hidden":"visible"}`}
             >Remove All</button>
                </div>
            </div>

        </>
    )
}