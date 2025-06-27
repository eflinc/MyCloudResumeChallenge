fetch("https://4fsjj44t22.execute-api.us-east-1.amazonaws.com/Prod/visitorcount")
  .then(response => response.json())
  .then(data => {
    document.getElementById("counter").textContent = data.visitorCount;
  })
  .catch(error => {
    console.error("API error:", error);
    document.getElementById("counter").textContent = "—";
  });