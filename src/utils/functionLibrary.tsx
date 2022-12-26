const users = [
    {
        "name": "Erik",
        "group": 1
    },
    {
        "name": "Lisa",
        "group": 2
    },
    {
        "name": "Hampus",
        "group": 2
    },
    {
        "name": "Linda",
        "group": 3
    },
    {
        "name": "Eva",
        "group": 1
    },
    {
        "name": "Anna",
        "group": 3
    }
]

const groups = [
    {
        "id": 1,
        "groupName": "Hajarna"
    },
    {
        "id": 2,
        "groupName": "Valarna"
    },
    {
        "id": 3,
        "groupName": "Zebrorna"
    }
]

const validateZipCode = (zipCode: string) => {
    if (zipCode.length !== 5) {
        return false;
    }
    return true;
}

const createHeading = (heading: string) => {
    return `<h1>${heading}</h1>`;
}

const formatPrice = (price: number, country: string, currency: string) => {
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

const getUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    });
}

const getGroups = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(groups);
        }, 1000);
    });
}

/* const getGroupsWithUsers = async () => {
    const users = await getUsers();
    const groups = await getGroups();
    const groupWithUsers = groups.map(group => {
        return {
            ...group,
            users: users.filter(user => user.group === group.id)
        }
    });
    return groupWithUsers;
} */




export { validateZipCode, createHeading, formatPrice, isLowerCase, isPrime, genitive, getUsers, getGroups };