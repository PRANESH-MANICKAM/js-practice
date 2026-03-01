let prices = [7, 1, 5, 3, 6, 4];

// 5;

const maxProfit = (arr) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i= 0; i < arr.length; i++) {
        if(arr[i] < minPrice) {
            minPrice = arr[i]
        } else if(arr[i] - minPrice > maxProfit) {
            maxProfit = arr[i] - minPrice
        }
    }

    return maxProfit;
};

console.log(maxProfit(prices));