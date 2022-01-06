import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator>
            <Screen 
            name="Home"
            component={Home}/>
            <Screen 
            name="SignIn"
            component={SignIn}/>
            
        </Navigator>
    )
}