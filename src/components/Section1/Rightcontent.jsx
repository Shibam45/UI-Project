import Rightcard from "./Rightcard"


const Rightcontent = (props) => {
  return (
    <div id='right' className="h-full p-6 w-2/3 flex rounded-4xl flex-nowrap gap-8 overflow-x-auto">
      {props.users.map(function(elem,idx){
        return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent
