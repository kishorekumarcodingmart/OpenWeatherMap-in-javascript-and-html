const form = document.getElementById("myForm");
let Data

form.addEventListener('submit', handleForm);

function handleForm(event) { 
    event.preventDefault(); 
    let city = document.getElementById('city').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2a2f3ef6345388be6f495bd087fbf06`)
    .then(response => Data = response.data)
    .catch(()=>{console.clear();alert('City Not Found')}) 
    console.log(Data)
}
