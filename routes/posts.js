import express from 'express'

const router = express.Router();
const models = require('../models/index');

router.get('/', async function(req, res, next) {
    try {
        //mengambil semua data
        const posts = await models.posts.findAll({});
        
        if (posts.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': 'Found Data',
                'data': posts
            });
        } else {
            res.json({
                'status': 'EMPTY',
                'messages': 'Data is empty',
                'data': [] 
            });
        }
    } catch (err) {
        res.status(500).json({
            'status': 'ERROR',
            'messages': 'Internal Server Error'
        })
    }
})

router.get('/:id', function(req, res, next) {

})

router.post('/', function(req, res, next) {

})

router.put('/:id', function(req, res, next) {

})

router.delete('/:id', function(req, res, next) {

})

export default router