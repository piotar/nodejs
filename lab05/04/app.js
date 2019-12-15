
const add = async (a, b) => {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error('liczba parzysta');
    }
    return result;
}

add(4, 7)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

// wywołanie z innymi danymi
add(2, 2)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));