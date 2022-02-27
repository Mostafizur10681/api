const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button  onclick="loadCountryDetails('${country.name}')">Details</button>
        `
        // const h3 = document.createElement('h3')
        // h3.innertext = country.name;
        // div.appendChild(h3)
        // const p = document.createElement('p')
        // p.innerText = country.capital;
        // div.appendChild(p)
        countriesContainer.appendChild(div)
    })
}

const loadCountryDetails = name => {
    const url = ` https://restcountries.com/v3.1/name/${name}`
    // console.log(name);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
        <h5>${country.name}</h5>
        <p>Country Population: ${country.population}</p>
        <img src="${country.flag}">

    `

}