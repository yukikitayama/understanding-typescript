// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // tuple type
//   role: [number, string];
// } = {
//   name: 'Yuki',
//   age: 33,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Convention to starts with Capital
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Yuki',
  age: 33,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// push is not supported
// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'extra'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // ERROR
}

console.log(person.role);

if (person.role === Role.AUTHOR) {
  console.log('if author');
}

