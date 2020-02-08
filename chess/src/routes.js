import React from 'react';
import {Switch,Route} from 'react-router-dom'
import main from './components/main/main';
import main1 from './components/main/main1';
import Register from './components/register/register';
import Login from './components/register/login';
import Details from './components/main/details';
import Layout from './components/hoc';
import Award from './components/main/awardrec';
import Show from './components/main/show';
import Error from './components/main/404'
import Disp from './components/main/display';

const Routes = () => {
    return (
        <Layout>
        <Switch>
            

            <Route exact component={main} path="/"/>
            <Route exact component={main1} path="/l"/>
            <Route exact component={Register} path="/register"/>
        
            <Route exact component={Login} path="/login"/>


            <Route exact component={Award} path="/award"/>

            <Route exact component={Details} path="/details"/>

            <Route exact component={Disp} path="/display"/>
            
            <Route component={Error} /> 

        
        </Switch>
        </Layout>
    );
};

export default Routes;