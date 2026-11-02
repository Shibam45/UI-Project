import { MoveRight } from "lucide-react"

const Rightcardcontent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold h-11 w-11 rounded-full bg-white flex flex-col justify-center items-center">{props.id+1}</h2>
        <div>
          <p className="text-lg leading-relaxed m-2 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quos, sunt provident natus odit inventore!.</p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}}className=" text-white font-medium px-5 py-2 rounded-full ">{props.tag}</button>
            <button style={{backgroundColor:props.color}}className=" text-white font-medium px-2 py-1 rounded-full"><MoveRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightcardcontent
