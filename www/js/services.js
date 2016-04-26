angular.module('starter.services', [])

.factory('Categories', function(){
  var categories = [
                  { id: 0,
                    name:'Banking Service & ATM',
                    icon:'fa fa-credit-card',
                    face: 'img/'},
                  { id: 1,
                    name:'Books & Gift',
                    icon:'fa fa-book',
                    face: 'img/'},
                  {
                    id: 2,
                    name:'Entertainment',
                    icon:'fa fa-gamepad',
                    face: 'img/'},
                  {
                    id: 3,
                    name:'Restaurants and Bars',
                    icon:'fa fa-cutlery',
                    face: 'img/'},
                  {
                    id: 4,
                    name:'Men\'s Fashion',
                    icon:'fa fa-male',
                    face: 'img/'},
                  {
                    id: 5,
                    name:'Women\'s Fashion',
                    icon:'fa fa-female',
                    face: 'img/'},
                  {
                    id: 6,
                    name:'Kid\'s Fashion',
                    icon:'fa fa-child',
                    face: 'img/'},
                  {
                    id: 7,
                    name:'Health & Beauty',
                    icon:'fa fa-heartbeat',
                    face: 'img/'},
                  {
                    id: 8,
                    name:'Jewellery and Watches',
                    icon:'fa fa-diamond',
                    face: 'img/'},
                  {
                    id: 9,
                    name:'Sports & Fitness',
                    icon:'fa fa-soccer-ball-o',
                    face: 'img/'},
                  {
                    id: 10,
                    name:'Tech',
                    icon:'fa fa-laptop',
                    face: 'img/'},
                  {
                    id: 11,
                    name:'Eyecare & Optical',
                    icon:'fa fa-eye',
                    face: 'img/'}];

                  //'Furniture',
                  //'Salon',
                  //'Shoes',

  var categories2 = [
                  { id: 0,
                    cat_id: 0,
                    name:'Subway',
                    desc:'Discover better-for-you sub sandwiches.',
                    img: 'img/Subway_logo.svg'},
                  { id: 1,
                    cat_id: 0,
                    name:'KFC',
                    desc:'Supreme fried chicken only KSL City Mall JB.',
                    img: 'img/kfc-man-logo.gif'},
                  {
                    id: 2,
                    cat_id: 0,
                    name:'Kinsahi Japanese Restaurant',
                    desc:'For a taste that is decidedly Japanese.',
                    img: 'img/Kinsahi-logo.png'}];

  return {
    all_cat: function() {
      return categories;
    },
    get: function(categoryId) {
      return categories2;
    },
    get_detail: function(categoryId) {
      for (var i = 0; i < categories2.length; i++) {
        if (categories2[i].id === parseInt(categoryId)) {
          return categories2[i];
        }
      }
      return null;
    }
  };
})

.factory('Services', function(){
  var services = [
                  { id: 0,
                    name:'Legoland Hotel Package Malaysia',
                    desc:'Only 20 Minutes From Here. Tickets and Transportation Available. Click here to book now',
                    img: 'img/service1.jpg'},
                  { id: 1,
                    name:'Hello Kitty Hotel Package Malaysia',
                    desc:'Hello Kitty Town & Little Big Club Return Transfer from the hotel. Click Here To Book Now.',
                    img: 'img/service2.jpg'},
                  {
                    id: 2,
                    name:'Universal Studio Singapore Package',
                    desc:'2 Day 1 Night Universal Studio Singapore Package',
                    img: 'img/service3.jpg'},
                  {
                    id: 3,
                    name:'DINOSAUR ALIVE FREE FOR HOTEL ROOM GUEST',
                    desc:'Dinosaur Alive Free Entrance For Hotel Room Guests',
                    img: 'img/service4.jpg'},
                  {
                    id: 4,
                    name:'Long Term stay at D\'esplanade Residences Serviced Aparment',
                    desc:'Long term stay in new fully furnished apartments connected to the KSL City Mall. Book here',
                    img: 'img/service5.jpg'},
                  {
                    id: 5,
                    name:'KSL Prestige Card',
                    desc:'Call 607-3006380 for more information',
                    img: 'img/service6.jpg'}];

  return {
    all_cat: function() {
      return services;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
