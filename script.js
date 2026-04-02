// Currency Converter: Dollars to Rands and Rands to Dollars
function convertCurrency(){       //function for converter

    // Choose conversion type
    let choice = prompt("Choose conversion:\n1 = Dollars to Rands\n2 = Rands to Dolars");

    // Prompt the user to enter the amount they want to convert
    let amount = prompt("Enter the amount");

    // Variable for converting Dollars to Rands
    if(choice == 1){

        // Exchange rate for 1 Dollar
        result = amount * 18.50

        // Display the result of the conversion
        document.getElementById("result").innerHTML = "$" + amount + "= R" + result.toFixed(2);
    }

    // If the user chooses to convert Rands to Dollars
    else if(choice == 2){

        // Exchange rate for 1 Rand
        result = amount / 18.50;

        // Display the result of the conversion
        document.getElementById("result").innerHTML = "R" + amount + " = $" + result.toFixed(2);
    }

    // If the user enters an invalid choice
    else{
        document.getElementById("result").innerHTML = "Invalid choice. Please select 1 or 2";
    }
}