import { useParams } from "react-router";

const Show = (props) => {
  
  const params = useParams()
  const id = params.id
  const cheese = props.cheese
  const oneCheese = cheese.find((c) => c._id === id)
  

  return (
    <div className="oneCheese">
      <h1>{oneCheese.name}</h1>
      <h2>{oneCheese.countryOfOrigin}</h2>
      <img src={oneCheese.image} alt={oneCheese.name} />
    </div> 
  )
}

export default Show;