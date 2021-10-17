import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {colors} from 'assets/theme/Theme';
import Art from 'components/Art/Art';
import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
import {data} from 'constant/constant';
import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
const {width} = Dimensions.get('window');
const IMAGE_SIZE = width / 3.5;

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Init'>;
};

const Init: React.FC<Props> = ({navigation}) => {
  const animateBg = useSharedValue(0);
  const animateBottom = useSharedValue(0);

  React.useEffect(() => {
    animateBg.value = withTiming(360, {duration: 5000});
    animateBottom.value = 1;
  });

  const bgStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${animateBg.value}deg`}],
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity:
        animateBottom.value === 1
          ? withTiming(1, {duration: 1000})
          : withTiming(0),
      transform: [
        {
          translateY:
            animateBottom.value === 1
              ? withTiming(0, {duration: 1000})
              : withTiming(100),
        },
      ],
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity:
        animateBottom.value === 1
          ? withDelay(200, withTiming(1, {duration: 1000}))
          : withTiming(0),
      transform: [
        {
          translateY:
            animateBottom.value === 1
              ? withDelay(200, withTiming(0, {duration: 1000}))
              : withTiming(100),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.flex6}>
        <Animated.View style={bgStyle}>
          <Art />
        </Animated.View>
        <View style={styles.photoWrapper}>
          {data.map((item, index) => (
            <RoundImage key={index} index={index} item={item} />
          ))}
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Animated.View style={titleStyle}>
          <Text
            fontSize="l"
            color="parisM"
            fontFamily="dmsansBold"
            style={styles.textCenter}>
            Voguish
          </Text>
          <Text
            fontSize="s"
            color="darkGray"
            fontFamily="dmsansRegular"
            style={styles.subText}>
            Help you to find the best cozy outfit. Let’s find yours!
          </Text>
        </Animated.View>
        <Animated.View style={buttonStyle}>
          <Button
            style={styles.button}
            font="interSemiBold"
            onPress={() => navigation.navigate('Home')}>
            get started
          </Button>
        </Animated.View>
      </View>
    </View>
  );
};

export default Init;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex6: {flex: 0.6},
  photoWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: 100,
    backgroundColor: colors.silver,
    position: 'absolute',
    overflow: 'hidden',
  },
  bottomSection: {flex: 0.4, paddingTop: 24, paddingHorizontal: 32},
  textCenter: {textAlign: 'center'},
  subText: {marginHorizontal: 40, textAlign: 'center', marginTop: 16},
  button: {marginTop: 40},
});

type RoundImageProps = {
  index: number;
  item: {
    translateX: number;
    translateY: number;
    image: string;
  };
};
const RoundImage: React.FC<RoundImageProps> = ({item, index}) => {
  const animateImage = useSharedValue(0);

  React.useEffect(() => {
    animateImage.value = 1;
  }, [animateImage]);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            animateImage.value === 1
              ? withDelay(
                  200 * index,
                  withTiming(item.translateX, {duration: 1000}),
                )
              : withTiming(0),
        },
        {
          translateY:
            animateImage.value === 1
              ? withDelay(
                  200 * index,
                  withTiming(item.translateY, {duration: 1000}),
                )
              : withTiming(0),
        },
      ],
    };
  });
  return (
    <Animated.View
      key={item.image}
      style={[
        styles.imageWrapper,
        {
          zIndex: data.length - index,
        },
        imageStyle,
      ]}>
      <Image source={{uri: item.image}} style={StyleSheet.absoluteFillObject} />
    </Animated.View>
  );
};
