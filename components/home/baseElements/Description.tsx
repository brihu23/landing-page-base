

export interface DescriptionProps {
    item: any;
    numbered?: Boolean;
}

export default function Description({item, numbered}) {
    function textOrIcon() {
        if (numbered) {
            return <div className="absolute font-extrabold text-3xl text-white"> {item.id} </div>
        } else {
            return (
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-b from-primary to-secondary text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" /> 
                </div>
            )
        }
    }
    return(
    <div className="relative">
    <dt>
        {textOrIcon()}
        
      <p className="ml-16 text-lg leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">{item.name}</p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-100">{item.description}</dd>
  </div>
)
}