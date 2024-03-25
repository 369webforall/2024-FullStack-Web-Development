import Button from "@/components/button"
import User from "@/components/user"
const HomePage = () => {
  return(
    <div>
<h1 className="text-4xl text-red-800">This is home page</h1>
  <p>This is a paragraph</p>
<div className="mx-5">


  <Button />

 <User name="John Welker" age={40} />
 <User name="Dev" age={45} />
 <User name="Dipesh" age={20} />
  </div>
    </div>
  )
}

export default HomePage