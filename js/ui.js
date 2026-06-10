import { getSingleUser } from "./api.js";

// Populates The Single Team Member Card Element

export function renderUserCard(user) {

    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
    
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}"/>
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.company.title}</p>

    `;
    return card;
    
}

// Populates The Full Team Member Container Grid With The Users

export function renderUsers(users) {

    const container = document.getElementById("team-member-container")
    container.innerHTML = "";

    if(users.length === 0) {

        container.innerHTML = '<p id="no-results">No team member found.</p>';
        return;
    }

    users.forEach(user => {

        const card = renderUserCard(user);
        card.dataset.id = user.id;
        container.appendChild(card);

        }
    )
 
}

// Displays Error Message When No Data Is Received

export function showError(message) {

    const container = document.getElementById("team-member-container");
    container.innerHTML = `<p id="no-results">${message}</p>`;

}

// Populates The Profile Modal With A Team Member's Data
export function renderProfile(user) {
    const profile = document.getElementById("profile-container");
    profile.innerHTML = `
    
    <button id="profile-close-button">Close</button>
    <img src="${user.image}" alt="${user.firstName} ${user.lastName}"/>
    <h2>${user.firstName} ${user.lastName}</h2>
    <p class="profile-title">${user.company.title}</p>

    <div clas="profile-details">

    <p><span>Email: </span>${user.email}</p>
    <p><span>Phone: </span>${user.phone}</p>
    <p><span>Department: </span>${user.company.department}</p>
    <p>Company: <span></span>${user.company.name}</p>

    </div>

    `;
}