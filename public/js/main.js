const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const output_city_Name = document.getElementById('output_city_Name')
const temp_real_val = document.getElementById('temp_real_val')
const tempStatus = document.getElementById('tempStatus')
const datahide = document.querySelector('.data_hide')

const getInfo = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value;

    if (cityVal === "") {
        output_city_Name.innerText = `plz write name of city`
        datahide.classList.add('data_hide')
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5065884fbf7ce189606eda903c001225`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data] // array of an object bnalya - keoka data easily get krskyyS
            output_city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // tempStatus.innerText = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            const tempMood =arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                tempStatus.innerHTML = 
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                tempStatus.innerHTML =
                    "<i class='fas  fa-sun' style='color:#eccc68;'></i>";

            }

            datahide.classList.remove('data_hide')

        } catch (error) { // agr url py kuch incorrect data dala city ka tp error dekha skty islya try catch
            output_city_Name.innerText = `plz write the correct city name`
            datahide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click', getInfo)

// 5065884fbf7ce189606eda903c001225