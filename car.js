var Car = function(color, convertible) {
  this.speed = 0;
  this.colour = color;
  this.convertible = convertible;
}

Car.prototype.accelerate = function (num){
this.speed += num
}

Car.prototype.setColor= function (color){
  this.color = newColor
}

module.exports = Car;
