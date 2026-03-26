// Function to show the hidden love message
function showMessage() {
    const message = document.getElementById("message");
    message.style.display = "block";

    // Smooth fade-in effect
    message.style.opacity = "0";
    let opacity = 0;

    const fade = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fade);
        } else {
            opacity += 0.05;
            message.style.opacity = opacity;
        }
    }, 30);
}

// Optional: Add floating hearts effect 💕
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100%";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts every 500ms
setInterval(createHeart, 500);

// Add animation style dynamically
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

// Optional: Typing effect for message ✨
function typeEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

// If you want typing effect instead of normal text:
// Replace showMessage() with this version:

/*
function showMessage() {
    const message = document.getElementById("message");
    message.style.display = "block";

    const text = `You are the most beautiful and gorgeous person in my life 💕
Your smile makes my world brighter ✨
Stay happy always 😊
And... I really like you ❤️`;

    typeEffect(message, text, 50);
}
*/