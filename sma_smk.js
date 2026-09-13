// ==========================================================================
// SMA_SMK.JS - NAMESPACED VERSION (AppSMA)
// ==========================================================================
window.AppSMA = (function () {

    const CONFIG = {
        YOUTUBE_API_KEY: "AIzaSyCJ6HwEsp6TzaQaF58ZXaGAClq-dzIXN8s",
        MAX_RESULTS: 12,
        REGION_CODE: "ID",
        LANGUAGE: "id",
        API_BASE_URL: "https://www.googleapis.com/youtube/v3"
    };

    const MASTER_TOPICS = [
        { id: "M01", name: "Perawatan & Pemeliharaan", icon: "fa-wrench", color: "text-blue-500", keywords: ["rawat", "bersih", "pemeliharaan", "kain", "peralatan"] },
        { id: "M02", name: "Keamanan & SOP", icon: "fa-shield-halved", color: "text-emerald-500", keywords: ["pengamanan", "fisik", "simpan", "sop", "kebijakan", "form"] },
        { id: "M03", name: "Troubleshooting", icon: "fa-triangle-exclamation", color: "text-red-500", keywords: ["rusak", "error", "mati", "gagal", "masalah", "lambat", "kendala"] },
        { id: "M04", name: "Manajemen Daya & Sistem", icon: "fa-power-off", color: "text-orange-500", keywords: ["nyala", "mati", "auto power", "jadwal", "akun", "hak akses"] },
        { id: "M05", name: "Dasar & Navigasi", icon: "fa-hand-pointer", color: "text-teal-500", keywords: ["dasar", "tombol", "navigasi", "audio", "kamera", "keyboard", "bahasa", "jaringan", "hotspot"] },
        { id: "M06", name: "Whiteboard & Anotasi", icon: "fa-pen-nib", color: "text-pink-500", keywords: ["whiteboard", "tulis", "stylus", "pena", "eraser", "undo", "redo", "kanvas", "anotasi", "pdf", "ppt"] },
        { id: "M07", name: "Tampilan & Presentasi", icon: "fa-columns", color: "text-indigo-500", keywords: ["split screen", "split whiteboard", "duplikasi", "smart shape", "smart word", "presisi", "penggaris"] },
        { id: "M08", name: "Dokumentasi & Berbagi", icon: "fa-share-nodes", color: "text-yellow-500", keywords: ["screenshot", "screen recording", "rekam", "ekspor", "qr code", "cloud", "usb"] },
        { id: "M09", name: "Kolaborasi & Multi-touch", icon: "fa-users text-purple-500", color: "text-purple-500", keywords: ["multi-touch", "kolaborasi", "real-time", "multi-perangkat", "screen share nirkabel"] },
        { id: "M10", name: "AI, LMS & Hybrid Learning", icon: "fa-robot", color: "text-cyan-500", keywords: ["ka", "kecerdasan artifisial", "ai", "lms", "video conference", "vicon", "zoom", "asesmen", "polling"] }
    ];

    const MOCK_DB = [
        // {
        //     videoId: "2w6z1dzx-bM",
        //     title: "Tutorial Lengkap Penggunaan Papan Interaktif Digital (IFP) SMA/SMK",
        //     channel: "Schoolpedia",
        //     category: "Pengoperasian Dasar",
        //     description: "Panduan menyeluruh penggunaan Papan Interaktif Digital (PID) mencakup navigasi menu dasar, papan tulis digital, koneksi jaringan, manajemen akun, hingga split screen.",
        //     tags: ["dasar", "nyala", "menu", "whiteboard", "hdmi", "wifi", "suara", "split"],
        //     timestamps: [
        //         { time: "00:00", seconds: 0, title: "Prosedur Menyalakan/Mematikan & SOP Operasional", desc: "Navigasi tombol utama, manajemen daya, dan prosedur operasional dasar.", keywords: ["tombol", "nyala", "mati", "power", "sop"] },
        //         { time: "03:18", seconds: 198, title: "Penggunaan Aplikasi Whiteboard Dasar", desc: "Dasar penggunaan kanvas, pilihan pena, warna, dan fitur eraser.", keywords: ["whiteboard", "tulis", "papan", "pen", "eraser"] },
        //         { time: "05:18", seconds: 318, title: "Menyisipkan Media, Grafik & Bentuk Presisi", desc: "Import gambar, grafik, tabel, dan penggunaan smart shape/word.", keywords: ["foto", "gambar", "grafik", "tabel", "smart shape"] },
        //         { time: "08:10", seconds: 490, title: "Split Whiteboard & Multi-Touch Collaboration", desc: "Membagi kanvas menjadi dua area kerja untuk interaksi dua siswa bersamaan.", keywords: ["split whiteboard", "multi-touch", "ganda", "kolaborasi"] },
        //         { time: "09:03", seconds: 543, title: "Akses Browser & Sumber Belajar dari Whiteboard", desc: "Membuka halaman web dan materi digital langsung di dalam aplikasi papan tulis.", keywords: ["browser", "web", "internet", "sumber belajar"] },
        //         { time: "12:54", seconds: 774, title: "Penyimpanan, QR Code & Ekspor PDF", desc: "Menyimpan file kerja ke internal/USB dan membagikan via QR Code.", keywords: ["simpan", "ekspor", "pdf", "usb", "qr code"] },
        //         { time: "14:53", seconds: 893, title: "Smart Word: Tulisan Tangan ke Teks Otomatis", desc: "Fitur kecerdasan penulisan otomatis merapikan tulisan tangan.", keywords: ["tulisan", "teks", "smart word", "otomatis"] },
        //         { time: "19:57", seconds: 1497, title: "Fitur Split Screen (Multi-Aplikasi)", desc: "Menampilkan dua aplikasi berbeda secara simultan di satu layar.", keywords: ["split screen", "dua aplikasi", "layar ganda"] },
        //         { time: "24:57", seconds: 1497, title: "Screen Sharing Nirkabel & Multi-Device", desc: "Panduan mirroring layar HP/Laptop siswa dan guru ke PID.", keywords: ["screen sharing", "mirroring", "nirkabel", "multi-device"] },
        //         { time: "38:27", seconds: 2307, title: "Pengaturan Jaringan Internet, Hotspot & Akun", desc: "Konfigurasi WiFi, Hotspot, serta manajemen akun akun pengguna PID.", keywords: ["wifi", "internet", "hotspot", "akun", "jaringan"] }
        //     ],
        //     isLiveAPI: false
        // },
        // {
        //     videoId: "I4CT9qxIzrQ",
        //     title: "Eksplorasi Fitur Lanjutan & Anotasi Interaktif PID",
        //     channel: "Schoolpedia",
        //     category: "Whiteboard & Anotasi",
        //     description: "Panduan fitur-fitur canggih pada Whiteboard, anotasi di atas dokumen PDF/PPT, screenshot web, serta teknik kolaborasi multi-touch.",
        //     tags: ["whiteboard", "anotasi", "screenshot", "multi-touch", "pdf"],
        //     timestamps: [
        //         { time: "00:00", seconds: 0, title: "Fitur Anotasi Media & Dokumen PDF/PPT", desc: "Memberi catatan di atas file media, presentasi, dan dokumen digital.", keywords: ["anotasi", "pdf", "ppt", "dokumen"] },
        //         { time: "02:39", seconds: 159, title: "Smart Shape & Penggunaan Alat Bantu Presisi", desc: "Membuat penggaris, busur, dan gambar geometri yang rapi secara otomatis.", keywords: ["smart shape", "penggaris", "busur", "presisi"] },
        //         { time: "04:19", seconds: 259, title: "Tangkapan Layar (Screenshot) & Impor Ke Kanvas", desc: "Mengambil gambar materi web/aplikasi lalu diimpor ke Whiteboard.", keywords: ["screenshot", "tangkapan layar", "impor"] },
        //         { time: "08:32", seconds: 512, title: "Mode Multi-touch & Penyuntingan Real-Time", desc: "Kolaborasi multi-sentuh untuk pengerjaan tugas kelompok secara simultan.", keywords: ["multi-touch", "kolaborasi", "real-time"] }
        //     ],
        //     isLiveAPI: false
        // },
        // {
        //     videoId: "5ywIANLgvOg",
        //     title: "Panduan Resmi Pemanfaatan Papan Interaktif Digital (PID 2026)",
        //     channel: "KEMDIKDASMEN",
        //     category: "Pemanfaatan Pembelajaran",
        //     description: "Panduan resmi tata kelola, perawatan, integrasi media interaktif, hingga penggunaan AI dalam pembelajaran dengan PID.",
        //     tags: ["kemdikbud", "tata kelola", "perawatan", "ai", "pembelajaran"],
        //     timestamps: [
        //         { time: "00:00", seconds: 0, title: "Pengenalan, Keamanan & Tata Kelola PID", desc: "SOP penggunaan, pengamanan peralatan fisik/teknis, dan pemeliharaan.", keywords: ["sop", "perawatan", "pemeliharaan", "keamanan"] },
        //         { time: "02:30", seconds: 150, title: "Pemanfaatan PID & Integrasi Konten Berbasis KA (AI)", desc: "Integrasi media interaktif, penyusunan kuis, dan pemanfaatan Kecerdasan Artifisial.", keywords: ["ai", "ka", "asesmen", "kuis", "pembelajaran"] }
        //     ],
        //     isLiveAPI: false
        // }
        {
            videoId: "MCe08odRY0o",
            title: "Pendampingan & Instrumen Pemanfaatan PID Bagi Satuan Pendidikan SMA/SMK",
            channel: "KEMDIKDASMEN",
            category: "Instrumen & Pendampingan",
            description: "Panduan instrumen pendampingan pemanfaatan Papan Interaktif Digital (PID) di satuan pendidikan sesuai standar percepatan digitalisasi pembelajaran.",
            tags: ["instrumen", "pendampingan", "pid", "sma", "smk", "sop"],
            timestamps: [
                { time: "00:00", seconds: 0, title: "Pengenalan Instrumen & Kebijakan PID", desc: "Penjelasan instrumen kelayakan dan pendampingan pemanfaatan PID.", keywords: ["instrumen", "kebijakan", "pendampingan"] },
                { time: "02:15", seconds: 135, title: "Ceklis Evaluasi & Penggunaan di Sekolah", desc: "Prosedur pengisian instrumen evaluasi pembelajaran berbasis PID.", keywords: ["ceklis", "evaluasi", "sekolah"] }
            ],
            isLiveAPI: false
        },
        {
            videoId: "5ywIANLgvOg",
            title: "Tutorial Resmi Penggunaan Papan Interaktif Digital (PID 2026)",
            channel: "KEMDIKDASMEN",
            category: "Pemanfaatan Pembelajaran",
            description: "Panduan resmi tata kelola, perawatan, integrasi media interaktif, hingga penggunaan AI dalam pembelajaran dengan PID.",
            tags: ["kemdikbud", "tata kelola", "perawatan", "ai", "pembelajaran"],
            timestamps: [
                { time: "00:00", seconds: 0, title: "Pengenalan, Keamanan & Tata Kelola PID", desc: "SOP penggunaan, pengamanan peralatan fisik/teknis, dan pemeliharaan.", keywords: ["sop", "perawatan", "pemeliharaan", "keamanan"] },
                { time: "02:30", seconds: 150, title: "Pemanfaatan PID & Integrasi Konten Berbasis KA (AI)", desc: "Integrasi media interaktif, penyusunan kuis, dan pemanfaatan Kecerdasan Artifisial.", keywords: ["ai", "ka", "asesmen", "kuis", "pembelajaran"] }
            ],
            isLiveAPI: false
        }
    ];

    const CURRICULUM_DATA = [
        {
            levelId: "modul0",
            levelNum: 0,
            title: "TATA KELOLA & KEAMANAN PID",
            subTitle: "Modul Operasional, Maintenance & Power System",
            desc: "Prosedur keamanan fisik/teknis, perawatan peralatan, troubleshooting, serta manajemen daya otomatis.",
            badgeColor: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700",
            icon: "fa-shield-halved",
            items: [
                {
                    no: 1,
                    name: "Perawatan & Pemeliharaan PID",
                    desc: "Peralatan pendukung & teknis pemeliharaan perangkat PID.",
                    videoId: "5ywIANLgvOg",
                    ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg"
                },
                {
                    no: 2,
                    name: "Keamanan, SOP & Instrumen Pendampingan",
                    desc: "Pengamanan peralatan (fisik/teknis), prosedur penyimpanan, dan instrumen pendampingan satuan pendidikan.",
                    videoId: "MCe08odRY0o",
                    ytUrl: "https://www.youtube.com/watch?v=MCe08odRY0o"
                }
            ]
        },
        {
            levelId: "level1",
            levelNum: 1,
            title: "LEVEL S - SUBSTITUTION",
            subTitle: "Pengoperasian Dasar & Penggantian Papan Konvensional",
            desc: "Navigasi perangkat, whiteboard dasar, pembukaan media viewer, anotasi sederhana, dan konektivitas dasar.",
            badgeColor: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
            icon: "fa-1",
            items: [
                { no: 1, name: "Pengoperasian Dasar Perangkat", desc: "Menghidupkan/mematikan PID, navigasi menu, audio, kamera, keyboard, & koneksi internet/hotspot.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" },
                { no: 2, name: "Whiteboard Dasar", desc: "Menulis dengan stylus, mengatur warna/ketebalan pena, eraser, undo/redo, ganti kanvas, & tambah halaman.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" },
                { no: 3, name: "Media Viewer & Anotasi Sederhana", desc: "Membuka file PDF, PPT, gambar, video, serta memberikan catatan langsung.", videoId: "I4CT9qxIzrQ", ytUrl: "https://www.youtube.com/watch?v=I4CT9qxIzrQ" },
                { no: 4, name: "Penyimpanan & Koneksi Kabel", desc: "Menyimpan hasil Whiteboard dan menghubungkan laptop via kabel HDMI/USB.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" }
            ]
        },
        {
            levelId: "level2",
            levelNum: 2,
            title: "LEVEL A - AUGMENTATION",
            subTitle: "Peningkatan Tampilan & Fitur Interaktif Lanjutan",
            desc: "Fitur split screen, penyisipan objek presisi, smart shape/word, dokumentasi layar, dan berbagi file nirkabel.",
            badgeColor: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
            icon: "fa-2",
            items: [
                { no: 1, name: "Tampilan Split Screen & Split Whiteboard", desc: "Menampilkan dua aplikasi bersamaan atau membagi kanvas menjadi 2 area kerja.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" },
                { no: 2, name: "Smart Shape, Smart Word & Alat Presisi", desc: "Menggunakan perapih bentuk/tulisan otomatis, penggaris, busur, & akses web di Whiteboard.", videoId: "I4CT9qxIzrQ", ytUrl: "https://www.youtube.com/watch?v=I4CT9qxIzrQ" },
                { no: 3, name: "Dokumentasi Layar (Screenshot & Recording)", desc: "Merekam aktivitas layar, mengambil screenshot, dan mengekspor hasil ke PDF/Gambar.", videoId: "IOFyXaA0rzg", ytUrl: "https://www.youtube.com/watch?v=IOFyXaA0rzg" },
                { no: 4, name: "Manajemen File & Screen Sharing Nirkabel", desc: "Kelola folder/USB/Cloud, berbagi file via QR Code, & screen sharing nirkabel 1 perangkat.", videoId: "2w6z1dzx-bM", ytUrl: "https://www.youtube.com/watch?v=2w6z1dzx-bM" }
            ]
        },
        {
            levelId: "level3",
            levelNum: 3,
            title: "LEVEL M - MODIFICATION",
            subTitle: "Pembelajaran Kolaboratif Multi-Touch & Multi-Screen",
            desc: "Merancang kerja kelompok interaktif, screen sharing multi-perangkat, simulasi interaktif, dan kuis real-time.",
            badgeColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
            icon: "fa-3",
            items: [
                { no: 1, name: "Kolaborasi Multi-Touch & Diskusi Real-Time", desc: "Pengerjaan tugas oleh banyak pengguna sekaligus di layar PID secara simultan.", videoId: "iJAeEW7twfk", ytUrl: "https://www.youtube.com/watch?v=iJAeEW7twfk" },
                { no: 2, name: "Screen Sharing Multi-Perangkat", desc: "Menampilkan layar beberapa laptop/HP siswa bersamaan untuk perbandingan kelompok.", videoId: "4roZQGjvsPU", ytUrl: "https://www.youtube.com/watch?v=4roZQGjvsPU" },
                { no: 3, name: "Eksplorasi Simulasi & Floating Window", desc: "Akses PhET/Ruang Murid, pemanfaatan floating window, dan perbandingan multi-sumber.", videoId: "Z2yHpPEttAs", ytUrl: "https://www.youtube.com/watch?v=Z2yHpPEttAs" },
                { no: 4, name: "Asesmen Interaktif (Polling & Kuis)", desc: "Pelaksanaan kuis dan polling real-time untuk pemahaman siswa.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" }
            ]
        },
        {
            levelId: "level4",
            levelNum: 4,
            title: "LEVEL R - REDEFINITION",
            subTitle: "Pengembangan Berbasis AI, LMS & Kolaborasi Global",
            desc: "Penggunaan AI untuk media & asesmen, penyusunan skenario utuh, integrasi LMS, serta Video Conference.",
            badgeColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
            icon: "fa-4",
            items: [
                { no: 1, name: "Pengembangan Konten Berbasis KA (AI)", desc: "Membuat media interaktif dan menyusun asesmen/butir soal/rubrik dengan kecerdasan artifisial.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
                { no: 2, name: "Integrasi Skenario & Diseminasi", desc: "Mengintegrasikan media ke skenario pembelajaran utuh dan menyajikan hasil untuk umpan balik.", videoId: "5ywIANLgvOg", ytUrl: "https://www.youtube.com/watch?v=5ywIANLgvOg" },
                { no: 3, name: "Integrasi LMS & Video Conference", desc: "Menghubungkan PID dengan LMS (Google Classroom/Moodle) & Vicon untuk kolaborasi lintas ruang-waktu.", videoId: "rjxlUdiLOWg", ytUrl: "https://www.youtube.com/watch?v=rjxlUdiLOWg" }
            ]
        }
    ];

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
            } catch (e) { console.warn("LocalStorage Error"); }
        }
    };

    const state = {
        theme: localStorage.getItem('theme') || 'light',
        favorites: Storage.get('pid_sma_favorites', []),
        history: Storage.get('pid_sma_history', []),
        currentView: 'home',
        activeVideo: null,
        lastSearchResults: null
    };

    class YouTubeAPI {
        static async searchVideos(query) {
            if (!CONFIG.YOUTUBE_API_KEY || CONFIG.YOUTUBE_API_KEY === "MASUKKAN_API_KEY_DI_SINI") return [];
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
                        category: "YouTube Live Search",
                        description: desc || snippet.title,
                        tags: [query],
                        timestamps: parsedTimestamps.length > 0 ? parsedTimestamps : [
                            { time: "00:00", seconds: 0, title: "Mulai Panduan", desc: snippet.title, keywords: ["mulai", "start"] }
                        ],
                        thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || `https://img.youtube.com/vi/${item.id.videoId}/mqdefault.jpg`,
                        isLiveAPI: true
                    };
                });
            } catch (error) {
                console.error("YouTube API Fetch Error:", error);
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
                chapters.push({ time: timeStr, seconds: totalSeconds, title: title, desc: `Pembahasan: ${title}`, keywords: title.toLowerCase().split(/\s+/) });
            }
            return chapters;
        }
    }

    class SearchEngine {
        static parseIntent(query) {
            const q = query.toLowerCase();
            let matchedCategory = null;
            let maxScore = 0;
            MASTER_TOPICS.forEach(topic => {
                let score = 0;
                topic.keywords.forEach(kw => { if (q.includes(kw)) score++; });
                if (score > maxScore) { maxScore = score; matchedCategory = topic; }
            });
            return {
                query: q,
                intent: matchedCategory ? matchedCategory.name : "Umum",
                intentIcon: matchedCategory ? matchedCategory.icon : "fa-magnifying-glass",
                isTroubleshoot: q.includes("rusak") || q.includes("error") || q.includes("gagal") || q.includes("mati") || q.includes("kendala")
            };
        }

        static async searchAsync(query) {
            const analysis = this.parseIntent(query);
            const q = analysis.query;
            let results = { analysis: analysis, videos: [], timestamps: [], isFromAPI: false };

            MOCK_DB.forEach(video => {
                let videoMatched = false;
                if (video.title.toLowerCase().includes(q) || video.category.toLowerCase().includes(q) || video.tags.some(t => q.includes(t))) {
                    videoMatched = true;
                    if (!results.videos.find(v => v.videoId === video.videoId)) results.videos.push(video);
                }
                video.timestamps.forEach(ts => {
                    if (ts.title.toLowerCase().includes(q) || ts.desc.toLowerCase().includes(q) || ts.keywords.some(kw => q.includes(kw))) {
                        results.timestamps.push({ video: video, timestamp: ts });
                        if (!videoMatched && !results.videos.find(v => v.videoId === video.videoId)) results.videos.push(video);
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
                                channel: "Panduan PID SMA/SMK",
                                category: lvl.title,
                                description: item.desc,
                                tags: [item.name.toLowerCase()],
                                timestamps: [{ time: "00:00", seconds: 0, title: item.name, desc: item.desc, keywords: item.name.toLowerCase().split(/\s+/) }],
                                isLiveAPI: false
                            };
                        }
                        if (!results.videos.find(v => v.videoId === matchedVideo.videoId)) results.videos.push(matchedVideo);
                        results.timestamps.push({
                            video: matchedVideo,
                            timestamp: { time: "00:00", seconds: 0, title: `${item.name} [${lvl.title}]`, desc: item.desc, keywords: item.name.toLowerCase().split(/\s+/) }
                        });
                    }
                });
            });

            const apiVideos = await YouTubeAPI.searchVideos(query);
            if (apiVideos && apiVideos.length > 0) {
                results.isFromAPI = true;
                apiVideos.forEach(v => {
                    if (!results.videos.find(existing => existing.videoId === v.videoId)) results.videos.push(v);
                    v.timestamps.forEach(ts => {
                        if (ts.title.toLowerCase().includes(q) || ts.keywords.some(kw => q.includes(kw))) {
                            results.timestamps.push({ video: v, timestamp: ts });
                        }
                    });
                });
            }

            state.lastSearchResults = results;
            return results;
        }
    }

    const UI = {
        getContainer: () => document.getElementById('app-view-sma'),

        components: {
            videoCard: (v) => `
                <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                    <div>
                        <div class="relative overflow-hidden aspect-video bg-slate-950">
                            <img src="${v.thumbnail || `https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                            <button onclick="AppSMA.app.playVideo('${v.videoId}')" class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
                        <button onclick="AppSMA.app.playVideo('${v.videoId}')" class="text-pink-600 dark:text-pink-400 font-bold hover:underline flex items-center gap-1">
                            Tonton <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>
            `
        },

        renderLoading: (query) => {
            const container = UI.getContainer();
            if (!container) return;
            container.innerHTML = `
                <div class="fade-in max-w-4xl mx-auto py-16 text-center">
                    <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-pink-600 border-t-transparent mb-4"></div>
                    <h3 class="text-xl font-bold mb-1 text-slate-800 dark:text-slate-100">Mencari Materi PID...</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm">Sedang memproses kata kunci: <span class="font-semibold text-pink-600 dark:text-pink-400">"${query}"</span></p>
                </div>
            `;
        },

        renderHome: () => {
            const container = UI.getContainer();
            if (!container) return;
            let html = `
                <div class="fade-in max-w-5xl mx-auto space-y-8">
                    <div class="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl text-center relative overflow-hidden">
                        <div class="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                            <i class="fa-solid fa-graduation-cap text-9xl"></i>
                        </div>
                        <span class="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3 backdrop-blur-md">
                            SMA & SMK PID SAMR 2026
                        </span>
                        <h2 class="text-3xl font-heading font-bold mb-2 relative z-10">Pencarian Panduan & Modul PID</h2>
                        <p class="mb-6 opacity-90 relative z-10 text-sm md:text-base">Ketik kebutuhan Anda (Misal: "SOP Keamanan", "Auto Power Schedule", "Smart Shape", "AI Asesmen", atau "Multi-touch")</p>
                        
                        <form onsubmit="AppSMA.app.handleSearch(event)" class="relative max-w-2xl mx-auto z-10">
                            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                            <input type="text" id="searchInputSMA" placeholder="Cari fitur, topik SAMR, atau masalah teknis..." 
                                class="w-full pl-12 pr-28 py-4 rounded-2xl text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-pink-400/30 shadow-lg text-base border border-transparent dark:border-slate-800">
                            <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-xl transition-all font-medium text-sm shadow-md">Cari</button>
                        </form>
                    </div>

                    <div>
                        <h3 class="font-heading font-bold text-xl mb-4 text-slate-900 dark:text-slate-100">Modul & Kategori Cepat</h3>
                        <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
                            ${MASTER_TOPICS.map(t => `
                                <button onclick="AppSMA.app.quickSearch('${t.name}')" class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-pink-500/50 transition-all flex flex-col items-center text-center gap-2 group">
                                    <div class="${t.color} bg-slate-100 dark:bg-slate-800/80 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i class="fa-solid ${t.icon} text-xl"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">${t.name}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="pt-4">
                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-pink-200 dark:border-pink-800">
                                        <i class="fa-solid fa-list-check mr-1"></i> Lembar Ceklis SAMR PID 2026
                                    </span>
                                </div>
                                <h3 class="text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    Modul Tata Kelola & Kerangka SAMR SMA/SMK
                                </h3>
                                <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                    Panduan terstruktur dari Modul Keamanan, Level S (Substitution), Level A (Augmentation), Level M (Modification), hingga Level R (Redefinition).
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                            <button onclick="AppSMA.app.switchLevelTab('all')" class="level-tab-btn-sma px-4 py-2 rounded-xl text-xs font-bold transition-all bg-pink-600 text-white shadow-sm" data-tab="all">Semua Modul & Level</button>
                            <button onclick="AppSMA.app.switchLevelTab('modul0')" class="level-tab-btn-sma px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="modul0">Tata Kelola & Keamanan</button>
                            <button onclick="AppSMA.app.switchLevelTab('level1')" class="level-tab-btn-sma px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level1">Level S: Substitution</button>
                            <button onclick="AppSMA.app.switchLevelTab('level2')" class="level-tab-btn-sma px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level2">Level A: Augmentation</button>
                            <button onclick="AppSMA.app.switchLevelTab('level3')" class="level-tab-btn-sma px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level3">Level M: Modification</button>
                            <button onclick="AppSMA.app.switchLevelTab('level4')" class="level-tab-btn-sma px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700" data-tab="level4">Level R: Redefinition</button>
                        </div>

                        <div class="space-y-8" id="curriculum-container-sma">
                            ${CURRICULUM_DATA.map(lvl => `
                                <div class="level-block-sma bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm" data-level="${lvl.levelId}">
                                    <div class="p-5 bg-slate-50/80 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                                        <div>
                                            <span class="${lvl.badgeColor} border text-xs font-bold px-3 py-1 rounded-full inline-block mb-1">${lvl.title}</span>
                                            <h4 class="font-bold text-lg text-slate-900 dark:text-white">${lvl.subTitle}</h4>
                                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${lvl.desc}</p>
                                        </div>
                                        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-lg">${lvl.items.length} Item Ceklis</span>
                                    </div>
                                    <div class="divide-y divide-slate-100 dark:divide-slate-800/60">
                                        ${lvl.items.map(item => `
                                            <div class="p-4 md:p-5 hover:bg-pink-50/30 dark:hover:bg-slate-800/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div class="flex items-start gap-3.5 flex-1">
                                                    <span class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5">${item.no}</span>
                                                    <div>
                                                        <h5 class="font-bold text-slate-800 dark:text-slate-100 text-base">${item.name}</h5>
                                                        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">${item.desc}</p>
                                                    </div>
                                                </div>
                                                <div class="flex items-center gap-2 shrink-0 self-end md:self-center">
                                                    <button onclick="AppSMA.app.playVideo('${item.videoId}')" class="bg-pink-50 hover:bg-pink-100 dark:bg-pink-950/50 dark:hover:bg-pink-900/50 text-pink-600 dark:text-pink-400 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 border border-pink-200 dark:border-pink-800">
                                                        <i class="fa-solid fa-play"></i> Panduan
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
            container.innerHTML = html;
        },

        renderSearchResults: (query, results) => {
            const container = UI.getContainer();
            if (!container) return;
            let html = `<div class="fade-in max-w-5xl mx-auto">`;

            html += `
                <div class="flex items-center gap-4 mb-6">
                    <button onclick="AppSMA.app.navigate('home')" class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <div class="flex-1 relative">
                        <form onsubmit="AppSMA.app.handleSearch(event)">
                            <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                            <input type="text" id="searchInputSMA" value="${query}" class="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm text-sm">
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
                        <h4 class="text-pink-900 dark:text-pink-300 font-bold mb-1">Analisis Cerdas PID SAMR</h4>
                        <p class="text-sm text-pink-700 dark:text-pink-400">
                            Sistem mencocokkan kata kunci Anda dengan topik <strong>${results.analysis.intent}</strong>. 
                            ${results.analysis.isTroubleshoot ? '<span class="inline-block mt-1 px-2.5 py-0.5 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 text-xs rounded-md font-semibold mr-2">🔧 Pemecahan Masalah / Troubleshooting</span>' : ''}
                        </p>
                    </div>
                </div>
            `;

            if (results.videos.length === 0 && results.timestamps.length === 0) {
                html += `
                    <div class="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
                        <div class="text-6xl mb-4">🔍</div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Tidak ditemukan materi terkait</h3>
                        <p class="text-slate-500 dark:text-slate-400 text-sm">Coba gunakan istilah yang tercantum pada Lembar Ceklis SAMR PID 2026.</p>
                    </div>
                </div>`;
                container.innerHTML = html;
                return;
            }

            if (results.timestamps.length > 0) {
                html += `
                    <h3 class="font-bold text-lg mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                        <i class="fa-solid fa-bullseye text-pink-600 dark:text-pink-400"></i> Pembahasan Terkait
                    </h3>
                    <div class="space-y-3 mb-8">
                        ${results.timestamps.map(res => `
                            <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border-l-4 border-pink-600 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all cursor-pointer flex justify-between items-center group" onclick="AppSMA.app.playVideo('${res.video.videoId}', ${res.timestamp.seconds})">
                                <div>
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-mono font-bold text-xs px-2.5 py-0.5 rounded-md border border-pink-200 dark:border-pink-800">
                                            <i class="fa-regular fa-clock"></i> ${res.timestamp.time}
                                        </span>
                                        <span class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">dalam: ${res.video.title}</span>
                                    </div>
                                    <h4 class="font-bold text-slate-800 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">${res.timestamp.title}</h4>
                                    <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">${res.timestamp.desc}</p>
                                </div>
                                <div class="hidden sm:block ml-4">
                                    <button class="bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">
                                        <i class="fa-solid fa-play mr-1"></i> Buka
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
                        <i class="fa-solid fa-video text-violet-600 dark:text-violet-400"></i> Video Panduan (${results.videos.length})
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${results.videos.map(v => UI.components.videoCard(v)).join('')}
                    </div>
                `;
            }

            html += `</div>`;
            container.innerHTML = html;
        },

        renderPlayer: (video, startSeconds = 0) => {
            const container = UI.getContainer();
            if (!container) return;
            const embedUrl = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&start=${startSeconds}&rel=0&enablejsapi=1`;
            const timeBadgeText = startSeconds ? app.formatTime(startSeconds) : "00:00";

            let html = `
                <div class="fade-in max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-6">
                    <div class="lg:w-2/3 flex flex-col">
                        <div class="flex items-center justify-between mb-4">
                            <button onclick="AppSMA.app.navigate('home')" class="text-slate-600 dark:text-slate-300 hover:text-pink-600 font-semibold flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
                                <i class="fa-solid fa-arrow-left"></i> Kembali ke Beranda
                            </button>
                            <span id="active-time-badge-sma" class="bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 text-xs px-3 py-1.5 rounded-xl font-mono font-bold border border-pink-200 dark:border-pink-800">
                                <i class="fa-regular fa-clock mr-1"></i> Posisi: ${timeBadgeText}
                            </span>
                        </div>
                        <div class="relative bg-black rounded-3xl overflow-hidden shadow-2xl mb-6 aspect-video border border-slate-800">
                            <iframe id="yt-embed-player-sma" src="${embedUrl}" title="${video.title}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                    <button class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5" onclick="AppSMA.app.toggleFavorite('${video.videoId}')">
                                        <i class="fa-bookmark ${state.favorites.includes(video.videoId) ? 'fa-solid text-yellow-500' : 'fa-regular'}"></i> Favorit
                                    </button>
                                    <a id="direct-yt-btn-sma" href="https://www.youtube.com/watch?v=${video.videoId}${startSeconds ? `&t=${startSeconds}s` : ''}" target="_blank" rel="noopener noreferrer" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105">
                                        <i class="fa-brands fa-youtube"></i> Tonton di YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 shadow-sm">
                            <h4 class="font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-2 text-base">
                                <i class="fa-solid fa-circle-info text-pink-600 dark:text-pink-400"></i> Rincian & Deskripsi Panduan
                            </h4>
                            <p class="whitespace-pre-line leading-relaxed text-slate-600 dark:text-slate-300">${video.description}</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 flex flex-col h-[650px]">
                        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex-1 flex flex-col overflow-hidden">
                            <div class="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                                <h3 class="font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                                    <i class="fa-solid fa-list-ul text-pink-600 dark:text-pink-400"></i> Bab & Timestamp Pembahasan
                                </h3>
                                <div class="relative">
                                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm"></i>
                                    <input type="text" id="videoSearchInputSMA" placeholder="Filter bab di video ini..." 
                                        onkeyup="AppSMA.app.filterTimestamps(this.value)"
                                        class="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500">
                                </div>
                            </div>
                            <div class="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-2" id="timestamp-list-sma">
                                ${video.timestamps.map(ts => `
                                    <div class="ts-item p-3.5 hover:bg-pink-50/80 dark:hover:bg-slate-800/80 rounded-2xl cursor-pointer transition-all border border-slate-100 dark:border-slate-800/60 group" 
                                         onclick="AppSMA.app.seekTo(${ts.seconds})" data-keywords="${ts.title.toLowerCase()} ${ts.keywords ? ts.keywords.join(' ') : ''}">
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
            container.innerHTML = html;
        }
    };

    const app = {
        init: () => {
            UI.renderHome();
        },

        navigate: (view) => {
            state.currentView = view;
            if (view === 'home') UI.renderHome();
        },

        handleSearch: async (e) => {
            e.preventDefault();
            const input = document.getElementById('searchInputSMA');
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
            const btns = document.querySelectorAll('.level-tab-btn-sma');
            btns.forEach(btn => {
                btn.classList.remove('bg-pink-600', 'text-white', 'shadow-sm');
                btn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-700');
            });

            const activeBtn = document.querySelector(`.level-tab-btn-sma[data-tab="${tabKey}"]`);
            if (activeBtn) {
                activeBtn.classList.add('bg-pink-600', 'text-white', 'shadow-sm');
                activeBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-700');
            }

            const blocks = document.querySelectorAll('.level-block-sma');
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
            if (!video && state.lastSearchResults) {
                video = state.lastSearchResults.videos.find(v => v.videoId === videoId);
            }
            if (!video) {
                video = {
                    videoId: videoId,
                    title: "Tutorial PID SAMR SMA/SMK",
                    channel: "Panduan YouTube",
                    category: "Video Panduan",
                    description: "Saksikan langkah demi langkah pengoperasian fitur Papan Interaktif Digital.",
                    timestamps: [{ time: "00:00", seconds: 0, title: "Mulai Panduan", desc: "Fitur Utama PID SMA/SMK", keywords: ["mulai"] }]
                };
            }
            state.activeVideo = video;
            UI.renderPlayer(video, startSeconds);
        },

        seekTo: (seconds) => {
            const iframe = document.getElementById('yt-embed-player-sma');
            if (iframe && state.activeVideo) {
                iframe.src = `https://www.youtube-nocookie.com/embed/${state.activeVideo.videoId}?autoplay=1&start=${seconds}&rel=0&enablejsapi=1`;
            }
            const badge = document.getElementById('active-time-badge-sma');
            if (badge) {
                badge.innerHTML = `<i class="fa-regular fa-clock mr-1"></i> Posisi: ${app.formatTime(seconds)}`;
            }
            const ytBtn = document.getElementById('direct-yt-btn-sma');
            if (ytBtn && state.activeVideo) {
                ytBtn.href = `https://www.youtube.com/watch?v=${state.activeVideo.videoId}&t=${seconds}s`;
            }
        },

        filterTimestamps: (query) => {
            const q = query.toLowerCase().trim();
            const items = document.querySelectorAll('#timestamp-list-sma .ts-item');
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
            const index = state.favorites.indexOf(videoId);
            if (index > -1) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(videoId);
            }
            Storage.set('pid_sma_favorites', state.favorites);
            if (state.activeVideo) {
                UI.renderPlayer(state.activeVideo);
            }
        },

        formatTime: (totalSecs) => {
            const mins = Math.floor(totalSecs / 60);
            const secs = totalSecs % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
    };

    return { app, state };
})();