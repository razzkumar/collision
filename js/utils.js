function mapStyle(elm, style) {
  const keys = Object.keys(style);

  keys.forEach((key) => {
    elm.style[key] = style[key];
  });
}
