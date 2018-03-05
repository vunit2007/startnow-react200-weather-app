import axios from 'axios'; 
import moment from 'moment';

export function updateCityInput(CityInput) {
    console.log("food", CityInput)
    const payload = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${CityInput}&appid=5f55cc42bc5e52c998955895c60a9cb6&units=imperial`)
    return {
        type: 'UPDATE_CITY_INPUT',
        payload
    };
}

export function addHistory(CityInput) {
    return {
        type: 'ADD_HISTORY',
        payload: {
            CityInput, date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}

//payload is an object with two items inside of it.