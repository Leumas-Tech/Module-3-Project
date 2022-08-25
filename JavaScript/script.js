       // This is my COVID STATS BY COUNTRY API.........
       function doThis() {
        // Accessing input element
        let input = document.getElementById('country').value;
        let info = document.getElementById('info');
        // This is the URL for the API 
        let url = 'https://covid-19-tracking.p.rapidapi.com/v1/world';
        // This is the regex to replace end of url string.
        let regex = /\w+$/g;
        // If-else statement to check for empty input.
        if (input.length == 0) {
            console.log(url);
        } else {
            // Replacing end of url string with customer input.
            url = url.replace(regex, input);
            // console.log(url);
        }
        // This is the API Fetch Code.............
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fdc2bfa2c7msh9bbefe74000b7fbp134f42jsn20bc45c4a096',
                'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                //Gather data received from API, Get access to Table.
                let yourResult = document.getElementById('covidInfo');
                let keys = Object.keys(response);
                let values = Object.values(response);
                //Create a Table Row inside Table for Incoming Data
                let trHeader = document.createElement('tr');
                trHeader.setAttribute('id', 'Header');
                //Loop Through Keys in API Object
                for (let key of keys) {
                    //Create a Table Header for each Key
                    let th = document.createElement('th');
                    //The regex removed the unwanted characters behind the Key
                    let newKey = key.replace(/_\w+$/g, '');
                    th.textContent = `${newKey}`;
                    //Appended Table Header and Row
                    trHeader.appendChild(th);
                    yourResult.appendChild(trHeader);
                }
                //Create a Table Row inside Table for Incoming Data 
                let trData = document.createElement('tr');
                trData.setAttribute('id', 'Data');
                //Loop through Values in API Object
                for (let value of values) {
                    let td = document.createElement('td');
                    //Check If value is less than 0
                    if (value <= 0) {
                        value = 'N/A';
                        td.textContent = `${value}`; // Set values to Table Data Element
                        trData.appendChild(td);
                        yourResult.appendChild(trData);
                    } else {
                        td.textContent = `${value}`; // Set values to Table Data Element
                        trData.appendChild(td);
                        yourResult.appendChild(trData);
                    }
                }
                console.log(response);
            })
            .catch(error => {
                let message = document.getElementById('covidInfo');
                message.innerHTML = `Error: ${error}`;
                // message.append(message.innerHTML);
            });
    }

    //
    // This is the Hospital By Name API...................
    function findHospital() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fdc2bfa2c7msh9bbefe74000b7fbp134f42jsn20bc45c4a096',
                'X-RapidAPI-Host': 'us-hospitals.p.rapidapi.com'
            }
        };

        fetch('https://us-hospitals.p.rapidapi.com/?name=presbyterian', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    // 
    // This is the CDC API for weekly Diseases/Conditions
    function cdcInfo() {
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
                let info = document.getElementById('cdcInfo');
                let heading = document.createElement('h1');
                heading.innerHTML = value[0];
                let summary = document.createElement('p');
                summary.innerHTML = value[1];
                let url = document.createElement('link');
                url.setAttribute('href', value[2]);
                info.appendChild(heading);
                info.appendChild(summary);
                info.appendChild(url);
            })
            .catch(err => console.error(err));


    }
    // I am using this little function to help me check the console output on my onClick functions.
    // 
    // function main() {

    //     console.log("I am Hooked Up!");
    // }

