getUserData = () => {
    try{
        fetch('http://localhost:3000/getdata')
        .then(function(response){
            return response.json()
        }).then(data => {
            let parentElement = document.getElementsByClassName("tasksSection")
            for(let i = 0; i < data.todos.length; i++){
                let taskNames
                taskNames = data.todos[i]
                let createTaskElement = document.createElement("P")
                let createDeleteBtn = document.createElement("i")
                let createNode = document.createTextNode(taskNames.task)
                createDeleteBtn.onclick = () => deleteHandler(taskNames._id)
                createTaskElement.appendChild(createNode)
                createTaskElement.appendChild(createDeleteBtn)
                parentElement[0].appendChild(createTaskElement)
            }
        }).catch(error => {
            console.log(error)
        });
    } catch(error){
        console.log(error)
        alert("Soory We can't get your data Because something went wrong")
    }
}

deleteHandler = (taskId) => {
    console.log("taskId", taskId)
}

window.onload = getUserData()