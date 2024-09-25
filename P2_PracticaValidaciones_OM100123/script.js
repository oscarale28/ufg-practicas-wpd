document
  .getElementById("contactPhone")
  .addEventListener("input", function (event) {
    const input = event.target;
    if (input.value.length > 8) {
      input.value = input.value.slice(0, 8);
    }
  });

// get the onchange event from hotelCheckIn
document
  .getElementById("hotelCheckIn")
  .addEventListener("change", function (event) {
    const input = event.target;
    const checkOut = document.getElementById("hotelCheckOut");
    checkOut.min = input.value;
  });
