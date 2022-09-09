const dateDictionary = {
    "1": "Jan",
    "2": "Feb",
    "3": "Mar",
    "4": "Apr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Aug",
    "9": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
}

let statementsProvided = ["1", "3", "5", "6", "10"];

for (let i = 0; i < statementsProvided.length; i++) {
    if (statementsProvided.length == 12) {
        document.getElementById("year").style.color = "green";
        break;
    }
    let currentItem = statementsProvided[i]
    let month = dateDictionary[currentItem];
    console.log(month);
    document.getElementById(month).style.color = "blue";
}