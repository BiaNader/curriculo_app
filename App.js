import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons';
// Página Inicial
const PaginaInicial = () => {

    const abrirLinkedin = () => {
      Linking.openURL('https://linkedin.com/in/bianader');
    };
  
    const abrirGithub = () => {
      Linking.openURL('https://github.com/BiaNader');
    };
  

   

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <Image
           source={{uri:'https://i.ibb.co/Prhb4Jf/323051130-167957842616149-2897431360010390005-n.jpg'}}
           style={styles.image} />
        <View style={styles.box}>
          <Text style={styles.titulo}>Olá, eu sou Beatriz Nader!</Text>
          <Text style={styles.texto}>Estou estudando análise de dados!</Text>
      
          <Text style={styles.titulo}>Me encontre em outras redes!</Text>

        
          <TouchableOpacity onPress={abrirGithub} style={styles.botao}>
            <FontAwesome name="github" size={24} color="#fff" />
            <Text style={styles.botaoTexto}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={abrirLinkedin} style={styles.botao}>
            <FontAwesome name="linkedin" size={24} color="#fff" />
            <Text style={styles.botaoTexto}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Página Sobre Mim
const Pagina1 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Sobre Mim</Text>
          <Text style={styles.texto}>
          Meu nome é Beatriz Nader, tenho 24 anos. Sou formada em Cinema e Audiovisual e atualmente estou cursando Análise e Desenvolvimento de Sistemas. Amo ler quadrinhos e livros, jogar, e assistir a filmes e séries no meu tempo livre!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

//Página de Cursos
const Pagina2 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
       
          <Text style={styles.titulo}>Cursos</Text>
          <Text style={styles.texto}>
          No momento, estou fazendo cursos na área de análise de dados, seja por Google Sheets ou pelo uso de Python.
          </Text>
          <Text style={styles.texto}>Data Analysis: Google Sheets</Text>
          <Text style={styles.texto}>Data Analysis: Previsões com Google Sheets</Text>
          <Text style={styles.texto}>Lógica de Programação</Text>
          <Text style={styles.texto}>Data Analysis com Power BI</Text>
          
        </View>
      </View>
    </ScrollView>
  );
};

const Pagina3 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Projetos</Text>
          <Text style={styles.texto}>Apé Startup</Text>
          <Text style={styles.texto}>RideShare</Text>
         
          <Text style={styles.texto}>Conteúdo da Página 3</Text>
          <Text style={styles.titulo}>Reconhecimentos e prêmios</Text>
          <Text style={styles.texto}>1º lugar - Squad RideShare TADS025</Text>
          <Text style={styles.texto}>Finalista - Early Stage</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Pagina4 = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.pagina}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Habilidades</Text>
          <Text style={styles.texto}>Habilidades que adquiri ao longo do curso de Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.titulo}>Hard Skills</Text>
          <Text style={styles.texto}>HTML5</Text>
          <Text style={styles.texto}>CSS3</Text>
          <Text style={styles.texto}>MySQL</Text>
          <Text style={styles.texto}>Linguagem C</Text>
          <Text style={styles.texto}>Figma</Text>
          <Text style={styles.texto}>Adobe Premier</Text>
          <Text style={styles.texto}>Canva</Text>
          <Text style={styles.texto}>Metodologia Scrum</Text>
          <Text style={styles.texto}>Jira</Text>
          <Text style={styles.titulo}>Soft Skills</Text>
          <Text style={styles.texto}>Trabalho em equipe</Text>
          <Text style={styles.texto}>Comunicação</Text>
          <Text style={styles.texto}>Criatividade</Text>
   
        </View>
      </View>
    </ScrollView>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      case 'Página 4':
        return <Pagina4 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Currículo: Beatriz Nader</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <FontAwesome name="bars" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Sobre Mim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}> Cursos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Projetos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 4')}>
            <Text style={styles.menuItemText}>Habilidades</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E1A47',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4C306F',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    margin: 10,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuIcon: {
    padding: 15,
  },
  menu: {
    backgroundColor: '#4C306F',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3E255A',
  },
  menuItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#3E255A',
  },
  menuItemText: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: '90%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4C306F',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#2E1A47',
    marginBottom: 10,
  },
  scrollView: {
    width: '100%',
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E255A',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 30,
    borderColor: '#fff',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

