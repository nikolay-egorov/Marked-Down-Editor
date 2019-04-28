const express = require('express')
const router = express.Router()
const Post = require('../models/post-model')


router.post('/posts', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        postTime: req.body.postTime
    })
    post.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Пост с ID_${data._id} успешно сохранен!`
            })
        }
    })
})


router.get('/posts', (req, res) => {
    Post.find({}, 'title description postTime', (err, posts) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({ posts: posts })
        }
    }).sort({ _id: -1 })
})


router.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title description postTime', (err, post) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(post)
        }
    })
})

router.put('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title description postTime', (err, post) => {
        if (err) {
            console.log(err)
        } else {
            if (req.body.title) {
                post.title = req.body.title
            }
            if (req.body.description) {
                post.description = req.body.description
            }
            if (req.body.postTime) {
                post.postTime = req.body.postTime
                console.log("REQUESTED timeStamp: " + req.body.postTime  )

            }
            post.save(err => {
                if (err) {
                    res.sendStatus(500)
                    console.log(err)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

router.delete('/posts/:id', (req, res) => {
    Post.remove({ _id: req.params.id }, err => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router