// MapViewComponent.js
import React, { useEffect, useState, useRef } from 'react'; // Import useRef
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = ({ style, placeNames }) => {
  console.log("abc");
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async (placeName) => {
      const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(placeName)}.json?access_token=${apiKey}`);
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const { center, place_name } = data.features[0];
        return {
          latitude: center[1],
          longitude: center[0],
          title: place_name,
        };
      }
      return null;
    };

    const fetchAllCoordinates = async () => {
      const fetchedMarkers = await Promise.all(placeNames.map(fetchCoordinates));
      setMarkers(fetchedMarkers.filter(Boolean)); // Filter out any null results
      if (fetchedMarkers.length > 0) {
        setRegion({
          latitude: fetchedMarkers[0].latitude,
          longitude: fetchedMarkers[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    };

    fetchAllCoordinates();
  }, [placeNames]);

  useEffect(() => {
    if (mapRef.current && markers.length > 0) {
      mapRef.current.fitToCoordinates(
        markers.map(marker => ({ latitude: marker.latitude, longitude: marker.longitude })),
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        }
      );
    }
  }, [markers]); // Only re-run the effect if markers change

  return (
    <View style={style.container}>
      <MapView
        ref={mapRef}
        style={style.map}
        region={region}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapViewComponent;
