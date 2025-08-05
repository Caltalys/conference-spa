import { Star } from "lucide-react"

const Pretitle = ({text, center} : {text: string, center?: boolean}) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}>
        {/* <div className="w-2 h-2 bg-secondary"></div> */}
        <Star className="w-6 h-6 text-primary mb-1"/>
        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">{text}</p>
        <Star className="w-6 h-6 text-primary mb-1"/>
        {/* <div className="w-2 h-2 bg-secondary"></div> */}
    </div>
  )
}

export default Pretitle