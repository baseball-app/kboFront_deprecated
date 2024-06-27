import { StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 32,
    },
    subTitle: {
      fontSize: 14,
      color: 'gray',
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    button: {
      height: 40,
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginBottom: 32,
    },
    buttonText: {
      color: 'black',
    },
    submitButton: {
      height: 50,
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginTop: 32,
    },
    submitButtonText: {
      color: 'black',
      fontSize: 18,
    },
  });

export default styles;