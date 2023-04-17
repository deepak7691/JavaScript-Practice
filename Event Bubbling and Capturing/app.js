//                          "Event Bubbling"

// document.getElementById("myButton").addEventListener("click", function (event) {
//     console.log("Button clicked!");
// });

// document.getElementById("inner").addEventListener("click", function (event) {
//     console.log("Inner div clicked!");
// })

// document.getElementById("outer").addEventListener("click", function (event) {
//     console.log("Outer div clicked!");
// });

// document.getElementById("middle").addEventListener("click", function (event) {
//     console.log("Middle div clicked!");
// });


//    Output:
//  Button clicked!
//  Inner div clicked!
//  Middle div clicked!
//  Outer div clicked!


// ****************************************************************************************************************


//                          "Event Capturing"

// document.getElementById("outer").addEventListener("click", function (event) {
//     console.log("Outer div clicked during capturing phase!");
// }, true);

// document.getElementById("middle").addEventListener("click", function (event) {
//     console.log("Middle div clicked during capturing phase!");
// }, true);

// document.getElementById("inner").addEventListener("click", function (event) {
//     console.log("Inner div clicked during capturing phase!");
// }, true);

// document.getElementById("myButton").addEventListener("click", function (event) {
//     console.log("Button clicked during capturing phase!");
// }, true);


//        output:
//  Outer div clicked during capturing phase!
//  Middle div clicked during capturing phase!
//  Inner div clicked during capturing phase!
//  Button clicked during capturing phase!



// ***************************************************************************************************************


//                     "Event Bubbling and Capturing" 


document.getElementById("myButton").addEventListener("click", function (event) {
    console.log("Button clicked!");
});

document.getElementById("inner").addEventListener("click", function (event) {
    console.log("Inner div clicked!");
})

document.getElementById("outer").addEventListener("click", function (event) {
    console.log("Outer div clicked!");
});

document.getElementById("middle").addEventListener("click", function (event) {
    console.log("Middle div clicked!");
});


document.getElementById("outer").addEventListener("click", function (event) {
    console.log("Outer div clicked during capturing phase!");
}, true);

document.getElementById("middle").addEventListener("click", function (event) {
    console.log("Middle div clicked during capturing phase!");
}, true);

document.getElementById("inner").addEventListener("click", function (event) {
    console.log("Inner div clicked during capturing phase!");
}, true);

document.getElementById("myButton").addEventListener("click", function (event) {
    console.log("Button clicked during capturing phase!");
}, true);


//       output:
// Outer div clicked during capturing phase!
// Middle div clicked during capturing phase!
// Inner div clicked during capturing phase!
// Button clicked during capturing phase!
// Button clicked!
// Inner div clicked!
// Middle div clicked!
// Outer div clicked!