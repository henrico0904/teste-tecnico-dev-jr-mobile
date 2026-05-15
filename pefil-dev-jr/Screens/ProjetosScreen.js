import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ProjetosScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>Meus Projetos</Text>
        <View style={styles.cardProjeto}>
           <Text style={styles.nomeProjetoGame}>Projeto Game Vault</Text>
           <Text style={styles.descProjeto}>Game Vault foi um projeto desenvolvido em grupo como trabalho final do semestre no curso do SENAI. O sistema tem como finalidade armazenar, ordenar e avaliar jogos, tanto atuais quanto retros, para os usuários.</Text>
           <View style={styles.imagem}>
            <Image style={styles.imageExemplo} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHh7njoHziatRMTg_Voc1iA63z-kNfiwz7w&s'}}/>
            <Image style={styles.imageExemplo} source={{uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b23e5ca-867b-4ddc-b05c-c917c6be3871/dhol35g-19f81edc-6db5-4aea-acab-0f872fc3c139.jpg/v1/fill/w_1280,h_990,q_75,strp/the_legend_of_zelda_icon_by_drawingjakem_dhol35g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTkwIiwicGF0aCI6Ii9mLzNiMjNlNWNhLTg2N2ItNGRkYy1iMDVjLWM5MTdjNmJlMzg3MS9kaG9sMzVnLTE5ZjgxZWRjLTZkYjUtNGFlYS1hY2FiLTBmODcyZmMzYzEzOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jCGO2P9PV_33OzZXOngo6gqM-yax0qNEoGDmNHOnMq0'}}/>
            <Image style={styles.imageExemplo} source={{uri: 'https://wp.logos-download.com/wp-content/uploads/2021/01/Valorant_Logo.png?dl'}}/>
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
    marginBottom: 20,
  },
  cardProjeto: {
    width: 340,
    backgroundColor: "#2e1713",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f8553833",
  },
  nomeProjetoGame: {
    color: "#004aeb",
    fontSize: 24,
    fontWeight: "bold",
  },
  descProjeto: {
    color: "#ffffff",
    marginTop: 10,
    fontSize: 18,
  },
  imagem: {
    flexDirection: 'row',        // Coloca as imagens lado a lado
    justifyContent: 'space-between', // Espalha as imagens no card
    marginTop: 20,               // Afasta do texto da descrição
  },
  imageExemplo: {
    width: 90,                   // Tamanho fixo para as 3 caberem
    height: 130,                 // Altura maior que largura (estilo capa de jogo)
    borderRadius: 8,             // Cantos arredondados
    borderWidth: 1,
    borderColor: '#f8553833',    // Borda sutil com o seu laranja
    resizeMode: 'cover',         // Faz a imagem preencher o espaço sem distorcer
  },
});