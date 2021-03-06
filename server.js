const path = require("path");
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection.js");
const helpers = require("./utils/helpers");

// Server config for handlebars, incorporate custom helper method
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

// Set up sessions with cookies
const sess = {
    secret: "something to change",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// Sets up the routes
const routes = require("./controllers");
app.use(routes);
// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});