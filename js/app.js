// Import Of Functions From api.js

import { getUsers, searchUsers, getSingleUser, addNewUser } from "./api.js";

// Import Of Functions From ui.js

import { renderUsers, renderProfile, showError } from "./ui.js";

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

// Event Handler For Search Bar (Input) In Order To Search API & Retrieve Data
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