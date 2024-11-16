// Select the elements with the class 'next' and 'prev'
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

// Add a click event listener to the 'next' element
next.addEventListener("click", function () {
  // Select all elements with the class 'item'
  let items = document.querySelectorAll(".item");

  // Append the first item to the end of the '.slide' element
  document.querySelector(".slide").appendChild(items[0]);
});

// Add a click event listener to the 'prev' element
prev.addEventListener("click", function () {
  // Select all elements with the class 'item'
  let items = document.querySelectorAll(".item");

  // Prepend (add to the beginning) the last item to the '.slide' element
  // items.length - 1 selects the last item in the NodeList
  document.querySelector(".slide").prepend(items[items.length - 1]); //length of the item =6
});

const contents = document.getElementsByClassName("content");

document.addEventListener("DOMContentLoaded", () => {
  // Convert the HTMLCollection to an array and iterate over each 'content' element
  Array.from(contents).forEach((content) => {
    // Create a new div element
    const div = document.createElement("div");
    // Add the class 'fs-cp-section' to the div
    div.classList.add("fs-cp-section");
    // Set the HTML content of the div with the font selector and color picker markup
    div.innerHTML = `<div class="font-selector">
      <!--<span class="font-title">Select Font</span>
      <p class="font-para">
        Enhance your reading experience by selecting your favorite font
        style. Use the font selector above to personalize the text to your
        liking. Experiment with different fonts until you find the one that
        suits your taste and makes reading a pleasure.
      </p>-->
      <select name="font-selector">
        <option value="sans-serif">Sans Serif</option>
        <option value="monospace">Monospace</option>
        <option value="cursive">Cursive</option>
        <option value="fantasy">Fantasy</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    </div>
    <div class="color-picker">
      <!--<span class="color-title">Pick a Color</span>
      <p class="color-para">
        Discover the power of customization! you can easily select your
        preferred colors to tailor your browsing experience. Explore a
        spectrum of hues until you find the perfect palette that resonates
        with your style. Make your browsing experience uniquely yours with
        custom colors!
      </p>-->
      <div class="input-group">
        <input
          type="color"
          name="color-picker"
          value="#ffffff"
        />
        <button class="check-btn">&check;</button>
      </div>
    </div>`;
    // Append the div to the 'content' element
    content.appendChild(div);
     // Get the font selector and color picker elements from the newly created div
    const fontSelector = div.querySelector("select[name='font-selector']");
    const colorPicker = div.querySelector("input[type='color']");
    const checkBtn = div.querySelector(".check-btn");
     // Add an event listener to the font selector
    fontSelector.addEventListener("change", () => {
      content.style.fontFamily = fontSelector.value;
    });
    // Add an event listener to the check button
    checkBtn.addEventListener("click", () => {
      content.style.color = colorPicker.value;
    });
  });
});
