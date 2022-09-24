const { Sequelize } = require('sequelize')


module.exports = new Sequelize({
    database: 'boty',
    username: 'Mamatov',
    password: 'root',
    host: 'localhost',
    port: '5432',
    dialect: "postgres",

});


// module.exports = new Sequelize({
//     database: 'd9edmlvcac9bjl',
//     username: 'ecpcyiztmbvaje',
//     password: '6dbcdab5ba920bccf63a6cb385dc2a0b624775d5b5fc7d89825d1b0958652a63',
//     host: 'ec2-54-229-217-195.eu-west-1.compute.amazonaws.com',
//     port: '5432',
//     dialect: "postgres",
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     },
// });
