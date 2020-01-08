import React, { useState, useEffect } from 'react';
import { Modal, SafeAreaView, AsyncStorage, Text, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            setTechs(storageTechs.trim().split(','));
        })
    }, [])

    return (
        <Modal >
            <SafeAreaView style={styles.container}>
                <Image source={logo} style={styles.logo} />
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})