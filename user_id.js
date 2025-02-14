
        // Define the first and last name variables
        const firstName = "Beatrice";  // Replace with the actual first name
        const lastName = "Battisti";     // Replace with the actual last name

        // Function to display the full name
        function displayFullName() {
            const fullName = `${firstName} ${lastName}`;
            document.getElementById("fullName").textContent = fullName;
            document.getElementById("footerName").textContent = fullName;
            document.getElementById("navName").textContent = fullName;
            document.getElementById("txt1Name").textContent = fullName;
            document.getElementById("txt2Name").textContent = fullName;
            document.getElementById("txt3Name").textContent = fullName;
            // document.getElementById("pageTitle").textContent = fullName; // Set the page title
            document.getElementById("firstName").textContent = firstName;
            document.getElementById("lastName").textContent = lastName;
        }

        // Call the function to display the full name
        displayFullName();
