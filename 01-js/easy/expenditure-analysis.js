/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let n = transactions.length;
  if( n == 0 ){
    return [];
  }

  let map = new Map();

  for( let i = 0; i < n; i++ ){
      if(map.has(transactions[i].category)){
          let value = map.get(transactions[i].category);
          map.set(transactions[i].category, value + transactions[i].price );
      }else{
        map.set(transactions[i].category, transactions[i].price );
      }
  }

  let ansList = [];

  for (let [key, value] of map) {
    
    ansList.push({ "category": key, "totalSpent": value });

  }

  return ansList;
}

module.exports = calculateTotalSpentByCategory;
