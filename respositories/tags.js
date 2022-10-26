const { Tag } = require('../models/tag')

module.exports = {
    getAllTags() {
        return Tag.findAll()
    },
    getTags(offset=0, limit=5) {
        return Tag.findAll({
             offset: offset,
              limit: limit
            });
    },
    getTag(id) {
        try {
            const tag = Tag.findOne({where: { id: id }});
            if (tag) {
                return tag;
            }
            return status(404).send('Tag with the specified ID does not exists');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    addTag(tag) {
        const newTag = Tag.build(tag)
        newTag.createdAt = new Date();
        newTag.updatedAt = new Date();
        newTag.save();
    },
    updateTag () {
        try {
            const { id } = req.params;
            const [updated] =  Tag.update(req.body, {where: { id: id }});
            if (updated) {
                const updatedTag =  Tag.findOne({ where: { id: id } });
                return res.status(200).json({ tag: updatedTag });
            }
            throw new Error('Tag not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    deleteTag(id) {
        Tag.destroy({where: { id: id}})
    },
}