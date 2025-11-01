// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

// 1️⃣ Change text color of heading with id="title" to red.
document.getElementById("title").style.color="red";

// 2️⃣ Change background color of all <p> elements to lightgray.
let Back = document.getElementsByTagName("p"); 
for (let i = 0; i < Back.length; i++)
{
    Back[i].style.backgroundColor = "lightgray";
}

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
document.getElementById("title").textContent = "Welcome to the DOM Lab!";

// 4️⃣ Add a solid black border to all <div> elements.
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) 
{
    divs[i].style.border = "2px solid black";
}

// 5️⃣ Increase font size of the first <h1> to 36px.
document.querySelector("h1").style.fontSize = "36px";

// 6️⃣ Change text color of elements with class="highlight" to blue.
let highlights = document.getElementsByClassName("highlight");
for (let i = 0; i < highlights.length; i++)
{
    highlights[i].style.color = "blue";
}

// 7️⃣ Add CSS class "active" to the first <div>.
document.querySelector("div").classList.add("active");

// 8️⃣ Change the <body> background color to lightblue.
document.body.style.backgroundColor = "lightblue";

// 9️⃣ Set the font family of all <p> elements to Arial.
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++)
{
    paragraphs[i].style.fontFamily = "Arial";
}

// 🔟 Change the image source of #sampleImage.
document.getElementById("sampleImage").src="Photo/Florence.png";

// 🟦 PART 2: Creating and Appending Elements (11–20)

// 1️⃣1️⃣ Create a new <p> and append it to the <body>.
let newP = document.createElement("p");
newP.textContent = "This paragraph was added with JavaScript.";
document.body.appendChild(newP);

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
let newLi = document.createElement("li");
newLi.textContent = "New List Item";
document.getElementById("list").appendChild(newLi);

// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
let btn = document.createElement("button");
btn.textContent = "Click Me!";
document.querySelector("div").appendChild(btn);

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
let newH2 = document.createElement("h2");
newH2.textContent = "Inserted H2 dynamically!";
let firstP = document.querySelector("p");
document.body.insertBefore(newH2, firstP);

// 1️⃣5️⃣ Create an image and set width and height.
let img = document.createElement("img");
img.src = "Photo/Rome.png";
img.width = 80;
img.height = 80;
document.body.appendChild(img);

// 1️⃣6️⃣ Add 3 new <li> items using a loop.
for (let i = 1; i <= 3; i++) 
{
    let li = document.createElement("li");
    li.textContent = "Extra item " + i;
    document.getElementById("list").appendChild(li);
}

// 1️⃣7️⃣ Create a <div> with class "card" and text inside.
let card = document.createElement("div");
card.className = "card";
card.textContent = "This is a new card.";
document.body.appendChild(card);

// 1️⃣8️⃣ Append a paragraph containing your name.
let nameP = document.createElement("p");
nameP.textContent = "Created by Mohammad Makhoul";
document.body.appendChild(nameP);

// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
document.querySelectorAll("p").forEach(p => 
    p.insertAdjacentHTML("beforeend", " <span>[Edited]</span>")
);
// 2️⃣0️⃣ Remove the last child of <ul>.
let list = document.getElementById("list");
list.removeChild(list.lastElementChild);

// 🟨 PART 3: Event Handling (21–30)

// 2️⃣1️⃣ Add click event that shows an alert.
document.getElementById("mainButton").addEventListener("click", () => alert("Button Clicked!"));

// 2️⃣2️⃣ Change background color of a <div> when clicked.
document.querySelector("div").addEventListener("click", e => e.target.style.backgroundColor = "pink");

// 2️⃣3️⃣ When hovering over <p>, make it bold.
document.querySelectorAll("p").forEach(p => 
    p.addEventListener("mouseover", () => p.style.fontWeight = "bold")
);

// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
document.querySelectorAll("p").forEach(p => 
    p.addEventListener("mouseleave", () => p.style.fontWeight = "normal")
);

// 2️⃣5️⃣ Add button to hide the image.
let hideBtn = document.createElement("button");
hideBtn.textContent = "Hide Image";
hideBtn.onclick = () => document.getElementById("sampleImage").style.display = "none";
document.body.appendChild(hideBtn);

// 2️⃣6️⃣ Add button to show the image again.
let showBtn = document.createElement("button");
showBtn.textContent = "Show Image";
showBtn.onclick = () => document.getElementById("sampleImage").style.display = "block";
document.body.appendChild(showBtn);

// 2️⃣7️⃣ Create a counter button that increases with each click.
let counter = 0;
let counterBtn = document.createElement("button");
counterBtn.textContent = "Count: 0";
counterBtn.onclick = () => {
    counter++;
    counterBtn.textContent = "Count: " + counter;
};
document.body.appendChild(counterBtn);


// 2️⃣8️⃣ Display entered text from an input when button clicked.
document.getElementById("displayButton").addEventListener("click", () => {
    let inputText = document.getElementById("userInput").value;
    document.getElementById("output").textContent = inputText;
});

// 2️⃣9️⃣ Change background color randomly when a button is clicked.
document.getElementById("mainButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// 3️⃣0️⃣ Display which key is pressed.
document.addEventListener("keydown", (event) => {
    document.getElementById("output").textContent = `You pressed: ${event.key}`;
});

// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>.


// 3️⃣2️⃣ Get input value when button clicked.


// 3️⃣3️⃣ Count number of <p> and alert the count.


// 3️⃣4️⃣ Remove all <p> elements.


// 3️⃣5️⃣ Replace existing <h2> with new one.


// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.


// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.


// 3️⃣8️⃣ Clone an existing element and append copy.


// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.


// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
