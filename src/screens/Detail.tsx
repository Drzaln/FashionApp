import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {colors} from 'assets/theme/Theme';
import Header from 'components/Header/Header';
import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import Text from 'components/Text/Text';
import Star from 'components/Icons/Star';
import SizeBar from 'components/SizeBar/SizeBar';
import Button from 'components/Button/Button';
import {detailImage} from 'constant/constant';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Detail'>;
};

const Detail: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Detail Product"
        rightIcon="red-heart"
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.mainWrapper}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/Drzaln/fashion-image/main/detail%20image/Pexels%20Photo%20by%20Monstera.png',
            }}
            style={{...StyleSheet.absoluteFillObject}}
          />
        </View>
        <View style={styles.thumbRow}>
          {detailImage.map(item => (
            <View key={item} style={styles.thumbWrapper}>
              <Image
                source={{
                  uri: item,
                }}
                style={{...StyleSheet.absoluteFillObject}}
              />
            </View>
          ))}
        </View>
        <View style={styles.rowBeetween}>
          <Text color="black" fontFamily="interSemiBold">
            Purple Hoodie
          </Text>
          <Text
            color="darkGray"
            fontFamily="interRegular"
            fontSize="s"
            style={styles.lineStrike}>
            $150
          </Text>
        </View>
        <View style={styles.rowBeetween}>
          <Text color="darkGray" fontFamily="interRegular" fontSize="xs">
            Screamous
          </Text>
          <Text color="froly" fontFamily="interRegular" fontSize="xs">
            30%
          </Text>
        </View>
        <View style={[styles.rowBeetween, styles.margin]}>
          <View style={styles.row}>
            <View style={styles.pil}>
              <View style={styles.row}>
                <Star />
                <Text
                  color="parisM"
                  fontSize="xs"
                  fontFamily="interRegular"
                  style={styles.rate}>
                  4.6
                </Text>
              </View>
            </View>
            <View style={styles.pil}>
              <Text color="parisM" fontSize="xs" fontFamily="interRegular">
                <Text color="darkGray" fontSize="xs" fontFamily="interRegular">
                  Reviews
                </Text>{' '}
                (115)
              </Text>
            </View>
          </View>
          <Text color="froly" fontFamily="interSemiBold" fontSize="m">
            $150
          </Text>
        </View>
        <Text
          color="darkGray"
          fontFamily="interRegular"
          fontSize="xs"
          style={styles.desc}>
          A comfortable hoodie that made by the best quality material for your
          daily wear to make you look stylish and adorable.
        </Text>
      </ScrollView>
      <View style={styles.bottomSection}>
        <SizeBar />
        <View style={styles.row}>
          <Button icon="buy" isWhite style={styles.button}>
            Add to Cart
          </Button>
          <View style={styles.wDivider} />
          <Button style={styles.button}>buy now</Button>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  mainWrapper: {paddingHorizontal: 20, paddingBottom: 30},
  rowBeetween: {flexDirection: 'row', justifyContent: 'space-between'},
  lineStrike: {textDecorationLine: 'line-through'},
  row: {flexDirection: 'row', alignItems: 'center'},
  margin: {marginTop: 4, marginBottom: 12},
  pil: {
    backgroundColor: colors.whiteSmoke,
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 8,
    borderRadius: 22,
    marginRight: 4,
  },
  rate: {
    marginLeft: 5,
  },
  desc: {
    lineHeight: 18,
  },
  bottomSection: {paddingHorizontal: 20, paddingTop: 16, paddingBottom: 32},
  button: {flex: 1},
  wDivider: {width: 7},
  imageWrapper: {
    backgroundColor: colors.selago,
    aspectRatio: 1 / 1.12,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 23,
  },
  thumbWrapper: {
    backgroundColor: colors.selago,
    aspectRatio: 1 / 1,
    width: 45,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 12,
  },
});
