const yahooStockPrices = require('yahoo-stock-prices');


const  testYahooPrice = async ():Promise<void> =>{
    const data = await yahooStockPrices.getCurrentData('AAPL');
    console.log(data); // { currency: 'USD', price: 132.05 }
};

console.log("hello world");
testYahooPrice()





