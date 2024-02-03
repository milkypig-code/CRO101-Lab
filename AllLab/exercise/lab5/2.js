import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Lab5Exercise2 = () => {
    return (
        <View style={{ flex: 1, }}>
            <StatusBar
                translucent
                backgroundColor={'transparent'}
            />
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={{ uri: 'https://vietnam.travel/sites/default/files/styles/top_banner/public/2022-08/VNAT%20Cover%203.png?itok=atu5sEjq' }} >

                <View style={{ width: '80%' }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 30,
                        fontFamily: 'Merriweather-Regular',
                        width: 220
                    }}>Discover world with us</Text>
                    <Text style={{ marginTop: 10, color: 'white', }}>
                        Hoi An - VietNam
                    </Text>

                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        width: '50%',
                        height: '18%',
                        marginTop: 20,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                            Get started
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}

export default Lab5Exercise2;