var firebaseConfig = {
  apiKey: "AIzaSyDyK2h_w21UgR5FWg60qOzq9pNM8GUvDJ4",
  authDomain: "kitter-bfa0d.firebaseapp.com",
  databaseURL: "https://kitter-bfa0d-default-rtdb.firebaseio.com",
  projectId: "kitter-bfa0d",
  storageBucket: "kitter-bfa0d.appspot.com",
  messagingSenderId: "931162041759",
  appId: "1:931162041759:web:ef317c36d8fa36fac5e1aa"
};
firebase.initializeApp(firebaseConfig);






user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}