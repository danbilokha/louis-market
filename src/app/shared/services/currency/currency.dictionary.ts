enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    UAH = 'UAH'
}

interface IBankGovUaCurrencyModel {
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
}

class ConvertCurrency {
    constructor(value: number, currency: Currency) {
    }
}

export {Currency, ConvertCurrency, IBankGovUaCurrencyModel};