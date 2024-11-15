
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const SignUpScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ede7e6', }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        alt="App Logo"
                        resizeMode="contain"
                        style={styles.headerImg}
                        source={{
                            uri: 'https://shivsys.com/img/logo.png',
                        }} />
                    <Text style={styles.title}>
                        Welcome in <Text style={{ color: '#075eec' }}>MyApp</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        Please create an account here 
                    </Text>
                </View>
            </View>
            <View style={styles.form}>
                <View style={styles.input}>
                <Text style={styles.inputLabel}>Email address</Text>


                    <TextInput

                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                     style={styles.inputControl}
                    placeholder='enter email ID'> 
                    
                    </TextInput>

                     <View style={styles.input}>
                     <Text style={styles.inputLabel}>Password</Text>
                    <TextInput

                     style={styles.inputControl}
                    placeholder='enter the password '> 
                    
                    </TextInput>
                    
                    </View>

                    <View style={styles.input}>
                     <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput

                     style={styles.inputControl}
                    placeholder='enter the password '> 
                    
                    </TextInput>
                    
                    </View>
                </View>
                <View>
                <TouchableOpacity style={styles.btn}>
                   <Text style={styles.btnText}> SignUp </Text>
                </TouchableOpacity>
                </View>
                
            </View>
            <TouchableOpacity
          onPress={() => {
            // handle link
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            please login here {' '}
            <Text style={{ textDecorationLine: 'underline', color: '#075eec' }}>SignIn</Text>
          </Text>
        </TouchableOpacity>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 36,
    },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: '#1D2A32',
        marginBottom: 6,
    },
    /** Header */
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 36,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#423b3a',
    },
    input: {
        marginBottom: 16,
      },
      inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
      },
      inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
      },
      form: {
        marginBottom: 150,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },  
      btn:{
      backgroundColor:"blue",
      height:45,
      width:250,
      marginLeft:50,
      borderRadius:20,  
      },
      btnText:{
        textAlign:'center',
        fontSize:25,
      },
      formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'center',
      },
      formFooter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
      },



});

export default SignUpScreen;