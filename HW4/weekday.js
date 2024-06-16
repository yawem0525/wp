function weekday(str){
    var a = ""
    for(let i in str)
        a+= weeks[str[i]] + " "
    return a
}
console.log(weekday(str))
