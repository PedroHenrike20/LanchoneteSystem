import React from 'react';

import {Link} from 'react-router-dom';
import ButtonTable from './components/Button';

import "./styles.css"

interface TableProps{
    title: string,
    legend: string,
    value: number,
}
// Burguer 180g triplo (Ponto da casa, bem passado) bacon, ovo, salcicha, presunto, queijo, molho especial no pão brioche.
const Table:React.FC<TableProps> = ({title, legend, value}) =>{
    return(
        <>
            <div className="table">
        <Link to="/menu/details" className="LinkLegend">
                <div className="containerImage">

                </div>
                <div className="containerDescricao">
                    <h4 className="titleLanche">{title}</h4>
                    <p className="descricaoLanche">{legend}</p>

                </div>
                
            </Link>
                <div className="containerButtonBuy">
                    <ButtonTable value={value}/>
                </div>
            </div>
            <div className="espacamentoTable"/>
        </>
    )
}

export default Table;