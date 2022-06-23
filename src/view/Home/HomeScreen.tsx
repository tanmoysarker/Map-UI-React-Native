import React, { useCallback } from 'react';
import { connect } from "react-redux";
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions, Platform, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import globalStyles from "../Common/globalStyles";
import { setAppTheme } from "../../actions/navigation";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import LocationIcon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';



import styles from './styles';

import mapStyleLight from './mapStyleLight.json';
import mapStyleDark from './mapStyleDark.json';


const markers = [
  {
    id: 0,
    latitude: 37.78825,
    longitude: -122.4324,
    image: require('../../assets/beer.png'),
    backgroundimage: require('../../assets/bar.jpg'),
    title: 'Lokal Hamburk',
    desc: 'Pub in Prague',
  },
  {
    id: 1,
    latitude: 37.79626,
    longitude: -122.4325,
    image: require('../../assets/burger.png'),
    backgroundimage: require('../../assets/resturant.jpg'),
    title: 'Burger Point',
    desc: 'Resturant in Prague'
  },
  {
    id: 2,
    latitude: 37.7826,
    longitude: -122.4537,
    image: require('../../assets/glass.png'),
    backgroundimage: require('../../assets/bar.jpg'),
    title: 'Drink & Dine',
    desc: 'Pub in Prague'
  },
  {
    id: 3,
    latitude: 37.79927,
    longitude: -122.4456,
    image: require('../../assets/cup.png'),
    backgroundimage: require('../../assets/cafe.jpg'),
    title: 'Coffee House',
    desc: 'Cafe in Prague'
  },
  {
    id: 4,
    latitude: 37.79927,
    longitude: -122.4147,
    image: require('../../assets/sushi.png'),
    backgroundimage: require('../../assets/resturant.jpg'),
    title: 'Sushi House',
    desc: 'Resturant in Prague'
  },
  {
    id: 5,
    latitude: 37.7636,
    longitude: -122.4147,
    image: require('../../assets/cup.png'),
    backgroundimage: require('../../assets/cafe.jpg'),
    title: 'Starbucks',
    desc: 'Cafe in Prague'
  },
  {
    id: 6,
    latitude: 37.7702,
    longitude: -122.4147,
    image: require('../../assets/glass.png'),
    backgroundimage: require('../../assets/bar.jpg'),
    title: 'Wine Shop',
    desc: 'Pub in Prague'
  },
  {
    id: 7,
    latitude: 37.7702,
    longitude: -122.4454,
    image: require('../../assets/beer.png'),
    backgroundimage: require('../../assets/bar.jpg'),
    title: 'Local Pub',
    desc: 'Pub in Prague'
  }
]

const HomeScreen = (props: HomeScreenProps) => {
  const { theme } = props.navigation
  const mapRef = React.createRef();
  const searchRef = React.useRef(null)

  const [selectedItem, setSelectedItem] = React.useState(null)
  const [selectedLocation, setSelectedLocation] = React.useState([]);


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

  const selectLocation = (id: number) => {
    var selectedMarker = markers.filter(x => x.id === id)
    setSelectedLocation(selectedMarker);
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
          customMapStyle={theme === "light" ? mapStyleLight : mapStyleDark}
        >

          {markers.map(x => {
            return (
              <Marker
                key={x.id}
                draggable
                coordinate={{
                  latitude: x.latitude,
                  longitude: x.longitude,
                }}
                onDragEnd={
                  (e) => console.log(JSON.stringify(e.nativeEvent.coordinate))
                }
                title={x.text}
                description={x.desc}
                onPress={() => selectLocation(x.id)}
              >
                <Image source={x.image} style={{ height: 35, width: 35 }} />
              </Marker>

            )
          })}

        </MapView>

        <View style={theme === "light" ? styles.searchBarLight : styles.searchBarDark}>
          <SearchIcon name="search" size={30} color='#5B5B5B' style={{ marginLeft: 10 }} />
          <AutocompleteDropdown
            ref={searchRef}
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: '0' }}
            onSelectItem={setSelectedItem}
            dataSet={markers}
            textInputProps={theme === "light" ? {
              placeholder: 'Search here',
              autoCorrect: false,
              autoCapitalize: 'none',
              style: styles.searchInputLight,
            } : {
              placeholder: 'Search here',
              autoCorrect: false,
              autoCapitalize: 'none',
              style: styles.searchInputDark,
            }}
            rightButtonsContainerStyle={theme === "light" ? styles.rightContainerLight : styles.rightContainerDark}
            suggestionsListContainerStyle={theme === "light" ? styles.suggestionContainerLight : styles.suggestionContainerDark}
            containerStyle={{ flexGrow: 1, flexShrink: 1 }}
            renderItem={(item, text) => (
              <View style={{ flexDirection: 'row' }}>
                <Image source={item.backgroundimage} style={{ height: 45, width: 45 }} />
                <Text style={theme === "light" ? styles.itemTextLight : styles.itemTextDark}>{item.title}</Text>
              </View>
            )
            }
            ClearIconComponent={<Feather name="x-circle" size={18} color={theme === "light" ? "#333333" : '#FFFFFF'} />}
            inputHeight={50}
          />
        </View>

        <TouchableOpacity onPress={() => {
          props.setAppTheme(theme === "light" ? "dark" : "light");
        }}
        >
          <View style={theme === "light" ? styles.toogleBarLight : styles.toogleBarDark}>
            <Icon name="md-options-outline" size={30} color={theme === "light" ? "#000" : '#FFFFFF'} />
          </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={changeRegion}>
          <View style={theme === "light" ? styles.locationBarLight : styles.locationBarDark}>
            <LocationIcon name="location-arrow" size={30} color={theme === "light" ? "#000" : '#FFFFFF'} />
          </View>
        </TouchableOpacity>

        {selectedLocation.map((marker, index) => (
          <View style={theme === "light" ? styles.cardLight : styles.cardDark} key={index}>
            <Image
              source={marker.backgroundimage}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View>
              <Text numberOfLines={1} style={theme === "light" ? styles.cardtitleLight : styles.cardtitleDark}>{marker.title}</Text>
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.desc}</Text>
            </View>
          </View>
        ))}
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







