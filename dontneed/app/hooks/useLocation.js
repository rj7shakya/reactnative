import RNLocation from 'react-native-location';
import {useState, useEffect} from 'react';

export default useLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const granted = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
        },
      });
      console.log('granted', granted);
      if (!granted) return;
      await RNLocation.subscribeToLocationUpdates((locations) => {
        const {latitude, longitude} = locations[0];
        setLocation({latitude, longitude});
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
