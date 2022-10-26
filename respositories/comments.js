const { Comment } = require('../models/comment')

module.exports = {
    getAllComments() {
        return Comment.findAll()
    },
    getComments(offset=0, limit=10) {
        return Comment.findAll({
             offset: offset,
              limit: limit
            });
    },
    getComment(id) {
        try {
            const comment = Comment.findOne({where: { id: id }});
            if (comment) {
                return comment;
            }
            return status(404).send('Comment with the specified ID does not exists');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    getCommentByUserId(UserId) {
        try {
            const comment = Comment.findAll({where: { UserId: UserId }});
            if (comment) {
                return comment;
            }
            return status(404).send('Theres is no Comment published by this User');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    getCommentByArticleId(ArticleId) {
        try {
            const comment = Comment.findAll({where: { ArticleId: ArticleId }});
            if (comment) {
                return comment;
            }
            return status(404).send('Theres is no Comment published by this User');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    addComment(comment) {
        const newComment = Comment.build(comment)
        newComment.createdAt = new Date();
        newComment.updatedAt = new Date();
        newComment.save();
    },
    updateComment() {
        try {
            const { id } = req.params;
            const [updated] =  Comment.update(req.body, {where: { id: id }});
            if (updated) {
                const updatedComment =  Comment.findOne({ where: { id: id } });
                return res.status(200).json({ comment: updatedComment });
            }
            throw new Error('Comment not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    deleteComment(id) {
        Comment.destroy({where: { id: id}})
    },
}