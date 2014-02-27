describe('Player', function() {
  describe('create', function() {
    it('creates a new instance of a player', function () {
      var testPlayer = Player.create();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
    it('creates a player with a name', function() {
      var testPlayer = Player.create('Tony');
      testPlayer.name.should.equal('Tony');
    })
  });
  describe('initialize', function() {
    it('Gives a name to the player', function () {
      var testPlayer = Player.create(Player);
      testPlayer.initialize('X');
      testPlayer.name.should.equal('X');
    });
  });
});
describe('Space', function(){
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
  });
  describe('claim', function(){
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
      Space.find(3, 2).should.equal(Space);
    });
  });
});
