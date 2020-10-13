import React from 'react';
import Table from '../table';
import "./styles.css"



function ContainerPage(){
    let menu = [{name: 'X Infarto', legend: 'Burguer 180g duplo (Ponto da casa, bem passado) bacon, no Pão Brioche', value: 15.00 }, {name: 'X Falencia Turbo', legend: 'Burguer 180g triplo (Ponto da casa, bem passado) bacon, no Pão Brioche', value: 25.00 }, {name: 'Ogro 2.0', legend: 'Burguer 200g triplo (Ponto da casa, bem passado) geleia de bacon, cheddar, presunto no Pão Brioche', value: 20.00 }]
    return(
        <div className="containerPage">
            {menu.map((i)=>{
                return <Table 
                    key={i}
                    title={i.name}
                    legend={i.legend}
                    value={i.value}
                />
            })}

        </div>
    )
}

export default ContainerPage;