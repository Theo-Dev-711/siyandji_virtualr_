import { CheckCircle2 } from "lucide-react";
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'
const Workflow = () => {
  return (
    <div className="mt-20 mb-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Accelerate Your 
            <span className="bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
                {" "}coding workflow
            </span>
        </h2>
        <div className=" flex-wrap justify-center grid lg:grid-cols-2 max-sm:grid-cols-1 mt-16 ">
          <div className="p-2 w-full ">
            <img src={codeImg} alt="Code"/>
          </div>
          <div className='p-12 w-full'>
          {checklistItems.map((item, index) => (
            <div key={index} className='flex mb-12'>
              <div className="text-green-400 bg-neutral-900 h-10 w-10 justify-center items-center rounded-full mx- p-2">
                <CheckCircle2/>
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl mx-1 ">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
          </div>

        </div>
      
    </div>
  )
}

export default Workflow
