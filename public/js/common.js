const BASE_URL = "https://todoappp-priyansh.herokuapp.com"
getUserData = () => {
    try{
        fetch(`${BASE_URL}/getdata`)
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
    try{
        let requestBody = {
            "taskId": taskId
        }
        fetch(`${BASE_URL}/taskdelete`, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(requestBody)
        }).then(reponse => {
            return reponse.json()
        }).then(result => {
            if(result.code !== 1){
                console.log(result)
                alert("Somethind went worng in delete item")
                return
            }
            window.location.reload()
        }).catch(error => {
            console.log(error)
            alert("Somethind went worng in delete item")
        })
    } catch(error){
        console.log(error)
    }
}

logoutHandler = () => {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var getCookieValue = cookie.indexOf("=");
        var name = getCookieValue > -1 ? cookie.substr(0, getCookieValue) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 2020 00:00:00 GMT";
    }
    window.location.href = BASE_URL
}
window.onload = getUserData()