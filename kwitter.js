var firebaseConfig = {
     apiKey: "AIzaSyBsRKWEuUoGv4VBWvrXngsRUgYoK_6LYZ4",
     authDomain: "kwitter-5590c.firebaseapp.com",
     databaseURL: "https://kwitter-5590c-default-rtdb.firebaseio.com",
     projectId: "kwitter-5590c",
     storageBucket: "kwitter-5590c.appspot.com",
     messagingSenderId: "1039282007925",
     appId: "1:1039282007925:web:2829936dafa36385d5ed3c"
   };

   firebase.initializeApp(firebaseConfig)

user_name=" "
password=" "
function adduser(){
     user_name=document.getElementById("username").value;
     password=document.getElementById("password").value; 
     firebase.database.ref("Passwords").
localStorage.setItem("user_name",user_name)
window.location="kwitter_room.html"
}
