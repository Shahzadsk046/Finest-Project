var counter = 1;
var counterFeatured = 1;
var counterBest = 1;
var prevv = document.getElementById('prev')
var nextv = document.getElementById('next')
var prevvFeatured = document.getElementById('prevFeature')
var nextvFeatured = document.getElementById('nextFeature')
var prevvBest = document.getElementById('prevBests')
var nextvBest = document.getElementById('nextBests')
// console.log("Prev variable =" + prevv.outerHTML)
// console.log("Next variable =" + nextv.outerHTML)

// var prevclass = prevv.outerHTML;

if (counter === 1) {
    // console.log(prevv.outerHTML)
    prevv.style.display = "none";
    // prevv.style.pointerEvents = "none";
}
if (counterFeatured === 1) {
    // console.log(prevv.outerHTML)
    prevvFeatured.style.display = "none";
    // prevv.style.pointerEvents = "none";
}
if (counterBest === 1) {
    // console.log(prevv.outerHTML)
    prevvBest.style.display = "none";
    // prevv.style.pointerEvents = "none";
}

function next() {
    ++counter;
    if (counter >= 3) {
        // console.log(nextv)
        nextv.style.display = "none";
        this.disable = true;
    } else if (counter == 2) {
        nextv.style.display = "block";
        // console.log(prevv)
        prevv.style.display = "block";

    } else {
        nextv.style.display = "block";
    }
}


// for (item of prevvFeatured) {
//     console.log(item)
//     item.style.display = "none";
// }
// for (item of prevvBest) {
//     console.log(item)
//     item.style.display = "none";
// }
function prev() {
    --counter;
    if (counter <= 1) {
        // console.log(prevv)
        prevv.style.display = "none"
        // this.disable = true;
    } else if (counter == 2) {
        prevv.style.display = "block";
        // console.log(nextv)
        nextv.style.display = "block";

    } else {
        prevv.style.display = "block";
    }
}



function nextFeatured() {
    ++counterFeatured;
    if (counterFeatured >= 3) {
        // console.log(nextv)
        nextvFeatured.style.display = "none";
        this.disable = true;
    } else if (counterFeatured == 2) {
        nextvFeatured.style.display = "block";
        // console.log(prevv)
        prevvFeatured.style.display = "block";

    } else {
        nextvFeatured.style.display = "block";
    }
}

function prevFeatured() {
    --counterFeatured;
    if (counterFeatured <= 1) {
        // console.log(prevv)
        prevvFeatured.style.display = "none"
        // this.disable = true;
    } else if (counterFeatured == 2) {
        prevvFeatured.style.display = "block";
        // console.log(nextv)
        nextvFeatured.style.display = "block";

    } else {
        prevvFeatured.style.display = "block";
    }
}
function nextBest() {
    ++counterBest;
    if (counterBest >= 3) {
        // console.log(nextv)
        nextvBest.style.display = "none";
        this.disable = true;
    } else if (counterBest == 2) {
        nextvBest.style.display = "block";
        // console.log(prevv)
        prevvBest.style.display = "block";

    } else {
        nextvBest.style.display = "block";
    }
}

function prevBest() {
    --counterBest;
    if (counterBest <= 1) {
        // console.log(prevv)
        prevvBest.style.display = "none"
        // this.disable = true;
    } else if (counterBest == 2) {
        prevvBest.style.display = "block";
        // console.log(nextv)
        nextvBest.style.display = "block";

    } else {
        prevvBest.style.display = "block";
    }
}
