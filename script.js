const messages = [
  "Will you be my Valentine? 💝",
  "You know you want to say yes! 🌹",
  "The Yes button is working perfectly! ✨",
  "Take your time (but not too long!) 🌟",
  "Still thinking? The Yes button is right there! 💫",
];

const colors = ["#ff4b6e", "#ff758c", "#ff8fa3", "#ffa4b4"];
let currentMessage = 0;
const title = document.querySelector(".title");
const message = document.querySelector(".message");
const proposal = document.getElementById("proposal");
const success = document.getElementById("success");
const container = document.querySelector(".floating-hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "particle-heart";

  // Create SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 512 512");

  // Create use element
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#heart");
  use.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)]);

  svg.appendChild(use);
  heart.appendChild(svg);

  // Random starting position
  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = 80 + Math.random() * 20 + "%";

  // Random size between 20px and 40px
  const size = 30 + Math.random() * 20;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

function handleNo() {
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 3000);

  currentMessage = (currentMessage + 1) % messages.length;
  title.textContent = messages[currentMessage];
}

function handleYes() {
  proposal.style.display = "none";
  success.style.display = "flex";

  // Create hearts more frequently for celebration
  setInterval(createHeart, 200);
}

// Create some ambient floating hearts
setInterval(() => {
  if (Math.random() < 1) {
    // 50% chance to create a heart each interval
    createHeart();
  }
}, 1000);
