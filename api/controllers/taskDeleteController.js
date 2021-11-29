const taskModal = require("../../modal/userData")

const taskDelete = async (req, res) => {
    try{
        const findUser = req.cookies.ID
        const getTaskID = req.body.id
        console.log(req.body)
        const getUserData = await taskModal.findOne({userID: findUser})
        const deleteTask = await getUserData.todos.findOneAndDelete({"_id": getTaskID})
        console.log(deleteTask)
    }catch(error){
        console.log(error)
        res.send("Sorry, Something went wrong in delete process")
    }
}

module.exports = taskDelete