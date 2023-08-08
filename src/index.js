import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data'; // default does not need curly braces


// console.log('index file', contact);
styleBody();
addTitle('Testing Testing');

const premUsers = getPremUsers(users);
console.log( users, premUsers );
console.log('test');