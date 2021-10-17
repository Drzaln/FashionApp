import {colors, fonts, size} from 'assets/theme/Theme';
import React from 'react';
import {Text as RnText, TextStyle} from 'react-native';

type TextProps = {
  fontSize?: keyof typeof size;
  color?: keyof typeof colors;
  fontFamily?: keyof typeof fonts;
  style?: TextStyle;
};

const Text: React.FC<TextProps> = ({
  fontSize = 'm',
  fontFamily = 'dmsansRegular',
  color = 'blackRussian',
  style,
  children,
  ...rest
}) => {
  return (
    <RnText
      {...rest}
      style={[
        {
          fontSize: size[fontSize],
          fontFamily: fonts[fontFamily],
          color: colors[color],
        },
        style,
      ]}>
      {children}
    </RnText>
  );
};

export default Text;
