import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {

    return (
        <View style={styles.container}>

            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title={'Entrar com Discord'} />
            </View>
        </View>
    );
}
