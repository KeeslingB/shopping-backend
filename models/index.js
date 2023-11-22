// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
  // through: Category,
});


// Categories have many Products  // might want to use product_name instead here

Category.hasMany(Product, {
  // through: Category,
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
  // onUpdate: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag) 

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_id'
});

// // Tags belongToMany Products (through ProductTag)

// Tag.belongsToMany(Product, { through: ProductTag});

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
