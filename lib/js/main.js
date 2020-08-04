const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let db = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    let value = {
        Name: username,
        Message: message
    }
    db.push(value);
}

// Set database "child_added" event listener here
db.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    let row = rowData.val();
    console.log(row);
    let messageContainer = document.querySelector(".allMessages");
    let newP = document.createElement("p");
    newP.innerText = row.Name + ": " + row.Message;
    messageContainer.appendChild(newP)
}