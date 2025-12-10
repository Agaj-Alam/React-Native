/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Student from './Student';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [btnText, setBtnText] = useState('');
  const demo = () => {
    setBtnText('hello there');
  };
  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          This is{' '}
          <Text style={{ color: 'red', fontWeight: 'bold' }}>Agaj Alam</Text>{' '}
          here
        </Text>
        <TextInput
          onChangeText={text => {
            setEmail(text);
          }}
          style={styles.input}
          placeholder="Email"
        />
        <Text>{email}</Text>

        <Image
          style={styles.mylogo}
          source={{
            uri: 'https://reactnative.dev/img/homepage/dissection-dark.png',
          }}
        />

        <TouchableOpacity
          onPress={demo}
          style={styles.myBtn}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        <Text>{btnText}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  mylogo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  myBtn: {
    width: '100%',
    height: 40,
    backgroundColor: 'skyblue',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
export default App;
