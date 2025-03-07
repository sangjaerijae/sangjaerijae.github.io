fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("json-display").textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => console.error("Error loading JSON:", error));