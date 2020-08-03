VANTA.DOTS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x20fffc,
    
    color2: 0x20f4ff
  })
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDTTXqA-yk2_VkIKGYuq-AT0upAqSV59MM",
  authDomain: "jewsblog-6dec4.firebaseapp.com",
  databaseURL: "https://jewsblog-6dec4.firebaseio.com",
  projectId: "jewsblog-6dec4",
  storageBucket: "jewsblog-6dec4.appspot.com",
  messagingSenderId: "976145216267",
  appId: "1:976145216267:web:7314818e0e900ab9f0280e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, time, content,space) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h1");
  let p = document.createElement("p");
  let small = document.createElement("h4");
  let large=document.createElement("br");

  h2.textContent = title;
  small.textContent = time;
  p.textContent = content;
  large.textContent=space;

  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);
  div.appendChild(large);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();