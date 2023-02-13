import './src/lib/dayjs';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import Loading from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter400: Inter_400Regular,
    Inter600: Inter_600SemiBold,
    Inter700: Inter_700Bold,
    Inter800: Inter_800ExtraBold
  })

  if (!fontsLoaded) {
    return <Loading/>;
  }

  return (
    <>
      <Routes/>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  )
}