let temperature = 25;

if (temperature >= 30) {
    console.log("It's a hot day!\n");
} else {
    console.log("It's a normal day!\n");
}

let isRaining = true;

if (isRaining) {
    console.log("Don't forget your umbrella!\n");
} else {
    console.log("Enjoy your day!\n");
}

let time = 14;

if (time >= 6 && time <= 12) {
    console.log("Good morning!\n");
} else if (time > 12 && time <= 18) {
    console.log("Good afternoon!\n");
} else if (time > 18 && time <= 24) {
    console.log("Good evening!\n");
} else {
    console.log("Good night!\n");
}
