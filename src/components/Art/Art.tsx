import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const Art = (props: SvgProps) => {
  return (
    <Svg width={375} height={478} fill="none" {...props}>
      <Circle
        cx={189.352}
        cy={218.274}
        r={82.594}
        transform="rotate(-15 189.352 218.274)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Circle
        cx={138.491}
        cy={255.321}
        r={146.918}
        transform="rotate(-15 138.491 255.321)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Circle
        cx={99.552}
        cy={310.958}
        r={67.87}
        transform="rotate(-15 99.552 310.958)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Circle
        cx={69.429}
        cy={329.994}
        r={104.212}
        transform="rotate(-15 69.43 329.994)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Circle
        cx={273.119}
        cy={349.102}
        r={93.704}
        transform="rotate(-120 273.119 349.102)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Circle
        cx={309.09}
        cy={174.317}
        r={82.594}
        transform="rotate(90 309.09 174.317)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Path
        d="M312.496 297.702c-67.072 0-121.444-54.372-121.444-121.443 0-67.072 54.372-121.444 121.444-121.444 67.071 0 121.443 54.372 121.443 121.444 0 67.071-54.372 121.443-121.443 121.443zM63.869 234.658c-45.003 0-81.486-36.483-81.486-81.486 0-45.003 36.483-81.486 81.486-81.486 45.003 0 81.485 36.483 81.485 81.486 0 45.003-36.482 81.486-81.485 81.486z"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Circle
        cx={161.112}
        cy={314.037}
        r={82.594}
        transform="rotate(90 161.112 314.037)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Circle
        cx={138.491}
        cy={255.321}
        r={146.918}
        transform="rotate(90 138.491 255.321)"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Path
        d="M185.962 146.75c-40.344 0-73.05-32.705-73.05-73.05 0-40.344 32.706-73.05 73.05-73.05 40.345 0 73.05 32.706 73.05 73.05 0 40.345-32.705 73.05-73.05 73.05z"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
      <Path
        d="M176.639 135.207c-34.215 0-61.951-27.737-61.951-61.951s27.736-61.95 61.951-61.95c34.214 0 61.951 27.736 61.951 61.95s-27.737 61.951-61.951 61.951z"
        stroke="#F9F9F9"
        strokeWidth={1.3}
      />
    </Svg>
  );
};

export default Art;
