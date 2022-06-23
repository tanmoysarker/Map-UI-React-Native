import React from 'react';
import { connect } from "react-redux";
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import globalStyles from "../Common/globalStyles";
import {setAppTheme} from "../../actions/navigation";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import LocationIcon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;


const markers = [
  {
    latitude: 37.78825,
    longitude: -122.4324,
    image: require('../../assets/beer.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  },
  {
    latitude: 37.79626,
    longitude: -122.4325,
    image: require('../../assets/burger.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  },
  {
    latitude: 37.7826,
    longitude: -122.4537,
    image: require('../../assets/glass.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  },
  {
    latitude: 37.79927,
    longitude: -122.4456,
    image: require('../../assets/cup.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  },
  {
    latitude: 37.79927,
    longitude: -122.4147,
    image: require('../../assets/sushi.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  },
  {
    latitude: 37.7636,
    longitude: -122.4147,
    image: require('../../assets/cup.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  },
  {
    latitude: 37.7702,
    longitude: -122.4147,
    image: require('../../assets/glass.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  },
  {
    latitude: 37.7702,
    longitude: -122.4454,
    image: require('../../assets/beer.png'),
    text: 'Lokal Hamburk',
    desc: 'Pub in Prague'
  }
]

const HomeScreen = (props: HomeScreenProps) => {
    const { theme } = props.navigation
    const mapRef = React.createRef();


    const [text, onChangeText] = React.useState("");

    const changeRegion = () => {
        const latitude = 37.78825;
        const longitude = -122.4324;
        mapRef.current.animateToRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        })
      
    }
    return (
            <SafeAreaView style={{ flex: 1 }}>
                
                <View style={styles.container}>
                
                    <MapView
                        ref={mapRef}
                        style={styles.mapStyle}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                      customMapStyle={theme === "light" ? mapStyle : customDarkStyle}
                    >
                    <View style={theme === "light" ? styles.searchBarLight : styles.searchBarDark}>
                      <SearchIcon name="search" size={30} color= '#5B5B5B'/>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Search here"
                        placeholderTextColor={'#5B5B5B'}
                      />
                    </View>
                   
                    {markers.map(x=> {
                      return(
                        // <View style={{width:50, height: 50, backgroundColor: '#fff'}}>
                          <Marker
                            key={Math.floor(Math.random() * 10000)}
                            draggable
                            coordinate={{
                                latitude: x.latitude,
                                longitude: x.longitude,
                            }}
                            onDragEnd={
                                (e) => console.log(JSON.stringify(e.nativeEvent.coordinate))
                            }
                            title={'Test Marker'}
                            description={'This is a description of the marker'}
                          >
                            <Image source={x.image} style={{height: 35, width:35 }} />
                          </Marker>
                        // </View>
                       
                      )
                    })}
                        
                    </MapView>
                   <TouchableOpacity onPress={(value) => {
                                const newTheme = value ? "dark" : "light"
                                props.setAppTheme(newTheme);
                            }}
                    >
                      <View style={theme === "light" ? styles.toogleBarLight : styles.toogleBarDark}>
                        <Icon name="md-options-outline" size={30} color= {theme === "light" ?"#000" : '#FFFFFF'}/>
                      </View>
                     
                    </TouchableOpacity>

                    <TouchableOpacity onPress={changeRegion}>
                      <View style={theme === "light" ? styles.locationBarLight : styles.locationBarDark}>
                        <LocationIcon name="location-arrow" size={30} color= {theme === "light" ?"#000" : '#FFFFFF'}/>
                      </View>
                    </TouchableOpacity>

        {/* {markers.map((marker, index) =>(
          <View style={styles.card} key={index}>
            <Image 
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.text}</Text>
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.desc}</Text>
            </View>
          </View>
        ))} */}
      </View>
      </SafeAreaView>
    );
};



type HomeScreenProps = {
    navigation: {
        theme: String
    },
    setAppTheme(theme: String): any
}

const mapStateToProps = (state: any) => ({
    navigation: state.navigation
});

const mapDispatchToProps = {
  setAppTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
       position:'absolute',
       top: Platform.OS === 'ios' ? 80 : 50,
       borderRadius:10,
       justifyContent:'center',
       alignSelf:'center',
       shadowColor: '#000',
       shadowOffset: {
           width: 0,
           height: 2
       },
       shadowOpacity: 0.15,
       shadowRadius: 0.3,
       elevation: 1,
       flexDirection: 'row',
       alignItems:'center',
    },
    searchBarLight: {
      width: windowWidth - 50, 
      height: 50, 
      backgroundColor: '#FFFFFF',
      position:'absolute',
      top: Platform.OS === 'ios' ? 80 : 50,
      borderRadius:10,
      justifyContent:'center',
      alignSelf:'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1,
      flexDirection: 'row',
      alignItems:'center'
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
       position:'absolute',
       right: 25,
       top: Platform.OS === 'ios' ? 150 : 50,
       borderRadius: 50,
       justifyContent:'center',
       alignItems:'center',
       alignSelf:'center',
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
      position:'absolute',
      right: 25,
      top: Platform.OS === 'ios' ? 150 : 50,
      borderRadius: 50,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
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
      position:'absolute',
      right: 25,
      top: Platform.OS === 'ios' ? 210 : 110,
      borderRadius: 50,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
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
      position:'absolute',
      right: 25,
      top: Platform.OS === 'ios' ? 210 : 110,
      borderRadius: 50,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.15,
      shadowRadius: 0.3,
      elevation: 1
  },
  card: {
      // padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      borderRadius: 5,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 10,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: 150,
      width: windowWidth * 0.8,
      overflow: "hidden",
      flexDirection: 'row'
  },
  cardImage: {
      width: 80,
      height: 80,
  },
  cardtitle: {
    fontSize: 18,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 15,
    color: "#444",
  },
});



const mapStyle = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
]

const customDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]