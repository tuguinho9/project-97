function login() {
    var username = document.getElementById("usuario").value;
    localStorage.setItem("username", username);
    window.location = "KwitterRoom.html"
}