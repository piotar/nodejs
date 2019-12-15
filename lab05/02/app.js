
const div = (a, b) => {
    if (b === 0) {
        throw new Error('divide by 0');
    }
    return a / b;
}

try {
    const result = div(2, 0);
    console.log(result);
} catch (error) {
    console.log(error.message);
}

try {
    const result = div(2, 1);
    console.log(result);
} catch (error) {
    console.log(error.message);
}