alert("welcome to your site");


function getElemnt(){
    //get elemnts from
    let unit=document.querySelector("#unit").value;

    let firstInput=document.querySelector("#f-input").value;

    let final=document.querySelector(".l-export");

    
    const data = {
        number: firstInput,
        to: unit
    };
    fetch('https://tabdeal.liara.run', {
        method: 'POST', // Specify the method as POST
        headers: {
            'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: JSON.stringify(data) // Convert the JavaScript object to JSON
    })
    .then(response => response.json()) // Parse the JSON response from the server
    .then(data => {
        console.log('Success:', data); // Handle the server response
    })
    .catch((error) => {
        console.error('Error:', error); // Handle any errors
    });

}







