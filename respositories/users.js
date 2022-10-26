const { User } = require('../models/user')

module.exports = {
    getAllUsers() {
        return User.findAll()
    },
    // méthodes à implémenter
    getUsers(offset=0, limit=10) {
        return User.findAll({
             offset: offset,
              limit: limit
            });
    },
    getAdmins() { 
        try {
            const user =  User.findAll({ where: { role : admin } });
            if (user) {
                return user;
            }
            return status(404).send('There is no guest in the table');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    getAuthors() { 
        try {
            const user = User.findAll({ where: { role : author } });
            if (user) {
                return user;
            }
            return status(404).send('There is no author in the table');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    getGuests(){
        try {
            const user = User.findAll({ where: { role : guest } });
            if (user) {
                return user;
            }
            return status(404).send('There is no guest in the table');
        } catch (error) {
            return status(500).send(error.message);
        }
     },
    getUser(id) { 
        try {
            const user = User.findOne({ where: { id : id } });
            if (user) {
                return user;
            }
            return status(404).send('User with the specified ID does not exists');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    getUserByEmail(email) {
        try {
            const user = User.findOne({ where: { email : email } });
            if (user) {
                return user;
            }
            return status(404).send('User with the specified email does not exists');
        } catch (error) {
            return status(500).send(error.message);
        }
    },
    addUser(user) {
        const newUser = User.build(user)
        newUser.createdAt = new Date();
        newUser.updatedAt = new Date();
        newUser.save();
    },
    updateUser() { 
        try {
            const { id } = req.params;
            const [updated] =  User.update(req.body, {where: { id: id } });
            if (updated) {
                const updatedUser =  User.findOne({ where: { id: id } });
                return res.statusatus(200).json({ user: updatedUser });
            }
            throw new Error('User not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    deleteUser(id) {
        User.destroy({where: { id: id}})
      },
    // D'autres méthodes jugées utiles
}
    