import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = props => {
  const [UserName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState(0);
  const handleLogin = () => {
    if (UserName == '') {
      alert('Please enter user name');
      return;
    }
    if (mobileNumber == 0) {
      alert('Please enter Mobile Number');
      return;
    }
    if (isNaN(mobileNumber)) {
      alert('Please enter valid mobile number');
      return;
    }
    props.navigation.navigate('DashboardScreen');
  };
  //  const [first, setfirst] = useState(second)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoImage}>
        <Image
          style={styles.image}
          source={require('../assets/texlaculture.jpeg')}
        />
        {/* <Text>Login to texlaculture to get the usefull information</Text> */}
        <TextInput
          value={UserName}
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter UserName"
          placeholderTextColor={'#000'}
          onChangeText={text => setUserName(text)}

          // keyboardType="numeric"
        />
        <TextInput
          value={mobileNumber}
          style={[styles.input, {marginTop: 14}]}
          onChangeText={number => setMobileNumber(number)}
          // value={number}
          placeholder="Enter Mobile Number"
          placeholderTextColor={'white'}
          keyboardType="numeric"
        />

        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={styles.button}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height * 1,
    width: Dimensions.get('screen').width * 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('screen').height * 0.05,
  },
  image: {
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
  },
  input: {
    height: Dimensions.get('screen').height * 0.05,
    marginTop: Dimensions.get('screen').height * 0.05,
    margin: 12,
    // borderWidth: 1,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 32,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 10,
    fontWeight: '500',
    fontSize: 16,
    color: '#8c6981',
    // left: 16,
  },
  button: {
    height: Dimensions.get('screen').height * 0.05,
    marginTop: Dimensions.get('screen').height * 0.05,
    margin: 12,
    // borderWidth: 1,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 32,
    backgroundColor: '#059c3c',
    elevation: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 16,
  },
});
