import { useState } from "react";
import { TextSegmenter } from "react-segmenter";
import "./styles.css";

const target = "坊主がびょうぶに上手に坊主の絵を書いた";

export default function App() {
  const [ratio, setRatio] = useState(100);

  return (
    <div className="App">
      <div className="tool">
        <label>表示幅(%)</label>
        <input
          type="range"
          min={10}
          max={100}
          value={ratio}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRatio(Number(e.target.value))
          }
        />
      </div>
      <div className="wrapper" style={{ width: `${ratio}%` }}>
        <p>TextSegmenter なし</p>
        <h2>{target}</h2>
      </div>
      <div className="wrapper" style={{ width: `${ratio}%` }}>
        <p>TextSegmgneter あり</p>
        <h2>
          <TextSegmenter>{target}</TextSegmenter>
        </h2>
      </div>
    </div>
  );
}

