import  Video1  from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Virtual Build Tools
            <span className="bg-gradient-to-r  from-orange-500 to-orange-800  bg-clip-text text-transparent">
                {" "}For Developpers
            </span>  
        </h1>
        <p className="text-neutral-500 mt-10 text-lg text-center max-w-4xl">
            Empower your creativity and 
            bring your VR app ideas to life with our intuitive developement tools.
             Get started today and turn your imag
             ination into immersive reality !
        </p>
        <div className="flex items-center gap-5 my-10">
            <a href="#" className="px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
                Start for free
            </a>
            <a href="#" className="px-3 py-2 border rounded-md">Documentation</a>
        </div>
        <div className="mt-10 flex justify-center">
            <video autoPlay loop muted className="w-1/2 rounded-md border border-orange-800 shadow-orange-400 mx-2 my-4">
                <source src={Video1} type="video/mp4"/>
                 Your Browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="w-1/2 rounded-lg border border-orange-800 shadow-orange-400 mx-2 my-4">
                <source src={video2} type="video/mp4"/>
                Your Browser does not support the video tag.
            </video>         
        </div>
      
    </div>
  )
}

export default HeroSection
