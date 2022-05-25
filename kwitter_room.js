// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJFgROfPAND5RgDX47y5srmKCmNiCq4xI",
    authDomain: "kwitter-2-9f57a.firebaseapp.com",
    databaseURL: "https://kwitter-2-9f57a-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-9f57a",
    storageBucket: "kwitter-2-9f57a.appspot.com",
    messagingSenderId: "583014550513",
    appId: "1:583014550513:web:0912261dba9bb0412ad250"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function add_Room(){
    room_name=document.getElementById("room_name").value

  
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html"; 
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;

    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
} 