
const firebaseConfig = {
    apiKey: "AIzaSyCk58Jff602GkaEM-uqVUlbCSMtfH58UQ8",
    authDomain: "coviddatatrackerapp-mod3.firebaseapp.com",
    databaseURL: "https://coviddatatrackerapp-mod3-default-rtdb.firebaseio.com/.json",
    projectId: "coviddatatrackerapp-mod3",
    storageBucket: "coviddatatrackerapp-mod3.appspot.com",
    messagingSenderId: "266860937771",
    appId: "1:266860937771:web:3c80d8e9eb33e5b0d7e06e",
    measurementId: "G-VPS1X5993Q"
  };

const app = initializeApp(firebaseConfig);









var submit = document.getElementById('sendFormButton');

submit.addEventListener('click' , function(){
    let age = document.getElementById('age');
    console.log(age);



});















