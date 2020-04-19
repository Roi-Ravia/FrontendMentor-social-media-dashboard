// Change Theme logic.

let styleSheet = ['styles.css', 'styles-white-mode.css'];

let sheetNum = 0;

function switchTheme(sheet) {
    sheetNum++;
    sheet = styleSheet[sheetNum % 2];
    document.getElementById("sheetDark").setAttribute('href', sheet);
};


// Daily users logic.

let dailyUsers = document.getElementsByClassName("daily-users");
console.log(dailyUsers[3].innerHTML[0]);


for (let i = 0; i < dailyUsers.length; i++) {
    if (dailyUsers[i].innerHTML[0] === "-") {
        dailyUsers[i].style.color = "indianred";
        dailyUsers[i].innerHTML = dailyUsers[i].innerHTML.substring(1, dailyUsers[i].innerHTML.length);
        dailyUsers[i].innerHTML = "▾" + dailyUsers[i].innerHTML;
    } else {
        dailyUsers[i].style.color = "mediumseagreen";
        dailyUsers[i].innerHTML = "▴" + dailyUsers[i].innerHTML;
    }
}