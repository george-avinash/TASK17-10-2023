var res = fetch('https://restcountries.com/v2/all');

res.then((data) => data.json()).then((data1) => {
  var countryList = document.createElement('div');
  countryList.id = 'country-list';
  
  var container = document.createElement('div');
  container.className = 'container';

  var row = document.createElement('div');
  row.className = 'row row-cols-4';

  for (let i = 0; i < data1.length; i++) {
 
    var col = document.createElement('div');
    col.className = 'col';
    
    col.innerHTML = `
    <div class="card" style="width: 18rem;">
    <h5 class="card-title">${data1[i].name}</h5>
    <img src="${data1[i].flag}" class="card-img-top" alt="">
        <div class="card-body">
        <p class="card-text">Capital: ${data1[i].capital}</p>
        <p class="card-text">Region: ${data1[i].region}</p>
        <p class="card-text">CountryCode: ${data1[i].cioc}</p>
    <div class="card-footer">
        <button class="btn btn-primary" id="button" onclick="getWeather('${data1[i].name}')">Click for weather</button>
    </div>
    </div>
    </div>`;

    
    row.appendChild(col);
  }
  container.appendChild(row);

  countryList.appendChild(container);
  
  document.body.appendChild(countryList);
});
function getWeather(countryName) {
  
    var apiKey = 'e79844b7d5877f709b2f6eb80d96bc88';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
      .then((data) => data.json())
      .then((data) => {
      
        alert(`Weather in ${countryName}: ${data.weather[0].description}`);
      })
      .catch((error) => {
        alert('Error fetching weather data');   
      });
  }
