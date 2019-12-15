
const myFunc = async () => {
    return 'hello world';
}

/**
 * jednoznaczne z tym zapisem:

const myFunc = () => {
    return new Promise((resolve, reject) => {
        resolve('hello world');
    });
}

 */

myFunc()
    .then(result => {
        console.log(result);
    });