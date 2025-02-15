require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Home', sortOrder: 10},
    {name: 'Jordans', sortOrder: 20},
    {name: 'Yeezys', sortOrder: 30},
    {name: 'Nike', sortOrder: 40},
    {name: 'New Balance', sortOrder: 50},
    {name: 'Adidas', sortOrder: 60},
    {name: 'Grails', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Nike Yeezy Red October', emoji: '/images/grails/redoctober.jpg', category: categories[0], tags: ['nike', 'yeezy', 'red october'], price: 14950},
    {name: 'Jordan 3 Musilin', emoji: '/images/jordans/musilin.jpg', category: categories[0], tags: ['jordan', 'jordan 3', 'musilin'],price: 209},
    {name: 'Nike Dunk Low Panda', emoji: '/images/nike/panda.jpg', category: categories[0], tags: ['nike', 'panda', 'dunk'], price: 110},
    {name: 'Jordan 1 Chicago', emoji: '/images/jordans/chicago.jpg', category: categories[1], tags: ['jordan', 'jordan 1', 'chicago'], price: 495},
    {name: 'Jordan 3 Musilin', emoji: '/images/jordans/musilin.jpg', category: categories[1], tags: [], price: 209},
    {name: 'Jordan 4 Black Cement', emoji: '/images/jordans/cement.jpg', category: categories[1], tags: ['jordan', 'jordan 4', 'black cement'], price: 495},
    {name: 'Yeezy 350 V2 Carbon', emoji: '/images/yeezys/carbon.jpg', category: categories[2], tags: ['yeezy', 'adidas', 'carbon'], price: 345},
    {name: 'Yeezy 350 V2 Friday', emoji: '/images/yeezys/blackfriday.jpg', category: categories[2], tags: ['yeezy', 'adidas', 'friday'], price: 580},
    {name: 'Yeezy 350 V2 Cream', emoji: '/images/yeezys/cream.jpg', category: categories[2], tags: ['yeezy', 'adidas', 'cream'], price: 395},
    {name: 'Nike Dunk Low Coconut Milk', emoji: '/images/nike/coconut.jpg', category: categories[3], tags: ['nike', 'dunk', 'coconut milk'], price: 116},
    {name: 'Nike Dunk Low Panda', emoji: '/images/nike/panda.jpg', category: categories[3], tags: [], price: 110},
    {name: 'Nike Kobe 6 Concord', emoji: '/images/nike/concord.jpg', category: categories[3], tags: ['nike', 'kobe', 'concord', 'basketball'], price: 1333},
    {name: 'Nike Kobe 6 Grinch', emoji: '/images/nike/grinch.jpg', category: categories[3], tags: ['nike', 'kobe', 'concord', 'basketball'], price: 875},
    {name: 'New Balance 550 White/Grey', emoji: '/images/newbalance/whitegrey.jpg', category: categories[4], tags: ['new balance', '550'], price: 110},
    {name: 'New Balance 550 Nightwatch', emoji: '/images/newbalance/nightwatch.jpg', category: categories[4], tags: ['new balance', '550', 'nightwatch'], price: 120},
    {name: 'New Balance 550 Timberwolf', emoji: '/images/newbalance/timberwolf.jpg', category: categories[4], tags: ['new balance', '550', 'timberwolf'], price: 105},
    {name: 'Adidas Samba Almost Blue', emoji: '/images/adidas/almostblue.jpg', category: categories[5], tags: ['adidas', 'samba'], price: 186},
    {name: 'Adidas Samba Bliss Orange', emoji: '/images/adidas/blissorange.jpg', category: categories[5], tags: ['adidas', 'samba'], price: 169},
    {name: 'Jordan 1 Fragment High', emoji: '/images/grails/fragment.jpg', category: categories[6], tags: ['jordan', 'jordan 1', 'fragment', 'travis scott'], price: 1370},
    {name: 'Off-White Chicago 1', emoji: '/images/grails/offwhite.jpg', category: categories[6], tags: ['jordan', 'jordan 1', 'off white', 'chicago'], price: 4959},
    {name: 'Nike Yeezy Red October', emoji: '/images/grails/redoctober.jpg', category: categories[6], tags: [], price: 14950},
  ]);

  console.log(items)

  process.exit();

})();