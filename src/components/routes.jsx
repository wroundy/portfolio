import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './home'; 
import Projects from './Projects';

const routes = () => {
    return (
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects}/>
        </main>
    )
}

export default routes;