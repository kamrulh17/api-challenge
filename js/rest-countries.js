const loadAPI = () => {
    fetch('https://restcountries.com/v3.1/all')
.then(response => response.json()
.then(data => displayCountryName(data)))
}


const displayCountryName = (data) =>{
    data.forEach(element => {
        // console.log(element.name.common)
        const div = document.createElement('div') ;

        div.innerHTML = `
        <div class="country">
            <div class="flag">
                <img src="${element.flags.png}" alt="Country Flag" class="img-fluid">
            </div>
            <h4 class="h4 my-3">Country : <span class="d-inline-block bg-light">${element.name.common}</span></h4>
            <h4 class="h4 my-3">Capital : <span class="d-inline-block bg-light">${element.capital}</span></h4>
            <h5 class="h5 my-3">Populataion : <span class="d-inline-block bg-light">${element.population}</span></h5>
            <button class="btn btn-primary my-3">Details</button>
        </div>` ;

    div.classList.add('col-lg-3')
    document.getElementById('all-countries').appendChild(div) ;
    });
}

loadAPI() ;