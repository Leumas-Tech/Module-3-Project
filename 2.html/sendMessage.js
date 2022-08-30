const firebaseConfig = {
  apiKey: "AIzaSyAR7fNlCAri1lvnl2C2mWebdkZQTYVx72M",
  authDomain: "covid-demographics-test.firebaseapp.com",
  projectId: "covid-demographics-test",
  storageBucket: "covid-demographics-test.appspot.com",
  messagingSenderId: "418583482672",
  appId: "1:418583482672:web:b3897d2208860764a278f5"
};
const app = firebase.initializeApp(firebaseConfig);

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();

  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let temperature = document.getElementById("temperature").value;
  let time = document.getElementById("time").value;
  let rate = document.getElementById("rate").value;

  console.log(age, height,temperature,time,rate);
  saveCovidInfo(age, height,temperature,time,rate);
}

let covidDemographics = firebase.database().ref("demographicsByPerson");

  function saveCovidInfo(age, height,temperature,time,rate){
    let newCovicDemographics = covidDemographics.push();

    newCovicDemographics.set({
      Personsage: age,
      PersonHeightInInches: height,
      PersonsHighestBodyTemp : temperature,
      PersonsRecoveryTime: time,
      HowBadWasIt1thru10: rate,
    });
  }


















