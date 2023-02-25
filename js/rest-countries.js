const displayCountryName = (data, str) =>{
    data.forEach(element => {
        //make the container empty before if search button is clicked
        if(str !== 'allCountry'){
            document.getElementById('all-countries').innerHTML = '' ;
        }
        console.log(element) ;

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

    });
}

//load all the countries
const loadAllCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
.then(response => response.json()
.then(data => displayCountryName(data, 'allCountry')))
}
loadAllCountry() ;


//load the searched country when search button is clicked
const searchByCountry = (searchValue) => {
    if(searchValue == ''){
        loadAllCountry() ;
    }
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
.then(response => response.json()
.then(data => displayCountryName(data, 'country')))
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
    .then(data => displayCountryName(data, secondParameter)) ;
}

document.getElementById('select-region').addEventListener('change', function(event){

    const region = event.target.value ;

    //everytime change happens -> set the innerHTML = '' ;
    loadByRegion(region, 'region');

    if(region == 'all'){
        loadAllCountry() ;
    }
    else loadByRegion(region, 'allCountry') ;
})