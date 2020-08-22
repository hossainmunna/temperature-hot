//  const apiKey = '7c307420df4f88e58918b1ffdb5c94d7';
//  const apiBase ='https://api.openweathermap.org/data/2.5/weather';


         //const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;

        function  searchCity(){
                const cityName = document.getElementById('city').value;
                
                fetch(`https:api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7c307420df4f88e58918b1ffdb5c94d7`)
                .then(response => response.json())
                .then(data => {
                     const  tempKelvin = data.main.temp;
                     const  tempCelsius = parseInt(tempKelvin - 273.15); 
                     document.getElementById('show_city').innerText=cityName;
                     document.getElementById('show_temperature').innerText=tempCelsius;
                })   

        }
        // document.getElementById('search_button').addEventListener('click', searchCity());
        
     


  
        