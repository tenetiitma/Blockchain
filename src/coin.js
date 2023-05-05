const API_KEY = "7cc19a1227msh8862e54e13083fcp1225f4jsn963fce01679c";
const BASE_URL = "https://coinranking1.p.rapidapi.com";

fetch(`${BASE_URL}/coins`, {
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com' },
}).then(response => response.json()).then(data => {
    const marketTrendsWrapper = document.getElementById('market_trends');

    data.data.coins.forEach((coin) => {
        const article = document.createElement('article');

        const articleClasses = ["border-2", "p-4", "border-[#73FDAA]", "rounded-2xl",];

        article.classList.add(...articleClasses);

        article.innerHTML = `
            <div class="flex mb-2">
                <div class="flex place-items-center justify-around w-2/3">
                    <img class="w-12 h-12 object-cover" src="${coin.iconUrl}" alt="${coin.name}">
                    <p>${coin.symbol}</p>
                    <p class="text-[1.5vh] opacity-70 truncate">${coin.name}</p>
                </div>
                <img class="mx-auto mt-4 h-4 v-4" src="/src/images/Vector 3.png" alt="">
            </div>
            <div class="grid gap-2 px-6 pt-6 pb-2">
                <p class="text-2xl">$${Number(coin.price).toFixed(2)}</p>
                <p>${coin.change}</p>
            </div>
        `;

        marketTrendsWrapper.append(article);
    });
}).catch((error) => console.error(error));