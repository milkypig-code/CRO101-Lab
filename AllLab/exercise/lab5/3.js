import { Image, ImageBackground, StatusBar, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Lab5Exercise3 = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                translucent
                backgroundColor={'transparent'}
                barStyle={'dark-content'}
            />
            <ImageBackground
                style={{
                    flex: 1,
                }}
                source={{ uri: 'https://vietnam.travel/sites/default/files/styles/top_banner/public/2022-08/VNAT%20Cover%203.png?itok=atu5sEjq' }}>
                <SafeAreaView>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                        width: '90%',
                        marginTop: '10%',
                    }}>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                            source={require('../../assets/images/back-icon.png')} />
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                            source={require('../../assets/images/three-dots-icon.png')}
                        />
                    </View>
                    <View style={{
                        width: '100%',
                        height: 50,
                        marginTop: '80%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: 'white'
                        }}>
                            PHỐ CỔ HỘI AN</Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: 'white'
                        }}>
                            ⭐5.0</Text>
                    </View>
                    <View style={{ backgroundColor: 'white', width: '100%', height: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain',
                                position: 'absolute',
                                right: 30,
                                top: -15
                            }}
                            source={require('../../assets/images/favorite-icon.png')} />
                    </View>
                    <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
                        <Text style={{
                            color: '#04488f',
                            fontWeight: 'bold',
                            fontSize: 25,
                            marginLeft: 20
                        }}>✈️ Quảng Nam</Text>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 25,
                            marginLeft: 20,
                            marginTop: 10
                        }}>
                            Thông tin chuyến đi
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            marginHorizontal: 20,
                            marginTop: 10
                        }}>
                            Hội an là một thành phố trực thuộc Quảng Nam, Việt Nam. Phố cổ Hội An từng là một
                            thương cảng quốc tế sầm uất, gồm những di sản kiến trúc đã có từ hàng ngàn trăm năm
                            trước, được UNESCO công nhận là di sản văn hoá thế giới từ năm 1999
                        </Text>
                        <View style={{
                            marginTop: 70,
                            backgroundColor: '#04488f',
                            width: '100%',
                            height: 100,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            paddingHorizontal: 20
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20
                            }}>
                                $100/Ngày
                            </Text>

                            <TouchableOpacity style={{
                                backgroundColor: 'white',
                                width: 150,
                                height: 50,
                                borderRadius: 10,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Text style={{color:'#04488f',fontWeight:'bold',fontSize:18}}>
                                    Đặt ngay
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </SafeAreaView>

            </ImageBackground>
        </View>
    )
}

export default Lab5Exercise3;