// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


// Categories have many Products  // might want to use product_name instead here

Category.hasMany(Product, {
  foreignKey: 'product_id',
});

// Products belongToMany Tags (through ProductTag) 

Product.belongsToMany(Tag, { through: ProductTag});

Tag.belongsToMany(Product, { through: ProductTag});





// Tags belongToMany Products (through ProductTag)




// Product.belongsToMany(Tag, {
//   foreignKey: 'product_id',
// });



// Tag.belongToMany(Product, {
//   foreignKey: 'product_tag',
// });



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
