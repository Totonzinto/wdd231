 const data = JSON.parse(localStorage.getItem('signupData'));

    const list = document.getElementById('user-details');
    if (data) {
      list.innerHTML = `
        <li><strong>First Name:</strong> ${data.fname}</li>
        <li><strong>Last Name:</strong> ${data.lname}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Interest:</strong> ${data.interest}</li>
        <li><strong>Newsletter:</strong> ${data.newsletter ? 'Yes' : 'No'}</li>
      `;
    } else {
      list.innerHTML = `<li>No data submitted.</li>`;
    }

    // Footer info
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;