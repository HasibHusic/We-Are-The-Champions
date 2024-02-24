
let commentsFromName = [];
let commentsToName = [];
let comments = [];

let publishBtn = document.getElementById("submitBtn")
    publishBtn.addEventListener("click", handleClick);

let toPerson = document.getElementById("to").value
let fromPerson = document.getElementById("from").value
let personsComments = document.getElementById("commentBox").value
let collectedComments = document.getElementById("submittedComments")

function handleClick() {
    commentsFromName.push(fromPerson);
    commentsToName.push(toPerson);
    comments.push(personsComments);

    let commentsHTML = "<ul>";

    for (let i = 0; i < comments.length; i++) {
        commentsHTML += 
        `<li>
        ${commentsToName[i]} 
       <br>
       <br>
           ${comments[i]}
       <br>
       <br>
       from,
       <br>
       ${commentsFromName[i]}
       </li>
       `
    }

    commentsHTML += "</ul>"
    collectedComments.innerHTML = commentsHTML;

    console.log(commentsFromName)
    console.log(commentsToName)
    console.log(comments)
}

handleClick()
