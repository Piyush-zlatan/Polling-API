const Question = require('../../models/question');
const Option = require('../../models/options');

//funtion to create question
module.exports.create = async function(req,res){
    console.log(req.body)
    try{
        let question = await Question.create({
            title:req.body.title
        });

        return res.json(200,{
            message:'Question Created..!!',
            data:{
                question:question
            }
        })

    }catch(err){
        console.log('err',err);
        return res.json(500,{
            message:'Internal Server Error'
        })
    }

}
// Function to create options
module.exports.createOptions = async function(req,res){
   
    try{
        const newOption = req.body;
        newOption.link = 'http://localhost:8000/options/'+ req.params.id + '/add_vote';
        console.log(newOption);
        let options = await Option.create({
            text : newOption.text,
            votes: newOption.votes,
            link_to_votes: newOption.link
        })
        let question = await Question.findById(req.params.id);
        question.options.push(options);
        question.save();
        return res.json(200,{
            message:'Done',
            data:question
        })

    }catch(err){
        console.log('err',err);
        return res.json(500,{
            message:'Internal Server Error'
        })
    }
}
// funtion to delete question
module.exports.delete = async function(req,res){
    try{
        let question = await Question.findById(req.params.id);
        console.log(question.options);
        question.remove();
        return res.json(200,{
            message:'Deleted'
        })
    }catch(err){
        console.log(err)
        return res.json(500,{
            message:'Internal server error'
        })
    }
}
// funtion to view question
module.exports.view = async function(req,res){
    try{
        let question = await Question.findById(req.params.id).populate({
            path:'options'
        }).exec();
        return res.json(200,{
            message: ' Question',
            data:question
        })
    }catch(err){
        return res.json(404,{
            message:'Invalid Id'
        })
    }
}