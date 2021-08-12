var firebaseConfig = {
      apiKey: "AIzaSyCjs6U8_x7BEHUtzKrWPB_S1POLff28SaQ",
      authDomain: "chatsapp-1034c.firebaseapp.com",
      databaseURL: "https://chatsapp-1034c-default-rtdb.firebaseio.com",
      projectId: "chatsapp-1034c",
      storageBucket: "chatsapp-1034c.appspot.com",
      messagingSenderId: "936697389905",
      appId: "1:936697389905:web:16a4630faac6e427722970",
      measurementId: "G-XHQCDRFSQ3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome  : "+user_name;
function add_room(){
      room_name=document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># "+Room_names+"</div></hr>";   
      document.getElementById("output").innerHTML+=row;
      });
      });
}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="login_page.html";
     

}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";



}




