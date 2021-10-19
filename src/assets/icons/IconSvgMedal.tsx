import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import React from 'react';
import {IIcon} from '../../base/types/BaseTypes';

export const IconSvgMedal = ({size, color}: IIcon) => {
  return (
    <Svg width={62} height={65} fill="none">
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.3 35.09l-3.69 6.393c-.327.566.136 1.259.788 1.3 1.122.072 2.06.324 2.812.759l.024.014c.553.327 1.112.94 1.676 1.84.347.553 1.158.57 1.485.004l3.69-6.392-6.785-3.917z"
          fill="url(#prefix__paint0_linear_5:12)"
        />
      </G>
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.7 35.09l3.69 6.393c.327.566-.136 1.259-.788 1.3-1.122.072-2.06.324-2.812.759l-.024.014c-.553.327-1.112.94-1.676 1.84-.347.553-1.158.57-1.485.004l-3.69-6.392 6.785-3.917z"
          fill="url(#prefix__paint1_linear_5:12)"
        />
      </G>
      <G>
        <Path
          d="M44.5 29.364a13.544 13.544 0 01-.581 3.918 13.418 13.418 0 01-1.34 3.022 13.355 13.355 0 01-1.576 2.126 13.349 13.349 0 01-1.961 1.777 13.525 13.525 0 01-4.762 2.252 13.347 13.347 0 01-1.957.34 13.383 13.383 0 01-2.646 0 13.459 13.459 0 01-4.449-1.231 13.639 13.639 0 01-2.27-1.361A13.499 13.499 0 1144.5 29.364z"
          fill="url(#prefix__paint2_linear_5:12)"
        />
      </G>
      <Path
        d="M39.59 29.364a8.593 8.593 0 01-7.33 8.498 8.638 8.638 0 01-2.936-.073 8.757 8.757 0 01-1.612-.488 8.486 8.486 0 01-1.485-.794 8.511 8.511 0 01-1.592-1.374 8.446 8.446 0 01-1.004-1.353 8.705 8.705 0 01-.72-1.522 8.518 8.518 0 01-.492-2.473 8.593 8.593 0 0114.656-6.496 8.729 8.729 0 011.068 1.302 8.615 8.615 0 011.355 3.512 8.658 8.658 0 01.093 1.26z"
        fill="#fff"
        fillOpacity={0.4}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_5:12"
          x1={25.693}
          y1={37.05}
          x2={21.58}
          y2={44.172}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C58AFF" />
          <Stop offset={1} stopColor="#992FFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_5:12"
          x1={36.307}
          y1={37.05}
          x2={40.42}
          y2={44.172}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C58AFF" />
          <Stop offset={1} stopColor="#992FFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear_5:12"
          x1={31}
          y1={15.864}
          x2={31}
          y2={42.864}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFF38A" />
          <Stop offset={1} stopColor="#FFCA42" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
