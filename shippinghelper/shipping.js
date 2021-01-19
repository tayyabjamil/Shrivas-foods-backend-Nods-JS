const ShippingAmount = async (country, quantity) => {
  var finalPrice;
  var isCountry;
  const calculatedQuantity =  getQuantity(quantity); 
    function isUSA() {
      var amount = { 5: 560, 10: 525, 15: 460, 20: 445, 25: 440, 30: 430, 35: 420, 40: 415, 45: 410, 50: 405, 55: 400, 60: 395 };
      return finalPrice = amount[calculatedQuantity]  * (calculatedQuantity + 2)
    }
    function isUK() {
      var amount = { 5: 660, 10:625, 15: 560, 20: 545, 25: 540, 30: 530, 35: 520, 40: 515, 45: 410, 50: 405, 55: 400, 60: 395 };
      return finalPrice = amount[calculatedQuantity] * (calculatedQuantity + 2)
    }
     function isAus() {
      var amount = { 5: 560, 10: 525, 15: 460, 20: 445, 25: 440, 30: 430, 35: 420, 40: 415, 45: 410, 50: 405, 55: 400, 60: 395 };
      return finalPrice = amount[calculatedQuantity]  * (calculatedQuantity+ 2)
    }
    function isCANADA() {
      var amount = { 5: 660, 10:625, 15: 560, 20: 545, 25: 540, 30: 530, 35: 520, 40: 515, 45: 410, 50: 405, 55: 400, 60: 395 };
      return finalPrice = amount[calculatedQuantity] * (calculatedQuantity + 2)
    }
    function isIND() {
      var amount = { 5: 660, 10:625, 15: 560, 20: 545, 25: 540, 30: 530, 35: 520, 40: 515, 45: 410, 50: 405, 55: 400, 60: 395 };
      return finalPrice = amount[calculatedQuantity] * (calculatedQuantity + 2)
    }
  
    var countries = {
      'USA': isUSA(),
      'UK': isUK(),
      'CANADA': isCANADA(),
      'AUSTRILA': isAus(),
      'INDIA': isIND()
    };
    isCountry = countries[country];
    console.log(finalPrice + " Final Price");
    return finalPrice;

  }
  function getQuantity(quantity) {
    const calculatedQuantity  = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].reduce((prev, curr) => Math.abs(curr - quantity) < Math.abs(prev - quantity) ? curr : prev);
    console.log(calculatedQuantity + " KGS");
    return calculatedQuantity;
  }


module.exports = ShippingAmount;