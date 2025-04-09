// from parameters create a url to request

/*
    PARAMETERS

    base is the currency to quote against
    symbol is the currency we want the exchange rate for

    LINKS

    https://exchangeratesapi.io/
*/
const createUrl = (base, symbol) => `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}&access_key=27b60580e8f75be8f472a0dabdbcad8d`;

export default createUrl;
