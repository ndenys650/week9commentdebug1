// no "function" keyword was used to identify and create the function

function todoList() {
    // no "var" keyword before username
    var username = document.getElementById("username").value;
    var comment = document.getElementById("comment").value;

    var userNameText = document.createTextNode("Username: " + username)
        // no "var" keyword before commentText
    var commentText = document.createTextNode("Comment: " + comment)

    // camelCase createElement
    var newListItem = document.createElement("LI")
    newListItem.className = "list-group-item"
    var newUserName = document.createElement("H3")
    newUserName.appendChild(userNameText)
    var newComment = document.createElement("P")
    newComment.appendChild(commentText)

    newListItem.appendChild(newUserName)
    newListItem.appendChild(newComment)
    document.getElementById("commentList").appendChild(newListItem)
}