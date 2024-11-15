

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

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
                        Sign in to <Text style={{ color: '#075eec' }}>MyApp</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        Get access to your portfolio and more
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
                </View>
                <View>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('data')}>
                        <Text style={styles.btnText}> Register Now </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.formLink}>Forgot password?</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    // handle link
                }}
                style={{ marginTop: 'auto' }}>
                <Text style={styles.formFooter}>
                    Don't have an account?{' '}
                    <Text style={{ textDecorationLine: 'underline', color: '#075eec' }}>Sign up</Text>
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
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    btn: {
        backgroundColor: "#ABCABA",
        height: 45,
        width: 250,
        marginLeft: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    btnText: {

        fontSize: 25,
        color: '#fff', // Adding color to make the text visible
    },
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'center',
        marginTop: 10,
    },
    formFooter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
});

export default SignIn;
