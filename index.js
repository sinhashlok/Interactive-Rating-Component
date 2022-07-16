var res = document.querySelectorAll(".rate");
var ind = 0;
var already = -1;

document.addEventListener("click", (e) => {

    res.forEach(function(item, index) {
        if (e.target == item)
            ind = index;
    })
    console.log(ind)

    if (already != -1)
        res[already].classList.remove("pressed");

    res[ind].classList.add("pressed");
    already = ind;
})

document.querySelector("button").addEventListener("click", function () {
    if (already != -1)
    {
        document.querySelector(".thankyou").style.display = "block";
        document.querySelector(".rating_section").style.display = "none";
        ind ++;
        document.querySelector(".thankrating").innerHTML = "You selected " + ind + " out of 5";
    }
})