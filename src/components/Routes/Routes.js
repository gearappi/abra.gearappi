import React from 'react';
import { Route } from 'react-router-dom'

import TabsHomePageComponents from "../TabsHomePage/TabsHomePage";
// import TabsProductionPageComponents from "../TabsProductionPage/TabsProductionPage";



class Routes extends  React.Component {

    render(){
       return(
           <>
               <Route exact path='/' component={TabsHomePageComponents} />
               {/* <Route path='/productionpage' component={TabsProductionPageComponents} /> */}
           </>
       );
    }
}

export default Routes;