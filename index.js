function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

const logShout = (string) => {
    console.log(string.toUpperCase())
}

const logWhisper = (string) => {
    console.log(string.toLowerCase())
}


const sayHiToHeadphonedRoommate = (string) => {
    if(string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!" }
    }

    
console.log(sayHiToHeadphonedRoommate("hello!")); // Output: "I can't hear you!"
console.log(sayHiToHeadphonedRoommate("I can't hear you!")); // Output: "HELLO!"
console.log(sayHiToHeadphonedRoommate("HELLO!")); // Output: "Yes indeed!"
console.log(sayHiToHeadphonedRoommate("let's have dinner together")); // Output: "i would love to!"
