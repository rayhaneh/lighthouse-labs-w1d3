var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {

  var companySalesTax = {};

  // Looping through database
  for (var i = 0; i < salesData.length; i++) {

    // Get name, province and sales of each data point
    name        = salesData[i].name

    province    = salesData[i].province
    sales       = salesData[i].sales
console.log(salesTaxRates[province])
    // Calculate the total sales and the tax based on their province tax rate
    var totalSales = 0;
    sales.forEach(function (sales) {
      totalSales += sales
    })
    totalTaxes  = totalSales * salesTaxRates[province]


    // Checking if the company exits and adding the data to it
    if (companySalesTax[name]) {
      companySalesTax[name]["totalSales"] += totalSales
      companySalesTax[name]["totalTaxes"] += totalTaxes
    } else {
      companySalesTax[name] = {totalSales: totalSales, totalTaxes: totalTaxes}
    }

  }

  // Returing the results
  return companySalesTax;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)

// Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }