


const messages = [
    "You are the love of my life, and I will always cherish you.",
    "Every moment with you feels like a dream, and I never want to wake up.",
    "You're not just my love; you're my best friend, my world, my everything.",
    "No words can express how much you mean to me. You're my heart, my soul, my reason for being.",
    "With you, I feel complete. Without you, I feel lost. You're everything I need.",
    "You are the reason my heart beats faster, my days are brighter, and my world is full of love.",
    "I am forever grateful for your love. You make every day feel like a beautiful adventure.",
    "I love you more than words can describe, and that love only grows with each passing day.",
    "Every time I look at you, I see a future filled with happiness, love, and endless memories.",
    "You are the best part of my life, and I can't imagine a world without you by my side.",
    "You make my heart skip a beat every time I think of you. You're all I ever wanted.",
    "Every thought of you brings a smile to my face and warmth to my heart.",
    "Your love has changed my life in the most beautiful way, and I am forever grateful.",
    "I will love you until the end of time, because there is no one else I would ever want beside me.",
    "You're my heart's only desire, my soul's perfect match, and the love of my life.",
    "In your eyes, I find everything I’ve been searching for — love, peace, and happiness.",
    "When I'm with you, the world disappears, and all that matters is the two of us.",
    "My love for you is endless and will never fade. It only grows stronger every day.",
    "You are my past, my present, and my future. I want nothing more than to spend forever with you.",
    "No matter what happens, I will always love you more than you can imagine.",
    "Being with you feels like home, like I’ve finally found the place where I truly belong.",
    "Every day I spend with you is a blessing, and I can't wait for the many more to come.",
    "You're the first person I think of when I wake up and the last before I sleep. You're always on my mind.",
    "Your love gives me strength to face anything that comes my way. With you, I feel unstoppable.",
    "I never believed in fate until I met you. You are exactly what I was meant to find.",
    "When I hold you in my arms, I feel like I’m holding everything I've ever needed in my life.",
    "I don't need anything else in life as long as I have you by my side.",
    "Your laughter is the sweetest sound to my ears, and your smile lights up my world.",
    "Every moment without you feels incomplete. You are the missing piece in my life.",
    "You are my favorite hello and my hardest goodbye. I never want to be apart from you.",
    "I can’t imagine a future without you. You're the one I've always been waiting for.",
    "Your love is the greatest gift I have ever received, and I will cherish it forever.",
    "With you, everything feels right. You bring out the best in me and make life worth living.",
    "I never thought I could love someone so deeply until I met you. You make my heart overflow.",
    "You're the dream I never thought would come true, and now you're my reality.",
    "I feel so lucky to have found you. You complete me in ways I never knew were possible.",
    "You make the ordinary moments feel extraordinary, simply by being by my side.",
    "You are the reason I wake up with a smile on my face, excited for another day with you.",
    "In your love, I have found everything I’ve ever needed, and more than I ever hoped for.",
    "You are the song in my heart, the light in my life, and the love I’ve always been searching for.",
    "Every moment with you is a memory I’ll treasure forever, because you are the best thing that ever happened to me.",
    "I can't express enough how much I appreciate you, how much I admire you, and how much I love you.",
    "My love for you is a promise that will never fade. No matter what, I'll always choose you.",
    "You are my reason for smiling, my reason for breathing, and the reason I know what true love is.",
    "No matter what happens, no matter where life takes us, I will always stand by your side.",
    "You're not just a part of my life, you're my entire world. I am everything because of you.",
    "Every day I fall in love with you all over again, and it’s a love that only gets stronger.",
    "I want to spend every moment of my life making you as happy as you make me.",
    "You are my heart's deepest desire, and I will spend my life making sure you feel loved every single day.",
    "I don’t need the stars in the sky or the moon to shine when I have you beside me. You are my light.",
    "I don’t just love you with my heart, I love you with my soul, every piece of me belongs to you.",
    "Your presence is my peace, your love is my joy, and your happiness is my mission in life.",
    "You are everything I've ever wanted, and now that I have you, I will never let go.",
    "You make me believe in soulmates, because being with you feels like fate bringing us together.",
    "Your love is a treasure I’ll hold on to forever, and I promise to cherish it always.",
    "I am yours, completely and utterly. I don’t want anyone else but you, now and forever.",
    "You are my forever and always, and my love for you will never fade, not even with time.",
    "Every time I kiss you, it feels like the first time — a beautiful moment I will never take for granted.",
    "You are not just my love; you are my forever, my always, my everything."
];


    document.getElementById("secretMessageBtn").addEventListener("click", function () {
        const secretMessage = document.getElementById("secretMessage");
        const randomIndex = Math.floor(Math.random() * messages.length);
        const messageText = document.getElementById("messageText");
        messageText.textContent = messages[randomIndex];

        secretMessage.style.display = secretMessage.style.display === "block" ? "none" : "block";
    });

