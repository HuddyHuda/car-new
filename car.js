var Car = function(color, convertible) {
  this.speed = 0;
  this.colour = color;
  this.convertible = convertible;
}

Car.prototype.accelerate = function(num) {
  this.speed += num
}

Car.prototype.setColor = function(color) {
  this.color = newColor
}

Car.prototype.decelerate = function(rate) {
  var oldSpeed = this.speed;
  if (this.speed >= rate) {
    this.speed = this.speed - rate;
  } else {
    this.speed = 0;
  }
  return "Old Speed: " + oldSpeed + "\nnewSpeed: " + this.speed;
}

Car.prototype.stop = function() {
  this.speed = 0;
  return 'Car has stopped now and current speed is: ' + this.speed;
}

module.exports = Car;
