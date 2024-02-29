generate();
function generate() {
    let red = Math.round(Math.random() * 205) + 50;
    let green = Math.round(Math.random() * 205) + 50;
    let blue = Math.round(Math.random() * 205) + 50;
    let redHex;
    let greenHex;
    let blueHex;
    red = red.toString(2);
    green = green.toString(2);
    blue = blue.toString(2);
    if (red.length < 8) {
        while (red.length !== 8) {
            red = "0" + red;
        }
    }
    if (green.length < 8) {
        while (green.length !== 8) {
            green = "0" + green;
        }
    }
    if (blue.length < 8) {
        while (blue.length !== 8) {
            blue = "0" + blue;
        }
    }
    switch (red[0] + red[1] + red[2] + red[3]) {
        case "0000":
            redHex = "0";
            break;
        case "0001":
            redHex = "1";
            break;
        case "0010":
            redHex = "2";
            break;
        case "0011":
            redHex = "3";
            break;
        case "0100":
            redHex = "4";
            break;
        case "0101":
            redHex = "5";
            break;
        case "0110":
            redHex = "6";
            break;
        case "0111":
            redHex = "7";
            break;
        case "1000":
            redHex = "8";
            break;
        case "1001":
            redHex = "9";
            break;
        case "1010":
            redHex = "A";
            break;
        case "1011":
            redHex = "B";
            break;
        case "1100":
            redHex = "C";
            break;
        case "1101":
            redHex = "D";
            break;
        case "1110":
            redHex = "E";
            break;
        case "1111":
            redHex = "F";
            break;
    }
    switch (red[4] + red[5] + red[6] + red[7]) {
        case "0000":
            redHex += "0";
            break;
        case "0001":
            redHex += "1";
            break;
        case "0010":
            redHex += "2";
            break;
        case "0011":
            redHex += "3";
            break;
        case "0100":
            redHex += "4";
            break;
        case "0101":
            redHex += "5";
            break;
        case "0110":
            redHex += "6";
            break;
        case "0111":
            redHex += "7";
            break;
        case "1000":
            redHex += "8";
            break;
        case "1001":
            redHex += "9";
            break;
        case "1010":
            redHex += "A";
            break;
        case "1011":
            redHex += "B";
            break;
        case "1100":
            redHex += "C";
            break;
        case "1101":
            redHex += "D";
            break;
        case "1110":
            redHex += "E";
            break;
        case "1111":
            redHex += "F";
            break;
    }
    switch (green[0] + green[1] + green[2] + green[3]) {
        case "0000":
            greenHex = "0";
            break;
        case "0001":
            greenHex = "1";
            break;
        case "0010":
            greenHex = "2";
            break;
        case "0011":
            greenHex = "3";
            break;
        case "0100":
            greenHex = "4";
            break;
        case "0101":
            greenHex = "5";
            break;
        case "0110":
            greenHex = "6";
            break;
        case "0111":
            greenHex = "7";
            break;
        case "1000":
            greenHex = "8";
            break;
        case "1001":
            greenHex = "9";
            break;
        case "1010":
            greenHex = "A";
            break;
        case "1011":
            greenHex = "B";
            break;
        case "1100":
            greenHex = "C";
            break;
        case "1101":
            greenHex = "D";
            break;
        case "1110":
            greenHex = "E";
            break;
        case "1111":
            greenHex = "F";
            break;
    }
    switch (green[4] + green[5] + green[6] + green[7]) {
        case "0000":
            greenHex += "0";
            break;
        case "0001":
            greenHex += "1";
            break;
        case "0010":
            greenHex += "2";
            break;
        case "0011":
            greenHex += "3";
            break;
        case "0100":
            greenHex += "4";
            break;
        case "0101":
            greenHex += "5";
            break;
        case "0110":
            greenHex += "6";
            break;
        case "0111":
            greenHex += "7";
            break;
        case "1000":
            greenHex += "8";
            break;
        case "1001":
            greenHex += "9";
            break;
        case "1010":
            greenHex += "A";
            break;
        case "1011":
            greenHex += "B";
            break;
        case "1100":
            greenHex += "C";
            break;
        case "1101":
            greenHex += "D";
            break;
        case "1110":
            greenHex += "E";
            break;
        case "1111":
            greenHex += "F";
            break;
    }
    switch (blue[0] + blue[1] + blue[2] + blue[3]) {
        case "0000":
            blueHex = "0";
            break;
        case "0001":
            blueHex = "1";
            break;
        case "0010":
            blueHex = "2";
            break;
        case "0011":
            blueHex = "3";
            break;
        case "0100":
            blueHex = "4";
            break;
        case "0101":
            blueHex = "5";
            break;
        case "0110":
            blueHex = "6";
            break;
        case "0111":
            blueHex = "7";
            break;
        case "1000":
            blueHex = "8";
            break;
        case "1001":
            blueHex = "9";
            break;
        case "1010":
            blueHex = "A";
            break;
        case "1011":
            blueHex = "B";
            break;
        case "1100":
            blueHex = "C";
            break;
        case "1101":
            blueHex = "D";
            break;
        case "1110":
            blueHex = "E";
            break;
        case "1111":
            blueHex = "F";
            break;
    }
    switch (blue[4] + blue[5] + blue[6] + blue[7]) {
        case "0000":
            blueHex += "0";
            break;
        case "0001":
            blueHex += "1";
            break;
        case "0010":
            blueHex += "2";
            break;
        case "0011":
            blueHex += "3";
            break;
        case "0100":
            blueHex += "4";
            break;
        case "0101":
            blueHex += "5";
            break;
        case "0110":
            blueHex += "6";
            break;
        case "0111":
            blueHex += "7";
            break;
        case "1000":
            blueHex += "8";
            break;
        case "1001":
            blueHex += "9";
            break;
        case "1010":
            blueHex += "A";
            break;
        case "1011":
            blueHex += "B";
            break;
        case "1100":
            blueHex += "C";
            break;
        case "1101":
            blueHex += "D";
            break;
        case "1110":
            blueHex += "E";
            break;
        case "1111":
            blueHex += "F";
            break;
    }
    document.getElementById("page-name").style.color = "#" + redHex + greenHex + blueHex;
    document.getElementById("cloak").style.borderColor = "#" + redHex + greenHex + blueHex;
    document.getElementById("cloak").style.color = "#" + redHex + greenHex + blueHex;
    document.getElementById("eject").style.borderColor = "#" + redHex + greenHex + blueHex;
    document.getElementById("eject").style.color = "#" + redHex + greenHex + blueHex;
    document.getElementById("games").style.borderColor = "#" + redHex + greenHex + blueHex;
    document.getElementById("games").style.color = "#" + redHex + greenHex + blueHex;
    document.getElementById("emulators").style.borderColor = "#" + redHex + greenHex + blueHex;
    document.getElementById("emulators").style.color = "#" + redHex + greenHex + blueHex;
    document.getElementById("home").style.borderColor = "#" + redHex + greenHex + blueHex;
    document.getElementById("home").style.color = "#" + redHex + greenHex + blueHex;
}
setInterval(generate, 750);