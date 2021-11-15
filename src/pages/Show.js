import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


const Show = (props) => {
  
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id
  const cheese = props.cheese
  const [editForm, setEditForm] = useState({})
  
  useEffect(() => {
    if(props.cheese) {
      const oneCheese = cheese.find((c) => c._id === id);
      setEditForm(oneCheese)
    }
  }, [props.cheese])

  if (props.cheese) {
    const oneCheese = cheese.find((c) => c._id === id);
  
    const handleChange = (event) => {
      const newState = {...editForm}
      newState[event.target.name] = event.target.value
      setEditForm(newState)
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateCheese(editForm, oneCheese._id);
      navigate("/")
    };
  
    const removeCheese = () => {
      props.deleteCheese(oneCheese._id)
      navigate("/")
    }

    const form = (
      <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Update Form</legend>
          <label>Name</label>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <label>Country of Origin</label>
          <input
            type="text"
            value={editForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="Country"
            onChange={handleChange}
          />
          <label>Image URL</label>
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
        </fieldset>
          <input type="submit" value="Update" />
      </form>
    );
      
    return (
      <div className="oneCheese">
        <div className="item-details">
          <img src={oneCheese.image} alt={oneCheese.name}/>
          <div className="item-details-right">
            <h1>{oneCheese.name}</h1>
            <h2><ion-icon name="flag"></ion-icon>Country of Origin: {oneCheese.countryOfOrigin}</h2>
          </div>
        </div>
        {form}
        <button id="delete" onClick={removeCheese}>DELETE</button>
      </div> 
    );
  } else {
    return <h1>No Cheese</h1>
  }
  
};

export default Show;