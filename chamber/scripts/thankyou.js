function getParams() {
      const params = new URLSearchParams(window.location.search);
      return {
        first: params.get("first"),
        last: params.get("last"),
        email: params.get("email"),
        phone: params.get("phone"),
        company: params.get("company"),
        level: params.get("level"),
        timestamp: params.get("timestamp")
      };
    }

    function showSummary() {
      const data = getParams();
      const summary = `
        <strong>First Name:</strong> ${data.first || "N/A"}<br/>
        <strong>Last Name:</strong> ${data.last || "N/A"}<br/>
        <strong>Email:</strong> ${data.email || "N/A"}<br/>
        <strong>Phone:</strong> ${data.phone || "N/A"}<br/>
        <strong>Business Name:</strong> ${data.company || "N/A"}<br/>
        <strong>Membership Level:</strong> ${data.level || "N/A"}<br/>
        <strong>Submitted On:</strong> ${new Date(data.timestamp).toLocaleString() || "N/A"}
      `;
      document.getElementById("summary").innerHTML = summary;
    }

    document.addEventListener("DOMContentLoaded", showSummary);