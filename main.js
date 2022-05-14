let API_URL = `https://restcountries.com/v3.1/alpha/`;

let COUNTRY = document.getElementById("country_name");
let CAPITAL = document.getElementById("capital_city");
let POPULATION = document.getElementById("population");
let REGION = document.getElementById("region");

let country_id = document.getElementById("svg2");



const getCountryID = country_id.addEventListener("mouseover", function (event) {
    if (event.target.id !== 'svg2') {
        return API_CALL(API_URL + event.target.id);
    }

    return null;
}, false);



function API_CALL(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            COUNTRY.textContent = data[0].name.common;
            CAPITAL.textContent = data[0].capital[0];
            POPULATION.textContent = data[0].population;
            REGION.textContent = data[0].subregion;
            return data[0];
        })
}
