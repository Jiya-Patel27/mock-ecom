require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mock_ecom';

const products = [
  { 
    name: 'Vibe Hoodie', 
    price: 799, 
    image: 'https://fromthestreets.in/cdn/shop/files/FTS_Hoodie_Mockup_front_4_1.png?v=1729009033', 
    description: 'Comfortable hoodie.' 
  },
  { 
    name: 'Vibe Cap', 
    price: 299, 
    image: 'https://www.urbanmonkey.com/cdn/shop/files/mint-monkey-cap-ums0001-mint-352799.jpg?v=1739439768&width=1024', 
    description: 'Stylish cap.' 
  },
  { 
    name: 'Vibe T-Shirt', 
    price: 399, 
    image: 'https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/tshirt_hs_men_pat_d48_o.jpg', 
    description: 'Soft cotton tee.' 
  },
  { 
    name: 'Vibe Mug', price: 199, 
    image: 'https://exclusivelane.com/cdn/shop/products/whispers-of-warli-handcrafted-ceramic-tea-_-coffee-mug-300-ml-microwave-safe_1_1024x.jpg?v=1642833997', 
    description: 'Coffee mug.' 
  },
  {
    name: 'Vibe Phone Case', 
    price: 499, 
    image: 'https://printbebo.in/wp-content/uploads/2022/10/62-Men-In-Black-Custom-Name-Phone-Case-scaled.jpg', 
    description: 'Durable case.'
  },
  {
    name: 'Vibe Sticker Pack', price: 99, image: 'https://i.etsystatic.com/24636413/r/il/70244a/3164639890/il_570xN.3164639890_k4ct.jpg', description: 'Sticker pack.'
  },
  {
    name: 'Vibe Tote Bag',
    price: 349,
    image: 'https://www.intelligentchange.com/cdn/shop/products/4X5-WebRes-Intelligent-Change-Tote-Bags-1_301b012d-03b9-4917-96ff-e911c5783d56.jpg?v=1671127106&width=1120',
    description: 'Eco-friendly canvas tote.'
  },
  {
    name: 'Vibe Socks',
    price: 149,
    image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/SD_02_T60_7474B_UT_X_EC_94',
    description: 'Comfy cotton socks.'
  },
  {
    name: 'Vibe Notebook',
    price: 399,
    image: 'https://themagictrunk.co.in/cdn/shop/files/rn-image_picker_lib_temp_77e44e48-6797-4a1a-9432-53af7a8f9f6d.jpg?v=1745749418',
    description: 'Aesthetic ruled notebook.'
  },
  {
    name: 'Vibe Keychain',
    price: 159,
    image: 'https://i.pinimg.com/736x/0b/5d/66/0b5d662b2945ce49831cb4aedb649d76.jpg',
    description: 'Trendy metal keychain.'
  },
  {
    name: 'Vibe Sunglasses',
    price: 699,
    image: 'https://india.ray-ban.com/media/wysiwyg/Rb-M-sunglasses_clp_opti/08_Sunglasses_Page_Hero_Banner_Mobile_-_675x1200px.jpg',
    description: 'UV-protected shades.'
  },
  {
    name: 'Vibe Poster',
    price: 199,
    image: 'https://www.pitsstop.in/cdn/shop/files/weird.jpg?v=1727642519&width=1946',
    description: 'Minimal wall poster.'
  }
];

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected, seeding products...');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seed complete.');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
