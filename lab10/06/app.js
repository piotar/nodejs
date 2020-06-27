const express = require('express');
const axios = require('axios');
const app = express();

const errorMiddleware = (error, req, res, next) => {
    const { message } = error;
    console.log('error message', message);
    throw error;
};

async function getUser(userId) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}

async function getWeather(lat, lng) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`);
    return response.data;
}

// http://localhost:4000/user/2
app.get('/user/:userId', async (req, res, next) => {
    const { userId } = req.params;
    try {
        const user = await getUser(userId);
        const { lat, lng } = user.address.geo;
        const weather = await getWeather(lat, lng);

        const result = {
            name: user.name,
            email: user.email,
            weather: {
                temp: weather.main.temp,
                windSpeed: weather.wind.speed,
            },
        };

        res.send(result);

    } catch (error) {
        next(error);
    }
});

app.use(errorMiddleware);

app.listen(4000, () => console.log('start server'));