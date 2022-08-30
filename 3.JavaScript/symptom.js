let symptonBtn = document.getElementById('symptonBtn');

let hasCovid = false;
let hasSymptoms = false;

symptonBtn.addEventListener('click', function () {
    // Get input values
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input1');
    let input3 = document.getElementById('input3');
    // let input4 = document.getElementById('input4');
    let checkedInputs = document.querySelectorAll('input[name=symptoms]:checked');
    // console.log(input4);
    for (const checked of checkedInputs) {
        console.log(checked.value)
        if (checked.value != "No symptoms") {
            hasSymptoms = true;
        }
    }

    // check if they have COVID
    if (input1.value == 'yes' && hasSymptoms && input2.value == 'yes' && input3.value === 'I have not been tested') {
        hasCovid = true;
    }

    if (hasCovid) {
        window.location.href = '../2.html/searchNearestHospital.html';
    }
});

// get CDC Updates button
let cdcUpdateBtn = document.getElementById('cdcUpdatesToggleBtn');

// get CDC Update close modal button
let cdcUpdateCloseBtn = document.getElementById('cdcUpdateCloseBtn');

// Set an event listener on the modal open button
cdcUpdateBtn.addEventListener("click", function () {
    fetchCDCUpdates();
})

// Set an event listener on the modal close button
cdcUpdateCloseBtn.addEventListener("click", function () {
    closeCDCUpdateModal();
})

// setup a bootstrap modal
var myModal = new bootstrap.Modal(document.getElementById('cdcUpdates'))
// const display = document.getElementById('myNav');
const info = document.getElementById('cdcInfo');

// Fetch CDC Data
function fetchCDCUpdates() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fdc2bfa2c7msh9bbefe74000b7fbp134f42jsn20bc45c4a096',
            'X-RapidAPI-Host': 'cdc-disease-or-condition-of-the-week.p.rapidapi.com'
        }
    };

    fetch('https://cdc-disease-or-condition-of-the-week.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => {
            let key = Object.keys(response);
            let value = Object.values(response);
            //  This creates the H1 element to Append the Title of the CDC condition.
            let heading = document.createElement('h1');
            heading.setAttribute('id', 'title');
            heading.innerHTML = value[0];
            //  This creates the Paragraph element to Append the Summary of the CDC condition.
            let summary = document.createElement('p');
            summary.setAttribute('id', 'summary');
            summary.innerHTML = value[1];
            //  This creates the Link element to send users to the CDC's page on current condition. 
            let url = document.createElement('a');
            url.setAttribute('id', 'link');
            url.setAttribute('href', value[2]);
            url.setAttribute('target', '_blank');
            url.innerHTML = "CDC Link Here!";
            // Appending all information to the HTML.
            info.appendChild(heading);
            info.appendChild(summary);
            info.appendChild(url);
            myModal.show();
        })
        .catch(err => console.error(err));
}

// class modal
function closeCDCUpdateModal() {
    // close the modal
    myModal.hide();

    const heading = document.getElementById('title');
    const summary = document.getElementById('summary');
    const url = document.getElementById('link');
    // CLoses window.

    // This code will delete elements when window is closed.
    heading.remove();
    summary.remove();
    url.remove();
}