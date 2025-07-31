import {
  Text,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ImageSourcePropType,
  Image,
  Pressable
} from 'react-native';
import type { JSX, PropsWithChildren } from 'react';
import React, { useState } from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>

const  Dice = ({ imageUrl }: DiceProps):JSX.Element => {
    return (
      <View>
        <Image style ={styles.diceImage} source={imageUrl}/>
      </View>
    )
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;   
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;   
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
      <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollDiceBtnText} >Roll The Dice</Text>
        </Pressable> 
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
    marginBottom: 20,
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
