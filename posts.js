const express = require('express')
const router =express.Router()
const post=require('../models/post');


router.get('/', async(req,res)=>{
    try {
        const posts= await post.find();
        res.send(posts)
    } catch (err) {
        res.json({message:err});
    }
 });

router.post('/', async(req,res)=>{

    const pos = new post({
        title: req.body.title,
        description: req.body.description
    });
   try{
    const savedpost= await pos.save()
    res.json(savedpost)
   }
    catch(err){
        res.json({message:err});
    }    
});

//specific post

router.get('/:postId',async (req,res)=>{
    try {
        const posts_id= post.findById(req.params.postId);
        console.log(posts_id)
        res.send(posts_id);
    } catch (err) {
        res.json({message:err});

    }
})

 module.exports = router;

 //Delete a specific post

 router.delete('/:postId', async(req,res) => {
    try {
        const removedpost=post.remove({_id: req.params.postId})
        console.log(removedpost)
        res.json(removedpost)
    } catch (err) {
        res.json({message:err});
    }
 })


 //Update a post 
                        
 router.patch('/:postId', async(req,res) =>{
    try {
       const updatedpost= post.updateOne({_id: req.params.postId},{$set : {title: req.body.title} });
        res.send(updatedpost)
    } catch (err) {
        res.json({message:err});
    }
 })