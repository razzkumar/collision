class Box {
  constructor(parentElm, height, width, x, y) {
    this.height = height;
    this.width = width;
    this.parentElm = parentElm;
    this.x = x;
    this.y = y;
  }

  init() {
    this.box = document.createElement("div");

    const boxStyle = {
      height: `${this.height}px`,
      width: `${this.width}px`,
      position: "absolute",
      top: this.x + "px",
      left: this.y + "px",
      backgroundColor: "red",
    };

    mapStyle(this.box, boxStyle);

    this.parentElm && this.parentElm.appendChild(this.box);

    return this.box;
  }
}
