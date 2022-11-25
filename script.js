const USER_INFO_URL = "https://jsonplaceholder.typicode.com/albums";

function draw(array){
    let listDiv = document.querySelector("#list");
    listDiv.innerHTML = "";

    for(let name of array){
        listDiv.innerHTML += `
            <p onclick="getId(${name.userId})">${name.title}</p>
            <hr>
        `;
    }
};

async function loadUser (selectedUserID) {
    let response = await fetch(USER_INFO_URL);
    let result = await response.json();
    // console.log(result);

    draw(result);
};

loadUser();

function getId(id) {
    localStorage.setItem("id", id);
    window.open("user_info.html");
}