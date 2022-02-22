
const { Post } = require("../models");

const postData = [
    {
        title: "I want to time travel",
        post_content: "The past seems cool more swords, horses and cool stuff.",
        date_created: 11 / 9 / 2021,
        user_id: 1,
    },
    {
        title: "How do I computer???",
        post_content: "Puter broken please fix.",
        date_created: 8 / 17 / 2021,
        user_id: 2,
    },
    {
        title: "How do I code in a volcano",
        post_content: "I'm living in a volcano, I dont think its possible to code like this.",
        date_created: 2 / 6 / 2022,
        user_id: 3,
    },
    {
        title: "Birthday",
        post_content: "Its my birthday I know its not tech but please be nice to me. :)",
        date_created: 9 / 9 / 2021,
        user_id: 4,
    },
    {
        title: "Is solo game develpoment a good idea?",
        post_content: "I know it could be hard but so is life.",
        date_created: 7 / 14 / 2019,
        user_id: 1,
    },
    {
        title: "Dota 2",
        post_content: "So fellas when is the patch coming?",
        date_created: 1 / 18 / 2019,
        user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

