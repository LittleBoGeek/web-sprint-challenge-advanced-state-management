import React, { useState } from 'react'
import "./App.css";
import SmurfsList from './SmurfsList'
import Smurfs from './Smurfs'
import { addSmurf } from '../actions/actions'
import { connect } from 'react-redux'

 console.log(addSmurf )

function App (props)  {
  const [fields, setFields] = useState({
    name: '',
    age: '',
    height: ''
  })
  const handleChange = (event) => {
    setFields ({
      ...fields,
    [event.target.name]: event.target.value,
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addSmurf(fields)
    setFields({
      name: '',
      age:'',
      height:''
    })
  }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <label>
<form>

<input 
name="name"
onChange={handleChange}
type="text"
value={fields.name}
placeholder="name"
/>

<input 
name="age"
onChange={handleChange}
type="text"
value={fields.age}
placeholder="Age"
/>

<input 
name="height"
onChange={handleChange}
type="text"
value={fields.height}
placeholder="height"
/>



<button onClick={handleSubmit}>  Add Smurf </button>
</form>
        </label>
        
<SmurfsList />
      </div>
    );
  
}

export default connect (null, {addSmurf}) (App)
