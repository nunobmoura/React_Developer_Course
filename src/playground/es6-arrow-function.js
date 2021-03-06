const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Nuno Moura'));


const getSecondName = (fullName) => fullName.split(' ')[1];

console.log(getSecondName('Nuno Moura'));