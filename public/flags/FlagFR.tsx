// src/components/icons/FlagFR.tsx
import React from 'react';

type Props = {
  size?: number; // largeur en px
};

export default function FlagFR({ size = 20 }: Props) {
  const height = Math.round(size * 3 / 4); // ratio 4:3

  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
  <title>React Logo</title>
  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
  <g stroke="#61dafb" stroke-width="1" fill="none">
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </g>
</svg>
  );
}
