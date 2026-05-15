import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HabilidadesScreen() {
  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollContent}>
  
      <View style={styles.header}>
        <Text style={styles.tituloPrincipal}>Minhas Habilidades</Text>
        <Text style={styles.textoIntroducao}>
          Ao longo dos meus estudos em Desenvolvimento de Sistemas, foquei em construir uma base sólida no ecossistema Web e Mobile. Posso programas tanto o FrontEnd, BackEnd, desenvolver o design de UI e UX e a identidade visual do projeto. 
        </Text>
        <Text style={styles.textoIntroducao}>
           Abaixo estão as principais tecnologias que utilizo para transformar ideias em interfaces funcionais.
        </Text>
      </View>

      <View style={styles.containerLinguagens}>
        <Text style={styles.tituloLinguagens}>Linguagens & Frameworks</Text>

        <View style={styles.boxLinguagens}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>JavaScript</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://img.icons8.com/color/512/javascript.png" }}
            />
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>HTML</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://cdn.pixabay.com/photo/2017/03/30/13/33/html-2188441_640.png" }}
            />
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>CSS</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" }}
            />
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>React</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_168875.png" }}
            />
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>Figma</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" }}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>Git</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://images.icon-icons.com/2415/PNG/512/git_plain_wordmark_logo_icon_146508.png" }}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>GitHub</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png" }}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemLinguagem}>Google Docs</Text>
            <Image
              style={styles.logoLinguagem}
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968517.png" }}
            />
          </View>
        </View>
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  header: {
    width: "100%",
    marginBottom: 30,
    alignItems: "center",
  },
  tituloPrincipal: {
    color: "#f85538",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textoIntroducao: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.9,
  },
  containerLinguagens: {
    marginTop: 15,
    width: "100%",
  },
  tituloLinguagens: {
    color: "#f85538",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  boxLinguagens: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",             
    backgroundColor: "#3d1f1a",
    marginBottom: 15,         
    padding: 15,              
    borderRadius: 15,         
    borderWidth: 1,
    borderColor: "#f8553833", 
  },
  itemLinguagem: {
    color: "#ffffff",
    fontSize: 16,             
    fontWeight: "bold",
    marginRight: 10,         
  },
  logoLinguagem: {
    width: 28,                
    height: 28,               
    resizeMode: "contain",
  },
});