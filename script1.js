// Redirect to login
function redirectToLogin() {
    window.location.href = "login.html";
}

// Fake login function
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login successful! Redirecting to the shop...");
    window.location.href = "shop.html";
});

// Fake chat function
function sendMessage() {
    let input = document.getElementById("chat-input");
    let chatBox = document.getElementById("chat-messages");
    if (input.value.trim() !== "") {
        let message = document.createElement("p");
        message.textContent = "User: " + input.value;
        chatBox.appendChild(message);
        input.value = "";
    }
}