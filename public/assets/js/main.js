const elGoatList = document.querySelector('#goatList');

const getGoatCard = ({ imageUrl, breed, origin }) => {
    return `
        <div class="card mb-4 m-auto goat-card">
            <img src="${imageUrl}" class="card-img-top" alt="${breed}">
            <div class="card-body">
                <h5 class="card-title">${breed}</h5>
                <p class="card-text">${breed} is a breed of goat that comes from ${origin}</p>
            </div>
        </div>
    `;
}

const renderGoats = (goats) => {
    goats.forEach(goat => {
        const goatCard = getGoatCard(goat);
        elGoatList.innerHTML += goatCard;
    });
};

const getGoats = async () => {
    const goatResponse = await fetch('/api/goats');
    const goatData = await goatResponse.json();

    console.log("GOATS!", goatData);
    renderGoats(goatData);
}

getGoats();
