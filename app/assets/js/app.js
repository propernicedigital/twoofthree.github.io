// Firebase

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoTPN6KdKDzyl4RKwoZ9pbsTCp2ee3Yws",
    authDomain: "experiencehaus-testapp.firebaseapp.com",
    databaseURL: "https://experiencehaus-testapp.firebaseio.com",
    projectId: "experiencehaus-testapp",
    storageBucket: "experiencehaus-testapp.appspot.com",
    messagingSenderId: "1011001855680"
};
firebase.initializeApp(config);

var dbRef = firebase.database();
var dataRef = dbRef.ref('candidates');
var data = [];
dataRef.once('value').then(function(snapshot) {
    data = snapshot.val();
});

function search(nameKey, dataArray){
    for (var i=0; i < dataArray.length; i++) {
        if (dataArray[i].category === nameKey) {
            console.log(dataArray[i])
            return dataArray[i];
        }
    }
}

$("#filter-data").on("click", function() {
    search("project-manager", data);
});
