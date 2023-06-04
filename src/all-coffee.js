const featuredContainer = document.querySelector("#featured-container");
const badgeContainer = document.querySelector("#badge-container");

let coffees = [] ;
let ingredients = [
  "coffee",
  "Espresso",
  "Steamed Milk",
  "Hot Water",
  "1oz Espresso",
  "2oz Espresso",
  "Short pulled espresso",
  "Foamed Milk",
  "Long pulled espresso",
]

window.addEventListener("DOMContentLoaded",() => {
    featuredContainer.innerHTML = 
    `<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-200 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>`;
    getCoffee();
})

badgeContainer.addEventListener("click", (e) => {
 const clickBtn=  e.target.closest(".custom-badge");
 const selectedEl = clickBtn.textContent;
 const filterCoffee =  coffees.filter((Item) => Item.ingredients.some((ingredient) => ingredient.toLowerCase() === selectedEl.toLowerCase())) ;
 loadCoffeeToUI(filterCoffee);
 console.log(filterCoffee)
})

const getCoffee = async() => {
    const res = await fetch("https://api.sampleapis.com/coffee/hot");
    const data =await res.json();
    coffees = data ;

    loadCoffeeToUI(coffees);
    
    ingredients.forEach((Item) => {
      const buttonTag = document.createElement("button");
      buttonTag.classList.add("custom-badge");
      buttonTag.textContent = Item;
      badgeContainer.appendChild(buttonTag);

    })
}

const loadCoffeeToUI = (coffeeToload) => {
  featuredContainer.innerHTML = "";
    
  coffeeToload.slice(0,19).forEach(Item => {
        addFeaturedCardContainer(Item);    
    });
}

const addFeaturedCardContainer = (coffee) => {
    const articleElement = document.createElement("article");
    articleElement.classList.add("featured-card");
    articleElement.innerHTML = `
            <figure id=${coffee.id} class = " max-h-60 ">
              <img 
                src= ${coffee.image}
                alt="coffee"
                loading = "lazy" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                ${coffee.title}
                <div class="badge badge-secondary">Hot</div>
              </h2>
              <p>
              ${coffee.description}
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">${coffee.ingredients[0]}</div> 
              </div>
            </div>
`;
featuredContainer.appendChild(articleElement);
};




            
    