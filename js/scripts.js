const schimeSvg = document.querySelector(".schime-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 800;
let totalPrice = 0;
schimeSvg.addEventListener("click", (event) => {
if ( !event.target.classList.contains("booked")) {
      event.target.classList.toggle("active");
      let totalSeats=schimeSvg.querySelectorAll(".active").length;
      totalPrice= totalSeats*cost;
      totalPriceTag.textContent = totalPrice;
}
});
