import React from 'react';
import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import Table from './components/table';

import "./styles.css";

function ContainerPageDetails(){
    return(
        <div className="containerPageDetails">
            <div className="detailsContainer">
                <Link to="/menu" style={{color: "#000000"}}><FaArrowLeft size={25}/></Link>
                <div className="imageContainer">

                </div>
                <div className="detailsLanche">
                    <div className="titleLancheContainer">
                        <h1 className="titleStyle">X Infarto Turbo</h1>

                    </div>
                    <div className="legendLancheContainer">
                        <p className="legendStyle">Burguer 180g triplo (Ponto da casa, bem passado) bacon, ovo, salcicha, presunto, queijo, molho especial no pão brioche.</p>
                    </div>

                </div>
                

            </div>
            <div className="modification">

            <div className="alterarPaoContainer">
                <div className="headerTitle">
                    <h3 className="titleHeader">Deseja alterar o seu pão?</h3>
                </div>
                <Table/>

            </div>
            <div className="acrescimosContainer">
            <div className="headerTitle">
                    <h3 className="titleHeader">Deseja acrescentar algo?</h3>
                </div>
                <Table/>
                <Table/>

            </div>
            </div>

        </div>
    )
}

export default ContainerPageDetails;