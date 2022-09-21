const textArea = document.querySelector(".textarea");
const totalCount = document.querySelector(".total-counter");
const remainingCount = document.querySelector(".remaining-counter");

const getValue = () => {
  const totalValue = textArea.value.length;
  totalCount.innerHTML = totalValue;
  remainingCount.innerHTML = 150 - totalValue;
};

textArea.addEventListener("keyup", () => {
  getValue();
});
