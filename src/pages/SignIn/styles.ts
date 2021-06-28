import { StyleSheet } from 'react-native'
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        marginTop: -40,
        padding: 50
    },
    image:{
        width: '100%',
        height: 360
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 16
    },
    subtitle: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
});