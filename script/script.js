const orderNowBtn = document.querySelector("#orderNowModal .btn-primary");

orderNowBtn.addEventListener("click", function () {
  const selectedService = document.querySelector(
    '#orderNowModal input[name="service"]:checked'
  );

  if (selectedService) {
    const price = selectedService.dataset.price;

    alert(`You have ordered ${selectedService.value} for $${price}`);

    $("#orderNowModal").modal("hide");
  } else {
    alert("Please select a service");
  }
});
