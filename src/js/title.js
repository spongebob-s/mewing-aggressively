document.getElementById("title").innerText = "Beta 1.0";
setTimeout(() => {
    const possibleTitles = [
        "Hello world!",
        "Interesting...",
        "Who's Joe?",
        "I made this!",
        "Cloogle Gassroom",
        "No games here...",
        "Stay positive!",
        "This is random BTW",
        "Can this run DOOM?",
        "We am resmarted"
    ];
    let titleIdx = Math.round(Math.random() * (possibleTitles.length - 1));
    document.getElementById("title").innerText = possibleTitles[titleIdx];
}, 2000);
