import { getCoins, getCoin, getHistory } from "../api/coinService.js";

const data = await getCoins();

    const marketTrendsWrapper = document.getElementById('market_trends');

    data.data.coins.forEach((coin) => {
        
        const article = document.createElement('article');

        article.setAttribute("data-uuid", coin.uuid);

        const articleClasses = ["border-2", "p-4", "rounded-2xl"];
        const borderColorsWeDontWant = ["#000000", "#00042b"];

        // shorthand "if" - 
        //      Kui on true, siis "?" millele järgneb tegevus
        //      Kui on false, siis ":" millele järgneb tegevus
        article.style.borderColor = borderColorsWeDontWant.includes(coin.color) ? "#73FDAA" : coin.color;

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
                <p class="${String(coin.change).startsWith('-') ? 'text-red-500' : 'text-green-500'}">${coin.change}</p>
            </div>
        `;

        marketTrendsWrapper.append(article);
});

const cards = document.querySelectorAll("#market_trends article");
cards.forEach((node) => {
    node.addEventListener('click', async (event) => {
        const uuid = event.currentTarget.getAttribute('data-uuid');

        const response = await getCoin(uuid); 
        const history = await getHistory(uuid);

        const result = {...response.data.coin, ...history.data};
        
        console.log(result);
    })
});