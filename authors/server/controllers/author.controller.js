const { update } = require('../models/author.model')
const Author = require('../models/author.model')

module.exports.getAllAuthors = (req,res) => {
    Author.find({})
        .then(authors => {
            res.json(authors)
        }).catch(err=>{
            res.status(400).json({err})
        })
}

module.exports.addAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json(newAuthor)
        }).catch(err=>{
            console.log(err)
            res.status(400).json({err})
        })
}

module.exports.getAuthorById = (req,res) => {
    Author.findOne({_id:req.params.id})
        .then(author =>{
            console.log(author)
            res.json(author)
        }).catch(err=>{
            res.status(400).json({err})
        })
}

module.exports.updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor =>{
            res.json(updatedAuthor)
        }).catch(err=>{
            res.status(400).json({err})
        })
}

module.exports.deleteAuthorById = (req,res) => {
    Author.deleteOne({_id:req.params.id})
        .then(author =>{
            res.json(author)
        }).catch(err=>{
            res.status(400).json({err})
        })
}