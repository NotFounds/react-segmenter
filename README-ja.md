# react-segmenter

[![NPM](https://img.shields.io/npm/v/react-segmenter.svg)](https://www.npmjs.com/package/react-segmenter)

[README.md - English](/README.md)

---

**react-segmenter** は、ブラウザ上で和文の改行をより読みやすくするための React コンポーネントを提供するライブラリです。ECMA402 の [`Intl.Segmenter`](https://github.com/tc39/proposal-intl-segmenter) を使用して和文を適切に分かち書きし、ブラウザに改行可能箇所を教えることで快適な読みやすさを実現します。特に、モバイル端末のような画面幅が狭い場合やレスポンシブUIを作る上で有効です。


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
    <TextSegmenter>ここに改行されるべき日本語の文章を入れてください。</TextSegmenter>
  );
};
```


## Notes

- このライブラリは、主に日本語の改行位置制御を目的としています。英語の場合は、CSS を変更し、ブラウザに任せることを推奨します。
- Intl.Segmenter の実装は、処理系によって異なる可能性があるため、異なる分割結果が得られることがあります。この点に注意して使用してください。
- ブラウザによっては、Intl.Segmenter がサポートされていない場合があります。その場合は、当ライブラリを使用する際に問題が発生する可能性があるため注意が必要です。


## License

MIT © [NotFounds (Iori IKEDA)](https://github.com/NotFounds)


## References

[Intl.Segmenter で和文の改行をいい感じにしてみる](https://zenn.dev/notfounds/articles/58c465d4029dc1)
