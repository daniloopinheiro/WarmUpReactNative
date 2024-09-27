import React from 'react';
import { Image, View, Text, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { VIDEO_URL_React_Native } from '@env';

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imagem}
                source={require('../../../assets/images/react-logo.png')}
            />
            <Text style={styles.titulo}>React Native Essencial</Text>
            <Text style={styles.titulo2}>Fundamentos Essenciais para o Desenvolvimento de Aplicações.</Text>
            <Text style={styles.ajuda}>
                Use o Drawer Navigation na parte superior esquerda da tela para navegar!
            </Text>
            <View style={styles.videoContainer}>
                {Platform.OS === 'web' ? (
                    <>
                        <iframe
                            width="560" 
                            height="315" 
                            src={VIDEO_URL_React_Native}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={styles.videoIframe} // Apply custom styles
                        />
                        <iframe
                            width="560" 
                            height="315" 
                            src={VIDEO_URL_React_Native}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={styles.videoIframe} // Apply custom styles
                        />
                    </>
                ) : (
                    <>
                        <WebView
                            style={styles.video}
                            source={{ uri: VIDEO_URL_React_Native }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                        <WebView
                            style={styles.video}
                            source={{ uri: VIDEO_URL_React_Native }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titulo2: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#61DAFB',
    },
    imagem: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    ajuda: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    videoContainer: {
        flexDirection: 'row', // Organize os vídeos lado a lado
        justifyContent: 'center', // Centralizar vídeos
        width: '100%', // Largura total do contêiner
    },
    video: {
        width: 280, // Ajuste de largura para WebView
        height: 315,
        marginHorizontal: 5, // Aproximadamente 1mm em pixels
    },
    videoIframe: {
        marginHorizontal: 5, // Aproximadamente 1mm em pixels
    },
});
