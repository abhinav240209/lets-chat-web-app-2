const firebaseConfig = {

    apiKey: "AIzaSyBrC3s40RldvdyTXDMGaNfOdWykXPEPBV0",
  
    authDomain: "lets-chat-web-app-3b058.firebaseapp.com",
  
    databaseURL: "https://lets-chat-web-app-3b058-default-rtdb.firebaseio.com",
  
    projectId: "lets-chat-web-app-3b058",
  
    storageBucket: "lets-chat-web-app-3b058.appspot.com",
  
    messagingSenderId: "946828433034",
  
    appId: "1:946828433034:web:11326ef06eaf41cdbd7f73",
  
    measurementId: "G-6R8VYYFJR2"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  
  const analytics = getAnalytics(app);
user_name=window.localStorage.getItem("username")
 document.getElementById("user_name").innerHTML=user_name; 