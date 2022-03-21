const CategoryRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  store(request, response) {
    const { name } = request.body;

    if (!name) {
      response.status(400).json({ error: 'field name cannot be blank' });
    }

    const category = CategoryRepository.create({ name });

    response.json(category);
  }
}

module.exports = new CategoryController();
