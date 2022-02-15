function setAction(form) {
    form.action = "form.html";

    //Initialize and get variables.
    var inputRed = document.getElementById("inputRed").value;
    var inputGreen = document.getElementById("inputBlue").value;
    var inputBlue = document.getElementById("inputBlue").value;
    numRed = Number(inputRed);
    numGreen = Number(inputGreen);
    numBlue = Number(inputBlue);

    //Verify the variables exists. 
    console.log("inputRed: ", numRed);
    console.log("inputGreen: ", numGreen);
    console.log("inputBlue: ", numBlue);

    //Check that user inputs are between 0 and 1.
    if (numRed >= 0 && numRed <= 1) {
        console.log("inputRed is valid.");
    } else if (numGreen >= 0 && inputGreen <= 1) {
        console.log("inputGreen is numGreen.");
    } else if (numBlue >= 0 && numBlue <= 1) {
        console.log("inputBlue is valid.");
    } else {
        alert("Please enter a value between 0 and 1.");
        exit();
    }

    //Add all input values.
    let allInputValues = numBlue + numRed + numGreen;
    console.log("allInputValues: ", allInputValues);

    //Check if input values are 3 or below.
    if (allInputValues > 3.0) {
        console.log("Inputs are over 3.");
        alert("Please enter a value between 0 and 1.");
        exit();
    }

    //Divide input value by total for input ratios. 
    let ratioRed = numRed / allInputValues;
    let ratioBlue = numBlue / allInputValues;
    let ratioGreen = numGreen / allInputValues;

    console.log(ratioRed);
    console.log(ratioBlue);
    console.log(ratioGreen);

    //Get L. This is the max of RGB values entered.
    let maxL = Math.max(numRed, numGreen, numBlue);

    console.log(maxL);

    //Display output
    alert("User inputs converting to rho, gamma, beta, and L, respectively, are (" + ratioRed + ", " + ratioGreen + ", " + ratioBlue + ", " + maxL + ").");

    var result = "User inputs converting rho, gamma, beta, and L, respectively, are (" + ratioRed + ", " + ratioGreen + ", " + ratioBlue + ", " + maxL + ").";

    return result;
}
