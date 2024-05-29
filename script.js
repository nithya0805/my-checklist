const firebaseConfig = {
    apiKey: "AIzaSyCBmNjO7QU-tBwhfP8LPFVDVsbURIzbh_U",
    authDomain: "my-checklist-aaa75.firebaseapp.com",
    databaseURL: "https://my-checklist-aaa75-default-rtdb.firebaseio.com",
    projectId: "my-checklist-aaa75",
    storageBucket: "my-checklist-aaa75.appspot.com",
    messagingSenderId: "90775012420",
    appId: "1:90775012420:web:9f770a2ac120d810246811"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
getdata()

function addd(){
item=document.getElementById("input1").value;
firebase.database().ref("/").child(item).update({purpose:"adding message"});
getdata()
}

function getdata(){
 firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
item = childKey;
row="<div>#"+item+"</div><hr>";
document.getElementById("output").innerHTML += row;});});
}

function deletee(){
item1=document.getElementById("input1").value;
firebase.database().ref("/").child(item1).remove();
}