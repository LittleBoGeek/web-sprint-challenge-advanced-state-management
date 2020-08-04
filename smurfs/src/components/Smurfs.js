import React from 'react'


const Smurfs = (props) => {
    return (
        <div>
            <h2> Name: {props.smurf.name}</h2>
            <h2> Age: {props.smurf.age}</h2>
            <h2> Height: {props.smurf.height}</h2>
        </div>
    )
}

export default Smurfs