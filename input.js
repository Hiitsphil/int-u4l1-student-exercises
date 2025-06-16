let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".messages");
let inputElem=document.querySelector("input");

// CODE ALONG, PART 1 CONTINUED
// 3. Declare a variable to store the input element


submitButton.addEventListener("click", function() {
    let answer= inputElem.value;
    // 4. Declare a variable to store the value of the input
    // 5. Use the console to check a value is saved.
    console.log(answer);
    //  - Type something and click the button to confirm it works!


    

    // CODE ALONG, PART 2
    // 6. User .innerHTML to display the value to the messages div.
    messages.innerHTML=answer;
    // 7. Type something and test it out.


});