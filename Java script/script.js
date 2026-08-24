const userIdInput = document.getElementById("userId");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const userDetails = document.getElementById("userDetails");

const errorMessage = document.getElementById("error");

searchBtn.addEventListener("click", function () {

    const userId = userIdInput.value;

    if (userId === "") {
        error.textContent = "Please enter a User ID";
        return;
    }

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
        if(!response.ok){
            throw new Error("user not found");
        }
        return response.json();
    })
    .then(data => {

    userDetails.innerHTML = `
        <h2>${data.name}</h2>
        <p>Username: ${data.username}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
    `;

})
    .catch(error => {
        errorMessage.textContent = `User ID ${userId} is not in the records`;
    });
});

