const users = [
    {name: 'mario', premium: true},
    {name: 'luigi', premium: false},
    {name: 'yoshi', premium: true},
    {name: 'toad', premium: true},
    {name: 'peach', premium: false}
];

const getPremUsers = users => {
    return users.filter(user => user.premium);
}

// export default users; // exports users as the main thing from this file
export { getPremUsers, users as default };