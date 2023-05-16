
import Comment from "../model/comment.js";

export const newComment = async (request, response) =>{
    try{
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json({ msg: 'Comment saved successfully' })
    }catch(error){
            response.status(500).json({ error: error.message })
    }
}

export const getComments = async (request, response) => {
    try{
        const comments = await Comment.find({ postId: request.params.id});

        response.status(200).json(comments);
    }
    catch(error){
        response.status(500).json({ error: error.message })
    }
}

export const deleteComment = async (request, response) => {
    try{
   
    const comment = await Comment.findById(request.params.id);

    if(!comment){
        return response.status(404).json({msg: 'comment not found'});
    }

    else{
    // await post.delete();
    await Comment.findByIdAndDelete(comment._id)

    return response.status(200).json({msg: 'comment deleted successfully'});
    }

        }catch(error){
        response.status(500).json({ error: error.message })

    }
}