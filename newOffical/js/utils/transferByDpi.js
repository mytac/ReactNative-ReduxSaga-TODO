import { PixelRatio } from 'react-native';

const dpi = PixelRatio.get();

export default function transfer(styles) {
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    const ks = Object.keys(styles[key]);
    ks.forEach((per) => {
      const obj = styles[key];
      const val = obj[per];
      if (!isNaN(val)) {
        obj[per] = val / dpi;
      }
    });
  });

  return styles;
}
