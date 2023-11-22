"use strict"; 
let people = [
    {
        id: 1,
        firstName: "Ezra",
        lastName: "Aiden",
        email: "e.aiden@basshall.com",
        ipAddress: "18.6.24.104"
    },
    {
        id: 2,
        firstName: "Ian",
        lastName: "Auston",
        email: "ian.auston@goldmansachs.com",
        ipAddress: "17.16.4.105"
    },
    {
        id: 3,
        firstName: "Lily",
        lastName: "Bryant",
        email: "lily.bryant@example.com",
        ipAddress: "22.11.7.89"
    },
    {
        id: 4,
        firstName: "Oliver",
        lastName: "Carter",
        email: "oliver.carter@gmail.com",
        ipAddress: "14.8.31.72"
    },
    {
        id: 5,
        firstName: "Sophia",
        lastName: "Davis",
        email: "sophia.davis@yahoo.com",
        ipAddress: "19.5.12.45"
    }
   //use chat gpt to add more 
];

window.onload = init;

function init(){
    loadTable();
}

function loadTable(){
    let tbody = document.getElementById("tblBody");
    for (let i = 0; i < people.length; i++){
        buildRows(tbody, people[i]);
    }
}

function buildRows(tbody, people){
    let row = tbody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = people.id;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = people.firstName + " " + people.lastName;
    let cell3 = row.insertCell(2);
    cell3.innerHTML = people.email;
    let cell4 = row.insertCell(3);
    cell4.innerHTML = people.ipAddress;
}
