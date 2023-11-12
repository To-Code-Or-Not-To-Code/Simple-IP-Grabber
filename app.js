/**
 * Retrieves data from the specified URL using the fetch API.
 *
 * @return {Promise} A promise that resolves to the retrieved data.
 */
async function getData () {
    let result = await fetch("https://api.db-ip.com/v2/free/self", {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    });
    result = await result.json();
    return result;
}

async function setData () { 
    let data = await getData();
    let dataBox = document.getElementById("data");

    dataBox.innerHTML = `Your IP: ${data.ipAddress}<br \>Your Continent: ${data.continentName}<br \>Your Country: ${data.countryName}<br \>Your City: ${data.city}`;
}

setData();