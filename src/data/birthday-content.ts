export type StoryScene = "welcome" | "gift" | "memories" | "letter" | "secret" | "cake";

export type Memory = {
  id: string;
  image: string;
  alt: string;
  caption: string;
  dateLabel?: string;
  location?: string;
  stickers: string[];
};

export type BirthdayContent = {
  recipient: string;
  partnerName: string;
  intro: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    stats: {
      level: string;
      role: string;
      passive: string;
      mood: string;
    };
  };
  gift: {
    tag: string;
    title: string;
    hint: string;
    openedTitle: string;
    openedSubtitle: string;
    message: string;
    cta: string;
  };
  memories: {
    tag: string;
    title: string;
    subtitle: string;
    items: Memory[];
  };
  letter: {
    tag: string;
    title: string;
    greeting: string;
    paragraphs: string[];
    signature: string;
  };
  secret: {
    tag: string;
    title: string;
    prompt: string;
    unlockedTitle: string;
    message: string;
  };
  cake: {
    tag: string;
    title: string;
    subtitle: string;
    instruction: string;
    blownInstruction: string;
    achievement: string;
    wishTitle: string;
    wishMessage: string;
    replayCta: string;
  };
};

export const birthdayData: BirthdayContent = {
  recipient: "Olivia",
  partnerName: "Brian",
  intro: {
    badge: "✦ SPECIAL QUEST UNLOCKED: LEVEL 25 ✦",
    title: "OLIVIA'S 25TH BIRTHDAY QUEST",
    subtitle: "Welcome to Olivia's 25th birthday chapter! Sebuah mini quest retro spesial buat ngerayain ulang tahun kamu yang ke-25. Siap unboxing kejutannya?",
    cta: "ACCEPT QUEST ▶",
    stats: {
      level: "LVL 25 (Silver Jubilee ✨)",
      role: "Sunshine Mage",
      passive: "Bikin hari mendung jadi cerah",
      mood: "100% Excited",
    },
  },
  gift: {
    tag: "QUEST 01 // LOOT DROP",
    title: "MYSTERY LOOT BOX 🎁",
    hint: "Ada peti harta karun jatuh di Ceremony Club! Klik kotaknya buat unboxing.",
    openedTitle: "ITEM UNLOCKED: 25TH BIRTHDAY CROWN! 👑",
    openedSubtitle: "+9999 Happiness EXP & Good Vibes",
    message: "Selamat ulang tahun yang ke-25 yaa Olivia! Selamat memasuki usia perak (quarter-life) yang istimewa. Terima kasih udah selalu jadi orang yang seru dan bawa energi positif tiap hari. Semoga semua impian dan wishlist kamu di usia 25 ini kecentang satu per satu!",
    cta: "BUKA MEMORY LOG ▶",
  },
  memories: {
    tag: "QUEST 02 // TRAVEL ARCHIVE",
    title: "PHOTO ARCHIVE 📸",
    subtitle: "Momen manis berdua. Kamu bisa klik reaksi stiker di bawah foto!",
    items: [
      {
        id: "ceremony-club",
        image: "/illustrations/hero-couple.jpg",
        alt: "Foto pixel art Olivia dan pasangan di Ceremony Club",
        dateLabel: "Special Meetup",
        location: "Ceremony Club Barn",
        caption: "Hari cerah di Ceremony Club dengan outfit favorit dan senyum andalan kamu. Pose satu kaki diangkat emang nggak pernah gagal bikin gemes!",
        stickers: ["❤️ Favorit", "✨ Estetik", "📸 Gemes", "☕ Cozy Day"],
      },
      {
        id: "memory-walk",
        image: "/illustrations/hero-couple.jpg",
        alt: "Foto kenangan momen jalan santai",
        dateLabel: "Weekend Trip",
        location: "Favorite Spot",
        caption: "Momen jalan santai tanpa rencana yang ujung-ujungnya malah jadi salah satu hari paling berkesan dan penuh ketawa.",
        stickers: ["🌸 Seru Banget", "🍦 Ice Cream", "🗺️ Adventure"],
      },
    ],
  },
  letter: {
    tag: "QUEST 03 // RPG DIALOGUE",
    title: "MESSAGE FROM BRIAN 📜",
    greeting: "Hai Olivia,",
    paragraphs: [
      "Happy 25th birthday yaa! Selamat ulang tahun yang ke-25. Jujur, pas nyiapin halaman kecil ini, aku sambil senyum-senyum sendiri ngingat-ngingat hal random dan obrolan lucu yang sering kita bagi.",
      "Dari sekian banyak rutinitas tiap hari, ngobrol bareng kamu selalu jadi bagian paling favorit. Kamu selalu punya cara alami buat bikin suasana jadi adem, seru, dan berasa ringan.",
      "Di umur ke-25 yang baru ini, doaku tulus dan sederhana: semoga kamu selalu sehat, pikiran tenang, hati bahagia, dan selalu dikelilingi hal-hal baik. Jangan pernah ragu sama potensi diri sendiri ya.",
      "Apapun wishlist dan petualangan baru di babak 25 tahun ini, ingat kalau aku bakal selalu dukung kamu di tiap langkah. Have the happiest 25th birthday!",
    ],
    signature: "Warmest hugs & happy wishes,",
  },
  secret: {
    tag: "QUEST 04 // BONUS EASTER EGG",
    title: "SECRET VAULT 🗝️",
    prompt: "Pojok tersembunyi! Tekan tombol hati 3x untuk memecahkan kombinasi kunci rahasia.",
    unlockedTitle: "BONUS DIALOGUE UNLOCKED! 💖",
    message: "Psst... Kamu tahu nggak? Dari awal kenal sampai sekarang kamu genap 25 tahun, senyum kamu itu beneran punya cheat code buat ngilangin capek. Terima kasih sudah jadi sosok Olivia yang selalu tulus dan luar biasa. You are truly loved! ❤️",
  },
  cake: {
    tag: "FINAL STAGE // MAKE A WISH",
    title: "BLOW THE CANDLES 🎂",
    subtitle: "Tutup matamu 5 detik, panjatkan doa terbaikmu di usia ke-25, lalu klik lilin buat meniup apinya!",
    instruction: "Klik lilin untuk meniup api 💨",
    blownInstruction: "LILIN PADAM! DOA USIA 25 SUDAH TERBANG KE LANGIT! ✨",
    achievement: "ACHIEVEMENT UNLOCKED: 🏆 'Level 25 Achieved & Looking Gorgeous!'",
    wishTitle: "HAPPY 25TH BIRTHDAY, OLIVIA! 🎉",
    wishMessage: "Semoga babak usia ke-25 ini membawa ribuan alasan baru buat kamu tersenyum lebar setiap hari!",
    replayCta: "REPLAY QUEST DARI AWAL 🔄",
  },
};
