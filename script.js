const convertButton = document.querySelector(".convert-button")
const selectCurrencyToConvert = document.querySelector(".select-currency-to-convert")
const selectCurrencyConverted = document.querySelector(".select-currency-converted")
const changeValueName = document.getElementById("name-value-converted")
const changeValueImg = document.querySelector(".logoDolar")
const changeValueNameOne = document.getElementById("name-value-convert")
const changeValueImgOne = document.querySelector(".logoReal")

async function convertValues() {
    const inputCurrencyValue = (document.querySelector(".input-currency").value).replace(",", ".")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value-converted") //Valor convertido

    const moedas = "USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL"
    const url = `https://economia.awesomeapi.com.br/last/${moedas}`
    const data = await fetch(url).then(response => response.json())

    let total = 1
    const dolarToday = data.USDBRL["bid"]
    const euroToday = data.EURBRL["bid"]
    const libraToday = data.GBPBRL["bid"]
    const bitcoinToday = data.BTCBRL["bid"]
    const real = 1


    // PRIMEIRO SELECT *********************************************************//
    if (selectCurrencyToConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * dolarToday
        changeValueNameOne.innerHTML = "Dólar Americano";
        changeValueImgOne.setAttribute("src", "./assets/dolar.png");
    };

    if (selectCurrencyToConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * euroToday
        changeValueNameOne.innerHTML = "Euro";
        changeValueImgOne.setAttribute("src", "./assets/euro.png");
    };

    if (selectCurrencyToConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GPB",
        }).format(inputCurrencyValue).replace(/GPB/, "£");
        total = inputCurrencyValue * libraToday
        changeValueNameOne.innerHTML = "Libra";
        changeValueImgOne.setAttribute("src", "./assets/libra.png");
    };

    if (selectCurrencyToConvert.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT", minimumFractionDigits: 8,
        }).format(inputCurrencyValue).replace(/XBT/, "₿");
        total = inputCurrencyValue * bitcoinToday
        changeValueNameOne.innerHTML = "Bitcoin";
        changeValueImgOne.setAttribute("src", "./assets/bitcoin.png");
    };

    if (selectCurrencyToConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * real
        changeValueNameOne.innerHTML = "Real";
        changeValueImgOne.setAttribute("src", "./assets/real.png");
    };

    //SEGUNDO SELECT *****************************************************//
    if (selectCurrencyConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(total / dolarToday);
        changeValueName.innerHTML = "Dólar Americano";
        changeValueImg.setAttribute("src", "./assets/dolar.png");
    };

    if (selectCurrencyConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(total / euroToday);
        changeValueName.innerHTML = "Euro";
        changeValueImg.setAttribute("src", "./assets/euro.png");
    };

    if (selectCurrencyConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GPB",
        }).format(total / libraToday).replace(/GPB/, "£");
        changeValueName.innerHTML = "Libra";
        changeValueImg.setAttribute("src", "./assets/libra.png");
    };

    if (selectCurrencyConverted.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT", minimumFractionDigits: 8,
        }).format(total / bitcoinToday).replace(/XBT/, "₿");
        changeValueName.innerHTML = "Bitcoin";
        changeValueImg.setAttribute("src", "./assets/bitcoin.png");
    };

    if (selectCurrencyConverted.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(total / real)
        changeValueName.innerHTML = "Real";
        changeValueImg.setAttribute("src", "./assets/real.png");
    };
}

convertButton.addEventListener("click", convertValues)
selectCurrencyConverted.addEventListener("change", convertValues)
selectCurrencyToConvert.addEventListener("change", convertValues)