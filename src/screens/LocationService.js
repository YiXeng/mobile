import * as Location from 'expo-location';

export const getLocation = async () => {
  let location = { coords: { latitude: 0, longitude: 0 } };

  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return location;
  }

  try {
    
    location = await Location.getCurrentPositionAsync({});
  } catch (error) {
    console.error(error);
  }

  return location;
};

export const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
        let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
        });
        if (response.length > 0) {
            // Usually, the first result is the most accurate
            return response[0];
        }
    } catch (error) {
        console.error(error);
    }
    return null;
};
