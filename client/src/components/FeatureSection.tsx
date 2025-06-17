import   { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-10 border-b bordeer-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Features
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easy Build 
            <span className="bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
                {" "}Your Code
            </span> 
        </h1>
      </div>
      <div className="flex flex-wrap mt-10 lg-mt-20">
        {features.map((feature, index)=>(
            <div key={index} className="w-full lg:w-1/3 sm:w-1/2">
                <div className="flex">
                    <div className="w-10 h-10 flex mx-6 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                        <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                    </div>

                </div>

            </div>
        ))}

      </div>
    </div>
  )
}

export default FeatureSection
