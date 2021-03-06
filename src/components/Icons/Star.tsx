import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Star = (props: SvgProps) => {
  return (
    <Svg width={12} height={12} fill="none" {...props}>
      <Path
        d="M9.452 7.52a.642.642 0 00-.186.566l.519 2.87a.63.63 0 01-.263.63.642.642 0 01-.682.046l-2.584-1.347a.66.66 0 00-.291-.076h-.158a.47.47 0 00-.158.052l-2.584 1.354a.682.682 0 01-.414.064.648.648 0 01-.52-.741l.52-2.87a.653.653 0 00-.186-.571L.358 5.455a.63.63 0 01-.157-.66.655.655 0 01.519-.437l2.9-.42a.649.649 0 00.512-.356L5.41.963a.607.607 0 01.117-.157l.052-.041a.391.391 0 01.094-.076l.064-.023.099-.041h.245c.22.023.413.154.514.35l1.294 2.607c.093.191.275.324.484.356l2.9.42c.244.035.45.205.53.438.077.234.01.49-.169.659L9.452 7.52z"
        fill="#FFC945"
      />
    </Svg>
  );
};

export default Star;
