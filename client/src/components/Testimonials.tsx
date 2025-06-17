import { testimonials } from "../constants"


const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide my-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying</h2>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1   gap-6">
            {testimonials.map((testimonial, index)=>(
                <div key={index} className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                    <p>{testimonial.text}</p>
                    <div className="mt-8 flex items-start">
                    <img src={testimonial.image} alt={testimonial.user} className="mr-6 w-12 h-12 rounded-full border border-neutral-300  "/>
                    <div>
                        <h6>{testimonial.user}</h6>
                        <span className="font-normal italic text-neutral-600">{testimonial.company}</span>
                    </div>
                </div>
                </div>
                
            ))}
        </div>
      
    </div>
  )
}

export default Testimonials
