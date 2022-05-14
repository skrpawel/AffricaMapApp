let API_URL = `https://restcountries.com/v3.1/alpha/`;

const COUNTRY = document.getElementById("country_name");
const CAPITAL = document.getElementById("capital_city");
const POPULATION = document.getElementById("population");
const REGION = document.getElementById("region");
const COUNTRY_ID = document.getElementById("svg2");
const FILTER = document.getElementById("filter");


let COUNTRY_DATA;

API_CALL2('https://restcountries.com/v3.1/subregion/africa');



const getCountryID = COUNTRY_ID.addEventListener("mouseover", function (event) {
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
            POPULATION.textContent = data[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            REGION.textContent = data[0].subregion;
            return data[0];
        })
}

function API_CALL2(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => COUNTRY_DATA = data)
}

const checkbox = document.querySelector("input[name='population_number_input']");

function filterMap() {
    for (let element of COUNTRY_DATA) {
        let code = element.cca2;

        if (document.getElementById(code) === null) {
            continue;
        }

        if (!checkbox.value) {
            document.getElementById(element.cca2).style.fill = '#f2f2f2';
            continue;
        }

        if (element.population > +checkbox.value) {
            document.getElementById(element.cca2).style.fill = 'red';
            continue;
        }

        document.getElementById(element.cca2).style.fill = '#f2f2f2';
    }
}

checkbox.addEventListener('input', filterMap);
