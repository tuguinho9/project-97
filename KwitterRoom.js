const firebaseConfig = {
  apiKey: "AIzaSyB2nqco-8HG1ClgfLNENvJUj_5bd2OqEZg",
  authDomain: "kwitter-2-4062a.firebaseapp.com",
  databaseURL: "https://kwitter-2-4062a-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-4062a",
  storageBucket: "kwitter-2-4062a.appspot.com",
  messagingSenderId: "730694180111",
  appId: "1:730694180111:web:3398f4f10d56c662f1f27a"
};
var username = localStorage.getItem("username");
document.getElementById("bemvindo").innerHTML = "Bem Vindo " + username;
  firebase.initializeApp(firebaseConfig);
  function enviar() {
    var sala = document.getElementById("usuario").value;
    firebase.database().ref("/").child(sala).update({
        purpose: "Adicionar sala"
    });
    localStorage.setItem("sala", sala);
    window.location = "KwitterPage.html";
  }
  function getData() {
    firebase.database().ref("/").on("value", function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; roomNames = childKey; console.log("Nome da Sala - " + roomNames);
    row = "<div class='roomname' id="+ roomNames + " onclick='redirectiontoroomname(this.id)'> #" + roomNames + "</div> <hr>";
    document.getElementById("output").innerHTML += row
    });
    });}
    getData();
    function redirectiontoroomname(name) {
      localStorage.setItem("sala", name);
      window.location = "KwitterPage.html";
    }