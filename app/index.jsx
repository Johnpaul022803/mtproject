import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#8BD68E', '#28D039']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>KUMON nahLEDGE</Text>
          <View style={styles.logo} />
          <Text style={styles.subtitle}>Learn Math Today</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Sign In To Your Account</Text>
          <View style={styles.inputGroup}>
            <View style={styles.inputWrapper}>
              <Text>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder='learnmath221@gmail.com'
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot Password</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Sign In With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    ...Platform.select({
      web: {
        maxWidth: '600px',
        marginHorizontal: 'auto',
      },
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 70,
    width: 70,
    backgroundColor: 'red',
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  input: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: '#0000ff',
    marginBottom: 10,
    textAlign: 'center',
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
