document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const postalCode = document.getElementById('postalCode').value;

    console.log('Form submitted');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('Birth Date:', birthDate);
    console.log('Gender:', gender);
    console.log('Address:', address);
    console.log('Country:', country);
    console.log('Postal Code:', postalCode);

    alert('Form submitted successfully!');
});
