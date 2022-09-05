const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function employees (employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

