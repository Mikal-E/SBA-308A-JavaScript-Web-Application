// Import Of Functions From api.js

import { getUsers, searchUsers, getSingleUser, addNewUser } from "./api.js";

// Import Of Functions From ui.js

import { renderUsers, renderProfile, showError } from "./ui.js";

// Invite Member Button



// Async Function To Load All Users For The Team Member Page By Populating The Team Member Container

async function loadUsers() {

    try {

        const data = await getUsers();
        renderUsers(data.users);
        
    } catch (error) {

        showError("Failed to load team members.");
        
    }
    
}

// loadUsers Function Called Inside Event Handler To Run When Page Has Loaded

document.addEventListener("DOMContentLoaded", () => {

    loadUsers();

    }
);

// Event Listener For Search Bar (Input) In Order To Search API & Retrieve Data
document.getElementById("search-bar").addEventListener("input", async (e) => {

    const query = e.target.value.trim();

    if (query === "") {

        loadUsers();
        return;
        
    }

    try {

        const data = await searchUsers(query);
        renderUsers(data.users);
        
    } catch (error) {

        showError("Failed to search team members.");
        
    }

    }
);

// Retrieved Container From DOM & Added Event Listener For A Card Click To Open Profile Modal

document.getElementById("team-member-container").addEventListener("click", async (e) => {

    const card = e.target.closest(".member-card");

    if (!card)
    return;

    const id = card.dataset.id;

    try {

        const user = await getSingleUser(id);
        renderProfile(user);

        document.getElementById("profile-modal-container").style.display = "flex";
        
    } catch (error) {

        showError("Failed to load team member profile.");
        
    }

    }
);

// Event Listener For Invite Member Button To Display The Modal Container

document.getElementById("invite-member-button").addEventListener("click", () => {

    document.getElementById("invite-modal-container").style.display = "flex";

    }
);

// Event Listener For Invite Close Button To Close Invite Modal Container

document.getElementById("invite-close-button").addEventListener("click", () => {

    document.getElementById("invite-modal-container").style.display = "none";

    }
);

// Event Listener For Profile Close Button To Close Profile Modal Container

document.getElementById("profile-close-button").addEventListener("click", () => {

    document.getElementById("profile-modal-container").style.display = "none";

    }
);

// Event Listener For Invite Form Submissions - listen for submit, prevent page from refreshing
// retrieve values from input fileds, add the new user, and show success message.

document.getElementById("invite-form").addEventListener("submit", async (e) => {

    e.preventDefault();

    const userData = {

        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        company: {title: document.getElementById("job-title").value}

    }

    try {

        await addNewUser(userData);
        alert("Team member invited successfully!");
        document.getElementById("invite-modal-container").style.display = "none";
        document.getElementById("invite-form").reset();
        
    } catch (error) {

        alert("Failed to invite team member. Please try again.")
        
    }
    }
);