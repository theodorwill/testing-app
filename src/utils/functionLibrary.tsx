const validateZipCode = (zipCode: string) => {
    if (zipCode.length !== 5) {
        return false;
    }
    return true;
}

const createHeading = (heading: string) => {
    return `<h1>${heading}</h1>`;
}

const formatPrice = (price: number, country:string, currency:string) => {
    return new Intl.NumberFormat(country, {
        style: 'currency',
        currency: currency,
    }).format(price);
}

const isLowerCase = (str: string) => {
    return str === str.toLowerCase() ? true : false;
}

const isPrime = (num: number) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

const genitive = (noun: string) => {
    if (noun.endsWith('s')) {
        return `${noun}`;
    } else {
        return `${noun}'s`;
    }
}




export { validateZipCode, createHeading, formatPrice, isLowerCase, isPrime, genitive };