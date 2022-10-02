//get element by id
const number_of_peopleInput = document.getElementById('pepole');
const number_of_busesInput = document.getElementById('bus');
//get show  element
const getElementTag = document.getElementById('result');

// alcation function
function do_allocation(number_of_people, number_of_buses) {
    let result = [];
    let busCapacity = 1;
    let i = 0;
    while (number_of_people > 0) {
        if (i < number_of_buses) {
            result.push(Math.min(number_of_people, busCapacity));
            number_of_people -= busCapacity;
            busCapacity += result[i];
            i++;
        } else {
            result.push(0);
        }
    }
    return result;
}


//after click button
document.getElementById('submit-btn').addEventListener('click', function () {

    //get input value
    const number_of_people = number_of_peopleInput.value;
    const number_of_buses = number_of_busesInput.value;

    //error handling start
    if (number_of_people <= 0 || number_of_buses <= 0) {

        alert("Please , Input more than 1 ")

    }



    else {
        // get fucntion result 
        const result = do_allocation(number_of_people, number_of_buses);

        //set  result  in element tag  and show  on UI
        getElementTag.innerText = result;
    }


    //clear the input value
    number_of_peopleInput.value = " ";
    number_of_busesInput.value = " "

})

