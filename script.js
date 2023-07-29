const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions");
const dropdownList = document.getElementById("dropdown-list");

function search(query) {
  const userInput = query.toLowerCase();
  return fruit.filter((fruit) => fruit.toLowerCase().includes(userInput));
}

function showSuggestions(event) {
  const allSuggestions = Array.from(suggestions.getElementsByTagName("li"));
  allSuggestions.forEach((suggestion) =>
    suggestion.classList.remove("highlight")
  );

  const targetSuggestion = event.target;
  targetSuggestion.classList.add("highlight");
}

function useSuggestion(event) {
  const selectedSuggestion = event.target.textContent;
  input.value = selectedSuggestion;
  suggestions.innerHTML = "";
  dropdownList.innerHTML = ""; //Hide the drop down after selection
}
console.log("input", input);
input.addEventListener("keyup", function () {
  const userInput = input.value;
  const results = search(userInput);

  //Clear the previous results
  suggestions.innerHTML = "";

  //Clear the previous dropdown list
  dropdownList.innerHTML = "";

  //Display the dropdown if there are matching fruits
  if (results.length > 0) {
    results.forEach((fruit) => {
      const listItem = document.createElement("li");
      listItem.textContent = fruit;
      listItem.addEventListener("click", useSuggestion);
      listItem.addEventListener("mouseover", showSuggestions);
      listItem.addEventListener("mouseout", function () {
        listItem.classList.remove("highlight");
      });
      suggestions.appendChild(listItem);

      const dropdownItem = document.createElement("li");
      dropdownItem.textContent = fruit;
      dropdownItem.addEventListener("click", useSuggestion);
      dropdownItem.addEventListener("mouseover", showSuggestions);
      dropdownItem.addEventListener("mouseout", function () {
        dropdownItem.classList.remove("highlight");
      });

      dropdownList.appendChild(dropdownItem);
    });
    suggestions.style.display = "block";
    dropdownList.style.display = "block"; //Show the dropdown list
  } else {
    suggestions.style.display = "none";
    dropdownList.style.display = "none"; //Hide the dropdown list
  }
});

//Hide the dropwdown when clicking outside the search bar
document.addEventListener("click", function (event) {
  if (!suggestions.contains(event.target) && event.target !== input) {
    suggestions.style.display = "none";
    dropdownList.style.display = "none";
  }
});

input.addEventListener("focus", function () {
  const userInput = input.value;
  const results = search(userInput);

  //Clear the previous results
  suggestions.innerHTML = "";

  //Clear the previous dropdown list
  dropdownList.innerHTML = "";

  //Display the dropdown if there are matching fruits
  if (results.length > 0) {
    results.forEach((fruit) => {
      const listItem = document.createElement("li");
      listItem.textContent = fruit;
      listItem.addEventListener("click", useSuggestion);
      listItem.addEventListener("mouseover", showSuggestions);
      listItem.addEventListener("mouseout", function () {
        listItem.classList.remove("highlight");
      });
      suggestions.appendChild(listItem);

      const dropdownItem = document.createElement("li");
      dropdownItem.textContent = fruit;
      dropdownItem.addEventListener("click", useSuggestion);
      dropdownItem.addEventListener("mouseover", showSuggestions);
      dropdownItem.addEventListener("mouseout", function () {
        dropdownItem.classList.remove("highlight");
      });

      dropdownList.appendChild(dropdownItem);
    });
    suggestions.style.display = "block";
    dropdownList.style.display = "block"; //Show the dropdown list
  } else {
    suggestions.style.display = "none";
    dropdownList.style.display = "none"; //Hide the dropdown list
  }
});
