document.getElementById('businessForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the default way

    // Capture form data
    const formData = {
      membershipNumber: document.getElementById('membershipNumber').value,
      carWashName: document.getElementById('carWashName').value,
      registeredBusinessName: document.getElementById('registeredBusinessName').value,
      regitrationNo: document.getElementById('regitrationNo').value,
      businessBankAccount: document.getElementById('businessBankAccount').value,
      sarsPin: document.getElementById('sarsPin').value,
      ownership: document.getElementById('ownership').value,
      nameAndSurname: document.getElementById('nameAndSurname').value,
      ownersID: document.getElementById('ownersID').value,
      contactNumber: document.getElementById('contactNumber').value,
      emailAddress: document.getElementById('emailAddress').value,
      joiningDate: document.getElementById('joiningDate').value,
      physicalAddress: {
        line1: document.getElementById('line1').value,
        line2: document.getElementById('line2').value,
        city: document.getElementById('city').value,
        province: document.getElementById('province').value,
        gpsCoordinate: {
          latitude: document.getElementById('latitude').value,
          longitude: document.getElementById('longitude').value
        }
      }
    };

    // Send form data to the server using Fetch API
    fetch("http://localhost:5000/nacwo/api/v1/carwash", requestOptions, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(data => {
      alert('Business data submitted successfully!');
      console.log(data);
    })
    .catch(error => {
      alert('Error submitting data');
      console.error('Error:', error);
    });
  });
