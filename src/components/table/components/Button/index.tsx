import React from 'react'

import "./styles.css"
const ButtonTable = ({value}) =>{
    return(
        <button className="containerButtonTable">
            <p className="legendButtonTable">Adicionar R${value},00</p>
        </button>
    )
}

export default ButtonTable