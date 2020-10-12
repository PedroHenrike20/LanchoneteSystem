import React from 'react';

import logoFundo from '../../assets/images/home.jpg';
import Button from '../../components/Button';
import Header from '../../components/header';

import './styles.css'

function Home(){
    return(
        <div id="containerHome">
            <Header/>
            <img className="logoFundo" alt="Logo" src={logoFundo} />

            <div className="conteudoContainer">
                <div className="containerCounteudoDetails">
                    <div className="containerConteudoLogo">
                        {/* {imagem} */}
                    </div>
                    <div className="containerConteudoDetails">
                        <div className="espacamento"/>

                        <div className=".containerLogoTitle">
                            <h1 className="legendTitle">Hamburgueria</h1>
                            <h1 className="legendTitle">&</h1>
                            <h1 className="legendTitle">Porções</h1>                    
                        </div>
                        <Button name="Acessar o cardápio"/>
                        <div className="espacamento"/>
                        <div className="legendFuncionamento">
                            <p>Atendimento das 19:00 às 02:00</p>
                            <p>Entrega das 19:00 às 23:00</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Home;