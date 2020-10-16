import React, {useState} from 'react'
import {FaMinus} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'


import './styles.css'

// const [count, setCount] = useState(0)


function Contador(){
    return(
        <div className="containerContador">
            <div className="buttonMinus">
                <h1><button  className="buttonContainer"><FaMinus size={15}/></button></h1>
            </div>
            <div className="containerLegendContador">
                <h1 className="legendContador">1</h1>
            </div>
            <div className="buttonPlus">
                <h1><button className="buttonContainer"><FaPlus size={15}/></button></h1>
            </div>
        </div>
    )
}

export default Contador;