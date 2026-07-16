const loadingScreen = document.getElementById("loadingScreen");
const loadingBar = document.getElementById("loadingBar");
const loadingPercent = document.getElementById("loadingPercent");
const loadingStatus = document.getElementById("loadingStatus");
const enterSiteButton = document.getElementById("enterSiteButton");

const loadingMessages = [
  "Loading memories...",
  "Preparing surprises...",
  "Waking Benito & Balvin...",
  "Securing birthday gifts...",
  "Adding extra love...",
  "Birthday protocol complete."
];

document.body.style.overflow = "hidden";
let loadingProgress = 0;

const loadingTimer = setInterval(() => {
  loadingProgress += Math.floor(Math.random() * 8) + 4;

  if (loadingProgress >= 100) {
    loadingProgress = 100;
    clearInterval(loadingTimer);
    loadingStatus.textContent = loadingMessages[loadingMessages.length - 1];
    enterSiteButton.classList.remove("hidden");
  } else {
    const messageIndex = Math.min(Math.floor(loadingProgress / 20), loadingMessages.length - 2);
    loadingStatus.textContent = loadingMessages[messageIndex];
  }

  loadingBar.style.width = `${loadingProgress}%`;
  loadingPercent.textContent = `${loadingProgress}%`;
}, 160);

enterSiteButton.addEventListener("click", () => {
  loadingScreen.classList.add("complete");
  document.body.style.overflow = "";
});

const reasons = [
  "You make every day better just by being you.",
  "Your smile makes even ordinary moments feel special.",
  "You always make me feel loved, understood, and supported.",
  "You bring warmth, laughter, and peace into my life.",
  "I love the way we can be completely ourselves together.",
  "You are thoughtful, beautiful, strong, and incredibly caring.",
  "Every adventure is better because I get to share it with you.",
  "You make our home feel complete with Benito and Balvin.",
];

const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");
const reasonDots = document.getElementById("reasonDots");
let reasonIndex = 0;

reasons.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "reason-dot";
  dot.setAttribute("aria-label", `Show reason ${index + 1}`);
  dot.addEventListener("click", () => showReason(index));
  reasonDots.appendChild(dot);
});

function showReason(index) {
  reasonIndex = (index + reasons.length) % reasons.length;
  reasonText.animate(
    [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 350 }
  );
  reasonText.textContent = reasons[reasonIndex];
  reasonNumber.textContent = reasonIndex + 1;
  [...reasonDots.children].forEach((dot, i) => dot.classList.toggle("active", i === reasonIndex));
}

document.getElementById("prevReason").addEventListener("click", () => showReason(reasonIndex - 1));
document.getElementById("nextReason").addEventListener("click", () => showReason(reasonIndex + 1));
showReason(0);

// Heart collecting game
const heartField = document.getElementById("heartField");
const heartCount = document.getElementById("heartCount");
const continueHearts = document.getElementById("continueHearts");
const positions = [
  [5, 12], [24, 2], [46, 16], [72, 5], [83, 30], [12, 48],
  [37, 44], [63, 48], [88, 62], [8, 78], [48, 76], [72, 82]
];

positions.forEach(([left, top], index) => {
  const heart = document.createElement("button");
  heart.className = "tap-heart";
  heart.textContent = ["💗", "💖", "💕"][index % 3];
  heart.style.left = `${left}%`;
  heart.style.top = `${top}%`;
  heart.style.animationDelay = `${(index % 5) * 0.18}s`;
  heart.setAttribute("aria-label", "Collect heart");
  heart.addEventListener("click", () => collectHeart(heart));
  heartField.appendChild(heart);
});

let collected = 0;
function collectHeart(heart) {
  if (heart.classList.contains("collected")) return;
  heart.classList.add("collected");
  collected += 1;
  heartCount.textContent = collected;
  if (collected === positions.length) continueHearts.classList.remove("hidden");
}

continueHearts.addEventListener("click", () => {
  document.querySelector(continueHearts.dataset.scroll).scrollIntoView({ behavior: "smooth" });
});

// Envelope
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => {
    document.getElementById("letterSection").scrollIntoView({ behavior: "smooth" });
  }, 800);
});

// Gifts
document.querySelectorAll(".gift-box").forEach((gift) => {
  gift.addEventListener("click", () => {
    gift.classList.add("opened");
    document.getElementById(gift.dataset.gift).scrollIntoView({ behavior: "smooth" });
  });
});

// Memories
document.getElementById("memoryButton").addEventListener("click", () => {
  document.getElementById("memoryMessage").classList.toggle("hidden");
});

// Final heart rain
const hugButton = document.getElementById("hugButton");
const heartRain = document.getElementById("heartRain");
const hugMessage = document.getElementById("hugMessage");

hugButton.addEventListener("click", () => {
  hugMessage.classList.remove("hidden");

  for (let i = 0; i < 48; i++) {
    const item = document.createElement("span");
    item.className = "rain-heart";
    item.textContent = ["💗", "💕", "💖", "🐾"][Math.floor(Math.random() * 4)];
    item.style.left = `${Math.random() * 100}%`;
    item.style.fontSize = `${1 + Math.random() * 2.4}rem`;
    item.style.animationDelay = `${Math.random() * 1.6}s`;
    heartRain.appendChild(item);
    setTimeout(() => item.remove(), 7000);
  }
});

// Scroll reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));


// Floating heart navigation
const musicToggle = document.getElementById("musicToggle");
const ourSongSection = document.getElementById("ourSong");

let goToSongNext = true;

musicToggle.addEventListener("click", () => {
  if (goToSongNext) {
    ourSongSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    musicToggle.textContent = "↑";
    musicToggle.setAttribute("aria-label", "Return to the top");
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    musicToggle.textContent = "♡";
    musicToggle.setAttribute("aria-label", "Go to our song");
  }

  goToSongNext = !goToSongNext;
});