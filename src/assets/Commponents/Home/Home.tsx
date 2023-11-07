import { useEffect, useState } from "react"
// import parse from "html-react-parser"
import "./Heme.css"
const Home = () => {
interface iNewData {
    id: string
    date: string
    content: {
        rendered: string
    }
    title: {
        rendered: string
    }
    yoast_head_json: {
      title: string
      description: string
    }
}
const [newData, setNewData] = useState<iNewData[]>()

const getData = async ()  => {
    const cBNum = Math.floor(Math.random() * 1000)
    const response = await fetch(`https://webbyra24.nu/react/wp-json/wp/v2/posts?per_page=10&page=1&cacheBuster${cBNum}`)
    const data = await response.json()
    setNewData(data)
    console.log(data);
}
 
useEffect(() => {
    getData()
},[])

  return (
    
    <>
    {
    
    newData?.map((data)=>(
      <div key={data.id}>
          <h1>{data.yoast_head_json.title} </h1>
         <p>{data.yoast_head_json.description} </p>
      </div>
    ))
    } 
    
    </>




  )
}

export default Home