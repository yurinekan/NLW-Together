import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native'

import { styles } from './styles';
import { theme } from '../../../global/theme';


export function Avatar() {
    const {secondary80, secondary100 } = theme.colors;

    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary80, secondary100]}
        >
        </LinearGradient>
    )
}