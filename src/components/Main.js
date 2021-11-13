import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom"
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = (props) => {
  
  const [cheese, setCheese] = useState(null)
  // ⭐️⭐️ do not forget the "/" at the end of your heroku link!!
  const URL = "https://mlaude-cheese-backend.herokuapp.com/cheese/"
  
  const getCheese = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    setCheese(data)
  }

  const createCheese = async(oneCheese) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(oneCheese),
    });
    getCheese();
  };

  const updateCheese = async (oneCheese, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oneCheese)
    });
    getCheese();
  };

  const deleteCheese = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getCheese();
  };

  useEffect(() => getCheese(), [])

  return (
    <main>
      <Routes>
        <Route path="/" element={
          <Index cheese={cheese} 
          createCheese={createCheese}/>
        }/>
        <Route path="/cheese/:id" element={
          <Show cheese={cheese}
          updateCheese={updateCheese}
          deleteCheese={deleteCheese}/>
        }/>
      </Routes>
    </main>
  )
}

export default Main;