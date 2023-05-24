// API call

let getweather = ()=>{
    let search = document.getElementById('search').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ad84f46eb744e196d3712a680d29adff`)
    .then((res)=>{
        let temp = document.querySelector('#temp').innerHTML = res.data.main.temp+' °C';
        let humidity = document.querySelector('#humidity').innerHTML=res.data.main.humidity+'%';
        // let temp_max = document.querySelector('#temp_max').innerHTML=res.data.main.temp_max;
        // let temp_min = document.querySelector('#temp_min').innerHTML=res.data.main.temp_min;
        let City = document.querySelector('#City');
        City.innerText = res.data.name;
        let Wind = document.querySelector('#Wind');
        Wind.innerText = res.data.wind.speed + ' km/h';
        // console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}