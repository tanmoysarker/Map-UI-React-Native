import { StyleSheet, Dimensions, Platform } from 'react-native';


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    searchBarDark: {
      width: windowWidth - 50,
      height: 50,
      backgroundColor: '#333333',
      position: 'absolute',
      top: Platform.OS === 'ios' ? 80 : 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchBarLight: {
      width: windowWidth - 50,
      height: 50,
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      top: Platform.OS === 'ios' ? 80 : 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    input: {
      height: 50,
      margin: 12,
      padding: 10,
      width: 250,
      right: 10
    },
    toogleBarLight: {
      width: 50,
      height: 50,
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      right: 25,
      top: Platform.OS === 'ios' ? 150 : 120,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1
    },
    toogleBarDark: {
      width: 50,
      height: 50,
      backgroundColor: '#333333',
      position: 'absolute',
      right: 25,
      top: Platform.OS === 'ios' ? 150 : 120,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1
    },
    locationBarLight: {
      width: 50,
      height: 50,
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      right: 25,
      top: Platform.OS === 'ios' ? 210 : 180,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1
    },
    locationBarDark: {
      width: 50,
      height: 50,
      backgroundColor: '#333333',
      position: 'absolute',
      right: 25,
      top: Platform.OS === 'ios' ? 210 : 180,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1
    },
    cardLight: {
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
      marginHorizontal: 10,
      height: 100,
      width: windowWidth - 50,
      flexDirection: 'row',
      alignSelf:'center',
      position:'absolute',
      bottom:50,
      alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    cardDark: {
      backgroundColor: "#333333",
      borderRadius: 5,
      marginHorizontal: 10,
      height: 100,
      width: windowWidth - 50,
      flexDirection: 'row',
      alignSelf:'center',
      position:'absolute',
      bottom:50,
      alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    cardImage: {
      width: 80,
      height: 80,
      marginLeft: 20,
      borderRadius: 8
    },
    cardtitleLight: {
      fontSize: 18,
      marginLeft: 10,
      fontWeight: "bold",
    },
    cardtitleDark: {
      fontSize: 18,
      marginLeft: 10,
      fontWeight: "bold",
      color:'#FFFFFF'
    },
    cardDescription: {
      fontSize: 15,
      marginLeft: 10,
      color: "#5B5B5B",
    },
    searchInputLight: {
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      color: '#000',
      borderWidth: 0
      
    },
    searchInputDark: {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: '#333333',
      borderColor: '#333333',
      color: '#fff',
      borderWidth: 0
    },
    suggestionContainerLight: {
      backgroundColor: '#FFFFFF',
      right:35,
    },
    suggestionContainerDark: {
      backgroundColor: '#333333',
      right:35,
    },
    itemTextDark: {
      color: '#fff', 
      padding: 15 
    },
    itemTextLight:{
      color: '#000', 
      padding: 15 
    },
    rightContainerLight: {
      height: 50,
      borderRadius: 5,
      alignSelf: 'center',
      backgroundColor: '#FFFFFF'
    },
    rightContainerDark:{
      height: 50,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      alignSelf: 'center',
      backgroundColor: '#333333'
    }
  });


  export default styles;