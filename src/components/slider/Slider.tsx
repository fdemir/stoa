import React, {
  KeyboardEventHandler,
  ReactNode,
  useContext,
  useRef,
} from "react";

// keeps only positions and widths of the elements

export type SliderProps = {
  value: number;
  // Specifies the minimum value of the slider.
  min: number;
  // Specifies the maximum value of the slider.
  max: number;
  onChange: (value: number) => void;
  children: ReactNode;
  orientation: "horizontal" | "vertical";
};

const KeyDirections = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: 1,
  ArrowDown: -1,
};

const SliderContext = React.createContext<Partial<SliderProps> | null>(null);

const Track: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <span className="track" role="slider">
      {children}
    </span>
  );
};

const Range = () => {
  return <span className="range" role="slider"></span>;
};

const Thumb = () => {
  const { onChange, value } = useContext(SliderContext)!;
  const thumbRef = useRef<HTMLSpanElement>(null);

  const handleKeyPress: KeyboardEventHandler<HTMLSpanElement> = (event) => {
    if (!onChange) return;

    const action = KeyDirections[event.key as keyof typeof KeyDirections];

    if (typeof action == "undefined") return;

    onChange(action > 0 ? value + 1 : value - 1);
  };

  return (
    <span
      role="document"
      tabIndex={0}
      ref={thumbRef}
      onKeyDown={handleKeyPress}
    >
      thumb
    </span>
  );
};

const Slider: React.FC<Partial<SliderProps>> = (props) => {
  return (
    <SliderContext.Provider value={props}>
      <div
        role="slider"
        data-aria-orientation={props.orientation}
        className="slider"
      >
        {props.children}
      </div>
    </SliderContext.Provider>
  );
};

Slider.defaultProps = {
  orientation: "horizontal",
};

export { Track, Thumb, Slider, Range };
