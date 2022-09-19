import React from "react";

const Span = React.forwardRef<HTMLSpanElement>((props, ref) => {
  return <span ref={ref} tabIndex={0} {...props} />;
});

export default Span;
