const countryData = [
    {
        id: 1,
        country: "India",
        cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"]
    },
    {
        id: 2,
        country: "United States",
        cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
    },
    {
        id: 3,
        country: "Canada",
        cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"]
    },
    {
        id: 4,
        country: "Mexico",
        cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"]
    },
    {
        id: 5,
        country: "Brazil",
        cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"]
    },
    {
        id: 6,
        country: "United Kingdom",
        cities: ["London", "Manchester", "Birmingham", "Liverpool", "Glasgow"]
    },
    {
        id: 7,
        country: "France",
        cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
    },
    {
        id: 8,
        country: "Germany",
        cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"]
    },
    {
        id: 9,
        country: "Spain",
        cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga"]
    },
    {
        id: 10,
        country: "Australia",
        cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]
    },
    {
        id: 11,
        country: "Japan",
        cities: ["Tokyo", "Osaka", "Nagoya", "Sapporo", "Fukuoka"]
    }
];




const countryDropdown = document.getElementById("countries");
const cityDropdown = document.getElementById("cities");

countryData.map(country => {
    const option = document.createElement("option");
    option.value = country.id
    option.innerText = country.country
    countryDropdown.appendChild(option)
})

countryDropdown.addEventListener("change", (event) => {
    cityDropdown.innerHTML = '<option value="">--Please choose a city--</option>';

    const selectedCountry = countryData.find((country) => country.id == event.target.value)
    console.log(event.target)
    console.log(event)

    console.log(selectedCountry)

    if (selectedCountry) {
        cityDropdown.disabled = false;
        selectedCountry.cities.map(city => {
            const option = document.createElement("option");
            option.value = city
            option.innerText = city
            cityDropdown.appendChild(option)
        })
    } else {
        cityDropdown.disabled = true;

    }

})