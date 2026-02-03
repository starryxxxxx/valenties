document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bgMusic");

  // --- AUDIO ---
  if (bgMusic) {
    // autoplay (muted – wymagane przez przeglądarki)
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {
      // normalne – autoplay bywa blokowane
    });

    // odcisz przy pierwszej interakcji
    const enableSound = () => {
      bgMusic.muted = false;
      bgMusic.volume = 0.3;
    };

    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("touchstart", enableSound, { once: true });
  }

  // --- LOGIKA PRZYCISKÓW ---
  const messages = [
    "WHAT?",
    "FUCK YOUUUU??",
    "EFN?",
    "WHYYYYYYYY",
    "NOOOOOOOOOOOO!",
    "im very tired so i cant offer better sepsis...",
    "epiptisis",
    "apsp",
    "i'm running out of quotes",
    "Just kidding, say yes please! ❤️"
  ];

  let messageIndex = 0;

  window.handleNoClick = function () {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    if (!noButton || !yesButton) return;

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(
      window.getComputedStyle(yesButton).fontSize
    );
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
  };

  window.handleYesClick = function () {
    window.location.href = "yes_page.html";
  };
});