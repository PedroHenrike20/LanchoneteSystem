import React from 'react';

import "./styles.css"

interface ButtonProps{
    name: string,
}

const Button: React.FC<ButtonProps> = ({name}) =>{
    return(
        <div className="buttonMenu">
            <a className="link">{name}</a>
        </div>

    )
}

export default Button;