//create div
function createDiv(element){
    const div = document.createElement('div') ;
        div.innerHTML = `
        <div class="country">
            <div class="flag">
                <img src="${element.flags.png}" alt="Country Flag" class="img-fluid">
            </div>
            <h4 class="h4 my-3">Country : <span class="d-inline-block bg-light">${element.name.common}</span></h4>
            <h4 class="h4 my-3">Capital : <span class="d-inline-block bg-light">${element.capital}</span></h4>
            <h5 class="h5 my-3">Populataion : <span class="d-inline-block bg-light">${element.population}</span></h5>
            <button class="btn btn-primary my-3">More Details</button>
        </div>` ;
        div.classList.add('col-lg-3')
        document.getElementById('all-countries').appendChild(div) ;
}

//empty innerHTML 
function emptyInnerHtml(){
    document.getElementById('all-countries').innerHTML = '' ;
}

//display country name
const displayCountryName = (data) =>{

    data.forEach(element => {
        createDiv(element) ;
    });
}


//load all the countries
const loadAllCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
.then(response => response.json()
.then(data => displayCountryName(data))) //, 'allCountry'
}
loadAllCountry() ;


//load the searched country when search button is clicked
const searchByCountry = (searchValue) => {
    if(searchValue == ''){
        emptyInnerHtml() ;
        loadAllCountry() ;
    }
    else{
        emptyInnerHtml() ;
        fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(response => response.json()
        .then(data => displayCountryName(data)))
    }
}

//search button onclick
function searchFunction(){
    const searchValue = document.getElementById('search-box').value ;
    searchByCountry(searchValue) ;
}



//load by region 
function loadByRegion(region, secondParameter){
    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(response => response.json())
    .then(data => displayCountryName(data)) ;
}


document.getElementById('select-region').addEventListener('change', function(event){
    const region = event.target.value ;

    /* everytime change happens -> set the innerHTML = '' ; */
    emptyInnerHtml() ;

    if(region == 'all'){
        loadAllCountry() ;
    }

    else loadByRegion(region) ;
})