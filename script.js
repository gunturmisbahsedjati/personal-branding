// --- 1. CONFIGURATION ---
const CONFIG = {
    YOUTUBE_API_KEY: "AIzaSyCJ6HwEsp6TzaQaF58ZXaGAClq-dzIXN8s",
    MAX_RESULTS: 12,
    REGION_CODE: "ID",
    LANGUAGE: "id",
    API_BASE_URL: "https://www.googleapis.com/youtube/v3"
};

// --- 2. DATA: MASTER TOPICS ---
const MASTER_TOPICS = [
    { id: "M01", name: "Perawatan & Pemeliharaan", icon: "fa-wrench", color: "text-blue-500", keywords: ["rawat", "bersih", "simpan", "pemeliharaan", "aman"] },
    { id: "M02", name: "Troubleshooting", icon: "fa-triangle-exclamation", color: "text-red-500", keywords: ["rusak", "error", "mati", "tidak bisa", "gagal", "masalah", "lambat"] },
    { id: "M03", name: "Power Management", icon: "fa-power-off", color: "text-orange-500", keywords: ["nyala", "mati", "hidup", "restart", "sleep", "jadwal", "otomatis"] },
    { id: "M04", name: "Dasar Penggunaan", icon: "fa-hand-pointer", color: "text-emerald-500", keywords: ["dasar", "tombol", "navigasi", "port", "komponen", "mengenal"] },
    { id: "M05", name: "Audio & Kamera", icon: "fa-volume-high", color: "text-purple-500", keywords: ["suara", "audio", "speaker", "mikrofon", "kamera", "video conference", "vicon"] },
    { id: "M06", name: "Internet & Jaringan", icon: "fa-wifi", color: "text-blue-400", keywords: ["wifi", "internet", "jaringan", "hotspot", "koneksi"] },
    { id: "M07", name: "Whiteboard Dasar", icon: "fa-pen-nib", color: "text-pink-500", keywords: ["tulis", "gambar", "whiteboard", "pena", "hapus", "papan tulis"] },
    { id: "M08", name: "Koneksi & Screen Share", icon: "fa-mobile-screen-button", color: "text-indigo-500", keywords: ["laptop", "hdmi", "share", "tampil", "nirkabel", "hp", "layar"] },
    { id: "M09", name: "File Management", icon: "fa-folder-open", color: "text-yellow-500", keywords: ["file", "folder", "simpan", "usb", "flashdisk", "buka", "pdf", "ppt"] },
    { id: "M10", name: "Pemanfaatan Pembelajaran", icon: "fa-chalkboard-user", color: "text-teal-500", keywords: ["belajar", "siswa", "materi", "interaktif", "lms", "asesmen", "kelas"] }
];

// --- 3. DATA: MOCK DATABASE ---
const MOCK_DB = [
    {
        videoId: "2w6z1dzx-bM",
        title: "Tutorial Lengkap Penggunaan Papan Interaktif Digital (IFP)",
        channel: "Schoolpedia",
        category: "Dasar Penggunaan",
        description: "Panduan terlengkap penggunaan Papan Interaktif Digital (IFP) dari A sampai Z, termasuk cara penggunaan whiteboard, split screen, koneksi WiFi, dan mirroring.",
        tags: ["dasar", "nyala", "menu", "whiteboard", "hdmi", "wifi", "sentuh", "kalibrasi", "suara"],
        timestamps: [
            { time: "00:00", seconds: 0, title: "Intro & Cara Menyalakan/Mematikan PID", desc: "Mengenal tombol utama dan prosedur menyalakan/mematikan PID.", keywords: ["tombol", "nyala", "mati", "power", "shutdown"] },
            { time: "03:18", seconds: 198, title: "Tutorial Papan Tulis Digital (Whiteboard)", desc: "Penggunaan dasar aplikasi whiteboard di PID.", keywords: ["whiteboard", "tulis", "papan", "dasar"] },
            { time: "05:18", seconds: 318, title: "Memasukkan Foto, Grafik & Tabel", desc: "Cara import media dan menyisipkan tabel ke kanvas.", keywords: ["foto", "gambar", "grafik", "tabel", "insert"] },
            { time: "08:10", seconds: 490, title: "Fitur Papan Tulis Ganda (2 Pengguna)", desc: "Mode multi-user untuk dua siswa menulis bersamaan.", keywords: ["multi-user", "ganda", "dua layar", "bersama"] },
            { time: "09:03", seconds: 543, title: "Browsing Web di Papan Tulis", desc: "Buka browser web langsung dari kanvas interaktif.", keywords: ["browser", "web", "internet"] },
            { time: "12:54", seconds: 774, title: "Cara Menyimpan & Ekspor ke PDF", desc: "Menyimpan hasil coretan ke flashdisk atau PDF.", keywords: ["simpan", "ekspor", "pdf", "usb", "flashdisk"] },
            { time: "14:53", seconds: 893, title: "Konversi Tulisan Tangan ke Teks", desc: "Ubah tulisan tangan acak menjadi teks rapi secara otomatis.", keywords: ["tulisan", "teks", "konversi", "otomatis"] },
            { time: "19:57", seconds: 1497, title: "Cara Split Screen (Membagi Layar)", desc: "Membagi layar menjadi dua tampilan aplikasi bersamaan.", keywords: ["split", "bagi layar", "dua tampilan"] },
            { time: "24:57", seconds: 1497, title: "Screen Sharing / Mirroring dari HP", desc: "Hubungkan layar HP/Laptop ke PID nirkabel.", keywords: ["hp", "laptop", "screen share", "mirroring", "nirkabel"] },
            { time: "38:27", seconds: 2307, title: "Cara Menyambungkan PID ke WiFi", desc: "Pengaturan koneksi internet nirkabel pada PID.", keywords: ["wifi", "internet", "jaringan", "koneksi"] }
        ],
        isLiveAPI: false
    },
    {
        videoId: "I4CT9qxIzrQ",
        title: "Fitur Canggih & Aplikasi Whiteboard Interaktif",
        channel: "Schoolpedia",
        category: "Whiteboard Dasar",
        description: "Panduan memanfaatkan fitur-fitur pintar Papan Tulis Digital (Whiteboard) untuk mengajar dan presentasi interaktif.",
        tags: ["whiteboard", "tulis", "gambar", "mengajar", "anotasi", "split"],
        timestamps: [
            { time: "00:00", seconds: 0, title: "Intro & Pratinjau Fitur PID", desc: "Pengenalan fitur canggih papan interaktif digital.", keywords: ["intro", "fitur", "dasar"] },
            { time: "01:08", seconds: 68, title: "Fitur Papan Tulis Digital (Whiteboard)", desc: "Navigasi kanvas dan alat tulis.", keywords: ["whiteboard", "pena", "tulis"] },
            { time: "01:41", seconds: 101, title: "Tulisan Tangan Otomatis Menjadi Teks", desc: "Fitur kecerdasan penulisan otomatis.", keywords: ["tangan", "teks", "otomatis"] },
            { time: "02:39", seconds: 159, title: "Grafik & Bentuk Otomatis Rapi", desc: "Menggambar bentuk geometris otomatis presisi.", keywords: ["bentuk", "grafik", "lingkaran", "kotak"] },
            { time: "03:57", seconds: 237, title: "Cara Split Screen / Membagi Layar", desc: "Membagi dua jendela aplikasi di layar.", keywords: ["split", "bagi layar"] },
            { time: "04:19", seconds: 259, title: "Screenshot Gambar Web ke Whiteboard", desc: "Mengambil tangkapan layar web dan menempel ke kanvas.", keywords: ["screenshot", "web", "tangkapan layar"] },
            { time: "06:16", seconds: 376, title: "Screen Sharing dari HP ke PID", desc: "Tampilkan layar smartphone ke papan interaktif.", keywords: ["hp", "share", "layar", "mirroring"] },
            { time: "08:32", seconds: 512, title: "Mode Banyak Penulis (Multi-User)", desc: "Menulis bersama dengan beberapa pen/stylus.", keywords: ["multi-user", "penulis", "bersama"] },
            { time: "09:30", seconds: 570, title: "Anotasi di Atas Aplikasi Lain", desc: "Mencoret-coret di atas presentasi atau aplikasi apapun.", keywords: ["anotasi", "coret", "aplikasi"] }
        ],
        isLiveAPI: false
    },
    {
        videoId: "5ywIANLgvOg",
        title: "Panduan Resmi Pemanfaatan Papan Interaktif Digital",
        channel: "KEMDIKDASMEN",
        category: "Pemanfaatan Pembelajaran",
        description: "Tutorial resmi penggunaan Papan Interaktif Digital untuk mendukung pembelajaran interaktif di sekolah.",
        tags: ["belajar", "kemdikbud", "sekolah", "guru", "pembelajaran"],
        timestamps: [
            { time: "00:00", seconds: 0, title: "Pengenalan Papan Interaktif Digital", desc: "Panduan dasar dan pengenalan perangkat.", keywords: ["pengenalan", "dasar", "kemdikbud"] },
            { time: "01:00", seconds: 60, title: "Navigasi & Menu Utama PID", desc: "Mengenal menu dan cara akses aplikasi.", keywords: ["menu", "navigasi", "aplikasi"] },
            { time: "02:30", seconds: 150, title: "Pemanfaatan PID dalam Kelas", desc: "Penggunaan interaktif PID bersama siswa.", keywords: ["kelas", "siswa", "mengajar"] }
        ],
        isLiveAPI: false
    }
];

// --- 4. DATA: KURIKULUM ---
const CURRICULUM_DATA = [
    {
        levelId: "level1",
        levelNum: 1,
        title: "LEVEL 1. SUBSTITUTION",
        subTitle: "Dasar Penggunaan Fitur Utama PID",
        desc: "Penggunaan dasar fitur papan interaktif sebagai pengganti papan tulis konvensional.",
        badgeColor: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        icon: "fa-1",
        items: [
            { no: 1, name: "Whiteboard", desc: "Menulis menggunakan stylus.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 2, name: "Pen Tool", desc: "Mengubah warna dan ketebalan pena.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" },
            { no: 3, name: "Eraser, Undo, Redo", desc: "Menghapus dan memperbaiki tulisan.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 4, name: "Media Viewer", desc: "Membuka PDF, PPT, gambar, dan video.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 5, name: "Annotation", desc: "Memberi anotasi pada dokumen.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 6, name: "Save Whiteboard", desc: "Menyimpan hasil Whiteboard.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" }
        ]
    },
    {
        levelId: "level2",
        levelNum: 2,
        title: "LEVEL 2. AUGMENTATION",
        subTitle: "Pengembangan Fitur Interaktif",
        desc: "Memanfaatkan fitur interaktif untuk meningkatkan efektivitas dan variasi pembelajaran.",
        badgeColor: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
        icon: "fa-2",
        items: [
            { no: 1, name: "Dual Whiteboard", desc: "Menampilkan dua papan tulis digital secara berdampingan. Membandingkan materi dengan hasil diskusi atau analisis murid secara bersamaan.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 2, name: "Insert Object", desc: "Menambahkan gambar dan bentuk. Menyusun diagram atau ilustrasi.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 3, name: "Shape & Text", desc: "Membuat bagan sederhana. Menyusun peta konsep bersama murid.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 4, name: "Screen Capture", desc: "Mengambil tangkapan layar. Mendokumentasikan hasil pembelajaran.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 5, name: "Screen Recording", desc: "Merekam aktivitas layar. Membuat video pembelajaran.", videoId: "IOFyXaA0rzg", ytUrl: "https://www.youtube.com/watch?v=IOFyXaA0rzg" },
            { no: 6, name: "Export PDF", desc: "Menyimpan hasil Whiteboard. Membagikan hasil diskusi.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 7, name: "QR Code", desc: "Murid mengakses materi secara mandiri.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" }
        ]
    },
    {
        levelId: "level3",
        levelNum: 3,
        title: "LEVEL 3. MODIFICATION",
        subTitle: "Modifikasi & Pembelajaran Kolaboratif",
        desc: "Merancang pembelajaran kolaboratif multi-sentuh dan pembagian layar nirkabel.",
        badgeColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
        icon: "fa-3",
        items: [
            { no: 1, name: "Multi-touch", desc: "Kolaborasi beberapa pengguna. Murid menyusun peta konsep bersama.", videoId: "iJAeEW7twfk", ytUrl: "https://www.youtube.com/watch?v=iJAeEW7twfk" },
            { no: 2, name: "Screen Sharing", desc: "Menampilkan layar laptop/HP. Presentasi hasil kerja kelompok.", videoId: "4roZQGjvsPU", ytUrl: "https://www.youtube.com/watch?v=4roZQGjvsPU" },
            { no: 3, name: "Browser", desc: "Mengakses sumber belajar. Eksplorasi Simulasi Ruang Murid atau PhET.", videoId: "Z2yHpPEttAs", ytUrl: "https://www.youtube.com/watch?v=Z2yHpPEttAs" },
            { no: 4, name: "Screen Capture & Whiteboard Annotation", desc: "Mengambil tangkapan layar dan mengimpornya ke Whiteboard. Menganalisis gambar, grafik, atau hasil simulasi melalui anotasi dan diskusi bersama.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 5, name: "Floating Window", desc: "Membuka aplikasi pendukung. Membandingkan berbagai sumber belajar.", videoId: "-NuqyKCNaHE", ytUrl: "https://www.youtube.com/watch?v=-NuqyKCNaHE" }
        ]
    },
    {
        levelId: "level4",
        levelNum: 4,
        title: "LEVEL 4. REDEFINITION",
        subTitle: "Integrasi Tingkat Lanjut & AI",
        desc: "Pengintegrasian Kecerdasan Artifisial, LMS, dan Video Conference.",
        badgeColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
        icon: "fa-4",
        items: [
            { no: 1, name: "Kecerdasan Artifisial", desc: "Membuat media pembelajaran. Menyusun media interaktif.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
            { no: 2, name: "LMS", desc: "Menghubungkan kelas digital. Distribusi materi dan tugas.", videoId: "bt4czOjBOLg", ytUrl: "https://www.youtube.com/watch?v=bt4czOjBOLg" },
            { no: 3, name: "Video Conference", desc: "Pembelajaran sinkron. Kolaborasi dengan narasumber.", videoId: "rjxlUdiLOWg", ytUrl: "https://www.youtube.com/watch?v=rjxlUdiLOWg" }
        ]
    }
];

// --- 5. STATE MANAGEMENT & STORAGE ---
const Storage = {
    get: (key, defaultVal) => {
        try {
            const val = localStorage.getItem(key);
            return val ? JSON.parse(val) : defaultVal;
        } catch (e) { return defaultVal; }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { console.warn("LocalStorage error"); }
    }
};

window.state = {
    theme: localStorage.getItem('theme') || 'light',
    favorites: Storage.get('pidsmart_favorites', []),
    history: Storage.get('pidsmart_history', []),
    checklists: Storage.get('pidsmart_checklists', {}),
    progress: Storage.get('pidsmart_progress', []),
    currentView: 'home',
    activeVideo: null,
    lastSearchResults: null
};

// --- 6. YOUTUBE API SERVICE ---
class YouTubeAPI {
    static async searchVideos(query) {
        if (!CONFIG.YOUTUBE_API_KEY || CONFIG.YOUTUBE_API_KEY === "MASUKKAN_API_KEY_DI_SINI") {
            return [];
        }

        try {
            const searchQuery = query.toLowerCase().includes('pid') || query.toLowerCase().includes('papan')
                ? query
                : `PID Papan Interaktif ${query}`;

            const url = `${CONFIG.API_BASE_URL}/search?part=snippet&maxResults=${CONFIG.MAX_RESULTS}&q=${encodeURIComponent(searchQuery)}&type=video&regionCode=${CONFIG.REGION_CODE}&relevanceLanguage=${CONFIG.LANGUAGE}&key=${CONFIG.YOUTUBE_API_KEY}`;

            const response = await fetch(url);
            if (!response.ok) return [];

            const data = await response.json();
            if (!data.items || data.items.length === 0) return [];

            return data.items.map(item => {
                const snippet = item.snippet;
                const desc = snippet.description || "";
                const parsedTimestamps = YouTubeAPI.parseChapters(desc);

                return {
                    videoId: item.id.videoId,
                    title: snippet.title,
                    channel: snippet.channelTitle,
                    category: "YouTube Live",
                    description: desc || snippet.title,
                    tags: [query],
                    timestamps: parsedTimestamps.length > 0 ? parsedTimestamps : [
                        {
                            time: "00:00",
                            seconds: 0,
                            title: "Mulai Panduan",
                            desc: snippet.title,
                            keywords: ["mulai", "start", "video"]
                        }
                    ],
                    thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || `https://img.youtube.com/vi/${item.id.videoId}/mqdefault.jpg`,
                    isLiveAPI: true
                };
            });
        } catch (error) {
            console.error("YouTube API fetch error:", error);
            return [];
        }
    }

    static parseChapters(description) {
        const timeRegex = /(?:^|\n)\s*(?:(\d{1,2}):)?(\d{1,2}):(\d{2})\s*[-–—:]?\s*(.+)/g;
        const chapters = [];
        let match;

        while ((match = timeRegex.exec(description)) !== null) {
            const hrs = match[1] ? parseInt(match[1]) : 0;
            const mins = parseInt(match[2]);
            const secs = parseInt(match[3]);
            const totalSeconds = (hrs * 3600) + (mins * 60) + secs;
            const title = match[4].trim();

            if (!title) continue;

            const timeStr = hrs > 0
                ? `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
                : `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

            chapters.push({
                time: timeStr,
                seconds: totalSeconds,
                title: title,
                desc: `Pembahasan: ${title}`,
                keywords: title.toLowerCase().split(/\s+/)
            });
        }

        return chapters;
    }
}

// --- 7. SEARCH ENGINE ---
class SearchEngine {
    static parseIntent(query) {
        const q = query.toLowerCase();
        let matchedCategory = null;
        let maxScore = 0;

        MASTER_TOPICS.forEach(topic => {
            let score = 0;
            topic.keywords.forEach(kw => {
                if (q.includes(kw)) score++;
            });
            if (score > maxScore) {
                maxScore = score;
                matchedCategory = topic;
            }
        });

        return {
            query: q,
            intent: matchedCategory ? matchedCategory.name : "Umum",
            intentIcon: matchedCategory ? matchedCategory.icon : "fa-magnifying-glass",
            isTroubleshoot: q.includes("tidak") || q.includes("rusak") || q.includes("error") || q.includes("gagal")
        };
    }

    static async searchAsync(query) {
        const analysis = this.parseIntent(query);
        const q = analysis.query;

        let results = {
            analysis: analysis,
            videos: [],
            timestamps: [],
            isFromAPI: false
        };

        MOCK_DB.forEach(video => {
            let videoMatched = false;

            if (video.title.toLowerCase().includes(q) ||
                video.category.toLowerCase().includes(q) ||
                video.tags.some(t => q.includes(t))) {
                videoMatched = true;
                if (!results.videos.find(v => v.videoId === video.videoId)) {
                    results.videos.push(video);
                }
            }

            video.timestamps.forEach(ts => {
                if (ts.title.toLowerCase().includes(q) ||
                    ts.desc.toLowerCase().includes(q) ||
                    ts.keywords.some(kw => q.includes(kw))) {

                    results.timestamps.push({
                        video: video,
                        timestamp: ts
                    });

                    if (!videoMatched && !results.videos.find(v => v.videoId === video.videoId)) {
                        results.videos.push(video);
                    }
                }
            });
        });

        CURRICULUM_DATA.forEach(lvl => {
            lvl.items.forEach(item => {
                if (item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)) {
                    let matchedVideo = MOCK_DB.find(v => v.videoId === item.videoId);
                    if (!matchedVideo) {
                        matchedVideo = {
                            videoId: item.videoId,
                            title: `${item.name} — ${item.desc}`,
                            channel: "YouTube Guide",
                            category: lvl.title,
                            description: item.desc,
                            tags: [item.name.toLowerCase()],
                            timestamps: [
                                { time: "00:00", seconds: 0, title: item.name, desc: item.desc, keywords: item.name.toLowerCase().split(/\s+/) }
                            ],
                            isLiveAPI: false
                        };
                    }
                    if (!results.videos.find(v => v.videoId === matchedVideo.videoId)) {
                        results.videos.push(matchedVideo);
                    }
                    results.timestamps.push({
                        video: matchedVideo,
                        timestamp: {
                            time: "00:00",
                            seconds: 0,
                            title: `${item.name} [${lvl.title}]`,
                            desc: item.desc,
                            keywords: item.name.toLowerCase().split(/\s+/)
                        }
                    });
                }
            });
        });

        const apiVideos = await YouTubeAPI.searchVideos(query);
        if (apiVideos && apiVideos.length > 0) {
            results.isFromAPI = true;
            apiVideos.forEach(v => {
                if (!results.videos.find(existing => existing.videoId === v.videoId)) {
                    results.videos.push(v);
                }
                v.timestamps.forEach(ts => {
                    if (ts.title.toLowerCase().includes(q) || ts.keywords.some(kw => q.includes(kw))) {
                        results.timestamps.push({
                            video: v,
                            timestamp: ts
                        });
                    }
                });
            });
        }

        window.state.lastSearchResults = results;
        return results;
    }
}

// --- 8. UI RENDERERS (Diperbaiki dengan Dark Mode Tailwind Classes) ---
const UI = {
    container: document.getElementById('app-view'),

    components: {
        videoCard: (v) => `
            <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                    <div class="relative overflow-hidden aspect-video bg-slate-950">
                        <img src="${v.thumbnail || `https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <button onclick="app.playVideo('${v.videoId}')" class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div class="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center text-lg shadow-lg">
                                <i class="fa-solid fa-play ml-0.5"></i>
                            </div>
                        </button>
                    </div>
                    <div class="p-4">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 px-2 py-0.5 rounded-md">${v.category}</span>
                        <h4 class="font-bold text-slate-800 dark:text-slate-100 text-sm mt-2 line-clamp-2 leading-snug">${v.title}</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${v.description}</p>
                    </div>
                </div>
                <div class="px-4 pb-4 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span class="font-medium">${v.channel}</span>
                    <button onclick="app.playVideo('${v.videoId}')" class="text-pink-600 dark:text-pink-400 font-bold hover:underline flex items-center gap-1">
                        Tonton <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>
            </div>
        `
    },

    renderLoading: (query) => {
        if (!UI.container) return;
        UI.container.innerHTML = `
            <div class="fade-in max-w-4xl mx-auto py-16 text-center">
                <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-pink-600 border-t-transparent mb-4"></div>
                <h3 class="text-xl font-bold mb-1 text-slate-800 dark:text-slate-100">Mencari Panduan...</h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm">Mencari tutorial & panduan terbaik untuk: <span class="font-semibold text-pink-600 dark:text-pink-400">"${query}"</span></p>
            </div>
        `;
    },

    renderHome: () => {
        if (!UI.container) return;
        let html = `
            <div class="fade-in max-w-5xl mx-auto space-y-8">
                <!-- Hero Search -->
                <div class="bg-gradient-to-r from-pink-600 to-violet-600 rounded-3xl p-8 md:p-12 text-white shadow-xl text-center relative overflow-hidden">
                    <div class="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                        <i class="fa-solid fa-desktop text-9xl"></i>
                    </div>
                    <h2 class="text-3xl font-heading font-bold mb-2 relative z-10">Apa yang ingin Anda pelajari hari ini?</h2>
                    <p class="mb-6 opacity-90 relative z-10 text-sm md:text-base">Ketik kendala atau panduan yang Anda cari (Misal: "Dual Whiteboard", "Multi-touch", atau "Screen Sharing")</p>
                    
                    <form onsubmit="app.handleSearch(event)" class="relative max-w-2xl mx-auto z-10">
                        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                        <input type="text" id="searchInput" placeholder="Bagaimana cara..." 
                            class="w-full pl-12 pr-28 py-4 rounded-2xl text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-pink-400/30 shadow-lg text-base border border-transparent dark:border-slate-800">
                        <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-xl transition-all font-medium text-sm shadow-md">Cari</button>
                    </form>
                </div>

                <!-- Quick Access Kategori -->
                <div>
                    <h3 class="font-heading font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Akses Cepat Kategori</h3>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
                        ${MASTER_TOPICS.map(t => `
                            <button onclick="app.quickSearch('${t.name}')" class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-pink-500/50 transition-all flex flex-col items-center text-center gap-2 group">
                                <div class="${t.color} bg-slate-100 dark:bg-slate-800/80 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i class="fa-solid ${t.icon} text-xl"></i>
                                </div>
                                <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">${t.name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Kurikulum Alur Pembelajaran PID -->
                <div class="pt-4">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-pink-200 dark:border-pink-800">
                                    <i class="fa-solid fa-layer-group mr-1"></i> Kerangka Kerja SAMR
                                </span>
                            </div>
                            <h3 class="text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                Kurikulum & Alur Fitur PID
                            </h3>
                            <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                Panduan lengkap dari Level 1 hingga Level 4 dilengkapi praktik penggunaan dan saluran video YouTube resmi.
                            </p>
                        </div>
                    </div>

                    <!-- Level Filter Tabs -->
                    <div class="flex flex-wrap gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-3" id="level-tabs">
                        <button onclick="app.switchLevelTab('all')" class="level-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-pink-600 text-white shadow-sm" data-tab="all">
                            Semua Level (22 Panduan)
                        </button>
                        <button onclick="app.switchLevelTab('level1')" class="level-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level1">
                            Level 1: Substitution
                        </button>
                        <button onclick="app.switchLevelTab('level2')" class="level-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level2">
                            Level 2: Augmentation
                        </button>
                        <button onclick="app.switchLevelTab('level3')" class="level-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level3">
                            Level 3: Modification
                        </button>
                        <button onclick="app.switchLevelTab('level4')" class="level-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level4">
                            Level 4: Redefinition
                        </button>
                    </div>

                    <!-- Levels Section Container -->
                    <div class="space-y-8" id="curriculum-container">
                        ${CURRICULUM_DATA.map(lvl => `
                            <div class="level-block bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm" data-level="${lvl.levelId}">
                                <div class="p-5 bg-slate-50/80 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <span class="${lvl.badgeColor} border text-xs font-bold px-3 py-1 rounded-full inline-block mb-1">
                                            ${lvl.title}
                                        </span>
                                        <h4 class="font-bold text-lg text-slate-900 dark:text-white">${lvl.subTitle}</h4>
                                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${lvl.desc}</p>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-lg">
                                        ${lvl.items.length} Fitur
                                    </span>
                                </div>

                                <div class="divide-y divide-slate-100 dark:divide-slate-800/60">
                                    ${lvl.items.map(item => `
                                        <div class="p-4 md:p-5 hover:bg-pink-50/30 dark:hover:bg-slate-800/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div class="flex items-start gap-3.5 flex-1">
                                                <span class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                                    ${item.no}
                                                </span>
                                                <div>
                                                    <h5 class="font-bold text-slate-800 dark:text-slate-100 text-base">${item.name}</h5>
                                                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">${item.desc}</p>
                                                </div>
                                            </div>

                                            <div class="flex items-center gap-2 shrink-0 self-end md:self-center">
                                                <button onclick="app.playVideo('${item.videoId}')" class="bg-pink-50 hover:bg-pink-100 dark:bg-pink-950/50 dark:hover:bg-pink-900/50 text-pink-600 dark:text-pink-400 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 border border-pink-200 dark:border-pink-800">
                                                    <i class="fa-solid fa-play"></i> Buka Panduan
                                                </button>
                                                <a href="${item.ytUrl}" target="_blank" rel="noopener noreferrer" class="bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm hover:scale-105">
                                                    <i class="fa-brands fa-youtube"></i> YouTube
                                                </a>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        UI.container.innerHTML = html;
    },

    renderSearchResults: (query, results) => {
        if (!UI.container) return;
        let html = `<div class="fade-in max-w-5xl mx-auto">`;

        html += `
            <div class="flex items-center gap-4 mb-6">
                <button onclick="app.navigate('home')" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="flex-1 relative">
                    <form onsubmit="app.handleSearch(event)">
                        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                        <input type="text" id="searchInput" value="${query}" class="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm text-sm">
                    </form>
                </div>
            </div>
        `;

        html += `
            <div class="bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50 rounded-2xl p-4 mb-6 flex items-start gap-4">
                <div class="bg-pink-600 text-white p-3 rounded-xl mt-1 shrink-0">
                    <i class="fa-solid ${results.analysis.intentIcon} text-xl"></i>
                </div>
                <div>
                    <h4 class="text-pink-900 dark:text-pink-300 font-bold mb-1">Analisis Cerdas PID</h4>
                    <p class="text-sm text-pink-700 dark:text-pink-400">
                        Sistem mengenali pertanyaan Anda terkait kategori <strong>${results.analysis.intent}</strong>. 
                        ${results.analysis.isTroubleshoot ? '<span class="inline-block mt-1 px-2.5 py-0.5 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 text-xs rounded-md font-semibold mr-2">🔧 Mode Pemecahan Masalah</span>' : ''}
                    </p>
                </div>
            </div>
        `;

        if (results.videos.length === 0 && results.timestamps.length === 0) {
            html += `
                <div class="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
                    <div class="text-6xl mb-4">🤔</div>
                    <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Tidak ditemukan panduan</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm">Coba gunakan kata kunci lain yang lebih umum.</p>
                </div>
            </div>`;
            UI.container.innerHTML = html;
            return;
        }

        if (results.timestamps.length > 0) {
            html += `
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                    <i class="fa-solid fa-bullseye text-pink-600 dark:text-pink-400"></i> Langsung ke Pembahasan
                </h3>
                <div class="space-y-3 mb-8">
                    ${results.timestamps.map(res => `
                        <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border-l-4 border-pink-600 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all cursor-pointer flex justify-between items-center group" onclick="app.playVideo('${res.video.videoId}', ${res.timestamp.seconds})">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-mono font-bold text-xs px-2.5 py-0.5 rounded-md border border-pink-200 dark:border-pink-800">
                                        <i class="fa-regular fa-clock"></i> ${res.timestamp.time}
                                    </span>
                                    <span class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">di panduan: ${res.video.title}</span>
                                </div>
                                <h4 class="font-bold text-slate-800 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">${res.timestamp.title}</h4>
                                <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">${res.timestamp.desc}</p>
                            </div>
                            <div class="hidden sm:block ml-4">
                                <button class="bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">
                                    <i class="fa-solid fa-folder-open mr-1"></i> Buka
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        if (results.videos.length > 0) {
            html += `
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                    <i class="fa-solid fa-video text-violet-600 dark:text-violet-400"></i> Panduan Relevan (${results.videos.length})
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${results.videos.map(v => UI.components.videoCard(v)).join('')}
                </div>
            `;
        }

        html += `</div>`;
        UI.container.innerHTML = html;
    },

    renderPlayer: (video, startSeconds = 0) => {
        if (!UI.container) return;
        const embedUrl = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&start=${startSeconds}&rel=0&enablejsapi=1`;
        const timeBadgeText = startSeconds ? app.formatTime(startSeconds) : "00:00";

        let html = `
            <div class="fade-in max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-6">
                <!-- Left: Embedded Video Player -->
                <div class="lg:w-2/3 flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                        <button onclick="app.navigate('home')" class="text-slate-600 dark:text-slate-300 hover:text-pink-600 font-semibold flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow transition-all text-xs">
                            <i class="fa-solid fa-arrow-left"></i> Kembali ke Beranda
                        </button>
                        <span id="active-time-badge" class="bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 text-xs px-3 py-1.5 rounded-xl font-mono font-bold border border-pink-200 dark:border-pink-800">
                            <i class="fa-regular fa-clock mr-1"></i> Posisi: ${timeBadgeText}
                        </span>
                    </div>
                    
                    <div class="relative bg-black rounded-3xl overflow-hidden shadow-2xl mb-6 aspect-video border border-slate-800">
                        <iframe id="yt-embed-player"
                            src="${embedUrl}" 
                            title="${video.title}" 
                            class="w-full h-full border-0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
                        <h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-4">${video.title}</h2>
                        
                        <div class="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                            <div class="flex items-center gap-3">
                                <div class="bg-gradient-to-br from-pink-600 to-violet-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md">
                                    <i class="fa-solid fa-play text-sm"></i>
                                </div>
                                <div>
                                    <p class="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight">${video.channel}</p>
                                    <p class="text-xs text-slate-500 dark:text-slate-400">Kategori: ${video.category}</p>
                                </div>
                            </div>

                            <div class="flex flex-wrap items-center gap-2">
                                <button class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5" onclick="app.toggleFavorite('${video.videoId}')">
                                    <i class="fa-bookmark ${window.state.favorites.includes(video.videoId) ? 'fa-solid text-yellow-500' : 'fa-regular'}"></i> Favorit
                                </button>
                                <a id="direct-yt-btn" href="https://www.youtube.com/watch?v=${video.videoId}${startSeconds ? `&t=${startSeconds}s` : ''}" target="_blank" rel="noopener noreferrer" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105">
                                    <i class="fa-brands fa-youtube"></i> Tonton di YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 shadow-sm">
                        <h4 class="font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-2 text-base">
                            <i class="fa-solid fa-circle-info text-pink-600 dark:text-pink-400"></i> Deskripsi & Detail Panduan
                        </h4>
                        <p class="whitespace-pre-line leading-relaxed text-slate-600 dark:text-slate-300">${video.description}</p>
                    </div>
                </div>

                <!-- Right: Timestamps -->
                <div class="lg:w-1/3 flex flex-col h-[650px]">
                    <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex-1 flex flex-col overflow-hidden">
                        <div class="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                            <h3 class="font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                                <i class="fa-solid fa-list-ul text-pink-600 dark:text-pink-400"></i> Daftar Pembahasan & Bab
                            </h3>
                            <div class="relative">
                                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm"></i>
                                <input type="text" id="videoSearchInput" placeholder="Cari bab di panduan ini..." 
                                    onkeyup="app.filterTimestamps(this.value)"
                                    class="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500">
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-2" id="timestamp-list">
                            ${video.timestamps.map(ts => `
                                <div class="ts-item p-3.5 hover:bg-pink-50/80 dark:hover:bg-slate-800/80 rounded-2xl cursor-pointer transition-all border border-slate-100 dark:border-slate-800/60 group" 
                                     onclick="app.seekTo(${ts.seconds})" data-keywords="${ts.title.toLowerCase()} ${ts.keywords ? ts.keywords.join(' ') : ''}">
                                    <div class="flex items-start gap-3">
                                        <span class="bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-mono text-xs px-2.5 py-1 rounded-lg border border-pink-200 dark:border-pink-800 font-bold shrink-0">
                                            ${ts.time}
                                        </span>
                                        <div>
                                            <h5 class="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">${ts.title}</h5>
                                            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">${ts.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        UI.container.innerHTML = html;
    }
};

// --- 9. MAIN APPLICATION CONTROLLER ---
const app = {
    init: () => {
        UI.renderHome();
    },

    navigate: (view) => {
        window.state.currentView = view;
        if (view === 'home') {
            UI.renderHome();
        }
    },

    handleSearch: async (e) => {
        e.preventDefault();
        const input = document.getElementById('searchInput');
        if (!input || !input.value.trim()) return;

        const query = input.value.trim();
        UI.renderLoading(query);

        const results = await SearchEngine.searchAsync(query);
        UI.renderSearchResults(query, results);
    },

    quickSearch: async (keyword) => {
        UI.renderLoading(keyword);
        const results = await SearchEngine.searchAsync(keyword);
        UI.renderSearchResults(keyword, results);
    },

    switchLevelTab: (tabKey) => {
        const btns = document.querySelectorAll('.level-tab-btn');
        btns.forEach(btn => {
            btn.classList.remove('bg-pink-600', 'text-white', 'shadow-sm');
            btn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-700');
        });

        const activeBtn = document.querySelector(`.level-tab-btn[data-tab="${tabKey}"]`);
        if (activeBtn) {
            activeBtn.classList.add('bg-pink-600', 'text-white', 'shadow-sm');
            activeBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-700');
        }

        const blocks = document.querySelectorAll('.level-block');
        blocks.forEach(block => {
            if (tabKey === 'all' || block.dataset.level === tabKey) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });
    },

    playVideo: (videoId, startSeconds = 0) => {
        let video = MOCK_DB.find(v => v.videoId === videoId);

        if (!video && window.state.lastSearchResults) {
            video = window.state.lastSearchResults.videos.find(v => v.videoId === videoId);
        }

        if (!video) {
            video = {
                videoId: videoId,
                title: "Tutorial Papan Interaktif Digital",
                channel: "Panduan YouTube",
                category: "Video Tutorial",
                description: "Saksikan langkah demi langkah penggunaan fitur papan interaktif digital.",
                timestamps: [
                    { time: "00:00", seconds: 0, title: "Mulai Video", desc: "Panduan Fitur Utama PID", keywords: ["mulai"] }
                ]
            };
        }

        window.state.activeVideo = video;
        UI.renderPlayer(video, startSeconds);
    },

    seekTo: (seconds) => {
        const iframe = document.getElementById('yt-embed-player');
        if (iframe && window.state.activeVideo) {
            iframe.src = `https://www.youtube-nocookie.com/embed/${window.state.activeVideo.videoId}?autoplay=1&start=${seconds}&rel=0&enablejsapi=1`;
        }

        const badge = document.getElementById('active-time-badge');
        if (badge) {
            badge.innerHTML = `<i class="fa-regular fa-clock mr-1"></i> Posisi: ${app.formatTime(seconds)}`;
        }

        const ytBtn = document.getElementById('direct-yt-btn');
        if (ytBtn && window.state.activeVideo) {
            ytBtn.href = `https://www.youtube.com/watch?v=${window.state.activeVideo.videoId}&t=${seconds}s`;
        }
    },

    filterTimestamps: (query) => {
        const q = query.toLowerCase().trim();
        const items = document.querySelectorAll('.ts-item');
        items.forEach(item => {
            const text = item.getAttribute('data-keywords') || "";
            if (!q || text.includes(q)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    },

    toggleFavorite: (videoId) => {
        const index = window.state.favorites.indexOf(videoId);
        if (index > -1) {
            window.state.favorites.splice(index, 1);
        } else {
            window.state.favorites.push(videoId);
        }
        Storage.set('pidsmart_favorites', window.state.favorites);
        if (window.state.activeVideo) {
            UI.renderPlayer(window.state.activeVideo);
        }
    },

    formatTime: (totalSecs) => {
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
};

// Inisialisasi saat DOM SIAP
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});