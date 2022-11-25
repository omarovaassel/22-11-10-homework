const userId = +localStorage.getItem("id");

const drawUserInfo = (object) => {
    let infoDiv = document.querySelector("#info");
    infoDiv.innerHTML = `
        <p>User info:</p>
        <p>${object.name}</p>
        <p>${object.phone}</p>
        <p>${object.website}</p>
        <p>${object.address.city}</p>
   `;
};

async function loadUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/'+localStorage.getItem("id"));
    let result = await response.json();
    console.log(result);

    drawUserInfo(result);
};

loadUser();