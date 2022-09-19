import React, { useState } from "react";
import { Slider, Track, Range, Thumb } from "../src";

const MIN = 0;
const MAX = 100;

const App = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div style={{ width: 400 }}>
      <Slider
        max={MAX}
        min={MIN}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        value={value}
      >
        <Track>
          <Range />
        </Track>

        <Thumb />
      </Slider>
      <br />
      {value}
    </div>
  );
};

export default App;
