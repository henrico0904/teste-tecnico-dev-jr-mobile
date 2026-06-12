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

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ImagemFoto}>
        <Image
          style={styles.imagemPerfil}
          // CORREÇÃO AQUI: Usando require() para arquivos locais
          source={require("../assets/unnamed.png")}
        />
        <Text style={styles.nomePerfil}>Henrico Ferrari Ferreira</Text>
        <Text style={styles.descricaoPerfil}>
          Estudante de Desenvolvimento de Sistemas - Senai
        </Text>
      </View>

      <View style={styles.sobreMim}>
        <Text style={styles.tituloSecao}>Sobre Mim</Text>
        <Text style={styles.textoCorpo}>
        Estudante de desenvolvimento de sistemas no Senai Valinhos e 3ºano do Ensino Médio no Sesi. Sempre busco a aprender mais, não somente na área de programação, mas em todos os ambitos profissionais e pessoais.
        </Text>

        <View style={styles.contato}>
          <Text style={styles.tituloContato}>Entre em contato</Text>
          <View style={styles.plataformas}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.instagram.com/henrico_ferrariiii/")
              }
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://images.vexels.com/media/users/3/137198/isolated/preview/07f0d7b69ef071571e4ada2f4d6a053a-icone-do-instagram-colorido.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/henrico0904")}
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("mailto:henricoferrariferreira0@gmail.com")
              }
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  ImagemFoto: {
    alignItems: "center",
    justifyContent: "center",
  },
  imagemPerfil: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginBottom: 40,
  },
  nomePerfil: {
    color: "#f85538",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  descricaoPerfil: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    width: 300,
    marginTop: 10,
  },
  sobreMim: {
    marginTop: 25,
    backgroundColor: "#2e1713",
    alignItems: "center",
    padding: 20,
    width: 340,
    borderRadius: 20,
  },
  tituloSecao: {
    color: "#f85538",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    paddingBottom: 5,
  },
  textoCorpo: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "400",
  },

  tituloContato: {
    marginTop: 10,
    color: "#f85538",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  plataformas: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 30,
  },
  icon: {
    width: 40,
    height: 40,
  },
});