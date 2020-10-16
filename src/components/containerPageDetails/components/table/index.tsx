import React from 'react';


import "./styles.css"

interface TableProps{
    title?: string,
    value?: string,
    component?: Function,
}
// Burguer 180g triplo (Ponto da casa, bem passado) bacon, ovo, salcicha, presunto, queijo, molho especial no pão brioche.
const Table:React.FC<TableProps> = ({title, component, value}) =>{
    return(
        <>
            <div className="tableBox">
             <div className="titleContainerBox">
                <h3 className="legendTableBox">{title}</h3>
                <h3 className="legendTableBox">{value}</h3>

             </div>
             <div className="componentTableBox">
                 {component}
             </div>
            </div>
            <div className="espacamentoTable"/>
        </>
    )
}

export default Table;