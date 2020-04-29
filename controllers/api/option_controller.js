const Option = require('../../models/options');

//To delete vote
module.exports.delete = async function(req,res){

    try{
        let option = await Option.findById(req.params.id);
        if(option.votes != 0){
            return res.json(500,{
                message:'Cannot delete...Option have votes'
            });
        }
         //await Option.remove({_id:req.params.id});
         await Option.deleteOne(option);
        return res.json(200,{
            message: 'Option Deleted'
        });
        }catch(err){
            console.log(err);
            return res.json(500,{
                message:'Option not found'
            })
    }

}

// To increment vote
module.exports.addVote = function(req,res){
    
     Option.updateOne({_id:req.params.id}
        ,{
            $inc:{
                votes:1
            }
        },function(err,result){
            if(err){
                return res.json(404,{
                    message:'Invalid Id'
                })
            }

            return res.json(200,{
                message:'Updated Successfully'
            })
        })
}