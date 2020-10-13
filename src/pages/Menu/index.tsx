import React from 'react';
import Header from '../../components/header';
import logoFundo from '../../assets/images/fundoplano.jpg';


import Button from '../../components/Button';
import "./styles.css"

function Menu(props){
    return(
        <div id="containerMenu">
            <Header
             aba1="Carne" 
             aba2="Frango" 
             aba3="Porções" 
             aba4="Monte já o seu" 
             button={<Button 
                color="#000000"
                backgroundcolor="#EAF5E8"
                name="Meu Carrinho"
                />
            }/>
            <img src={logoFundo} className="logoFundo" alt="Plano de Fundo" />
            
            <div className="conteudoContainerMenu">
                <div className="containerCounteudoDetailsMenu">
                    {props.children}

                </div>
            </div>

        </div>
    )
}

export default Menu;