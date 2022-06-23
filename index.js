const { Response } = require("node-fetch")

  function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email : userEmail
        })
    })
    .then((resp) => resp.json())
    .then((data) => newContact(data.id))
    .catch((response) => {
        document.body.innerHTML = response
        document.body.append()
    })
  }
function newContact(userID) {
   document.getElementsByTagName("body")[0].innerHTML = userID
   document.body.append()
  }

submitData()