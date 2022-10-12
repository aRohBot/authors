const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.post('/api/authors', AuthorController.addAuthor)
    app.get('/api/authors/:id', AuthorController.getAuthorById)
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthorById)
}