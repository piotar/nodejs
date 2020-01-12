const axios = require('axios');

const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await axios.get(url);
    return response.data;
}

(async () => {
    try {
        const ids = [2, 3, 5, 7];
        const usersPromises = ids.map(id => getUser(id));
        const users = await Promise.all(usersPromises);

        users.forEach(user => console.log(user.name));
    } catch (error) {
        console.log('user not found');
    }
})();
