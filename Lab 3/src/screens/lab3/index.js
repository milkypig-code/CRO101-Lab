import React, { useState } from 'react';
import {View,Text, TextInput} from 'react-native';
import { styles} from './styles';

const Lab3 =() =>{
  const[name,setName]= useState('');
  const[phone,setPhone]= useState('');
  const[password,setPassword]= useState('');
      return (
       
<View>
<TextInput
value={name}
onChange Text={setName}
placeholder="Nhập họ tên"
style={styles.tipStyle}
/>
<TextInput
value={phone}
onChangeText={setPhone}
placeholder="Nhập số điện thoại"
keyboardType="phonerad"
style={styles.tipStyle}
/>
<TextInput
value={password}
onChange Text={setPassword}
placeholder="Nhập mật khẩu"
secureTextEntry={true}
style={styles.tipStyle}
/>
  
  <View style={styles.container}>
    <Text style={styles.baseText}>
      Em vào đời bằng{' '}
      <Text style={[styles.boldText, styles.colorxx]}>1 vang đỏ</Text>. Text anh vào đời bằng{' '}
      <Text style={[styles.boldText, styles.colorxx]}>nước trà </Text>
    </Text>
    {/* Line 2 */}
    <Text>
      <Text style={[styles.boldText, styles.colorxx]}>nước trà Text</Text>
    </Text>
    {/* Line 2 */}
    <Text>
      Bằng cơn mưa thơm{' '}
      <Text style={[styles.boldText, styles.italicText]}>mùi đất</Text>{' '}
      và{' '}
      <Text style={[ styles.italicText]}>bằng hoa dại mọc trước nhà</Text>
    </Text>
    {/* Line 3 */}
    <Text>
      <Text
        style={[
          styles.baseText,
          styles.italicText,
          styles.boldText,
          
        ]}
      >
        Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
      </Text>
    </Text>
    {/* Line 4 */}
    <Text style={styles.baseText}>
      Lý trí em là{' '}
      <Text style={{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }}>
        công cụ
      </Text>
      , còn trái tim anh là{' '}
      <Text style={{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }}>
        động cơ
      </Text>
    </Text>
    {/* Line 5 */}
    <Text style={[styles.baseText, {textAlign:'right'} ]}>
      Em vào đời nhiều đồng nghiệp, anh vào đời nhiều thân tình
    </Text>
    {/* Line 6 */}
    <Text
      style={[
        styles.baseText,
       {
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'orange',
       }
      ]}
    >
      Anh chỉ muốn chân mình đạp đất, không muốn đạp ai dưới chân mình
    </Text>
    {/* Line 7 */}
    <Text style={[styles.baseText,{ fontWeight: 'bold'}]}>
      Em vào đời bằng <Text style={styles.colorx}>mây trắng </Text> em vào đời bằng{' '}
      <Text style={styles.colorxx}>nắng xanh</Text>
    </Text>
    {/* Line 8 */}
    <Text style={[styles.baseText, { fontWeight: 'bold'}]}>
      Em vào đời bằng <Text style={styles.colorxx}>đại lộ </Text> và con đường đó giờ{' '}
      <Text style={styles.colorx}>vắng anh</Text>
    </Text>
  </View>
</View>

 
);

      
};
export default Lab3;
