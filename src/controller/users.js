const userModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModel.getAllUsers();
        res.json({
            message:'Get all users successfully',
            data:data
        }); 
    } catch (error) {
        res.status(500).json({
        message:'Server error',
        serverMessage: error.message
        });   
    }
}

const createUser = async (req, res) => {
    const {body} = req;
    try {
        await userModel.createNewUsers(body)
        res.json({
            message:'Create user successfully',
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            serverMessage: error.message
        })   
    }
    
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await userModel.updateUsers(body, idUser)
        res.json({
            message:'Update user successfully',
            data:{
                id: idUser,
                ...body,
            },
        })
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            serverMessage: error.message
        })   
    }
};

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await userModel.deleteUsers(idUser)
        res.json({
            message:'Delete user successfully',
            data : null
        });
    } catch (error) {
        res.status(500).json({
            message:'Server error',
            serverMessage: error.message
        })   
    }
    
};


module.exports = {
    createUser, 
    getAllUsers,
    updateUser,
    deleteUser
}