// literal notation
var hotel = ()

hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};

var hotel = {
  name: 'Quay';
  rooms: 40,
  booked: 25,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};
