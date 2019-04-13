var a = 10;
function fn () {
    if (!a) {
        var a = 20;
    }
    console.log(a); //20
}