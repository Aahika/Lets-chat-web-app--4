//YOUR FIREBASE LINKS
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
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
 function send(){
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
       });
       document.getElementById("msg").value="";
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
