const scriptUrl = 'https://script.google.com/macros/s/AKfycbxVCZjGSKSZDHY987Ry-9zG_tCa585en9VDKrbQ0oQt4AEIUUcDfdnkzoQFpifOuHqwQA/exec'

const form = document.forms['contact-form']
 form.addEventListener('submit',e=>{
    e.preventDefault();
    fetch(scriptUrl,{method:'POST',body: new FormData(form)})
    .then(response => alert("Thanks you! Your Request is Submitted Successfully. Our Team Will Contact you soon After Review Your Request"))
    .then(()=>{window.location.reload()})
    .catch(error=>console.error('Error!',error.message))
 })




       // hidden input script
       function showInputBox() {
         var selectedOption = document.getElementById("device").value;
         var inputBox = document.getElementById("otherInput");

         // Check if "Other" option is selected
         if (selectedOption === "other") {
             inputBox.style.display = "block"; // Show the input box
         } else {
             inputBox.style.display = "none"; // Hide the input box
         }
     }
   function showInputBox1() {
         var selectedOption = document.getElementById("problem").value;
         var inputBox = document.getElementById("otherInput1");

         // Check if "Other" option is selected
         if (selectedOption === "other") {
             inputBox.style.display = "block"; // Show the input box
         } else {
             inputBox.style.display = "none"; // Hide the input box
         }

         
     }
