import { useState } from "react";
import { Link } from "react-router-dom";


const Index = (props) => {
  
  const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    image: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
      name: "",
      countryOfOrigin: "",
      image: "",
    });
  };

  const loaded = () => {
    return props.cheese.map((cheese) => (
      <div key={cheese._id} className="cheese">
        <Link to={`/cheese/${cheese._id}`}><h1>{cheese.name}</h1></Link>
        <img src={cheese.image} alt={cheese.name}/>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Processing 🧀 ...</h1>;
  };
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="Name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={newForm.countryOfOrigin}
        name="countryOfOrigin"
        placeholder="Country of Origin"
        onChange={handleChange}
        />
        <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
    
  )
}

export default Index;