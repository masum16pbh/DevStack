import flogo from "../assets/logo-text.png"
export default function Footer() {

    return (
        <>
            <div className="mt-12 mb-12 ">
                <div className="flex justify-around gap-4">

                    {/* desktop footer */}
                    <div className=" md:flex-2">
                        <div className=" flex flex-col gap-4 items-center justify-between text-center md:text-left">

                            <img src={flogo} alt="" className="self-center md:self-start" />
                            <p>Curated tools, technologies, and resources for developers building
                                modern software.</p>
                            <ul className="flex gap-4 justify-between self-center md:self-start" ><li>GitHub</li>
                                <li>Twitter</li>
                                <li>Linkdin</li></ul>
                        </div>
                    </div>
                    <div className="hidden md:flex md:flex-1">
                        <div className="flex flex-col gap-3">
                            <h2>PRODUCT</h2>
                            <p>Home</p>
                            <p>Techonologies</p>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="hidden md:flex md:flex-1">
                        <div className="flex flex-col gap-3">
                            <h2>COMPANY</h2>

                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>

                    </div>
                    <div className="hidden md:flex md:flex-1">
                        <div className="flex flex-col gap-3"> <h2>LEGAL</h2>

                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-between mt-8">
                    <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4"><p>Privacy</p>
                        <p>Terms</p></div>
                </div>
            </div>
        </>
    )
}