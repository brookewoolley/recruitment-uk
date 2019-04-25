
function transactionFilter(res){
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var request = new XMLHttpRequest();
  request.addEventListener("load", master_listener);
  request.open('GET', 'https://transactions.spokedev.xyz/transactions');
  request.send();
  function master_listener() {
    var data = JSON.parse(this.responseText)
    var categories = {}

    for (var i = 0; i < data.length; i++) {
      var key = data[i]['category'];
      if (categories[key]) {
        categories[key]['totalNumber'] += 1
        categories[key]['totalValue'] += data[i]['amount']
        categories[key]['averageValue'] = categories[key]['totalValue'] / categories[key]['totalNumber']
      } else {
        categories[key] = {totalNumber: 1, totalValue: data[i]['amount'], averageValue: data[i]['amount']}
      }
    }
    res.send(categories);
  }
}

module.exports = transactionFilter;
