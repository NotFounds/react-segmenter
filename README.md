# react-segmenter

[![NPM](https://img.shields.io/npm/v/react-segmenter.svg)](https://www.npmjs.com/package/react-segmenter)

[README-ja.md - 日本語)](/README-ja.md)

---

**react-segmenter** is a library that provides a React component for improving the line breaks of Japanese text in a browser. By using ECMA402's [`Intl.Segmenter`](https://github.com/tc39/proposal-intl-segmenter), it properly segments Japanese text and informs the browser of possible line break points, achieving comfortable readability. It is particularly effective for cases with narrow screen widths, such as mobile devices, and when creating responsive UIs.


## Installation

```bash
npm install react-segmenter

# or

yarn add react-segmenter
```


## Usage

```tsx
import React from 'react';
import { TextSegmenter } from 'react-segmenter';

const App = () => {
  return (
    <TextSegmenter>Insert Japanese text that should be broken into lines here.</TextSegmenter>
  );
};
```


## Notes

- This library is primarily intended for controlling line breaks in Japanese text. For English text, it is recommended to change the CSS and leave it to the browser.
- Since the implementation of Intl.Segmenter may vary depending on the processing system, different segmentation results may be obtained. Be aware of this when using the library.
- Some browsers may not support Intl.Segmenter. In such cases, be cautious as there may be issues when using this library.


## License

MIT © [NotFounds (Iori IKEDA)](https://github.com/NotFounds)


## References

[Intl.Segmenter で和文の改行をいい感じにしてみる(Japanese)](https://zenn.dev/notfounds/articles/58c465d4029dc1)
