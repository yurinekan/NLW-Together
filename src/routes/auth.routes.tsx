import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
    return(
        <Navigator>
            <Screen 
            name="Sign"
            component={Home}/>
            <Screen 
            name="Home"
            component={Home}/>
            
        </Navigator>
    )
}