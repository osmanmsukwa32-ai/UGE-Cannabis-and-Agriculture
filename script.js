
function searchUGE() {
  const query = document
    .getElementById("search")
    .value.trim();

  if (query === "") {
    alert("Please enter something to search.");
    return;
  }

  const cards = document.querySelectorAll(".card");
  let found = false;

  cards.forEach(card => {
    const matches = card.innerText
      .toLowerCase()
      .includes(query.toLowerCase());

    card.style.display = matches ? "block" : "none";

    if (matches) found = true;
  });

  if (!found) {
    alert("No matching category found.");
  }
}
