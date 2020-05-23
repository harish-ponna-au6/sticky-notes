var User = require("../models/User");
var Note = require("../models/Note");

module.exports = {
    async renderDashboard(req, res) {
        try {
            var stickies=1
            const notes = await Note.find({ userId: req.session.userId })
            function shuffle(array) {
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
            if (notes.length > 0) {
                stickies=undefined
                arr = ["#9c27b0", "#4a148c", "#e91e63", "#ff4081", "#3f51b5", "#673ab7", "#6200ea", "#0288d1", "#40c4ff", "#cddc39", "#c6ff00", "#64dd17", "#00c853", "#e65100", "#ff8f00", "#ffd600", "#ff6d00"]
                shuffle(arr)
                i = 0
                j = 0
                function randomIntFromInterval(min, max) { // min and max included 
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
                while (i != notes.length) {
                    notes[i].color = arr[j]
                    notes[i].width = `${randomIntFromInterval(110, 220)}px`
                    notes[i].height = `${randomIntFromInterval(110, 170)}px`
                    notes[i].deg = `rotate(${randomIntFromInterval(-4, 4)}deg)`
                    date = `${notes[i].createdAt}`
                    date = date.split(" ")
                    date = date.slice(0, 4).join(" ")
                    notes[i].date = date
                    i += 1
                    j += 1
                    if (arr[j] == arr[-1]) {
                        j = 0
                        shuffle(arr)
                    }
                }
            }
            function randomIntFromInterval(min, max) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            arr = ["rgb(137, 250, 250)", "#40c4ff", "#cddc39", "#c6ff00", "#64dd17", "#00c853", "#e65100", "#ff8f00", "#ffd600", "#f1ff75", " rgb(94, 218, 63)", "rgb(165, 100, 226)", " rgb(235, 106, 235)", "#0dd3ff"]
            shuffle(arr)
            var day = new Date().getDay()
            var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            res.render("dashboard", {
                userId: req.session.userId,
                userName: req.session.userName,
                stickies,
                notes: notes,
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
                day: dayArray[day]
            })
        } catch (error) {
            console.log(error)
            res.redirect("/");
        }
    },
    async renderCreateSticky(req, res) {
        try {
            function shuffle(array) {
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
            res.render("create-sticky", {
                userId: req.session.userId,
                userName: req.session.userName,
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
                deg8: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
            })
        } catch (error) {
            console.log(error)
        }
    },
    async renderViewSticky(req, res) {
        try {
            const note = await Note.findById(req.query.stickyId)
            function shuffle(array) {
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
            res.render("view-sticky", {
                userId: req.session.userId,
                userName:req.session.userName,
                note,
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
                deg8: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
            })
        } catch (error) {
            console.log(error)
        }
    },
    async renderUpdateSticky(req, res) {
        try {
            const note = await Note.findById(req.query.stickyId)
            function shuffle(array) {
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
            res.render("update-sticky", {
                userId: req.session.userId,
                userName:req.session.userName,
                note,
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
                deg8: `rotate(${randomIntFromInterval(-4, 4)}deg)`,
            })
        } catch (error) {
            console.log(error)
        }
    },
   
};
