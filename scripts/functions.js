//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
const tvBrands = inventory.map((tv) => {
    return tv.brand;
})
console.log(tvBrands)

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
const tvSoldOut = inventory.filter((arr) => {
    return arr.originalStock - arr.sold === 0;
})
console.log(tvSoldOut)

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const tvWithAmbi = inventory.filter((tvs) => {
       return tvs.options.ambiLight === true;
})
console.log(tvWithAmbi)

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
function sortTvFunction (product) {
    const sortTv = product.sort((a, b) => (a.price - b.price));
    console.log(sortTv)
    //return sortTv
}
sortTvFunction(inventory);

//--------------------------------opdracht2

//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
const tvSoldTotal = inventory.reduce((total, tvSold) => {
    return tvSold.sold + total }, 0);
console.log(tvSoldTotal)

const soldID = document.getElementById("soldTV")
soldID.style.color = "green";
soldID.style.fontSize = "30px"
soldID.textContent = tvSoldTotal;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
const tvStockTotal = inventory.reduce((total, tvStock) => {
    return tvStock.originalStock + total }, 0);
console.log(tvStockTotal)

const stockID = document.getElementById("stockTV")
stockID.style.color = "blue";
stockID.style.fontSize = "30px";
stockID.textContent = tvStockTotal;

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
const leftToSell = tvStockTotal - tvSoldTotal;

const sellID = document.getElementById("sellTV")
sellID.style.color = "red"
sellID.style.fontSize = "30px"
sellID.textContent = leftToSell;

//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer
// te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen
// in zitten, is niet erg.
function tvBrandList() {
    const tvList = document.createDocumentFragment();
    for (let tvNames of tvBrands) {
        const list = document.createElement("li");
        list.textContent = tvNames;
        tvList.append(list)
    }
    const container = document.getElementById("tv-brands")
    container.append(tvList)
    let ul = document.querySelector("li")
}
tvBrandList()

//Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het
// format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
function tvBrandType(brand) {
    for (let i = 0; i < inventory.length; i++) {
        if (brand.toLowerCase() === inventory[i].brand.toLowerCase()) {
            console.log(inventory[i].brand + " " + inventory[i].type)
           }
    }
}
tvBrandType("philips")

//4b;
function tvPrices(brand) {
    for (let i = 0; i < inventory.length; i++) {
        if (brand.toLowerCase() === inventory[i].brand.toLowerCase()) {
            console.log("€" + inventory[i].price + ",-")
        }
    }
}
tvPrices("philips")

//4c;
function tvSizes(brand) {

    for (let i = 0; i < inventory.length; i++) {
        if (brand.toLowerCase() === inventory[i].brand.toLowerCase()) {
            console.log(inventory[i].availableSizes + " | ")
        }
    }
}
tvSizes("philips")


//           const tvMerk = inventory.map((products) => {
//             return products.brand + " " + products.type + " - " + products.name;
//           });
//           const listInfo = document.createDocumentFragment();
//           for(let tvInfo of tvMerk) {
//               const li = document.createElement("li");
//               li.textContent = tvInfo;
//               listInfo.appendChild(li)
//           }
//           const container = document.getElementById("table-field")
//           container.appendChild(listInfo)
//
// const buttonsStuff1 = document.getElementById("button1");
// buttonsStuff1.style.backgroundColor = "red"
// buttonsStuff1.addEventListener("mouseover", tvTypes)



// function tvPrices(product) {
//     for (let i = 0; i < inventory.length; i++) {
//         const tvPrice = product.map((products) => {
//             return products.price + ",-"
//         })
//     }
//     const listInfo = document.createDocumentFragment();
//     for (let list of tvPrice) {
//         const li = document.createElement("li");
//         li.textContent = list;
//         listInfo.appendChild(li)
//     }
//     const container = document.getElementById("table-field")
//     container.appendChild(listInfo)
//
// }
// tvPrices(inventory)

//const element = document.getElementById("demo");
// element.remove();

////4c
// function tvData(tv) {
//   let container = "";
//
//   for (let i = 0; i < tv.availableSizes.length; i++) {
//       const inch = tv.availableSizes[i];
//       const cm = tv.availableSizes[i] * 2.54;
//       container =`${container}${inch} inch (${cm}) cm | `;
//     }
//   return container;
// }
// console.log(tvData(inventory[5]));