const { Comment } = require("../models");

const commentData = [
    {
        comment_content: "Im from the past lol",
        date_created: 9 / 7 / 1421,
        user_id: 4,
        post_id: 1,
    },
    {
        comment_content: "I dont think your in the right place.",
        date_created: 8 / 21 / 2021,
        user_id: 3,
        post_id: 2,
    },
    {
        comment_content: "Very carefuly my friend, very carefuly.",
        date_created: 2 / 6 / 2022,
        user_id: 2,
        post_id: 3,
    },
    {
        comment_content: "Nah pal I don't care.",
        date_created: 8 / 12 / 2021,
        user_id: 1,
        post_id: 4,
    },
    {
        comment_content: "Its all if you can make it big I guess give it a shot. :)",
        date_created: 7 / 15 / 2019,
        user_id: 3,
        post_id: 1,
    },
    {
        comment_content: "Never. 😔",
        date_created: 2 / 21 / 2019,
        user_id: 2,
        post_id: 6,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;