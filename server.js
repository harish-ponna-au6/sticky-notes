const express = require("express");
const hbs = require("hbs");
const methodOverride = require("method-override");
const session = require("express-session");
const dotenv = require("dotenv")
dotenv.config()
require("./db");


// Init
const app = express();

// Setting HBS as template engine
app.set("view engine", "hbs");
app.set("views", "views/pages");
app.set("view options", { layout: "layout" });
app.use(express.static('statics'));

// Registering hbs partials
hbs.registerPartials("./views/partials");

// Having user form body parsed
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Adding custom request type override query key name
app.use(methodOverride("_method"));

// Adding the session capabilities
app.use(
  session({
    secret: "stickyNotesSecret",
    resave: false,
    name: "stickySession",
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: false,
      sameSite: "strict"
    }
  })
);


app.get("/", function (req, res) {
  function shuffle(array) {
    if (req.session.userId) return res.redirect("/dashboard")
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  arr = ["rgb(137, 250, 250)", "#40c4ff", "#cddc39", "#c6ff00", "#64dd17", "#00c853", "#e65100", "#ff8f00", "#ffd600", "#f1ff75", " rgb(94, 218, 63)", "rgb(165, 100, 226)", " rgb(235, 106, 235)", "#0dd3ff"]
  shuffle(arr)
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return res.render("home-page", {
    title: "Home Page",
    color0: arr[0],
    color1: arr[1],
    color2: arr[2],
    color3: arr[3],
    color4: arr[4],
    color5: arr[5],
    color6: arr[6],
    color7: arr[7],
    color8: arr[8],
    deg0: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
    deg1: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
    deg2: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
    deg3: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
    deg4: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
    deg5: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
    deg6: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
    deg7: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
  });
});

app.get("/sample-look", (req,res)=>{
  res.render("sample-look")
})

app.use(require("./routes/getRoutes"));
app.use(require("./routes/postRoutes"));
app.use(require("./routes/deleteRoutes"));
app.use(require("./routes/updateRoutes"));

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));


// #2000ffb3   #2000ffd1  #000000d1