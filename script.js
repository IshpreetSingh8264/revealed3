const messages = [
    "You are the love of my life, and every day I cherish you more deeply than the last. Your presence fills my heart with joy, and I can't imagine a future without you by my side. You are the reason I strive to be better and to create a beautiful life together.",

    "Every moment spent with you feels like a beautiful dream, and I never want to wake up. The way you look at me, the sound of your laughter, and the warmth of your embrace make every second worth living. You’ve turned my reality into a fairytale, and I am forever grateful for that.",

    "You’re not just my love; you’re my best friend, my confidant, and my everything. The bond we share is unlike any other, and I treasure our connection more than words can express. You inspire me, support me, and make me laugh like no one else can. With you, I feel complete.",

    "No words can ever fully encapsulate how much you mean to me. You are my heart, my soul, and my reason for being. Every day I wake up knowing that I have you in my life is a day worth celebrating. Your love is the foundation of my happiness, and I will forever be grateful for it.",

    "With you, I feel a sense of wholeness that I never thought was possible. Without you, I feel like a ship lost at sea, searching for direction. You are everything I need to navigate this life, and I will always hold you close to my heart as my guiding star.",

    "You are the reason my heart beats faster, my days are brighter, and my world is overflowing with love. The moments we share together are pure magic, and every time I see your smile, I’m reminded of how lucky I am to have you in my life. Your love is a gift I cherish daily.",

    "I am forever grateful for your love, which transforms each day into a beautiful adventure. You have a way of turning ordinary moments into cherished memories, and I can’t wait to create countless more memories with you in the future. You make life vibrant and full of joy.",

    "My love for you transcends words and continues to grow with each passing day. It’s a love that deepens, flourishes, and evolves, reflecting the beauty of our journey together. I am excited to explore the endless possibilities of our love, as it knows no limits.",

    "Every time I look into your eyes, I see a future brimming with happiness, love, and infinite memories waiting to be made. You are the embodiment of my dreams, and I am so grateful to have you in my life. I want to build a life together that is filled with laughter and cherished moments.",

    "You are the best part of my life, and I simply can’t imagine a world without you by my side. Your presence fills my days with joy, and every moment without you feels incomplete. I am committed to making you feel as special as you are, because you truly deserve all the love in the world.",

    "You make my heart skip a beat every time I think of you. It’s as if your love has cast a spell on me, filling my life with colors I never knew existed. You are everything I have ever wanted and more, and I promise to hold on to that feeling for all eternity.",

    "Every thought of you brings a smile to my face and warmth to my heart. You have a unique ability to lift my spirits, even on the toughest days. Your love envelops me like a warm blanket, and I am eternally thankful for the comfort it brings.",

    "Your love has transformed my life in the most beautiful way, and for that, I will always be grateful. You’ve shown me what it means to truly love and be loved in return. My heart is full because of you, and I promise to cherish this love for as long as I live.",

    "I will love you until the end of time, because there is no one else I would ever want beside me. Your love is my anchor, and it gives me the strength to face any challenge that comes my way. Together, we can conquer anything life throws at us.",

    "You are my heart's only desire, my soul's perfect match, and the love of my life. The connection we share is one of a kind, and I am grateful every day for the bond we have. You are my forever, and I will always choose you, no matter the circumstances.",

    "In your eyes, I find everything I’ve been searching for—love, peace, and happiness. You have a way of seeing right into my soul, understanding me in ways I never thought possible. Your love is a treasure, and I am honored to have it in my life.",

    "When I'm with you, the world disappears, and all that matters is the two of us. Your presence is my solace, my peace in a chaotic world. Together, we create a little universe of our own, filled with love, laughter, and endless possibilities.",

    "My love for you is endless and will never fade. Each day, my affection for you grows stronger, deeper, and more profound. I am committed to nurturing this love and allowing it to flourish as we navigate our lives together.",

    "You are my past, my present, and my future. I want nothing more than to spend forever with you, creating memories and building a life together that reflects the beauty of our love. You are my everything, and I will always be here for you.",

    "No matter what happens, I will always love you more than you can imagine. My heart is yours, and I promise to cherish and protect it for all time. Together, we will create a love story that stands the test of time, filled with passion and devotion.",

    "Being with you feels like home, like I’ve finally found the place where I truly belong. You are my safe haven, my comfort, and I will always strive to create a life with you that is warm, loving, and filled with joy.",

    "Every day I spend with you is a blessing, and I can't wait for the many more to come. You make life worth living, and I am grateful for every moment we share. Together, we will create a beautiful tapestry of memories that will last a lifetime.",

    "You're the first person I think of when I wake up and the last before I sleep. You're always on my mind, and that constant thought of you fills my heart with warmth and joy. You are my everything, and I will always cherish that.",

    "Your laughter is the sweetest sound to my ears, and your smile lights up my world. Every moment spent with you is a treasure, and I will always cherish the laughter we share and the joy you bring into my life.",

    "Every moment without you feels incomplete. You are the missing piece in my life that makes everything feel whole. I long for the moments we can share together, and I look forward to making countless more memories with you.",

    "You are my favorite hello and my hardest goodbye. I never want to be apart from you, as each moment we share is precious to me. You are the one I want to spend forever with, and I will always cherish our time together.",

    "I can’t imagine a future without you. You're the one I've always been waiting for, the love I’ve been searching for all my life. Together, we can create a beautiful life filled with love, laughter, and unforgettable moments.",

    "Your love is the greatest gift I have ever received, and I will cherish it forever. I promise to nurture our relationship and make it stronger with each passing day, ensuring that our love continues to blossom.",

    "With you, everything feels right. You bring out the best in me and make life worth living. Your love inspires me to reach for the stars, and I am so grateful to have you as my partner in this journey.",

    "I never thought I could love someone so deeply until I met you. You make my heart overflow with emotion, and every day I discover new reasons to love you even more. You are my greatest blessing.",

    "You're the dream I never thought would come true, and now you're my reality. The love we share is something I hold dear to my heart, and I am grateful for the beautiful life we are creating together.",

    "I feel so lucky to have found you. You complete me in ways I never knew were possible. Our love is a beautiful journey, and I am excited to see where it takes us.",

    "You make the ordinary moments feel extraordinary, simply by being by my side. Every day with you is a gift, and I cherish the time we spend together, no matter how simple the moments may be.",

    "You are the reason I wake up with a smile on my face, excited for another day with you. Your love fills my heart with joy, and I can’t wait to create more beautiful memories together.",

    "In your love, I have found everything I’ve ever needed, and more than I ever hoped for. You are my greatest adventure, and I am so grateful to share this journey with you.",

    "Every moment with you is a memory I’ll treasure forever because you are the best thing that ever happened to me. I promise to cherish our time together and create a lifetime of beautiful memories.",

    "I can't express enough how much I appreciate you, how much I admire you, and how much I love you. You are my everything, and I promise to always be there for you, no matter what life brings.",

    "My love for you is a promise that will never fade. No matter what, I'll always choose you. Together, we will build a love that lasts a lifetime, filled with passion, laughter, and unwavering support.",

    "You are my reason for smiling, my reason for breathing, and the reason I know what true love is. You have transformed my life in the most beautiful way, and I am forever grateful for your love.",

    "No matter what happens, no matter where life takes us, I will always stand by your side. You are my rock, my partner, and my greatest love. Together, we can conquer anything life throws our way.",

    "You're not just a part of my life; you're my entire world. I am everything because of you, and I promise to always show you how much you mean to me. You are the love I never knew I needed.",

    "Every day I fall in love with you all over again, and it’s a love that only gets stronger. You inspire me to be the best version of myself, and I am grateful for every moment we share.",

    "I want to spend every moment of my life making you as happy as you make me. Your happiness is my priority, and I promise to always cherish and support you in everything you do.",

    "You are my heart's deepest desire, and I will spend my life making sure you feel loved every single day. I want to show you how much you mean to me through every gesture, every word, and every moment we share.",

    "I don’t need the stars in the sky or the moon to shine when I have you beside me. You are my light, my guiding star, and with you, my world is illuminated with love and happiness.",

    "I don’t just love you with my heart; I love you with my soul. Every piece of me belongs to you, and I am committed to nurturing our love and making it flourish for all time.",

    "Your presence is my peace, your love is my joy, and your happiness is my mission in life. I promise to always be here for you, to support you, and to love you with every fiber of my being.",

    "You are everything I've ever wanted, and now that I have you, I will never let go. I am committed to cherishing you and building a beautiful life together that reflects the depth of our love.",

    "You make me believe in soulmates because being with you feels like fate bringing us together. Our love is a rare and beautiful connection, and I am so grateful to share this journey with you.",

    "Your love is a treasure I’ll hold on to forever, and I promise to cherish it always. Together, we will create a beautiful story filled with love, joy, and countless cherished memories.",

    "I am yours, completely and utterly. I don’t want anyone else but you, now and forever. You are my everything, and I promise to love you fiercely and with all my heart for all time.",

    "You are my forever and always, and my love for you will never fade, not even with time. Our love is a beautiful journey, and I look forward to every moment we will share together.",

    "Every time I kiss you, it feels like the first time—a beautiful moment I will never take for granted. Your love fills me with passion, and I am grateful for every kiss we share.",

    "You are not just my love; you are my forever, my always, and my everything. Together, we will create a beautiful life filled with love, laughter, and unforgettable moments."
];


document.getElementById("secretMessageBtn").addEventListener("click", function () {
    const secretMessage = document.getElementById("secretMessage");
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageText = document.getElementById("messageText");
    messageText.textContent = messages[randomIndex];

    secretMessage.style.display = secretMessage.style.display === "block" ? "none" : "block";
});

