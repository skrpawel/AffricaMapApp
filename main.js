let API_URL = `https://restcountries.com/v3.1/alpha/`;

const COUNTRY = document.getElementById("country_name");
const CAPITAL = document.getElementById("capital_city");
const POPULATION = document.getElementById("population");
const REGION = document.getElementById("region");
const COUNTRY_ID = document.getElementById("svg2");
const FILTER = document.getElementById("filter");
const POPULATION_INPUT = document.getElementById("population_number_input");
const POPULATION_H3 = document.getElementById("population_value");
const TOOLTIP = document.getElementById("tooltip");


let COUNTRY_DATA;

API_CALL2('https://restcountries.com/v3.1/subregion/africa');



const getCountryID = COUNTRY_ID.addEventListener("mouseover", function (event) {
    if (event.target.id !== 'svg2') {
        let topElementPosition = event.target.getBoundingClientRect().top;
        let leftElementPosition = event.target.getBoundingClientRect().left;
        TOOLTIP.style.top = +topElementPosition - 150 + 'px';
        TOOLTIP.style.left = +leftElementPosition + 120 + 'px';
        TOOLTIP.style.display = 'block';
        return API_CALL(API_URL + event.target.id);
    }

    return null;
}, false);

COUNTRY_ID.addEventListener('mouseout', function (event) {
    TOOLTIP.style.bottom = '0px';
    TOOLTIP.style.display = 'none';

    console.log(event.target.id);
});



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
        .then(data => {
            COUNTRY_DATA = data;
            return COUNTRY_DATA;
        })
}

const checkbox = document.querySelector("input[name='population_number_input']");


setTimeout(showColor, 1000);

function showColor() {
    console.log(COUNTRY_DATA)

    for (let element of COUNTRY_DATA) {
        let code = element.cca2;

        if (document.getElementById(code) === null) {
            continue;
        }

        if (element.population < 25000000) {
            document.getElementById(code).style.fill = '#FFF7BC';
            continue;
        }

        if (element.population < (25000000 * 2)) {
            document.getElementById(code).style.fill = '#FEE391';
            continue;
        }

        if (element.population < (25000000 * 3)) {
            document.getElementById(code).style.fill = '#FEC44F';
            continue;
        }

        if (element.population < (25000000 * 4)) {
            document.getElementById(code).style.fill = '#FE9929';
            continue;
        }

        if (element.population < (25000000 * 5)) {
            document.getElementById(code).style.fill = '#EC7014';
            continue;
        }

        if (element.population < (25000000 * 6)) {
            document.getElementById(code).style.fill = '#CC4C02';
            continue;
        }

        if (element.population < (25000000 * 7)) {
            document.getElementById(code).style.fill = '#993404';
            continue;
        }

        if (element.population < (25000000 * 8)) {
            document.getElementById(code).style.fill = '#662506';
            continue;
        }

        if (element.population < (25000000 * 9)) {
            document.getElementById(code).style.fill = '#3a1200';
            continue;
        }
    }

}


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

        if (element.population < 25000000 || POPULATION_H3.textContent == '0') {
            document.getElementById(code).style.fill = '#FFF7BC';
            continue;
        }

        if (element.population < (25000000 * 2)) {
            document.getElementById(code).style.fill = '#FEE391';
            continue;
        }

        if (element.population < (25000000 * 3)) {
            document.getElementById(code).style.fill = '#FEC44F';
            continue;
        }

        if (element.population < (25000000 * 4)) {
            document.getElementById(code).style.fill = '#FE9929';
            continue;
        }

        if (element.population < (25000000 * 5)) {
            document.getElementById(code).style.fill = '#EC7014';
            continue;
        }

        if (element.population < (25000000 * 6)) {
            document.getElementById(code).style.fill = '#CC4C02';
            continue;
        }

        if (element.population < (25000000 * 7)) {
            document.getElementById(code).style.fill = '#993404';
            continue;
        }

        if (element.population < (25000000 * 8)) {
            document.getElementById(code).style.fill = '#662506';
            continue;
        }

        if (element.population < (25000000 * 9)) {
            document.getElementById(code).style.fill = '#3a1200';
            continue;
        }
    }
}

function showPopValue(event) {
    POPULATION_H3.textContent = event.target.valueAsNumber;
}

POPULATION_INPUT.addEventListener('input', showPopValue);

checkbox.addEventListener('input', filterMap);


