const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountry(data))
}
const showCountry = (countries) => {
    
    const countriesSet = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('divOfCountry');
        countryDiv.innerHTML = 
        `<img style="width: 100px" src=${country.flags.png}>
        <h3>Country Name: ${country.name.common}</h3>
        <button id=${country.cca2}>Details</button>`;
        countriesSet.appendChild(countryDiv);
        console.log(country)
        document.getElementById(country.cca2).addEventListener('click', function() {
            const detailsDiv = document.createElement('div');
            detailsDiv.innerHTML = 
                `<h3>Capital : ${country.capital[0]}</h3>
                `;
                countryDiv.appendChild(detailsDiv);
        })
    })
    }

allCountries()