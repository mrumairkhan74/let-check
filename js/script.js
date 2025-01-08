const scriptUrl = 'https://script.google.com/macros/s/AKfycbxVCZjGSKSZDHY987Ry-9zG_tCa585en9VDKrbQ0oQt4AEIUUcDfdnkzoQFpifOuHqwQA/exec'

const form = document.forms['contact-form']
 form.addEventListener('submit',e=>{
    e.preventDefault();
    fetch(scriptUrl,{method:'POST',body: new FormData(form)})
    .then(response => alert("Thanks you! Your Request is Submitted Successfully. Our Team Will Contact you soon After Review Your Request"))
    .then(()=>{window.location.href='../index.html'})
    .catch(error=>console.error('Error!',error.message))
 })