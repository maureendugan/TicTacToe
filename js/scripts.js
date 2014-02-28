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
  all: [],
  create: function(x,y) {
    var spaceInstance = Object.create(Space);
    spaceInstance.initialize(x,y);
    Space.all.push(spaceInstance);
    return spaceInstance;
  }, 
  initialize: function(x,y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
   claim: function(playerObject) {
    this.markedBy = playerObject;
  },
  find: function(x,y){
    if (this.xCoordinate === x && this.yCoordinate === y) {
      return this;
    }
  }
};
var Board = {
  create: function() {
    var board = Object.create(Board);
    board.initialize();
    return board;
  },
   initialize: function() {
     for (var x=1; x<=3; x++) {
        for (var y=1; y<=3; y++) {
         Space.create(x,y);
        }
      } 
   },
   testForWin: function() {
//write a test that will at least compare the x coordinates of the spaces claimed by TestPlayer
you need to use:
Space.all[i].markedBy.name find where the name is the same and start comparing
    return true;
   }
};


