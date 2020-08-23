import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

// não possuem valor semântico
// não possuem estilização própria
// todos os componentes possuem por padrao display flex
//View : div footer header main aside section
//Text: p span strong h1 h2 h3

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <View style={styles.container}>
        <Text style={styles.title}>Olá Mundo!</Text>
      </View>
    </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  }
})