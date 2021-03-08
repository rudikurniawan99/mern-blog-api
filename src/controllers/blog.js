exports.createBlog = (req, res, next) => {
  const title = req.body.title
  const body = req.body.body
  const category = req.body.category

  const result = {
    message: 'Successfully create blog',
    data: {
      title: title,
      body: body,
      category: category,
      image: 'image.jpg',
      created_at: '08/04/2021',
      author: {
        id: 1,
        name: 'Rudi Kurniawan'
      }
    }
  }

  res.status(201).json(result)
  next()
}