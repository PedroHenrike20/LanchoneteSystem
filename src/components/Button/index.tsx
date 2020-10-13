import React from 'react';
import {Link} from 'react-router-dom';
import "./styles.css"

interface ButtonProps{
    name: string,
    to: string,
    backgroundcolor: string,
    color: string
}

const Button: React.FC<ButtonProps> = ({name, to, backgroundcolor, color}) =>{
    return(
        <div className="buttonMenu" style={{backgroundColor: backgroundcolor}}>
            <Link to={to} className="link"><h3 className="legendButton" style={{color: color}}>{name}</h3></Link>
        </div>

    )
}

export default Button;