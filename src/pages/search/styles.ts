import { StyleSheet } from 'react-native';

const createStyles = () => {
  return StyleSheet.create({
    container: {
      marginTop: 20,
      margin: 12,
      flex: 1,
    },
    redAlert: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 12,
    },
    buttonRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    textInput: {
      marginTop: 15,
      marginBottom: 15,
      padding: 8,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 10,
    },
    titleText: {
      fontSize: 20,
    },
    buttonItem: {
      backgroundColor: '#FF2E4E',
      color: 'white',
      width: 150,
      textAlign: 'center',
      borderRadius: 10,
      padding: 15,
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonItemEnd: {
      backgroundColor: '#FF2E4E',
      color: 'white',
      width: 150,
      textAlign: 'center',
      borderRadius: 10,
      padding: 15,
      fontSize: 18,
      fontWeight: 'bold',
    },
    searchesTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 15,
    },
    sideBar: {
      color: '#FF2E4E',
      backgroundColor: '#FF2E4E',
      height: 40,
      width: 4,
      marginRight: 10,
    },
    textSearches: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    containerSearches: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: '#DBDBDB',
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
    },
    sideBarRow: {
      flexDirection: 'column',
      borderLeftWidth: 3,
      borderLeftColor: '#FF2E4E',
      paddingLeft: 10,
    },
  });
};

export default createStyles;
