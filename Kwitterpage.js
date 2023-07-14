const firebaseConfig = {
    apiKey: "AIzaSyB2nqco-8HG1ClgfLNENvJUj_5bd2OqEZg",
    authDomain: "kwitter-2-4062a.firebaseapp.com",
    databaseURL: "https://kwitter-2-4062a-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-4062a",
    storageBucket: "kwitter-2-4062a.appspot.com",
    messagingSenderId: "730694180111",
    appId: "1:730694180111:web:3398f4f10d56c662f1f27a"
  };
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("username");
  var sala = localStorage.getItem("sala");
  console.log(username);
  function enviar() {
    mensagem = document.getElementById("texto").value;
    firebase.database().ref(sala).push({
        name: username,
        message: mensagem,
        like: 0
    });
    document.getElementById("texto").value = "";
  }
  function getData() { 
    firebase.database().ref("/"+sala).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
        childData = childSnapshot.val(); 
        if(childKey != "purpose") { 
            firebase_message_id = childKey; 
            message_data = childData;
            name = message_data["name"];
            message = message_data["message"];
            like = message_data["like"];
            nome = "<h4>" + name + "<img id= 'img22' src='img22.png'></h4>";
            texto = "<h4>" + message + "</h4>";
            botao = "<button onclick= 'update_like(this.id)' class= 'btn btn-warning' id= "+firebase_message_id+" value= "+like+" <span class= 'glyphcon glyphcon-thumbs-up'>like: "+like+"</span> </button>"; 
            juntar = nome + texto + botao;
            document.getElementById("output").innerHTML += juntar;
        } 
    }); 
}); 
}
getData();
function update_like(message_id) {
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  update_likes = Number(likes) + 1;
  firebase.database().ref(sala).child(message_id).update({
    like: update_likes
  });
}
function sair() {
  localStorage.removeItem("username");
  localStorage.removeItem("sala");
  window.location = "index.html";
}