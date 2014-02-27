var Player = {
  create: function(name) {
    var player = Object.create(Player);
    player.initialize(name);
    return player;
  },
  initialize: function(name) {
    this.name = name;
  }
};

var Space = {
  
  create: function(x,y) {
  var space = Object.create(Space);
  this.xCoordinate = x;
  this.yCoordinate = y;
  return space;
 },
 
 claim: function(playerObject) {
  this.markedBy = playerObject;
 },
 
 find: function(x,y){
  if (Space.xCoordinate === x && Space.yCoordinate === y) {
    return Space;
  }

 }


}
