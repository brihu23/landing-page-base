/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
const people = [
    {
      name: 'Tyler Whittle',
      role: 'Head of Operations, Floodgate Capital',
      logoBubbleUrl: 'https://uploads-ssl.webflow.com/61980225ed8f4aace3ebf302/61980225ed8f4a8a1cebf30d_floo.png',
      imageUrl:
        'https://uploads-ssl.webflow.com/61980225ed8f4aace3ebf302/61980225ed8f4a3c17ebf315_people_floo.jpg',
      quote: 'Finally, Asynchronous AND Synchronous collaboration have the same home'
    },
    {
        name: 'Ansh Nanda',
        role: 'Head of Operations, Dorm Room Fund',
        logoBubbleUrl: 'https://uploads-ssl.webflow.com/61980225ed8f4aace3ebf302/61980225ed8f4acf40ebf310_drf.png',
        imageUrl:
          'https://uploads-ssl.webflow.com/61980225ed8f4aace3ebf302/61980225ed8f4a63a0ebf318_people_drf.jpg',
        quote: 'Finally, Asynchronous AND Synchronous collaboration have the same home'
    },
    {
        name: 'Tyler Whittle',
        role: 'Head of Operations, Floodgate Capital',
        logoBubbleUrl: 'https://uploads-ssl.webflow.com/61980225ed8f4aace3ebf302/61980225ed8f4a8a1cebf30d_floo.png',
        imageUrl:
          'https://uploads-ssl.webflow.com/61980225ed8f4aace3ebf302/61980225ed8f4a3c17ebf315_people_floo.jpg',
        quote: 'Finally, Asynchronous AND Synchronous collaboration have the same home'
    },
      
      
    
  ]
  
  export default function Testimonials() {
    return (
      <div id="testimonials" className="bg-bgPrimary">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center">
              <h2 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-primary to-white sm:text-4xl">See what people are saying</h2>
              <p className="text-xl text-gray-100">
                People love us. See why.
              </p>
            </div>
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {people.map((person) => (
                <li key={person.name} className="py-10 px-6  bg-black text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-8 xl:space-y-10 relative">
                    <Image className="mx-auto h-32 w-32 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                    <div className="relative pt-1 space-y-2 xl:flex xl:items-center xl:justify-between">
                    <Image className="absolute bottom-24 left-0 h-10 pb-4" src={person.logoBubbleUrl} />
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3 className="text-primary text-lg font-semibold">{person.name}</h3>
                        <p className="text-secondary text-xs pb-2">{person.role}</p>
                        <p className="text-white text-sm"> <i> '{person.quote}' </i> </p>
                      </div>
  
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  