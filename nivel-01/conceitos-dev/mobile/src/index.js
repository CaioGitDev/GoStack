import React, { useEffect, useState } from 'react'
import { SafeAreaView,FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import api from './services/api'

// não possuem valor semântico
// não possuem estilização própria
// todos os componentes possuem por padrao display flex
//View : div footer header main aside section
//Text: p span strong h1 h2 h3

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: 'faker_title',
      owner: 'faker_owner'
    });
    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
      <FlatList 
        data={projects}
        keyExtractor= {project => project.id}
        renderItem={
          ({ item: project }) => (<Text style={styles.project}>{project.title}</Text>)
        }
      />
      <TouchableOpacity 
        activeOpacity={0.6} 
        style={styles.button} 
        onPress={handleAddProject}
      >
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
      </SafeAreaView>
     
      {/* <View style={styles.container}>
        <Text style={styles.title}>Olá Mundo!</Text>
        {projects.map(project => (
        <Text key={project.id} style={styles.project}>{project.title}</Text>
        ))}
      </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',

  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  },
  project: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,

  }
})