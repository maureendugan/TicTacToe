beforeEach(function() {
  Board.spaces = [];
  Space.all = [];
});
describe('Player', function() {
  describe('create', function() {
    it('creates a new instance of a player', function () {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
    it('creates a player with a name', function() {
      var testPlayer = Player.create('Tony');
      testPlayer.name.should.equal('Tony');
    });
  });
  describe('initialize', function() {
    it('Gives a name to the player', function () {
      var testPlayer = Player.create(Player);
      testPlayer.initialize('X');
      testPlayer.name.should.equal('X');
    });
  });
});
describe('Space', function() {
  describe('create', function() {
    it('creates a new instance of a space', function () {
      var testSpace = Space.create();
      Space.isPrototypeOf(testSpace).should.equal(true); 
    });

    it('gives the space x and y coordinates', function () {
        var testSpace = Space.create(3, 1);
        testSpace.xCoordinate.should.equal(3);
        testSpace.yCoordinate.should.equal(1);
      });
    it('add any created space to the .all property', function() {
      var testSpace = Space.create(3,4);
      var testSpace2 = Space.create(5,6);
      Space.all.should.eql([testSpace, testSpace2]);
    });
  });
  describe('intitalize', function() {
    it('gives the space x and y coordinates', function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1,2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe('claim', function() {
    it('Lets a player mark a space', function() {
      var testPlayer = Player.create('Tony');
      var testSpace = Space.create(1,2);
      testSpace.claim(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    }); 
  });
  describe('find', function() {
    it('returns the Space if the coordinates match', function() {
      var testSpace = Space.create(3,2);
      testSpace.find(3,2).should.equal(testSpace);
    });
  });
});

describe('Board', function() {
  describe('create', function() {
    it('creates the object Board', function() {
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
    it('creates 9 spaces when created', function() {
      var testBoard = Board.create();
      Space.all.length.should.equal(9);
      Space.all[0].xCoordinate.should.equal(1);
    });
  });
  describe('initialize', function() {
    it('starts a board with 9 spaces', function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      Space.all.length.should.equal(9);
    });
  });
  describe('testForWin', function() {
    it('returns true if the player x has marked 3 spaces in a row', function() {
      var testBoard = Board.create();
      var testPlayer = Player.create("Tony");
      Space.all[3].claim(testPlayer);
      Space.all[4].claim(testPlayer);
      Space.all[5].claim(testPlayer);
      Board.testForWin().should.equal(true);
    });
  });
});
