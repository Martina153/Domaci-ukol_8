
console.log("Funguju")

//Objednávka
const elButton = document.querySelector('#btn-order')
const objednavka = () => {
    elButton.textContent = 'Objednáno'
}

elButton.addEventListener('click', objednavka)

//Kontrola dostupnosti

/*window.addEventListener('load', function() {
    const elButton = document.querySelector('.kontrola');
    elButton.textContent = 'Kontroluji dostupnost…' 
    }); */
//V kontextu HTML tlačítka, které má atribut disabled, nastavení elButton.disabled = false; 
//způsobí, že atribut disabled bude odebrán a tlačítko se stane aktivním, 
//což umožní uživateli s tlačítkem interagovat (klikat na něj, odesílat formulář apod.).
//V kódu by mohl být i opačný zápis elButton.disabled = true;, který by vlastnost "disabled" nastavil 
//na pravdivou hodnotu true a tlačítko by se stalo neaktivním (uživatel by nemohl s tlačítkem interagovat).
    window.addEventListener('load', function() {
        elButton.textContent = 'Kontroluji dostupnost…'; 
        setTimeout(function() {
            elButton.textContent = 'Objednat';
            elButton.disabled =false;
        }, 8000);});


//Catering

const justFood = (count) => {
    let cena = count*100
  return `Catering od Just Food pro ${count} lidí za ${cena} Kč`
}

const yourMama = (count) => {
    let cena = count*150
    return `Catering od Your Mama pro ${count} lidí za ${cena} Kč`
}
const flavourHaven = (count) => {
    let cena = count*200
    return `Catering od Flavour Haven pro ${count} lidí za ${cena} Kč`
}


const createEvent  = (nazevUdalosti, count, vlozenaFunkce) => {
    const funkce = vlozenaFunkce(count).toLowerCase();
    return `Událost ${nazevUdalosti} s ${funkce}`
}

//