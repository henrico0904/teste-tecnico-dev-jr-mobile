import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from '@expo/vector-icons';

export default function ProjetosScreen() {
  // Funções para abrir os links do GitHub
  const abrirGithubGameVault = () => {
    Linking.openURL('https://github.com/nunezada08/gameVault-projetoFinal-frontend.git');
  };

  const abrirGithubClubyx = () => {
    Linking.openURL('https://github.com/JhonatanFavoreto/projeto-clubyx-frontend.git');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>Meus Projetos</Text>
        
        {/* --- PRIMEIRO CARD: GAME VAULT --- */}
        <View style={styles.cardProjeto}>
           <View style={styles.cardHeader}>
             <Text style={styles.nomeProjetoGame}>Projeto Game Vault</Text>
             <TouchableOpacity onPress={abrirGithubGameVault} activeOpacity={0.7}>
               <FontAwesome name="github" size={28} color="#f85538" />
             </TouchableOpacity>
           </View>

           <Text style={styles.descProjeto}>Game Vault foi um projeto desenvolvido em grupo como trabalho final do semestre no curso do SENAI. O sistema tem como finalidade armazenar, ordenar e avaliar jogos, tanto atuais quanto retros, para os usuários.</Text>
           
           <View style={styles.imagem}>
            <Image style={styles.imageExemplo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiF-V7eujVyG9vc7oJby_mIzpRfQgOeg1vanedmIjVuSGBJltYa5CNeFl&s=10'}}/>
            <Image style={styles.imageExemplo} source={{uri: 'https://www.xtrafondos.com/wallpapers/vertical/the-legend-of-zelda-breath-of-the-wild-4064.jpg'}}/>
            <Image style={styles.imageExemplo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYoftOrYqmkKaORYL9m1diuxAiQXSHVyk15L415n5t8k3K_CXJTcOLsT3&s=10'}}/>
           </View>
        </View>

        {/* --- SEGUNDO CARD: CLUBYX --- */}
        <View style={styles.cardProjeto}>
           <View style={styles.cardHeader}>
             <Text style={styles.nomeProjetoGame}>Projeto Clubyx</Text>
             <TouchableOpacity onPress={abrirGithubClubyx} activeOpacity={0.7}>
               <FontAwesome name="github" size={28} color="#f85538" />
             </TouchableOpacity>
           </View>

           <Text style={styles.descProjeto}>Projeto Clubyx desenvolvido para um projeto em conjunto com SENAI e SESI, o sistema oferce uma descrição focada na obra de Machado de Assís 'Memórias Póstumas de Brás Cubas'. Além de uma bibliotca, simulados e tradução para o inglês.</Text>
           
           <View style={styles.imagem}>
            <Image style={styles.imageExemplo} source={{uri: 'https://altabooks.com.br/wp-content/uploads/2025/12/CAPA_3000px_MEMORIAS-POSTUMAS-DE-BRAS-CUBAS_-scaled.jpg'}}/>
            <Image style={styles.imageExemplo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVC6yKz5NYM34e0G-BQB4kPinhzY59FO5NlAmBNU3-mQ&s=10'}}/>
           </View>
        </View>

      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContent: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center", 
  },
  titulo: {
    color: "#f85538",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 50,
  },
  cardProjeto: {
    width: 340,
    backgroundColor: "#2e1713",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f8553833",
    marginBottom: 20, // Adicionado para dar espaço entre os cards
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nomeProjetoGame: {
    color: "#f85538",
    fontSize: 24,
    fontWeight: "bold",
    flex: 1, 
  },
  descProjeto: {
    color: "#ffffff",
    marginTop: 10,
    fontSize: 18,
  },
  imagem: {
    flexDirection: 'row',        
    justifyContent: 'space-between', 
    marginTop: 20,               
  },
  imageExemplo: {
    width: 90,                   
    height: 130,                 
    borderRadius: 8,             
    borderWidth: 1,
    borderColor: '#f8553833',    
    resizeMode: 'cover',         
  },
});