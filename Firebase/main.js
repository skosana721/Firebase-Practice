const form = document.getElementById("form");
const deleteBtn = document.getElementById("delete");
//Initial firebase

var firebaseConfig = {
  apiKey: "AIzaSyBuTBk9tgIRpfh_hI8njluQTkkMLsF-Ii4",
  authDomain: "tcg-student-tracker-7f495.firebaseapp.com",
  projectId: "tcg-student-tracker-7f495",
  storageBucket: "tcg-student-tracker-7f495.appspot.com",
  messagingSenderId: "611572465289",
  appId: "1:611572465289:web:dcce4d1ee9a41fa2465058",
  measurementId: "G-RRX6G7QSM6",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//get data
// db.collection("tcg-student-progress")
//   .get()
//   .then((snapShot) => {
//     snapShot.docs.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

//adding data to the firebase

form.addEventListener("click", (e) => {
  e.preventDefault();

  db.collection("tcg-student-progress").add({
    blogPost:
      "https://skosana721.github.io/Wongani/2021/05/04/update-and-deleting-with-mongoDB.html",
    codeWar: "223",
    freeCodeCamp: "html and Css",
    typingAccuracy: "90",
    typingWpm: "45",
    user_id: uuidv4(),
  });
});

//deleting documents in the firebase

deleteBtn.addEventListener("click", () => {
  db.collection("tcg-student-progress").doc("I8regl5UNn9G5pIRJnC6").delete();
});

// get data based on a specific key

db.collection("tcg-student-progress")
  .where("typingWpm", ">=", "30")
  .get()
  .then((snapShot) => {
    snapShot.docs.forEach((doc) => console.log("typingWpm", doc.data()));
  });

// real-time listener

db.collection("tcg-student-progress").onSnapshot((snapShot) => {
  let changes = snapShot.docChanges();
  changes.forEach((change) => {
    console.log("change", change.doc.data());
  });
});
