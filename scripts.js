function getResults() {
  document.getElementById('results').innerHTML = "Loading...";
  var xhttp = new XMLHttpRequest();
  var ethNum = document.getElementById('number').value;
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementById('results').innerHTML = ethNum + " ETH is equal to: $" + (JSON.parse(xhttp.responseText).USD * ethNum).toFixed(2) + ".";
      console.log(xhttp.responseText);
    }
  }
  xhttp.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", true);
  xhttp.send();
}
