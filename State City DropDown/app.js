const countryData = [
    { id: 1, country: "India", cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"] },
    { id: 2, country: "United States", cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"] },
    { id: 3, country: "Canada", cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"] },
    { id: 4, country: "Mexico", cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"] },
    { id: 5, country: "Brazil", cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"] },
    { id: 6, country: "United Kingdom", cities: ["London", "Manchester", "Birmingham", "Liverpool", "Glasgow"] },
    { id: 7, country: "France", cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"] },
    { id: 8, country: "Germany", cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"] },
    { id: 9, country: "Spain", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga"] },
    { id: 10, country: "Australia", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"] },
    { id: 11, country: "Japan", cities: ["Tokyo", "Osaka", "Nagoya", "Sapporo", "Fukuoka"] },
];

const countryDropdown = document.getElementById('country');
const cityDropdown = document.getElementById('city');

// Populate the country dropdown with options
countryData.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.country;
    option.textContent = country.country;
    countryDropdown.appendChild(option);
});

// When a country is selected, populate the city dropdown with options
countryDropdown.addEventListener('change', (event) => {
    const selectedCountry = event.target.value;

    // Clear the city dropdown
    cityDropdown.innerHTML = '<option value="">-- Select City --</option>';

    // Find the selected country object
    const country = countryData.find((c) => c.country === selectedCountry);

    if (country) {
        // Enable the city dropdown
        cityDropdown.disabled = false;

        // Populate the city dropdown with options
        country.cities.forEach((city) => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
    } else {
        // Disable the city dropdown if no country is selected
        cityDropdown.disabled = true;
    }
});
