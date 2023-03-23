class PriceCard
{
    constructor(name, price, color, btnColor)
    {
        this.name = name;
        this.price = price;
        this.color = color;
        this.buttonColor = btnColor;
    }
}

const pricingCards = [
    new PriceCard('Basic Plan', '10', 'text-red-400', 'bg-teal-600'),
    new PriceCard('Standard Plan', '30', 'text-indigo-300', 'bg-indigo-600'),
    new PriceCard('Pro Plan', '60', 'text-orange-300', 'bg-orange-600'),

]

function pricingCard(priceCard)
{
    return (`
    <div role="pricing-card" class="bg-gray-800 min-w-full p-8 rounded-lg grid gap-4">
    <h4 class="text-2xl font-semibold ${priceCard.color}">${priceCard.name}</h4>
    <p class="flex gap-8 items-end">
        <span class="text-5xl font-bold">${priceCard.price}</span>
        <span class="text-slate-400 text-xl">/&nbsp; month</span>
    </p>
    <p class="text-slate-400 text-xl">Billed monthly</p>
    <button type="button" class="${priceCard.buttonColor} p-3 rounded-lg font-semibold">Subscribe</button>
    <p align="center" class="my-2 text-blue-500 text-sm">Save with annual billing (20% off)</p>

    <ul class="grid">
        <li role="plan-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <p>Limited genertion ~ 200</p>
        </li>
        <li role="plan-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <p>Limited genertion ~ 200</p>
        </li>
        <li role="plan-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <p>Limited genertion ~ 200</p>
        </li>
        <li role="plan-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <p>Limited genertion ~ 200</p>
        </li>
    </ul>
</div>`);
}

window.addEventListener('load', () =>
{
    const pricing_wrapper = document.getElementById('pricing_wrapper')
    pricingCards.forEach((card) =>
    {
        pricing_wrapper.innerHTML += pricingCard(card)
    })
})
