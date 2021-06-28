import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = {
    title: String;
}

export function ButtonIcon({title}: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}