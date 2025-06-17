import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
        <div className="justify-center items-center grid sm:grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-3  md:grid-cols-2   gap-6">
            {pricingOptions.map((option, index)=>(
                <div className=" " key={index}>
                    <div className="p-10 border border-neutral-700 rounded-xl">
                      <p className="text-4xl mb-8">
                        {option.title}
                        {option.title === "Pro" && 
                        <span className=" mb-4 text-xl bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent ">
                          {" "}(Most Popular)
                        </span>}
                      </p>
                      <p className="">
                        <span className="text-5xl mt-6 mr-2">
                           {option.price}
                        </span>
                        <span className="text-neutral-400 tracking-tight">/Month</span>
                        <ul>
                          {option.features.map((feature, index)=>(
                            <li key={index} className="flex mt-8 gap-2 mb-2">
                              <CheckCircle2/>
                              <span className="ml-2">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a href="#" className="mt-20 inline-flex justify-center items-center w-full h-12 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                            Subscribe
                        </a>
                         
                      </p>
                    </div>

                </div>
            ))}

        </div>
    </div>
  )
}

export default Pricing
