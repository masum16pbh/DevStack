import heroImg from "../assets/banner-stack.png"
export default function HeroSection() {

    return (
        <>
            <div className="justify-items-center flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col justify-around gap-1 md:gap-5">
                    <h2 className="font-bold text-center text-3xl md:text-4xl md:text-left ">Build Your Ideal <span className="inline-block bg-[linear-gradient(to_right,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Development Stack</span></h2>
                    <p className="text-center md:text-left">Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together
                        the stack that fits your next project.</p>

        <div className=" flex justify-between mt-2 ">
            <button className="btn-md btn w-48 bg-gradient-to-r from-orange-500 to-pink-500 ">Explore Techonologies</button>
            <button className="btn-md btn w-48" >Learn More</button>
        </div>
                </div>
                <img src={heroImg} alt="" />
            </div>
        </>
    )
}