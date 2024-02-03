import React from "react";
import { View, Text, StyleSheet, Image, Button , ScrollView} from 'react-native';

const Lab5Exercise1 = () => {
    return (
        <View>
            <Text style={styles.textStyle}>
                React Native là một framework phát triển ứng dụng di động mã nguồn mở do Facebook tạo ra.
                React Native sử dụng ngôn ngữ lập trình JavaScript để tạo các ứng dụng di động trên các hệ
                điều hành iOS và Android với một cơ sở mã duy nhất.
            </Text>
            <Text style={styles.content}>
                React Native sẽ hoạt động bằng cách tích hợp Main Thread và JS Thread cho một ứng dụng mobile.
                Main Thread sẽ có vai trò cập nhật giao diện người dùng (UI) và xử lý tương tác của người dùng.
                JS Thread là nơi thực thi và xử lỹ mã Javascript.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'black',
        padding: 10,
    },
    content: {
        fontFamily: 'Roboto',
        fontSize: 15,
    }
});

export default Lab5Exercise1;
