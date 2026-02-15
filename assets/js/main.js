// Background drift
gsap.to(".light-1", {
    x: 200,
    y: 150,
    duration: 18,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to(".light-2", {
    x: -200,
    y: -120,
    duration: 22,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Beam subtle pulse
gsap.to(".beam", {
    opacity: 0.25,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Title reveal
gsap.from(".title", {
    y: 120,
    opacity: 0,
    duration: 1.6,
    ease: "expo.out",
});

// Subtitle
gsap.from(".subtitle", {
    y: 30,
    opacity: 0,
    delay: 0.8,
    duration: 1,
    ease: "power3.out",
});

// Panel entrance
gsap.from(".panel", {
    y: 80,
    rotateX: 25,
    opacity: 0,
    delay: 1.2,
    duration: 1.4,
    ease: "power4.out",
});

// Light sweep across title
gsap.to(".light-sweep", {
    left: "120%",
    duration: 2,
    delay: 1,
    ease: "power2.inOut",
});

// Micro camera breathing
gsap.to(".scene", {
    scale: 1.02,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});
const btn = document.querySelector(".cta");

btn.addEventListener("click", (e) => {
    const rect = btn.getBoundingClientRect();
    const pulse = document.createElement("div");
    pulse.classList.add("energy-pulse");

    pulse.style.left = rect.left + rect.width / 2 + "px";
    pulse.style.top = rect.top + rect.height / 2 + "px";

    document.body.appendChild(pulse);

    const tl = gsap.timeline();

    // Button compression
    tl.to(btn, {
        scale: 0.9,
        duration: 0.15,
        ease: "power2.inOut",
    });

    // EXPLOSION SCALE
    tl.to(btn, {
        scale: 1.4,
        duration: 0.5,
        ease: "expo.out",
    });

    // Glow burst
    tl.to(
        ".cta-glow",
        {
            opacity: 1,
            scale: 2,
            duration: 0.4,
            ease: "power4.out",
        },
        "<"
    );

    // ENERGY PULSE EXPANSION
    tl.to(
        pulse,
        {
            scale: 60,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
            onComplete: () => pulse.remove(),
        },
        "<"
    );

    // Overlay activation
    tl.to(
        ".color-overlay",
        {
            opacity: 0.6,
            duration: 1,
            ease: "power3.inOut",
        },
        "<"
    );

    // Chromatic glitch blast
    tl.to(
        ".glitch",
        {
            opacity: 1,
            duration: 0.1,
            repeat: 3,
            yoyo: true,
            ease: "power1.inOut",
        },
        "<"
    );

    // Camera zoom
    tl.to(
        ".scene",
        {
            scale: 1.3,
            duration: 1.2,
            ease: "expo.out",
        },
        "<"
    );

    tl.to(".scene", {
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.inOut",
    });

    // Reveal welcome
    tl.to(".welcome", {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
    });

    // Animate text
    tl.from(
        ".welcome-title",
        {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
        },
        "-=1"
    );

    tl.from(
        ".welcome-sub",
        {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        },
        "-=0.8"
    );

    // Start bubble system
    tl.call(() => {
        setInterval(createBubble, 800);
    });
});

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = gsap.utils.random(40, 120);
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left = gsap.utils.random(0, window.innerWidth) + "px";
    bubble.style.top = window.innerHeight + "px";

    document.body.appendChild(bubble);

    gsap.to(bubble, {
        y: -window.innerHeight - 200,
        x: "+=" + gsap.utils.random(-150, 150),
        duration: gsap.utils.random(8, 14),
        ease: "none",
        onComplete: () => bubble.remove(),
    });

    gsap.to(bubble, {
        opacity: 0.8,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
    });
}
