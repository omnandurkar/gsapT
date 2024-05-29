import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { Link } from "react-router-dom";

const Home = () => {

    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            }).from(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            }).to(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "-+30",
                stagger: 0.5,
            }).to("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
            }).from("#welcome", {
                opacity: 0,
                duration: 0.5,
                stagger: 0.5,
            })

        }, comp)

        return () => ctx.revert()
    }, [])



    return (
        <div className="relative" ref={comp} >


            <div
                id="intro-slider"
                className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-extrabold z-10 w-full flex flex-col gap-10 tracking-tight"
            >
                <h1 className="text-9xl font-extrabold" id="title-1">
                    Learn Animation with
                </h1>
                <h1 className="text-9xl" id="title-1">
                    Om
                </h1>
                <h1 className="text-9xl" id="title-2">
                    Mahendra
                </h1>
                <h1 className="text-9xl" id="title-3">
                    Nandurkar
                </h1>
            </div>

            <div className="h-screen flex flex-col bg-gray-950 justify-center place-items-center space-y-20">
                <h1
                    id="welcome"
                    className="text-7xl font-bold text-gray-100 font-spaceGrotesk"
                >
                    जालिक विकास के जादू<span className="text-red-500">i</span>  खेल में आपका स्वागत है
                </h1>



                <Link to="/page1" >
                    <h3
                        id="welcome"
                        className="text-3xl font-bold text-gray-100 font-spaceGrotesk mt-10 "
                    >
                        Basic Animations dekhne ke liye yaha click kare
                    </h3>

                </Link>
                {/* <Link to="/page2" >
                    <h3
                        id="welcome"
                        className="text-3xl font-bold text-gray-100 font-spaceGrotesk mt-10 "
                    >
                        Click Here 2
                    </h3>

                </Link>

                <Link to="/page3" >
                    <h3
                        id="welcome"
                        className="text-3xl font-bold text-gray-100 font-spaceGrotesk mt-10 "
                    >
                        Click Here 3
                    </h3>

                </Link>

                <Link to="/page4" >
                    <h3
                        id="welcome"
                        className="text-3xl font-bold text-gray-100 font-spaceGrotesk mt-10 "
                    >
                        Click Here 4
                    </h3>

                </Link>

                <Link to="/page5" >
                    <h3
                        id="welcome"
                        className="text-3xl font-bold text-gray-100 font-spaceGrotesk mt-10 "
                    >
                        Click Here 5
                    </h3>

                </Link> */}

                <Link to="/page6" >
                    <h3
                        id="welcome"
                        className="text-3xl font-bold text-gray-100 font-spaceGrotesk mt-10 "
                    >
                        Makkhi Marne ka <span className="text-red-500">खूनी खेल</span>  khelne ke liye yaha 
                    </h3>    
                </Link>

                <Link to="/concepts" >
                    <h3
                        id="welcome"
                        className="text-3xl font-bold text-gray-100 font-spaceGrotesk mt-10 "
                    >
                        दिल के तार ❤️ jodne ke liye yaha
                    </h3>    
                </Link>



            </div>

        </div>
    )
}

export default Home