enum Currency {
    USD = 1,
    EUR = 2,
    UAH = 3
}

class ConvertCurrency {
    constructor(value: number, currency: Currency) {
    }
}

const TIME_TO_FETCH_CURRENCIES = 600000;

export {Currency, ConvertCurrency, TIME_TO_FETCH_CURRENCIES};