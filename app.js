const spinner = document.querySelector("#spinner");
const contenedorCards = document.querySelector("#cards-dinamicas");
const cardsTemplate = document.querySelector("#template-cards");
const fragment = document.createDocumentFragment();

const fetchData = async () => {
    try {
        loading(true);

        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        mostrarData(data);
    } catch (error) {

    } finally {
        loading(false);
    };
};

const mostrarData = (data) => {
    data.results.forEach((item) => {
        const clone = cardsTemplate.content.cloneNode(true);
        clone.querySelector(".card-img-top").src = item.image;
        clone.querySelector(".card-img-top").alt = `${item.name} + ${item.id}`;
        clone.querySelector(".card-title").textContent = item.name;
        clone.querySelector(".card-text").textContent = item.status;
        fragment.appendChild(clone);
    });

    contenedorCards.appendChild(fragment);
}

const loading = (estado) => {
    if (estado) {
        spinner.classList.remove("d-none")
    } else {
        spinner.classList.add("d-none")
    };
};

fetchData();