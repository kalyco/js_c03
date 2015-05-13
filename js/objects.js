var hotel = {
  name: 'Quay',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    return this.rooms = this.booked;
  }
};

// arrays in an object:

costs = {
  room1 = items[420, 40, 10],
  room2 = items[460, 20, 20];
}

costs.room1.items[0];

// objects in an array:

costs = [
  {accom: 420, food: 40, phone: 10},
  {accom: 440, food: 60, phone: 20},
  {accom: 460, food: 50, phone: 30},
]

costs[2].phone;
