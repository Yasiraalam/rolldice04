import {
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ImageSourcePropType,
  Image
} from 'react-native';
import type { JSX, PropsWithChildren } from 'react';
import React from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>

const Dice = ({ imageUrl }: DiceProps):JSX.Element => {
    return (
      <View>
        <Image style ={styles.diceImage} source={imageUrl}/>
      </View>
    )
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <View style={styles.container}>
        <Text >Hello Yasir</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dicecontainer: {
    margin: 12
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  }
});

export default App;
