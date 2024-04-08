//Variablen
//Aufgabe 1
var meinname = "Lyne";
//Aufgabe 2
console.log(meinname);
//Aufgabe 3
var alter = 10;
//Aufgabe 4
console.log(alter);
//Aufgabe 5
var x = 6;
console.log(x);
//Aufgabe 6
var y = 11;
console.log(y);
//Aufgabe 7
var sum = x + y;
console.log(sum);
// Variablen verarbeiten
var isGreater = x > y;
console.log(isGreater);
if (isGreater == true) {
    console.log("Es stimmt, x>y");
}
else {
    console.log("Stimmt nicht, x<y");
}
var Wochentag = "Montag";
if (Wochentag == "Dienstag") {
    console.log("kein Wochenende");
}
else if (Wochentag == "Donnerstag") {
    console.log("Kein Montag");
}
else if (Wochentag == "Samstag") {
    console.log("Wochenende");
}
else {
    console.log("Montag");
}
function Wochentag_bestimmen() {
    var Wochentag = "Dienstag";
    if (Wochentag == "Dienstag") {
        console.log("kein Wochenende");
    }
    else if (Wochentag == "Donnerstag") {
        console.log("Kein Montag");
    }
    else if (Wochentag == "Samstag") {
        console.log("Wochenende");
    }
    else {
        console.log("Montag");
    }
}
Wochentag_bestimmen();
function WochentagmitArgument(Wochentag) {
    if (Wochentag == "Dienstag") {
        console.log("kein Wochenende");
    }
    else if (Wochentag == "Donnerstag") {
        console.log("Kein Montag");
    }
    else if (Wochentag == "Samstag") {
        console.log("Wochenende");
    }
    else {
        console.log("Montag");
    }
}
WochentagmitArgument(Wochentag);
var WochentagWochenende = "Samstag";
WochentagmitArgument(WochentagWochenende);
