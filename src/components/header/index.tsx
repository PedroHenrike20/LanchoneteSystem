import React from 'react';
import {Link} from 'react-router-dom';

import "./styles.css"

interface HeaderProps{
    aba1?: string,
    aba2?: string,
    aba3?: string,
    aba4?: string,
    button?: Function,

}


const Header: React.FC<HeaderProps> = ({aba1, aba2, aba3, aba4, button}) =>{
    return(
        <header className="headerContainer">
                <div className="containerLogoHeader">
                    logoheader
                </div>
                <div className="abasContainerHeader" style={{justifyContent: button === undefined ? "flex-end" : "center"}}>
                    <Link to="/menu/carnes" className="linkLegend" ><p className="linkAbas" style={{margin: button === undefined ? 0 : 45}}>{aba1}</p></Link>
                    <Link className="linkLegend"><h3 className="linkAbas" style={{margin: button === undefined ? 0 : 45}}>{aba2}</h3></Link>
                    <Link className="linkLegend"><h3 className="linkAbas" style={{margin: button === undefined ? 0 : 45}}>{aba3}</h3></Link>
                    <Link className="linkLegend"><h3 className="linkAbas" style={{margin: button === undefined ? 0 : 45}}>{aba4}</h3></Link>
                </div>
                {button === undefined ? '' :<div className="ButtonContainer">
                    {button}

                </div>}
                
        </header>
    )
}


export default Header;