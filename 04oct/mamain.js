const isAdult = (age) => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
//console.log(isAdult(29))
const logmessage = (age) => {
    if(isAdult(age)) {
        console.log("es mayor de edad")

    } else {
    console.log("es menor de edad")
}
}
