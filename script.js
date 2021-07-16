getRandomCity();

async function getRandomCity() {
    const resp = await fetch(
        "../data/cities.json"
    );

    const respData = await resp.json();
    const randomCity = respData.cities;
    console.log(randomCity);
    // console.log(randomCity.cities[0]);
}

function getRandomPlace() {
    
}

function getPlaceById(id) {
    
}

function getPlacesBySearch(term) {
    
}