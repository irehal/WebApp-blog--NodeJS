const { Article } = require('../models/article')

module.exports = {
    getAllArticles() {
        return Article.findAll()
    },
    getArticles(offset=0, limit=10) {
        return Article.findAll({
             offset: offset,
              limit: limit
            });
    },
    getArticle(id) {
        try {
            const article = Article.findOne({where: { id: id }});
            if (article) {
                return article;
            }
            return status(404).send('Article with the specified ID does not exists');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    getArticleByUserId(UserId) {
        try {
            const article = Article.findAll({where: { UserId: UserId }});
            if (article) {
                return article;
            }
            return status(404).send('Theres is no Article published by this User');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    addArticle(article) {
        const newArticle = Article.build(article)
        newArticle.createdAt = new Date();
        newArticle.updatedAt = new Date();
        newArticle.save();
    },
    updateArticle () {
        try {
            const { id } = req.params;
            const [updated] =  Article.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedArticle =  Article.findOne({ where: { id: id } });
                return res.status(200).json({ article: updatedArticle });
            }
            throw new Error('Article not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    deleteArticle(id) {
        Article.destroy({where: { id: id}})
    },
}