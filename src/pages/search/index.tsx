import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import createStyles from './styles';
import axios from 'axios';
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store';
import { prevActions } from '../../store/previous';
import { AntDesign } from '@expo/vector-icons';

export default function search() {
  const styles = createStyles();
  const [location, setLocation] = useState<string>('');
  const [northeastLat, setNortheastLat] = useState<string>('');
  const [northeastLng, setNortheastLng] = useState<string>('');
  const [southwestLat, setSouthwestLat] = useState<string>('');
  const [southwestLng, setSouthwestLng] = useState<string>('');
  const [choice, setChoice] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const WEATHER_API_KEY = '6f1f76cc2ec1bd5759e9cc165ea2dc5f';
  const [unitsSystem, setUnitsSystem] = useState<string>('metric');
  const getPrevLocation = useSelector((state: any) => state.prev);
  const [getallTheGames, setallTheGames] = useState([]);
  const getPrev = getallTheGames.map((item: any, index: any) => (
    <View style={styles.containerSearches}>
      <View style={styles.sideBarRow}>
        <Text style={styles.textSearches}>{item.location}</Text>
      </View>
      <AntDesign name='arrowright' size={24} color={'#FF2E4E'} />
    </View>
  ));

  const handleSubmit = () => {
    let formatEvent = choice.replace(/ /g, '');
    let url =
      'https://api.opencagedata.com/geocode/v1/json?key=e85809527b0341b18712ec1bacc3aab9&q=' +
      formatEvent;
    axios
      .get(url)
      .then((res: any) => {
        if (res.data.results[0] === undefined) {
          setLocation('');
          setNortheastLat('');
          setNortheastLng('');
          setSouthwestLat('');
          setSouthwestLng('');
          return;
        }
        dispatch(prevActions.previous(res.data.results[0].formatted));
        setallTheGames(getallTheGames);
        setLocation(res.data.results[0].formatted);
        setNortheastLat(res.data.results[0].bounds.northeast.lat);
        setNortheastLng(res.data.results[0].bounds.northeast.lng);
        setSouthwestLat(res.data.results[0].bounds.southwest.lat);
        setSouthwestLng(res.data.results[0].bounds.southwest.lng);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  async function handleLocationSubmit() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('You need to give permission to your app first.');
        return;
      }
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const { latitude, longitude } = location.coords;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);

      const result = await response.json();
      setChoice(String(result.name));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Type your location here:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setChoice}
          value={choice}
        />
        {location !== '' ? (
          <View>
            <Text>Localização: {location}</Text>
            <Text>Northeast Latitude: {northeastLat}</Text>
            <Text>Northeast Longitude: {northeastLng}</Text>
            <Text>Southwest Latitude: {southwestLat}</Text>
            <Text>Southwest Longitude: {southwestLng}</Text>
          </View>
        ) : (
          <Text style={styles.redAlert}>No available Location Chosen</Text>
        )}
        <View style={styles.buttonRow}>
          <TouchableOpacity>
            <Text style={styles.buttonItem} onPress={handleSubmit}>
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonItemEnd} onPress={handleLocationSubmit}>
              º
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.searchesTitle}>Previous Searches</Text>
      {getPrev}
    </View>
  );
}
