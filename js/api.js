const usersAPI = "https://dummyjson.com/users"

// Async Function To Fetch Users - GET

export async function getUsers() {

    try {
        
        const response = await fetch(usersAPI);
        const data = await response.json();
        return data;

    } catch (error) {

        console.error("There was a problem fetching your data", error);
        
    }
        
}

// Async Function To Search Users - GET

export async function searchUsers(query) {

    try {
        
        const response = await fetch(`${usersAPI}/search?q=${query}`);
        const data = await response.json();
        return data;

    } catch (error) {

        console.error("There was a problem fetching your data", error);
        
    }
        
}

// Async Function For Getting A Single User - GET

export async function getSingleUser(id) {

    try {
        
        const response = await fetch(`${usersAPI}/${id}`);
        const data = await response.json();
        return data;

    } catch (error) {

        console.error("There was a problem fetching your data", error);
        
    }
        
}

// Async Function To Add A New User - POST

export async function addNewUser(userData) {

    try {
        
        const response = await fetch(`${usersAPI}/add`, {

            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)


            }

        );
        const data = await response.json();
        return data;

    } catch (error) {

        console.error("There was a problem fetching your data", error);
        
    }
        
}

// Async Function To Update A User - PATCH

export async function updateUser(id, userData) {

    try {
        
        const response = await fetch(`${usersAPI}/${id}`, {

            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)


            }

        );
        const data = await response.json();
        return data;

    } catch (error) {

        console.error("There was a problem fetching your data", error);
        
    }
        
}