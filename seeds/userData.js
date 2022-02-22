
const { User } = require("../models");

const userData = [
    {
        username: "Uncle_anti",
        password: "pass416",
    },
    {
        username: "TankYu",
        password: "pass416",
    },
    {
        username: "GamingEnjoyer",
        password: "pass416",
    },
    {
        username: "GodlikeSlug416",
        password: "pass416",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;