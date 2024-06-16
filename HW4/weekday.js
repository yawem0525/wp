var weeks={Sunday:0 ,Monday:1,Tuesday:2,Wednesday:3,Thusday:4,Friday:5,Saturday:6}
var str=['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];
function weekday(str){
    var a = ""
    for(let i in str)
        a+= weeks[str[i]] + " "
    return a
}
console.log(weekday(str))
