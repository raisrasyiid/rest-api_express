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
     })   
    }
}

const createUser = (req, res) => {
    // console.log(req.body);
    res.json({
        message:'Create user successfully',
        data: req.body
    });
}

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log(id);
    res.json({
        message:'Update user successfully',
        data:req.body,
    })
};

const deleteUser = (req, res) => {
    const {id} = req.params;
    res.json({
        message:'Delete user successfully',
        data : {
            id:id,
            name: "rasyiid",
            address: "bantul, yogyakarta",
            email: "rasyiid@gmail.com"
        }
    });
};


module.exports = {
    createUser, 
    getAllUsers,
    updateUser,
    deleteUser
}