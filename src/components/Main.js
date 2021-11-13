import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom"
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = (props) => {
  
  const [cheese, setCheese] = useState(null)
  const URL = "https://mlaude-cheese-backend.herokuapp.com/cheese"
  
  const getCheese = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    setCheese(data)
  }

  const createCheese = async(cheese) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cheese),
    });
    getCheese();
  };

  useEffect(() => getCheese(), [])

  return (
    <Routes>
      <Route path="/" element={<Index cheese={cheese} createCheese={createCheese}/>}/>
      <Route path="/cheese/:id" element={<Show/>}/>
    </Routes>
  )
}

export default Main;