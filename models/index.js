// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  // Define the table needed to store the foreign keys
  foreignKey: 'category_id',
  // Define an alias for when data is retrieved
  as: 'product_category'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: ProductTag, 
    unique: false
  },
  as: 'category_products'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
});
// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
