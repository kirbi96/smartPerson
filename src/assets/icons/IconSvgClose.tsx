import Svg, {G, Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgClose = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 16} height={size || 16} viewBox="0 0 24 24">
      <G data-name="Layer 2">
        <Path
          d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z"
          fill={color || '#231f20'}
          data-name="close"
        />
      </G>
    </Svg>
  );
};
