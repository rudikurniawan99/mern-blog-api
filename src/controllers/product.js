exports.getProducts = (req, res, next) => {
  res.json({
    message: 'Success get all product data', 
    data: [
      {
        id: 1,
        name: 'Lampu Kamar Model Keren',
        material: 'Kuningan',
        price: 2000000
      },
      {
        id: 2,
        name: 'Logo Garuda',
        material: 'Besi',
        price: 4000000
      }
    ]
  })
  next()
}

exports.createProduct = (req, res, next) => {
  res.json({
    name: req.name,
    material: req.material,
    price: req.price
  })
}