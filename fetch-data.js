document.addEventListener("DOMContentLoaded", function () {
    // Asynchronous function to fetch user data
    async function fetchUserData() {
        // API URL to fetch data from
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Select the element to display API data
        const dataContainer = document.getElementById('api-data');
        
        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            
            // Check if response is OK
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            // Parse response as JSON
            const users = await response.json();
            
            // Clear the "Loading user data..." message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user list
            const userList = document.createElement('ul');

            // Loop through each user and create a <li> for their name
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the user's name
                userList.appendChild(listItem);   // Add <li> to <ul>
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Clear existing content and display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('There was an error!', error); // Log the error for debugging
        }
    }

    // Call the fetchUserData function when DOM is fully loaded
    fetchUserData();
});
