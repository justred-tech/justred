// content.js
(async function () {
    console.log("Just Red POC Extension loaded on google.com");

    try {
        const apiUrl = window.CONFIG?.API_URL || 'http://localhost:8080/random'; // Default to local for now
        console.log(`Fetching random number from: ${apiUrl}`);

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Random Number received from backend:", data);

        // Optional: Display it on the page
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '10px';
        div.style.right = '10px';
        div.style.backgroundColor = 'red';
        div.style.color = 'white';
        div.style.padding = '10px';
        div.style.zIndex = '9999';
        div.innerText = `Random Number: ${data.number}`;
        document.body.appendChild(div);

    } catch (error) {
        console.error("Error fetching random number:", error);
    }
})();
