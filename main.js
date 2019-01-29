let input = document.getElementById('userInput');
let submit = document.getElementById('button');
let resultList = document.getElementById('result');
let results = [];


    window.onload = function() {
        if (sessionStorage.getItem("autosave"))
            input.value = sessionStorage.getItem("autosave");
        };
        submit.addEventListener("click", () => {
            sessionStorage.setItem('autosave', input.value)
            splitAndCheck(input.value);
        });

    };

    //Function to split the input into an array of numbers and check if the input is valid number and is just up to 10 digits
    function splitAndCheck(value){
        results.length = 0;
        let valueSplitted = value.split(" ");

        if(valueSplitted[0]=== "") { // Checking there is input
            alert("Sorry! Must enter a number");
        } else if(valueSplitted.length > 10){  //Checking the number of inputs is less than 10
            alert("Sorry! You can only enter up to 10 numbers");
        } else {
            divideIntoTwoUnits(valueSplitted); // If the input is valid, the valueSplitted array is sent to divideIntoTwoUnits function
        }
    }

    //Function to divide the input into even and odds and send them to print
	function divideIntoTwoUnits(valueArray){
        valueArray.forEach((value) => {
            if((parseInt(value))%2 === 0) {
                results.push(convertToFehrenheit(parseInt(value)));
            } else {
                results.push(convertToKelvin(parseInt(value)));
            }
        });
        print(results, valueArray);
    }

    //Function to print the results
    function print(results, valueArray){
        for(let i = 0; i < valueArray.length; i++){
            let text = valueArray[i] + "&#176;C is " + results[i];
            var item = `
                        <li id="li">${text}</li>
                        `;
            resultList.insertAdjacentHTML('beforeend', item);
            }
    }

    //Function to Convert input to Fehrenheit
    function convertToFehrenheit(value){
        let tempInFehrenheit = ((value * 9/5) + 32) ;
        return tempInFehrenheit.toFixed(2) + "&#176;F";
    }

    //Function to Convert input to Kelvin
    function convertToKelvin(value){
        let tempInKelvin = (value +273.15);
        return tempInKelvin.toFixed(2) + "&#176;K";
    }

    //Function to reset the input field
    function clearInput() {
            location.reload();
            let item = document.getElementById('li');
            resultList.removeChild(item);

    }