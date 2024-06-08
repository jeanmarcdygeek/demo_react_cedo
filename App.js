import { Text, SafeAreaView, StyleSheet, View, Button, TouchableOpacity, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.affichagevert}>
        <Text style={styles.bienvenue}>
          Bienvenue Cher Cédric
        </Text>
        <Text style={styles.bienvenue}>
          Appli superbe
        </Text>
      </View>
      <View style={styles.affichage}>
        <TouchableOpacity>
          <View  style={styles.boutonImage}>
            <Image 
              source={{uri : "https://cdn.yoursclothing.com/Images/ProductImages/Big/fa64524c-096c-48_174309_A.jpg"}} 
              style={{width : 200, height:250}}
            />
          </View>
        </TouchableOpacity>

      </View>
      <View style={styles.affichagevert}>
        <TouchableOpacity>
          <View  style={styles.bouton}>
            <Text style={styles.boutonText}>
              Super Bouton
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  affichage :{

    flex : 6,
    justifyContent : "center",
    alignItems : "center"
  },
  affichagevert :{


    flex : 1,
    justifyContent: 'center',
  },
  bienvenue : {
    fontSize : 30, 
    fontWeight : "bold"
  },
  bouton : {
    backgroundColor : "purple",
    alignSelf : 'center',
    justifyContent : "center",
    width : 300,
    height : 75, 
    borderRadius : 10
  },
  boutonText : {
    fontSize : 25,
    fontWeight : "bold",
    color :"white",
    textAlign : "center"
  },
  boutonImage : {
    borderWidth : 1,
    width : 300, 
    height : 300,
    justifyContent :"center",
    alignItems : "center"
  }
});
