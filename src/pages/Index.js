import { useState } from "react";
import { Link } from "react-router-dom";


const Index = (props) => {
  
  const loaded = () => {
    return props.cheese.map((cheese) => (
      <div key={cheese._id} className="cheese">
        <Link to={`/cheese/${cheese._id}`}><h1>{cheese.name}</h1></Link>
        <img src={cheese.image} alt={cheese.name}/>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Processing 🧀...</h1>;
  };
  
  return (
    props.cheese ? loaded() : loading()
  )
}

export default Index;