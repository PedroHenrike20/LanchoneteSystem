import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ContainerPage from './components/containerPage';
import ContainerPageDetails from './components/containerPageDetails';
import Home from './pages/Home';
import Menu from  './pages/Menu';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/menu" exact component={Menu}/>
                <Route path="/menu/carnes" render={(props)=><Menu {...props} children={<ContainerPage/>}/>}/>
                <Route path="/menu/frangos" render={(props)=><Menu {...props} children={<ContainerPage/>}/>}/>
                <Route path="/menu/porções" render={(props)=><Menu {...props} children={<ContainerPage/>}/>}/>
                <Route path="/menu/monte%ja%o%seu" render={(props)=><Menu {...props} children={<ContainerPage/>}/>}/>
                <Route path="/menu/details" render={(props)=><Menu {...props} children={<ContainerPageDetails/>}/>}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes