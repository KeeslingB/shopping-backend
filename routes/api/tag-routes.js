const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// The `/api/tags` endpoint


// find all tags

router.get('/', async (req, res) => {
  try {
    const productData = await Tag.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data -?
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
    });
    res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
  }
});


// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => {
      res.json(err);
    });
});



// update a tag's name by its `id` value

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.body.id,
      }
    }
  )
  .then((updatedTag) => {
    res.json(updatedTag);
  })
  .catch((err) => res.json(err));
});


// delete a tag by id

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
