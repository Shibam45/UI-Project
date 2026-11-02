import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"


const Page1content = (props) => {
  return (
    <div className="flex pb-16 pt-6 px-18 items-center gap-10 h-[90vh]">
      <Leftcontent/>
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
