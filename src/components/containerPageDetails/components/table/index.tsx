import React from 'react';


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
                <div className="containerDescricao">
                    <h4 className="titleLanche">{title}</h4>
                    <p className="descricaoLanche">{legend}</p>

                </div>
                <div className="containerButtonBuy">
                    
                </div>
            </div>
            <div className="espacamentoTable"/>
        </>
    )
}

export default Table;