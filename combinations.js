function subSequience(){
    var input = document.getElementById("input").value;
    for (let index = 0; index < input.length; index++) {
         for (let ind = index+1; ind < (input.length)+1; ind++) {
            console.log(input.substring(index, ind));
         }
    }
    input = "See console"
    document.getElementById("output").innerHTML = input;
}
