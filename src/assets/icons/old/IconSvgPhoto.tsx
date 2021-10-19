import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../../base/types/BaseTypes';

export const IconSvgPhoto = ({size, color}: IIcon) => {
  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        d="M3 9.854C3 8.83 3.83 8 4.854 8v0c.702 0 1.344-.397 1.658-1.025l.821-1.642c.11-.22.165-.33.228-.425a2 2 0 011.447-.895C9.122 4 9.245 4 9.491 4h5.018c.246 0 .37 0 .482.013a2 2 0 011.448.895c.063.095.118.205.228.425l.82 1.642A1.854 1.854 0 0019.146 8v0C20.17 8 21 8.83 21 9.854v5.003c0 2.005 0 3.007-.46 3.74a3 3 0 01-.944.943c-.732.46-1.734.46-3.739.46H8.143c-2.005 0-3.007 0-3.74-.46a3 3 0 01-.943-.944C3 17.864 3 16.862 3 14.857V9.854z"
        stroke={color || '#fff'}
        strokeWidth={2}
      />
      <Circle cx={12} cy={13} r={3} stroke={color || '#fff'} strokeWidth={2} />
    </Svg>
  );
};
