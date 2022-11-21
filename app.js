console.log('Hello from node app');
var passenger = {
    name: 'Passenger 1',
    email: 'passenger@gmail,com',
    age:23,
    phone:[3354545]
};
var data = JSON.stringify(passenger);
console.log(data);
//{"name":"Passenger 1","email":"passenger@gmail,com","age":23,"phone":[3354545]}
var text = '{"name":"Passenger 1","email":"passenger@gmail,com","age":23,"phone":[3354545]}'
var data = JSON.parse(text);
console.log(data);  