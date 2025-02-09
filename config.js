// Import modul dan dependensi
const {
    name: pkgName,
    version
} = require("./package.json");
const {
    monospace,
    italic,
    quote
} = require("@mengkodingan/ckptw");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "SigmaBot", // Nama bot
        prefix: /^[!.]/i, // Karakter awalan perintah yang diizinkan
        phoneNumber: "", // Nomor telepon bot (opsional jika menggunakan QR code)
        thumbnail: "https://cdn.discordapp.com/attachments/1199614469081419916/1337787979334287432/pinteg_djka.png", // Gambar thumbnail bot
        website: "https://chat.whatsapp.com/KrD2jXpRazN11yU8U7mnBc", // Website untuk WhatsApp bot
        groupJid: "", // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)

        // Konfigurasi autentikasi sesi bot
        authAdapter: {
            adapter: "mongo", // Pilihan adapter: 'default', 'mysql', 'mongo', 'firebase'

            // Konfigurasi MongoDB
            mongodb: {
                url: "mongodb+srv://sappstoreee:0mZAFa316eEhqyDP@pamswa.qnw8v.mongodb.net/?retryWrites=true&w=majority&appName=PamsWa" // URL
            }
        }
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("⛔ Perintah hanya dapat diakses oleh admin grup!"), // Pesan ketika perintah hanya untuk admin
        banned: quote("⛔ Tidak dapat memproses karena Anda telah dibanned oleh Owner!"), // Pesan untuk pengguna yang dibanned
        botAdmin: quote("⛔ Tidak dapat memproses karena bot bukan admin grup ini!"), // Pesan jika bot bukan admin di grup
        botGroupMembership: quote("⛔ Tidak dapat memproses karena Anda tidak bergabung dengan grup bot! Ketik '/botgroup' untuk mendapatkan tautan grup bot."), // Pesan untuk pengguna yang tidak ada dalam grup
        coin: quote("⛔ Tidak dapat memproses karena koin Anda tidak cukup!"), // Pesan ketika koin tidak cukup
        cooldown: quote("🔄 Perintah ini sedang dalam cooldown, tunggu..."), // Pesan saat cooldown perintah
        group: quote("⛔ Perintah hanya dapat diakses dalam grup!"), // Pesan untuk perintah grup
        owner: quote("⛔ Perintah hanya dapat diakses Owner!"), // Pesan untuk perintah yang hanya owner bisa akses
        premium: quote("⛔ Tidak dapat memproses karena Anda bukan pengguna Premium!"), // Pesan jika pengguna bukan Premium
        private: quote("⛔ Perintah hanya dapat diakses dalam obrolan pribadi!"), // Pesan untuk perintah obrolan pribadi
        restrict: quote("⛔ Perintah ini telah dibatasi karena alasan keamanan!"), // Pesan pembatasan perintah

        watermark: `@Fahmi © 2022-2025 / v${version}`, // Watermark nama dan versi pada bot
        footer: italic("Developed by Fahmi"), // Footer di pesan bot
        readmore: "\u200E".repeat(4001), // String read more
        note: "SEMUANYA DIAMMM!!!!", // Catatan

        wait: quote("🔄 Tunggu sebentar..."), // Pesan loading
        notFound: quote("❎ Tidak ada yang ditemukan! Coba lagi nanti."), // Pesan item tidak ditemukan
        urlInvalid: quote("❎ URL tidak valid!") // Pesan jika URL tidak valid
    },

    // Informasi owner bot
    owner: {
        name: "Fahmii", // Nama owner bot
        organization: "PamsBrot", // Nama organisasi owner bot
        id: "6285174323610", // Nomor telepon owner bot
        co: ["6285155390800"] // Nomor co-owner bot
    },

    // Stiker bot
    sticker: {
        packname: "", // Nama paket stiker
        author: "github.com/itsreimau/ckptw-wabot" // Pembuat stiker
    },

    // Sistem bot
    system: {
        alwaysOnline: true, // Bot selalu berstatus "online"
        autoMention: true, // Bot otomatis mention seseorang dalam pesan yang dikirim
        autoRead: true, // Bot baca pesan otomatis
        autoTypingOnCmd: true, // Tampilkan status "sedang mengetik" saat memproses perintah
        cooldown: 10 * 1000, // Jeda antar perintah (ms)
        port: 3030, // Port (jika pakai server)
        restrict: false, // Batasi akses perintah
        requireBotGroupMembership: false, // Harus gabung grup bot
        selfOwner: false, // Bot jadi owner sendiri
        selfReply: true, // Bot balas pesan bot sendiri
        timeZone: "Asia/Jakarta", // Zona waktu bot
        useCoin: false, // Pakai koin
        usePairingCode: false, // Pakai kode pairing untuk koneksi
        useServer: true // Jalankan bot dengan server
    }
};
