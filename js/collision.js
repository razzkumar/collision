class CollisionDetection {
  constructor(data) {
    this.id = data.id;
  }

  init() {
    this.container = document.querySelector(`#${this.id}`);

    this.box1 = new Box(this.container, 200, 100, 20, 30).init();
    this.box2 = new Box(this.container, 100, 100, 200, 300).init();
    console.log(this.box1);
    return this;
  }

  isCollision(rect1, rect2) {
    if (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  addEvent() {
    document.addEventListener("mousemove", (e) => {
      console.log("Eeeee", e);

      this.box1.style.top = e.pageY + "px";
      this.box1.style.left = e.pageX + "px";

      const rect1 = this.box1.getBoundingClientRect();
      const rect2 = this.box2.getBoundingClientRect();

      const isCollide = this.isCollision(rect1, rect2);
      if (isCollide) {
        this.box1.style.backgroundColor = "green";
      } else {
        this.box1.style.backgroundColor = "red";
      }
    });
  }
}
