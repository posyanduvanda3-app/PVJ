// ==========================================
// 1. ICONS & INITIAL DATA
// ==========================================
const icons = {
     upload: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>`,
    database: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>`,
    map: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>`,
    users: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
    clipboard: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>`,
    heart: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`,
    chart: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
    calendar: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
    shield: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`,
    clock: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    logout: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>`,
    plus: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" /></svg>`,
    edit: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>`,
    trash: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>`,
    eye: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`,
    eyeOff: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>`,
    printer: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>`,
    check: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>`,
    close: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`
};

const INITIAL_DATA = {
    users: [
        { 
            id: 1, 
            nama: 'Budi Juniansyah', 
            username: 'admin', 
            password: 'admin123', 
            role: 'Admin', 
            status: 'Aktif' 
        },
        { 
            id: 2, 
            nama: 'Siti Aminah', 
            username: 'kader', 
            password: 'kader123', 
            role: 'Kader', 
            status: 'Aktif' 
        }
    ],

        peserta: [
        { 
            id: 'REG-001', 
            no_registrasi: 'REG-001', 
            nik: '3201020304050001', 
            nama: 'Alvaro Putra', 
            tanggal_lahir: '2024-03-15', 
            jenis_kelamin: 'Laki-laki', 
            bb_lahir: '3.2',       // Hanya diisi untuk Balita
            tb_lahir: '50',        // Hanya diisi untuk Balita
            alamat: 'Jl. Melati No. 10', 
            rt: '002', 
            rw: '004', 
            kategori: 'Balita', 
            no_hp: '081234567890',
            nama_orang_tua: 'Budi Santoso'
        },
        { 
            id: 'REG-002', 
            no_registrasi: 'REG-002', 
            nik: '3201020304050002', 
            nama: 'Siti Rahma', 
            tanggal_lahir: '1998-08-20', 
            jenis_kelamin: 'Perempuan', 
            bb_lahir: '',          // Kosong untuk non-Balita
            tb_lahir: '',          // Kosong untuk non-Balita
            alamat: 'Jl. Anggrek No. 5', 
            rt: '001', 
            rw: '003', 
            kategori: 'Ibu Hamil', 
            no_hp: '082345678901',
            nama_orang_tua: '' 
        },
        { 
            id: 'REG-003', 
            no_registrasi: 'REG-003', 
            nik: '3201020304050003', 
            nama: 'Mbah Kromo', 
            tanggal_lahir: '1955-11-12', 
            jenis_kelamin: 'Laki-laki', 
            alamat: 'Jl. Kenanga No. 8', 
            rt: '003', 
            rw: '004', 
            kategori: 'Lansia', 
            no_hp: '083456789012',
            nama_orang_tua: '' 
        }
    ],

    pemeriksaan: [
        { id: 'PEM-001', peserta_id: 'REG-001', nama_peserta: 'Alvaro Putra', kategori: 'Balita', tanggal: new Date().toISOString().split('T')[0], berat_badan: '12.5', tinggi_badan: '88', imt: '16.1', tekanan_darah: '90/60', lingkar_perut: '52', lingkar_lengan_atas: '15', status_gizi: 'Sesuai / Baik', tinggi_menurut_umur: 'Normal', imunisasi: 'DPT-HB-Hib 3', vitamin_a: 'Ya', keluhan: 'Tidak ada', diagnosa: 'Pertumbuhan baik', tindakan: 'PMT Balita', petugas: 'Siti Aminah', rujukan: 'Tidak' },
        { id: 'PEM-002', peserta_id: 'REG-002', nama_peserta: 'Siti Rahma', kategori: 'Ibu Hamil', tanggal: new Date().toISOString().split('T')[0], berat_badan: '62.4', tinggi_badan: '158', imt: '25.0', tekanan_darah: '110/70', lingkar_perut: '88', lingkar_lengan_atas: '26', usia_kehamilan: '24 Minggu', tinggi_fundus: '22', lila: '26', tablet_tambah_darah: 'Ya', djj: '142', keluhan: 'Mual ringan', diagnosa: 'Kehamilan normal', tindakan: 'Konseling gizi', petugas: 'Siti Aminah', rujukan: 'Tidak' }
    ],

    jadwal: [
        { id: 1, tanggal: '2026-07-15', lokasi: 'Balai RW 04 Kelurahan Makmur', jam_mulai: '08:00', jam_selesai: '11:30' }
    ],

    logs: [
        { id: 1, user: 'admin', aktivitas: 'Melakukan login aplikasi', tanggal: new Date().toISOString().replace('T', ' ').substring(0, 19) }
    ]
};

// Logo Posyandu
const logo_posyandu = 'Images/logo_posyandu.png';

// ==========================================
// 1. KONFIGURASI API (GANTI DENGAN URL DEPLOYMENT ANDA)
// ==========================================
const API_URL = 'https://script.google.com/macros/s/AKfycbytXOwEgU96ttCF9g5OMZxYAyi0-lgcWaerNUIWMQAmYz0O3jphRWM5J9Uc6UrUd3xC/exec';

// State awal masih kosong, akan diisi dari Spreadsheet
const state = {
    user: null,
    currentMenu: 'dashboard',
    usersList: [],
    pesertaList: [],
    pemeriksaanList: [],
    jadwalList: [],
    logActivities: [],
    filters: {
        peserta: { search: '', kategori: 'Semua' },
        riwayat: { search: '', kategori: 'Semua', tanggal: '' },
        laporan: { kategori: 'Semua', tanggal: '' }
    },
    isLoading: true
};

// ==========================================
// 2. FUNGSI INTEGRASI REAL-TIME
// ==========================================

// Data cadangan jika koneksi ke Spreadsheet gagal/terlambat
const INITIAL_DATA_USERS = [
    { id: 1, nama: 'Budi Juniansyah', username: 'admin', password: 'admin123', role: 'Admin', status: 'Aktif' },
    { id: 2, nama: 'Siti Aminah', username: 'kader', password: 'kader123', role: 'Kader', status: 'Aktif' }
];

async function loadDatabaseFromSpreadsheet() {
    // Tampilkan loading (opsional: bisa tambahkan spinner di HTML)
    console.log("Memuat data dari Spreadsheet...");
    
    try {
        const response = await fetch(`${API_URL}?action=getAllData`);
        
        if (!response.ok) throw new Error("Gagal terhubung ke API");
        
        const data = await response.json();
        
        // Pastikan data ada, jika kosong/gagal, gunakan INITIAL_DATA
        state.usersList = (data.users && data.users.length > 0) ? data.users : INITIAL_DATA_USERS;
        state.pesertaList = data.peserta || [];
        state.pemeriksaanList = data.pemeriksaan || [];
        state.jadwalList = data.jadwal || [];
        state.logActivities = data.logs || [];
        
        console.log("Data berhasil dimuat:", state.usersList);
        renderApp(); 
        
    } catch (error) {
        console.error("Error load data:", error);
        // FALLBACK: Gunakan data lokal agar aplikasi tetap bisa dipakai saat offline/error API
        state.usersList = INITIAL_DATA_USERS;
        showToast('Mode Offline: Menggunakan data lokal. Periksa koneksi API.', 'error');
        renderApp();
    }
}

// Kirim data baru ke Spreadsheet (Contoh: Tambah Peserta)
async function syncAddPeserta(dataPeserta) {
    try {
        showToast('Menyimpan ke database...', 'info');
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                action: 'addPeserta',
                ...dataPeserta
            })
        });
        const result = await response.json();
        if (result.status === 'success') {
            // Update state lokal agar UI langsung berubah (Optimistic UI)
            state.pesertaList.push(dataPeserta);
            showToast(result.message, 'success');
            return true;
        } else {
            showToast('Gagal: ' + result.message, 'error');
            return false;
        }
    } catch (error) {
        showToast('Error koneksi database', 'error');
        return false;
    }
}

// Kirim Log Aktivitas ke Spreadsheet
async function syncAddLog(aktivitas) {
    // Fire and forget (tidak perlu menunggu respon agar tidak memperlambat UI)
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            action: 'addLog',
            user: state.user ? state.user.username : 'Sistem',
            aktivitas: aktivitas,
            tanggal: new Date().toISOString().replace('T', ' ').substring(0, 19)
        })
    }).catch(err => console.error('Log gagal terkirim', err));
}

// ==========================================
// 3. MODIFIKASI FUNGSI YANG ADA
// ==========================================

// Ubah fungsi addAuditLog lama menjadi ini:
function addAuditLog(activity) {
    // Tambahkan ke state lokal dulu agar UI langsung update
    state.logActivities.unshift({
        id: Date.now(),
        user: state.user ? state.user.username : 'Sistem',
        aktivitas: activity,
        tanggal: new Date().toISOString().replace('T', ' ').substring(0, 19)
    });
    // Kirim ke spreadsheet di background
    syncAddLog(activity);
}

// ==========================================
// 3. UTILITY FUNCTIONS
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerHTML = `
        <div class="p-1.5 rounded-full ${type === 'error' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}">${icons.check}</div>
        <div>
            <p class="text-xs font-semibold text-slate-500">Notifikasi Sistem</p>
            <p class="text-sm font-medium text-slate-800">${message}</p>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function calculateAge(birthdate) {
    if (!birthdate) return '-';
    const birth = new Date(birthdate);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) { years--; months += 12; }
    return years === 0 ? `${months} Bulan` : `${years} Tahun ${months} Bulan`;
}

function hasAccess(menu) {
    if (!state.user) return false;
    const role = state.user.actualRole || state.user.role;
    if (['dashboard', 'laporan', 'riwayat', 'data_peserta', 'pemeriksaan', 'jadwal'].includes(menu)) return true;
    // ✅ 'master_data'
    if (['user', 'logs', 'master_data'].includes(menu)) return role === 'Admin';
    return false;
}

function isReadOnly() {
    if (!state.user) return true;
    return (state.user.actualRole || state.user.role) === 'Ketua Posyandu';
}

function openModal(html) {
    document.getElementById('modal-content').innerHTML = html;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
}

// ==========================================
// 4. AUTHENTICATION
// ==========================================
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const errorEl = document.getElementById('login-error');

    if (!username || !password) {
        errorEl.textContent = 'Username dan password wajib diisi.';
        errorEl.classList.remove('hidden');
        return;
    }

            // Cari user dengan validasi yang lebih ketat dan aman terhadap tipe data
    const foundUser = state.usersList.find(u => 
        u.username && String(u.username).toLowerCase().trim() === username.toLowerCase().trim() && 
        u.status && String(u.status).toLowerCase().trim() === 'aktif'
    );

    if (!foundUser) {
        errorEl.textContent = 'Pengguna tidak ditemukan atau berstatus Nonaktif.';
        errorEl.classList.remove('hidden');
        return;
    }

    if (foundUser.password !== password) {
        errorEl.textContent = 'Password salah! Silakan coba lagi.';
        errorEl.classList.remove('hidden');
        return;
    }

    // ✅ LANGSUNG GUNAKAN ROLE DARI DATABASE
    state.user = { ...foundUser, actualRole: foundUser.role };
    
    errorEl.classList.add('hidden');
    addAuditLog(`Login sebagai ${state.user.nama} (${state.user.actualRole})`);
    showToast(`Selamat datang, ${state.user.nama}!`);
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-shell').classList.add('active');
    renderApp();
});

// ✅ FITUR LIHAT/SEMBUNYI PASSWORD
const togglePasswordBtn = document.getElementById('toggle-password');
const passwordInput = document.getElementById('login-password');

if (togglePasswordBtn && passwordInput) {
    // Set ikon awal (mata terbuka)
    togglePasswordBtn.innerHTML = icons.eye;

    // Logika saat tombol diklik
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        
        // Ubah tipe input
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        // Ubah ikon (mata tertutup jika teks terlihat, dan sebaliknya)
        togglePasswordBtn.innerHTML = isPassword ? icons.eyeOff : icons.eye;
    });
}

function handleLogout() {
    addAuditLog('Logout dari aplikasi');
    state.user = null;
    document.getElementById('app-shell').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
    showToast('Anda berhasil keluar sistem.', 'info');
}

// ==========================================
// 5. RENDERING ENGINE
// ==========================================
function renderApp() {
    renderSidebar();
    renderHeader();
    renderView();
}

function renderSidebar() {
    const role = state.user.actualRole || state.user.role;
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: icons.chart },
        { id: 'data_peserta', label: 'Data Peserta', icon: icons.users },
        { id: 'riwayat', label: 'Riwayat & Input', icon: icons.clipboard },
        { id: 'laporan', label: 'Laporan', icon: icons.chart },
        { id: 'jadwal', label: 'Jadwal Posyandu', icon: icons.calendar }
    ];

       let adminNav = '';
    if (hasAccess('user')) {
        adminNav = `
            <div class="pt-4 border-t border-slate-800 mt-4 space-y-1">
                <p class="px-4 text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Administrasi Sistem</p>
                
                <!-- ✅ MENU MASTER DATA -->
                <button class="nav-btn ${state.currentMenu === 'master_data' ? 'active' : ''}" data-menu="master_data">${icons.database} <span>Master Data</span></button>
                <button class="nav-btn ${state.currentMenu === 'user' ? 'active' : ''}" data-menu="user">${icons.shield} <span>Manajemen User</span></button>
                <button class="nav-btn ${state.currentMenu === 'logs' ? 'active' : ''}" data-menu="logs">${icons.clock} <span>Log Aktivitas</span></button>
            </div>
        `;
    }

    document.getElementById('sidebar').innerHTML = `
        <div class="sidebar-header">
            <img src="${logo_posyandu}" alt="Logo Posyandu" class="logo-posyandu" onerror="this.style.display='none'">
            <div>
                <h1 class="font-black text-white text-sm">Posyandu Digital</h1>
                <p class="text-xs text-slate-400">v1.0 • Live</p>
            </div>
        </div>
        <nav class="sidebar-nav">
            ${navItems.map(item => `
                <button class="nav-btn ${state.currentMenu === item.id ? 'active' : ''}" data-menu="${item.id}">
                    ${item.icon} <span>${item.label}</span>
                </button>
            `).join('')}
            ${adminNav}
        </nav>
        <div class="sidebar-footer">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black text-sm">
                    ${state.user.nama.substring(0, 2).toUpperCase()}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-white truncate">${state.user.nama}</p>
                    <span class="inline-block px-2 py-0.5 text-xs font-semibold bg-emerald-900/40 text-emerald-400 rounded-full">${role}</span>
                </div>
            </div>
            
                <button id="btn-logout">
                    ${icons.logout} <span>Keluar Aplikasi</span>
                </button>
        </div>
    `;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentMenu = btn.dataset.menu;
            renderApp();
        });
    });
    document.getElementById('btn-logout').addEventListener('click', handleLogout);
}

function renderHeader() {
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    // Membuat huruf pertama selalu kapital (Dashboard, Data Peserta, dll)
    const menuTitle = state.currentMenu.replace('_', ' ').replace(/^\w/, (c) => c.toUpperCase());

    document.getElementById('top-header').innerHTML = `
        <div>
            <h2 class="text-xl font-black text-slate-800">${menuTitle}</h2>
            <p class="text-xs text-slate-400">Puskesmas Sehat • Posyandu Vanda 3</p>
        </div>
        <div class="flex items-center gap-4">
            <div class="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-100 text-xs font-bold">
                <span class="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> Sistem Online
            </div>
            <div class="text-right">
                <p class="text-xs font-semibold text-slate-500">Tanggal Hari Ini</p>
                <p class="text-sm font-bold text-slate-700">${today}</p>
            </div>
        </div>
    `;
}

function renderView() {
    const container = document.getElementById('view-container');
    switch (state.currentMenu) {
        case 'dashboard': container.innerHTML = renderDashboard(); break;
        case 'data_peserta': container.innerHTML = renderPeserta(); break;
        case 'riwayat': container.innerHTML = renderRiwayat(); break;
        case 'laporan': container.innerHTML = renderLaporan(); break;
        case 'jadwal': container.innerHTML = renderJadwal(); break;
        case 'master_data': container.innerHTML = renderMasterData(); break; // ✅ BARU
        case 'user': container.innerHTML = renderUser(); break;
        case 'logs': container.innerHTML = renderLogs(); break;
    }
    attachViewEvents();
}

// ==========================================
// 6. VIEW RENDERERS
// ==========================================
function renderDashboard() {
    const stats = {
    total: state.pesertaList.length,
    checkupsToday: state.pemeriksaanList.filter(p => p.tanggal === new Date().toISOString().split('T')[0]).length,
    balita: state.pesertaList.filter(p => p.kategori === 'Balita').length,
    ibuHamil: state.pesertaList.filter(p => p.kategori === 'Ibu Hamil').length,
    lansia: state.pesertaList.filter(p => p.kategori === 'Lansia').length,
    lainnya: state.pesertaList.filter(p => p.kategori === 'Remaja' || p.kategori === 'Dewasa').length,
    stunting: state.pemeriksaanList.filter(p => p.kategori === 'Balita' && p.tinggi_menurut_umur === 'Sangat Pendek (Stunting)').length
};

    const nextSchedule = state.jadwalList[0];
    const scheduleHTML = nextSchedule ? `
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p class="text-sm font-bold text-slate-800 mb-1">${new Date(nextSchedule.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p class="text-xs text-slate-500 font-semibold mb-1">LOKASI:</p>
            <p class="text-xs font-bold text-slate-700 mb-2">${nextSchedule.lokasi}</p>
            <p class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit inline-block">Jam: ${nextSchedule.jam_mulai} - ${nextSchedule.jam_selesai} WIB</p>
        </div>
    ` : '<p class="text-xs text-slate-400 italic">Belum ada agenda.</p>';

    return `
        <div class="banner">
            <span class="bg-emerald-500/30 text-white border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-bold">Informasi Hari Ini</span>
            <h3 class="text-2xl font-black mt-2">Selamat Bekerja, Rekan Kader Posyandu !</h3>
            <p class="text-emerald-100 text-sm mt-2 font-medium">Sistem siap mencatat pemeriksaan balita, ibu hamil, remaja, dewasa, dan lansia.</p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                 <!-- Total Peserta -->
            <div class="card stat-card">
                <div>
                    <span class="text-xs font-bold text-slate-400 uppercase block">Total Peserta</span>
                    <span class="text-3xl font-black text-slate-800 mt-1 block">${stats.total}</span>
                    <span class="text-xs text-emerald-600 font-bold mt-1 inline-flex items-center">Terdaftar Aktif</span>
                </div>
                <div class="stat-icon bg-blue-50 text-blue-600">${icons.users}</div>
            </div>
            
            <!-- Periksa Hari Ini -->
            <div class="card stat-card">
                <div>
                    <span class="text-xs font-bold text-slate-400 uppercase block">Periksa Hari Ini</span>
                    <span class="text-3xl font-black text-slate-800 mt-1 block">${stats.checkupsToday}</span>
                    <span class="text-xs text-amber-600 font-bold mt-1 inline-flex items-center">Antrean Berjalan</span>
                </div>
                <div class="stat-icon bg-amber-50 text-amber-600">${icons.clipboard}</div>
            </div>
            
            <!-- Total Balita -->
            <div class="card stat-card">
                <div>
                    <span class="text-xs font-bold text-slate-400 uppercase block">Total Balita</span>
                    <span class="text-3xl font-black text-slate-800 mt-1 block">${stats.balita}</span>
                    <span class="text-xs text-rose-500 font-bold mt-1 inline-flex items-center">${stats.stunting} Terindikasi Stunting</span>
                </div>
                <div class="stat-icon bg-rose-50 text-rose-600">${icons.heart}</div>
            </div>
            
            <!-- Ibu Hamil -->
            <div class="card stat-card">
                <div>
                    <span class="text-xs font-bold text-slate-400 uppercase block">Ibu Hamil</span>
                    <span class="text-3xl font-black text-slate-800 mt-1 block">${stats.ibuHamil}</span>
                    <span class="text-xs text-emerald-600 font-bold mt-1 inline-flex items-center">Sehat & Terpantau</span>
                </div>
                <div class="stat-icon bg-emerald-50 text-emerald-600">${icons.heart}</div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="card lg:col-span-2">
                <h4 class="text-base font-bold text-slate-800 mb-4">Grafik Distribusi Kategori Pemeriksaan</h4>
                <div class="space-y-4">
                    ${[
                        { key: 'balita', label: 'Balita', color: '#f43f5e' },       // Rose 500
                        { key: 'ibuHamil', label: 'Ibu Hamil', color: '#10b981' },   // Emerald 500
                        { key: 'lansia', label: 'Lansia', color: '#3b82f6' },        // Blue 500
                        { key: 'lainnya', label: 'Remaja & Dewasa', color: '#a855f7' } // Purple 500
                    ].map(item => {
                        const count = stats[item.key];
                        const pct = stats.total ? ((count / stats.total) * 100).toFixed(0) : 0;
                return `
                <div>
                    <div class="flex justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>${item.label} (${count} Orang)</span>
                    <span>${pct}%</span>
                </div>
            <div class="w-full bg-slate-100 rounded-full h-3">
                <div class="h-3 rounded-full" style="background-color: ${item.color}; width: ${pct}%; transition: width 0.5s;"></div>
            </div>
        </div>
    `;
}).join('')}
                </div>
                <div class="mt-6 p-4 bg-emerald-50 rounded-xl border border-dashed border-emerald-200">
                    <p class="text-xs text-emerald-800 font-medium">
                        💡 <b>Insight Hari Ini</b>: Angka risiko stunting pada Balita adalah sebesar <b>${stats.stunting} kasus</b>. Direkomendasikan melakukan sosialisasi program Pemberian Makanan Tambahan (PMT) rutin.
                    </p>
                </div>
            </div>

            <div class="card flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="text-base font-bold text-slate-800">Jadwal Terdekat</h4>
                        <span class="px-2 py-0.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 rounded-full">UPCOMING</span>
                    </div>
                    ${scheduleHTML}
                </div>
                                <button class="btn btn-secondary w-full mt-4" data-action="goto" data-target="jadwal">Kelola Semua Jadwal</button>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <button class="shortcut-btn emerald bg-white p-4 rounded-xl border border-dashed border-slate-200 text-left ${isReadOnly() ? 'opacity-50 pointer-events-none' : ''}" data-action="shortcut-peserta">
                <span class="shortcut-icon p-2 bg-emerald-50 text-emerald-600 rounded-lg inline-block mb-3">
                    ${icons.plus}
                </span>
                <h5 class="font-bold text-sm text-slate-800">Tambah Peserta Baru</h5>
                <p class="text-xs text-slate-400 mt-1">Daftarkan NIK/KK balita, ibu hamil, lansia baru ke master data.</p>
            </button>
            <button class="shortcut-btn blue bg-white p-4 rounded-xl border border-dashed border-slate-200 text-left" data-action="shortcut-riwayat">
                <span class="shortcut-icon p-2 bg-blue-50 text-blue-600 rounded-lg inline-block mb-3">
                    ${icons.clipboard}
                </span>
                <h5 class="font-bold text-sm text-slate-800">Input Hasil Pemeriksaan</h5>
                <p class="text-xs text-slate-400 mt-1">Pilih data peserta terdaftar untuk menginput hasil cek kesehatan hari ini.</p>
            </button>
            <button class="shortcut-btn purple bg-white p-4 rounded-xl border border-dashed border-slate-200 text-left" data-action="shortcut-laporan">
                <span class="shortcut-icon p-2 bg-purple-50 text-purple-600 rounded-lg inline-block mb-3">
                    ${icons.chart}
                </span>
                <h5 class="font-bold text-sm text-slate-800">Cetak Laporan Rekapitulasi</h5>
                <p class="text-xs text-slate-400 mt-1">Cetak rekap pemeriksaan mingguan, bulanan untuk laporan ke Puskesmas.</p>
            </button>
        </div>
    `;
} 

function renderPeserta() {
    const filtered = state.pesertaList.filter(p => {
        const matchSearch = p.nama.toLowerCase().includes(state.filters.peserta.search.toLowerCase()) || 
                            p.nik.includes(state.filters.peserta.search) ||
                            (p.nama_orang_tua && p.nama_orang_tua.toLowerCase().includes(state.filters.peserta.search.toLowerCase()));
        const matchKat = state.filters.peserta.kategori === 'Semua' || p.kategori === state.filters.peserta.kategori;
        return matchSearch && matchKat;
    });

    // Cek apakah ada data Balita di hasil filter saat ini
    const hasBalita = filtered.some(p => p.kategori === 'Balita');
    const totalColumns = hasBalita ? 6 : 5; // Jumlah kolom menyesuaikan

    return `
        <div class="card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="filter-bar flex-1">
                <input type="text" id="filter-peserta-search" class="form-input" placeholder="Cari Nama, NIK, atau Nama Ortu..." value="${state.filters.peserta.search}">
                <select id="filter-peserta-kat" class="form-input" style="max-width: 12rem;">
                    <option value="Semua" ${state.filters.peserta.kategori === 'Semua' ? 'selected' : ''}>Semua Kategori</option>
                    <option value="Ibu Hamil" ${state.filters.peserta.kategori === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option>
                    <option value="Balita" ${state.filters.peserta.kategori === 'Balita' ? 'selected' : ''}>Balita</option>
                    <option value="Remaja" ${state.filters.peserta.kategori === 'Remaja' ? 'selected' : ''}>Remaja</option>
                    <option value="Dewasa" ${state.filters.peserta.kategori === 'Dewasa' ? 'selected' : ''}>Dewasa</option>
                    <option value="Lansia" ${state.filters.peserta.kategori === 'Lansia' ? 'selected' : ''}>Lansia</option>
                </select>
            </div>
            ${!isReadOnly() ? `<button class="btn btn-primary" data-action="add-peserta">${icons.plus} Daftarkan Peserta</button>` : ''}
        </div>
        <div class="card p-0 overflow-x-auto">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>No. Reg / NIK</th>
                        <th>Nama Lengkap</th>
                        <th>Kategori</th>
                        ${hasBalita ? '<th>BB / TB Lahir</th>' : ''} <!-- Kolom hanya muncul jika ada Balita -->
                        <th>Umur & Gender</th>
                        <th class="text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtered.length ? filtered.map(p => `
                        <tr>
                            <td>
                                <span class="font-bold text-slate-800 block">${p.no_registrasi}</span>
                                <span class="text-xs text-slate-400 font-mono">NIK: ${p.nik}</span>
                            </td>
                            <td>
                                <span class="font-bold text-slate-800 block">${p.nama}</span>
                                ${p.kategori === 'Balita' && p.nama_orang_tua ? `
                                <span class="inline-flex items-center gap-1 mt-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    Ortu: <b>${p.nama_orang_tua}</b>
                                </span>` : ''}
                            </td>
                            <td>
                                <span class="badge ${
                                    p.kategori === 'Balita' ? 'badge-rose' : 
                                    p.kategori === 'Ibu Hamil' ? 'badge-emerald' : 
                                    p.kategori === 'Lansia' ? 'badge-blue' : 
                                    'badge-slate'
                                }">${p.kategori}</span>
                            </td>
                            
                            <!-- Data BB/TB Lahir: Hanya render cell ini jika kolom aktif -->
                            ${hasBalita ? `
                            <td>
                                ${p.kategori === 'Balita' ? `
                                    <div class="text-xs space-y-0.5">
                                        <span class="block text-slate-700">BB: <b>${p.bb_lahir || '-'} kg</b></span>
                                        <span class="block text-slate-700">TB: <b>${p.tb_lahir || '-'} cm</b></span>
                                    </div>
                                ` : '<span class="text-xs text-slate-400 italic">-</span>'}
                            </td>
                            ` : ''}
                            
                            <td>
                                <span class="block text-slate-800">${calculateAge(p.tanggal_lahir)}</span>
                                <span class="text-xs text-slate-400">${p.jenis_kelamin}</span>
                            </td>
                            <td class="text-right">
                                <div class="action-btns">
                                    <button class="btn btn-secondary text-xs" data-action="periksa" data-id="${p.id}" ${isReadOnly() ? 'disabled' : ''}>Periksa</button>
                                    ${!isReadOnly() ? `
                                        <button class="btn-icon" data-action="edit-peserta" data-id="${p.id}" title="Edit">${icons.edit}</button>
                                        <button class="btn-icon text-rose-500 hover:text-rose-700" data-action="delete-peserta" data-id="${p.id}" data-nama="${p.nama}" title="Hapus">${icons.trash}</button>
                                    ` : ''}
                                </div>
                            </td>
                        </tr>
                    `).join('') : `<tr><td colspan="${totalColumns}" class="text-center text-slate-400 italic p-8">Tidak ada data.</td></tr>`}
                </tbody>
            </table>
        </div>
    `;
}

function renderRiwayat() {
    const filtered = state.pemeriksaanList.filter(p => {
        const matchSearch = p.nama_peserta.toLowerCase().includes(state.filters.riwayat.search.toLowerCase());
        const matchKat = state.filters.riwayat.kategori === 'Semua' || p.kategori === state.filters.riwayat.kategori;
        const matchTgl = !state.filters.riwayat.tanggal || p.tanggal === state.filters.riwayat.tanggal;
        return matchSearch && matchKat && matchTgl;
    });

    return `
        <div class="card filter-bar">
            <input type="text" id="filter-riwayat-search" class="form-input" placeholder="Cari Nama Peserta..." value="${state.filters.riwayat.search}">
            <select id="filter-riwayat-kat" class="form-input" style="max-width: 12rem;">
             <option value="Semua">Semua Kategori</option>
             <option value="Ibu Hamil" ${state.filters.riwayat.kategori === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option>
             <option value="Balita" ${state.filters.riwayat.kategori === 'Balita' ? 'selected' : ''}>Balita</option>
             <option value="Remaja" ${state.filters.riwayat.kategori === 'Remaja' ? 'selected' : ''}>Remaja</option>
             <option value="Dewasa" ${state.filters.riwayat.kategori === 'Dewasa' ? 'selected' : ''}>Dewasa</option>
             <option value="Lansia" ${state.filters.riwayat.kategori === 'Lansia' ? 'selected' : ''}>Lansia</option>    
            </select>
            <input type="date" id="filter-riwayat-tgl" class="form-input" style="max-width: 12rem;" value="${state.filters.riwayat.tanggal}">
        </div>
        <div class="card p-0 overflow-hidden">
            <div class="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <span class="text-xs font-bold text-slate-400 uppercase">Rekam Medis Terkini</span>
                <p class="text-xs font-medium text-slate-500">${filtered.length} transaksi</p>
            </div>
            <table class="data-table">
                <thead><tr><th>Tanggal / ID</th><th>Peserta</th><th>Kategori</th><th>Vital Signs</th><th>Diagnosa</th><th class="text-right">Aksi</th></tr></thead>
                <tbody>
                    ${filtered.length ? filtered.map(p => `
                        <tr>
                            <td><span class="font-bold text-slate-800 block">${new Date(p.tanggal).toLocaleDateString('id-ID')}</span><span class="text-xs text-slate-400 font-mono">${p.id}</span></td>
                            <td><span class="font-bold text-slate-800 block">${p.nama_peserta}</span><span class="text-xs text-slate-400">${p.peserta_id}</span></td>
                            <td><span class="badge ${p.kategori === 'Balita' ? 'badge-rose' : p.kategori === 'Ibu Hamil' ? 'badge-emerald' : 'badge-blue'}">${p.kategori}</span></td>
                            <td class="text-xs space-y-1">
                                <div>BB: <b>${p.berat_badan} kg</b></div>
                                <div>TB: <b>${p.tinggi_badan} cm</b></div>
                                ${p.tekanan_darah ? `<div>TD: <b>${p.tekanan_darah}</b></div>` : ''}
                                ${p.lingkar_perut ? `<div>L.Perut: <b>${p.lingkar_perut} cm</b></div>` : ''}
                                ${p.lingkar_lengan_atas ? `<div>LiLA: <b>${p.lingkar_lengan_atas} cm</b></div>` : ''}
                            </td>
                            <td><span class="font-bold text-slate-800 block truncate max-w-xs">${p.diagnosa}</span></td>
                            <td class="text-right">
                                <div class="action-btns">
                                    <button class="btn btn-secondary text-xs" data-action="detail-pem" data-id="${p.id}">${icons.eye} Detail</button>
                                    <button class="btn btn-primary text-xs" data-action="cetak-pem" data-id="${p.id}">${icons.printer} Cetak</button>
                                </div>
                            </td>
                        </tr>
                    `).join('') : '<tr><td colspan="6" class="text-center text-slate-400 italic p-8">Belum ada riwayat.</td></tr>'}
                </tbody>
            </table>
        </div>
    `;
}

function renderLaporan() {
    const filtered = state.pemeriksaanList.filter(p => {
        const matchKat = state.filters.laporan.kategori === 'Semua' || p.kategori === state.filters.laporan.kategori;
        const matchTgl = !state.filters.laporan.tanggal || p.tanggal.startsWith(state.filters.laporan.tanggal);
        return matchKat && matchTgl;
    });

    const avgBB = filtered.length ? (filtered.reduce((a, c) => a + parseFloat(c.berat_badan || 0), 0) / filtered.length).toFixed(1) : 0;
    const totalRujukan = filtered.filter(p => p.rujukan === 'Ya').length;

    return `
        <div class="card flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="filter-bar">
                <div class="form-group"><label class="form-label">Kategori</label>
                <select id="filter-laporan-kat" class="form-input" style="width: 12rem;">
                    <option value="Semua">Semua</option>
                   <option value="Ibu Hamil" ${state.filters.laporan.kategori === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option>
                    <option value="Balita" ${state.filters.laporan.kategori === 'Balita' ? 'selected' : ''}>Balita</option>
                    <option value="Remaja" ${state.filters.laporan.kategori === 'Remaja' ? 'selected' : ''}>Remaja</option>
                    <option value="Dewasa" ${state.filters.laporan.kategori === 'Dewasa' ? 'selected' : ''}>Dewasa</option>
                    <option value="Lansia" ${state.filters.laporan.kategori === 'Lansia' ? 'selected' : ''}>Lansia</option>   
                </select></div>
                <div class="form-group"><label class="form-label">Bulan</label><input type="month" id="filter-laporan-tgl" class="form-input" style="width: 12rem;" value="${state.filters.laporan.tanggal}"></div>
            </div>
            <div class="flex gap-2">
                <button class="btn btn-secondary text-xs" data-action="export" data-format="Excel">Ekspor Excel</button>
                <button class="btn btn-danger text-xs" data-action="export" data-format="PDF">Unduh PDF</button>
            </div>
        </div>
        <div class="card space-y-6">
            <div><h4 class="text-base font-bold text-slate-800">Pratinjau Rekapitulasi</h4><p class="text-xs text-slate-400 mt-1">Filter: <b>${state.filters.laporan.kategori}</b>, Waktu: <b>${state.filters.laporan.tanggal || 'Semua'}</b></p></div>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100"><span class="text-slate-400 text-xs font-bold block uppercase">Total Periksa</span><span class="text-2xl font-black text-slate-800 mt-1 block">${filtered.length}</span></div>
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100"><span class="text-slate-400 text-xs font-bold block uppercase">Rata-rata BB</span><span class="text-2xl font-black text-slate-800 mt-1 block">${avgBB} Kg</span></div>
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-100"><span class="text-slate-400 text-xs font-bold block uppercase">Total Rujukan</span><span class="text-2xl font-black text-rose-600 mt-1 block">${totalRujukan} Kasus</span></div>
            </div>
            <div class="overflow-x-auto">
                <table class="data-table text-xs">
                    <thead><tr><th>ID</th><th>Nama</th><th>Kategori</th><th>BB (Kg)</th><th>TB (Cm)</th><th>Diagnosa</th><th>Petugas</th></tr></thead>
                    <tbody>
                        ${filtered.length ? filtered.map(p => `<tr><td class="font-mono font-bold">${p.id}</td><td class="font-bold">${p.nama_peserta}</td><td>${p.kategori}</td><td>${p.berat_badan}</td><td>${p.tinggi_badan}</td><td class="truncate max-w-xs">${p.diagnosa}</td><td class="font-semibold text-slate-500">${p.petugas}</td></tr>`).join('') : '<tr><td colspan="7" class="text-center text-slate-400 italic p-8">Tidak ada data.</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderJadwal() {
    return `
        <div class="card flex flex-col md:flex-row justify-between items-center gap-4">
            <div><h4 class="text-base font-bold text-slate-800">Jadwal Agenda Posyandu</h4><p class="text-xs text-slate-400 mt-1">Daftar agenda kegiatan rutin berikutnya.</p></div>
            ${!isReadOnly() ? `<button class="btn btn-primary text-xs" data-action="add-jadwal">${icons.plus} Terbitkan Agenda</button>` : ''}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${state.jadwalList.map(j => `
                <div class="card flex flex-col justify-between relative">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="px-2.5 py-1 text-xs font-bold text-emerald-800 bg-emerald-50 rounded-lg">${new Date(j.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            ${!isReadOnly() ? `<button class="btn-icon text-rose-500" data-action="delete-jadwal" data-id="${j.id}">${icons.trash}</button>` : ''}
                        </div>
                        <p class="text-xs text-slate-400 font-bold uppercase mb-1">LOKASI:</p>
                        <p class="text-sm font-bold text-slate-800 mb-3">${j.lokasi}</p>
                        <div class="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg w-fit">${icons.clock} <span>Pukul: ${j.jam_mulai} - ${j.jam_selesai} WIB</span></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderUser() {
    if (!hasAccess('user')) return '<div class="card text-center text-slate-400">Akses Ditolak</div>';
    return `
        <div class="card flex justify-between items-center">
            <div><h4 class="text-base font-bold text-slate-800">Daftar Akun Pengguna</h4><p class="text-xs text-slate-400 mt-1">Mengatur hak akses login.</p></div>
            <button class="btn btn-primary text-xs" data-action="add-user">Tambah Pengguna</button>
        </div>
        <div class="card p-0 overflow-hidden">
            <table class="data-table">
                <thead><tr><th>Nama</th><th>Username</th><th>Role</th><th>Status</th><th class="text-right">Aksi</th></tr></thead>
                <tbody>
                    ${state.usersList.map(u => `
                        <tr>
                            <td class="font-bold text-slate-800">${u.nama}</td>
                            <td class="font-mono text-slate-500">${u.username}</td>
                            <td><span class="badge badge-slate">${u.role}</span></td>
                            <td><span class="badge ${u.status === 'Aktif' ? 'badge-emerald' : 'badge-slate'}">${u.status}</span></td>
                            <td class="text-right">
                                <div class="action-btns">
                                    <button class="btn btn-secondary text-xs" data-action="toggle-user" data-id="${u.id}">${u.status === 'Aktif' ? 'Nonaktifkan' : 'Aktifkan'}</button>
                                    <button class="btn-icon" data-action="edit-user" data-id="${u.id}">${icons.edit}</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderLogs() {
    if (!hasAccess('logs')) return '<div class="card text-center text-slate-400">Akses Ditolak</div>';
    return `
        <div class="card"><h4 class="text-base font-bold text-slate-800">Audit Log Aktivitas</h4><p class="text-xs text-slate-400 mt-1">Pelacakan seluruh aktivitas pengguna.</p></div>
        <div class="card p-0 overflow-hidden">
            <table class="data-table">
                <thead><tr><th>Tanggal & Waktu</th><th>Pengguna</th><th>Aktivitas</th></tr></thead>
                <tbody>
                    ${state.logActivities.map(l => `<tr><td class="font-mono text-xs text-slate-400">${l.tanggal}</td><td class="font-bold text-slate-800">@${l.user}</td><td class="text-slate-700">${l.aktivitas}</td></tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// 7. EVENT HANDLERS & MODALS
// ==========================================
function attachViewEvents() {
    // Filters
    const fPesertaSearch = document.getElementById('filter-peserta-search');
    if (fPesertaSearch) fPesertaSearch.oninput = (e) => { state.filters.peserta.search = e.target.value; renderView(); };
    const fPesertaKat = document.getElementById('filter-peserta-kat');
    if (fPesertaKat) fPesertaKat.onchange = (e) => { state.filters.peserta.kategori = e.target.value; renderView(); };

    const fRiwayatSearch = document.getElementById('filter-riwayat-search');
    if (fRiwayatSearch) fRiwayatSearch.oninput = (e) => { state.filters.riwayat.search = e.target.value; renderView(); };
    const fRiwayatKat = document.getElementById('filter-riwayat-kat');
    if (fRiwayatKat) fRiwayatKat.onchange = (e) => { state.filters.riwayat.kategori = e.target.value; renderView(); };
    const fRiwayatTgl = document.getElementById('filter-riwayat-tgl');
    if (fRiwayatTgl) fRiwayatTgl.onchange = (e) => { state.filters.riwayat.tanggal = e.target.value; renderView(); };

    const fLaporanKat = document.getElementById('filter-laporan-kat');
    if (fLaporanKat) fLaporanKat.onchange = (e) => { state.filters.laporan.kategori = e.target.value; renderView(); };
    const fLaporanTgl = document.getElementById('filter-laporan-tgl');
    if (fLaporanTgl) fLaporanTgl.onchange = (e) => { state.filters.laporan.tanggal = e.target.value; renderView(); };

    // Global Action Delegate
    document.getElementById('view-container').onclick = (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const action = btn.dataset.action;
        const id = btn.dataset.id;

        if (action === 'goto') { state.currentMenu = btn.dataset.target; renderApp(); }
        else if (action === 'add-peserta') openPesertaModal();
        else if (action === 'edit-peserta') openPesertaModal(id);
        else if (action === 'delete-peserta') deletePeserta(id, btn.dataset.nama);
        else if (action === 'periksa') openPemeriksaanModal(id);
        else if (action === 'detail-pem') openDetailModal(id);
        else if (action === 'cetak-pem') { openDetailModal(id); setTimeout(() => window.print(), 300); }
        else if (action === 'add-jadwal') openJadwalModal();
        else if (action === 'delete-jadwal') deleteJadwal(id);
        else if (action === 'add-user') openUserModal();
        else if (action === 'edit-user') openUserModal(id);
        else if (action === 'toggle-user') toggleUserStatus(id);
        else if (action === 'export') showToast(`Mengekspor laporan ke ${btn.dataset.format}...`, 'info');
        else if (action === 'shortcut-peserta') {state.currentMenu = 'data_peserta'; renderApp(); 
            setTimeout(() => openPesertaModal(), 100); // Buka modal otomatis setelah render
        }
        else if (action === 'shortcut-riwayat') { state.currentMenu = 'riwayat'; renderApp(); }
        else if (action === 'shortcut-laporan') { state.currentMenu = 'laporan'; renderApp(); }

        else if (action === 'manage-wilayah') showToast('Fitur Kelola Data Wilayah sedang dalam pengembangan.', 'info');
        else if (action === 'import-massal') openImportMassalModal();
        else if (action === 'backup-db') showToast('Mempersiapkan file backup database...', 'info');
        else if (action === 'restore-db') showToast('Fitur Restore database sedang dalam pengembangan.', 'info');

    };
}

// --- PESERTA MODAL (DAFTAR & UBAH DATA) ---
function openPesertaModal(id = null) {
    const p = id ? state.pesertaList.find(x => x.id === id) : null;
    const initialKat = p ? p.kategori : 'Ibu Hamil'; 
    const isBalita = initialKat === 'Balita'; // Cek apakah defaultnya Balita
    
    const html = `
        <div class="modal-header border-b border-slate-100">
            <div>
                <h3 class="text-lg font-black text-slate-800">${p ? 'Ubah Data' : 'Daftarkan'} Peserta</h3>
                <p class="text-xs text-slate-400 mt-1">Lengkapi data di bawah ini dengan benar.</p>
            </div>
            <button class="btn-icon" onclick="closeModal()">${icons.close}</button>
        </div>
        
        <form id="form-peserta" class="modal-body" style="flex: 1; overflow-y: auto;">
            <!-- BAGIAN A: IDENTITAS UTAMA -->
            <span class="section-title text-slate-500 mb-3">A. IDENTITAS UTAMA</span>
            <div class="space-y-4 mb-6">
                <div class="form-group">
                    <label class="form-label">NIK (16 Digit)</label>
                    <input type="text" id="p-nik" class="form-input" maxlength="16" value="${p ? p.nik : ''}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Nama Lengkap Peserta</label>
                    <input type="text" id="p-nama" class="form-input" value="${p ? p.nama : ''}" required>
                </div>
                
               <!-- FORM KHUSUS BALITA: Tersembunyi jika bukan Balita -->
                <div id="group-khusus-balita" style="display: ${isBalita ? 'block' : 'none'};" class="p-4 bg-rose-50 rounded-xl border border-rose-100 space-y-4">
                    <span class="section-title text-rose-700">DATA KHUSUS BALITA</span>
                    
                    <div class="form-group">
                        <label class="form-label text-rose-800">Nama Orang Tua / Wali <span class="text-rose-500">*</span></label>
                        <input type="text" id="p-ortu" class="form-input" value="${p ? (p.nama_orang_tua || '') : ''}" placeholder="Nama Ayah / Ibu">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="form-group">
                            <label class="form-label text-rose-800">BB Lahir (Kg)</label>
                            <input type="number" step="0.01" id="p-bb-lahir" class="form-input" value="${p ? (p.bb_lahir || '') : ''}" placeholder="Cth: 3.2">
                        </div>
                        <div class="form-group">
                            <label class="form-label text-rose-800">TB Lahir (Cm)</label>
                            <input type="number" step="0.1" id="p-tb-lahir" class="form-input" value="${p ? (p.tb_lahir || '') : ''}" placeholder="Cth: 50">
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group">
                        <label class="form-label">Kategori</label>
                        <select id="p-kat" class="form-input">
                            <option value="Ibu Hamil" ${initialKat === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option>
                            <option value="Balita" ${initialKat === 'Balita' ? 'selected' : ''}>Balita</option>
                            <option value="Remaja" ${initialKat === 'Remaja' ? 'selected' : ''}>Remaja</option>
                            <option value="Dewasa" ${initialKat === 'Dewasa' ? 'selected' : ''}>Dewasa</option>
                            <option value="Lansia" ${initialKat === 'Lansia' ? 'selected' : ''}>Lansia</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Jenis Kelamin</label>
                        <select id="p-gender" class="form-input">
                            <option value="Laki-laki" ${p?.jenis_kelamin === 'Laki-laki' ? 'selected' : ''}>Laki-laki</option>
                            <option value="Perempuan" ${p?.jenis_kelamin === 'Perempuan' ? 'selected' : ''}>Perempuan</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- BAGIAN B: INFORMASI TAMBAHAN -->
            <span class="section-title text-slate-500 mb-3">B. INFORMASI TAMBAHAN</span>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="form-group">
                    <label class="form-label">Tanggal Lahir</label>
                    <input type="date" id="p-tgl" class="form-input" value="${p ? p.tanggal_lahir : ''}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">No. HP / WhatsApp</label>
                    <input type="text" id="p-hp" class="form-input" value="${p ? p.no_hp : ''}" placeholder="08xxxxxxxxxx">
                </div>
            </div>

            <!-- BAGIAN C: ALAMAT DOMISILI -->
            <span class="section-title text-slate-500 mb-3">C. ALAMAT DOMISILI</span>
            <div class="space-y-4">
                <div class="form-group">
                    <label class="form-label">Alamat Lengkap</label>
                    <textarea id="p-alamat" class="form-input" rows="2">${p ? p.alamat : ''}</textarea>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group">
                        <label class="form-label">RT</label>
                        <input type="text" id="p-rt" class="form-input" value="${p ? (p.rt || '') : ''}" maxlength="3">
                    </div>
                    <div class="form-group">
                        <label class="form-label">RW</label>
                        <input type="text" id="p-rw" class="form-input" value="${p ? (p.rw || '') : ''}" maxlength="3">
                    </div>
                </div>
            </div>

            <div class="modal-footer -mx-6 -mb-6 mt-8 pt-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl sticky bottom-0">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn btn-primary">Simpan Data</button>
            </div>
        </form>
    `;
    
    openModal(html);

    // --- LOGIKA DINAMIS: Tampilkan/Sembunyikan Form Khusus Balita ---
    const katSelect = document.getElementById('p-kat');
    const groupBalita = document.getElementById('group-khusus-balita');
    const inputOrtu = document.getElementById('p-ortu');
    const inputBBLahir = document.getElementById('p-bb-lahir');
    const inputTBLahir = document.getElementById('p-tb-lahir');

    katSelect.addEventListener('change', function() {
        if (this.value === 'Balita') {
            groupBalita.style.display = 'block';
            inputOrtu.setAttribute('required', 'required');
        } else {
            groupBalita.style.display = 'none';
            inputOrtu.removeAttribute('required');
            inputOrtu.value = ''; 
            inputBBLahir.value = ''; // Reset nilai agar tidak tersimpan sebagai sampah
            inputTBLahir.value = ''; // Reset nilai agar tidak tersimpan sebagai sampah
        }
    });

    // --- LOGIKA PENYIMPANAN DATA ---
    document.getElementById('form-peserta').onsubmit = async (e) => {
        e.preventDefault();
        
       const kategori = document.getElementById('p-kat').value;
        const isBalitaSubmit = kategori === 'Balita';

        const data = {
            nik: document.getElementById('p-nik').value.trim(),
            nama: document.getElementById('p-nama').value.trim(),
            nama_orang_tua: isBalitaSubmit ? document.getElementById('p-ortu').value.trim() : '', 
            bb_lahir: isBalitaSubmit ? document.getElementById('p-bb-lahir').value.trim() : '', // Kosongkan jika bukan Balita
            tb_lahir: isBalitaSubmit ? document.getElementById('p-tb-lahir').value.trim() : '', // Kosongkan jika bukan Balita
            kategori: kategori,
            jenis_kelamin: document.getElementById('p-gender').value,
            tanggal_lahir: document.getElementById('p-tgl').value,
            no_hp: document.getElementById('p-hp').value.trim(),
            alamat: document.getElementById('p-alamat').value.trim(),
            rt: document.getElementById('p-rt').value.trim(),
            rw: document.getElementById('p-rw').value.trim()
        };

        if (data.nik.length !== 16) return showToast('NIK harus terdiri dari 16 digit!', 'error');
        if (isBalitaSubmit && !data.nama_orang_tua) return showToast('Nama Orang Tua/Wali wajib diisi untuk Balita!', 'error');

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Menyimpan...';
        submitBtn.disabled = true;

        try {
            if (p) {
                data.id = p.id;
                data.no_registrasi = p.no_registrasi;
                const response = await fetch(API_URL, {
                    method: 'POST',
                    body: JSON.stringify({ action: 'updatePeserta', ...data })
                });
                const result = await response.json();
                if (result.status === 'success') {
                    const index = state.pesertaList.findIndex(x => x.id === p.id);
                    if (index !== -1) state.pesertaList[index] = { ...p, ...data };
                    addAuditLog(`Update data peserta: ${data.nama}`);
                    showToast('Data peserta berhasil diperbarui!', 'success');
                } else {
                    showToast('Gagal: ' + result.message, 'error');
                }
            } else {
                const newId = `REG-${String(state.pesertaList.length + 1).padStart(3, '0')}`;
                const payload = { action: 'addPeserta', id: newId, no_registrasi: newId, ...data };
                const response = await fetch(API_URL, { method: 'POST', body: JSON.stringify(payload) });
                const result = await response.json();
                if (result.status === 'success') {
                    state.pesertaList.push({ id: newId, no_registrasi: newId, ...data });
                    addAuditLog(`Tambah peserta baru: ${data.nama}`);
                    showToast('Peserta baru berhasil didaftarkan!', 'success');
                } else {
                    showToast('Gagal: ' + result.message, 'error');
                }
            }
            closeModal();
            renderView();
        } catch (error) {
            showToast('Terjadi kesalahan koneksi ke database.', 'error');
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    };
}

function deletePeserta(id, nama) {
    if (confirm(`Hapus peserta "${nama}"?`)) {
        state.pesertaList = state.pesertaList.filter(p => p.id !== id);
        state.pemeriksaanList = state.pemeriksaanList.filter(p => p.peserta_id !== id);
        addAuditLog(`Hapus peserta: ${nama}`);
        showToast('Data dihapus!');
        renderView();
    }
}

// --- PEMERIKSAAN MODAL ---
function openPemeriksaanModal(pesertaId) {
    const peserta = state.pesertaList.find(p => p.id === pesertaId);
    if (!peserta) return;

    let specificFields = '';
    if (peserta.kategori === 'Balita') {
        specificFields = `
            <div class="bg-rose-50 p-4 rounded-xl border border-rose-100 space-y-4">
                <span class="section-title text-rose-700">C. FORMULIR SPESIFIK BALITA</span>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group"><label class="form-label text-rose-800">Status Gizi</label><select id="pem-status-gizi" class="form-input"><option>Sesuai / Baik</option><option>Gizi Kurang</option><option>Gizi Buruk</option></select></div>
                    <div class="form-group"><label class="form-label text-rose-800">Tinggi/Umur (Stunting)</label><select id="pem-tinggi-umur" class="form-input"><option>Normal</option><option>Sangat Pendek (Stunting)</option></select></div>
                </div>
                <div class="form-group"><label class="form-label text-rose-800">Imunisasi</label><input type="text" id="pem-imunisasi" class="form-input" placeholder="Cth: DPT-HB-Hib 3"></div>
            </div>
        `;
    } else if (peserta.kategori === 'Ibu Hamil') {
        specificFields = `
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 space-y-4">
                <span class="section-title text-emerald-700">C. FORMULIR SPESIFIK IBU HAMIL</span>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group"><label class="form-label text-emerald-800">Usia Kehamilan</label><input type="text" id="pem-usia-hamil" class="form-input" placeholder="24 Minggu"></div>
                    <div class="form-group"><label class="form-label text-emerald-800">Tinggi Fundus (cm)</label><input type="number" id="pem-fundus" class="form-input"></div>
                    <div class="form-group"><label class="form-label text-emerald-800">Lila (cm)</label><input type="number" id="pem-lila" class="form-input"></div>
                    <div class="form-group"><label class="form-label text-emerald-800">DJJ (/menit)</label><input type="number" id="pem-djj" class="form-input"></div>
                </div>
            </div>
        `;
    } else if (peserta.kategori === 'Lansia') {
        specificFields = `
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 space-y-4">
                <span class="section-title text-blue-700">C. FORMULIR SPESIFIK LANSIA</span>
                <div class="grid grid-cols-3 gap-4">
                    <div class="form-group"><label class="form-label text-blue-800">Gula Darah</label><input type="number" id="pem-gula" class="form-input"></div>
                    <div class="form-group"><label class="form-label text-blue-800">Kolesterol</label><input type="number" id="pem-kol" class="form-input"></div>
                    <div class="form-group"><label class="form-label text-blue-800">Asam Urat</label><input type="number" id="pem-asam" class="form-input"></div>
                </div>
                <div class="form-group"><label class="form-label text-blue-800">Riwayat Penyakit</label><input type="text" id="pem-riwayat" class="form-input"></div>
            </div>
        `;
    }

    const html = `
        <div class="modal-header bg-slate-50 rounded-t-2xl"><div><h3 class="text-lg font-black text-slate-800">Form Cek Kesehatan</h3><p class="text-xs text-slate-400 mt-1">Peserta: <b>${peserta.nama}</b> (${peserta.kategori})</p></div><button class="btn-icon" onclick="closeModal()">${icons.close}</button></div>
        <form id="form-pem" class="modal-body">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                <span class="section-title">A. IDENTITAS</span>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group"><label class="form-label">Tanggal</label><input type="date" id="pem-tgl" class="form-input" value="${new Date().toISOString().split('T')[0]}" required></div>
                    <div class="form-group"><label class="form-label">Petugas</label><input type="text" class="form-input" value="${state.user.nama}" disabled></div>
                </div>
            </div>
            <div class="space-y-4">
                <span class="section-title">B. PEMERIKSAAN FISIK</span>
                <div class="grid grid-cols-4 gap-4">
                    <div class="form-group"><label class="form-label">BB (Kg)</label><input type="number" step="0.1" id="pem-bb" class="form-input" oninput="calcIMT()" required></div>
                    <div class="form-group"><label class="form-label">TB (Cm)</label><input type="number" step="0.1" id="pem-tb" class="form-input" oninput="calcIMT()" required></div>
                    <div class="form-group"><label class="form-label">IMT</label><input type="text" id="pem-imt" class="form-input bg-emerald-50 text-emerald-800 font-black" disabled placeholder="Otomatis"></div>
                    <div class="form-group"><label class="form-label">Lingkar Perut (cm)</label><input type="number" step="0.1" id="pem-lingkar-perut" class="form-input" placeholder="Contoh: 78"></div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group"><label class="form-label">Tekanan Darah</label><input type="text" id="pem-td" class="form-input" placeholder="120/80"></div>
                    <div class="form-group"><label class="form-label">Lingkar Lengan Atas / LiLA (cm)</label><input type="number" step="0.1" id="pem-lila" class="form-input" placeholder="Contoh: 26"></div>
                </div>
            </div>
            ${specificFields}
            <div class="space-y-4">
                <span class="section-title">D. DIAGNOSA & TINDAKAN</span>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group"><label class="form-label">Keluhan</label><textarea id="pem-keluhan" class="form-input" rows="2"></textarea></div>
                    <div class="form-group"><label class="form-label">Diagnosa</label><textarea id="pem-diagnosa" class="form-input" rows="2"></textarea></div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group"><label class="form-label">Tindakan</label><textarea id="pem-tindakan" class="form-input" rows="2"></textarea></div>
                    <div class="form-group"><label class="form-label">Rujukan?</label><select id="pem-rujukan" class="form-input"><option value="Tidak">Tidak Perlu</option><option value="Ya">Ya, Rujuk</option></select></div>
                </div>
            </div>
            <div class="modal-footer -m-6 mt-4 rounded-b-2xl"><button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button><button type="submit" class="btn btn-primary">Simpan Pemeriksaan</button></div>
        </form>
    `;
    openModal(html);

    document.getElementById('form-pem').onsubmit = (e) => {
        e.preventDefault();
        const newId = `PEM-${String(state.pemeriksaanList.length + 1).padStart(3, '0')}`;
        const record = {
            id: newId, peserta_id: peserta.id, nama_peserta: peserta.nama, kategori: peserta.kategori,
            tanggal: document.getElementById('pem-tgl').value,
            berat_badan: document.getElementById('pem-bb').value, tinggi_badan: document.getElementById('pem-tb').value,
            imt: document.getElementById('pem-imt').value,
            tekanan_darah: document.getElementById('pem-td').value,
            lingkar_perut: document.getElementById('pem-lingkar-perut').value,
            lingkar_lengan_atas: document.getElementById('pem-lila').value,
            keluhan: document.getElementById('pem-keluhan').value, diagnosa: document.getElementById('pem-diagnosa').value,
            tindakan: document.getElementById('pem-tindakan').value, rujukan: document.getElementById('pem-rujukan').value,
            petugas: state.user.nama
        };

        if (peserta.kategori === 'Balita') {
            record.status_gizi = document.getElementById('pem-status-gizi').value;
            record.tinggi_menurut_umur = document.getElementById('pem-tinggi-umur').value;
            record.imunisasi = document.getElementById('pem-imunisasi').value;
        } else if (peserta.kategori === 'Ibu Hamil') {
            record.usia_kehamilan = document.getElementById('pem-usia-hamil').value;
            record.tinggi_fundus = document.getElementById('pem-fundus').value;
            record.lila = document.getElementById('pem-lila').value;
            record.djj = document.getElementById('pem-djj').value;
        } else if (peserta.kategori === 'Lansia') {
            record.gula_darah = document.getElementById('pem-gula').value;
            record.kolesterol = document.getElementById('pem-kol').value;
            record.asam_urat = document.getElementById('pem-asam').value;
            record.riwayat_penyakit = document.getElementById('pem-riwayat').value;
        }

        state.pemeriksaanList.unshift(record);
        addAuditLog(`Input pemeriksaan: ${peserta.nama}`);
        showToast('Pemeriksaan disimpan!');
        closeModal();
        state.currentMenu = 'riwayat';
        renderApp();
    };
}

function calcIMT() {
    const bb = parseFloat(document.getElementById('pem-bb').value);
    const tb = parseFloat(document.getElementById('pem-tb').value) / 100;
    if (bb > 0 && tb > 0) document.getElementById('pem-imt').value = (bb / (tb * tb)).toFixed(1);
}

// --- DETAIL MODAL ---
function openDetailModal(id) {
    const p = state.pemeriksaanList.find(x => x.id === id);
    if (!p) return;

    let specificDetail = '';
    if (p.kategori === 'Balita') specificDetail = `<div class="bg-rose-50 p-4 rounded-xl border border-rose-100 text-xs space-y-2"><span class="section-title text-rose-700">CATATAN BALITA</span><div class="grid grid-cols-2 gap-2"><div>Status Gizi: <b>${p.status_gizi || '-'}</b></div><div>Tinggi/Umur: <b>${p.tinggi_menurut_umur || '-'}</b></div><div>Imunisasi: <b>${p.imunisasi || '-'}</b></div></div></div>`;
    else if (p.kategori === 'Ibu Hamil') specificDetail = `<div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-xs space-y-2"><span class="section-title text-emerald-700">CATATAN KEHAMILAN</span><div class="grid grid-cols-2 gap-2"><div>Usia: <b>${p.usia_kehamilan || '-'}</b></div><div>Fundus: <b>${p.tinggi_fundus || '-'} cm</b></div><div>Lila: <b>${p.lila || '-'} cm</b></div><div>DJJ: <b>${p.djj || '-'}</b></div></div></div>`;
    else if (p.kategori === 'Lansia') specificDetail = `<div class="bg-blue-50 p-4 rounded-xl border border-blue-100 text-xs space-y-2"><span class="section-title text-blue-700">CATATAN LANSIA</span><div class="grid grid-cols-2 gap-2"><div>Gula Darah: <b>${p.gula_darah || '-'}</b></div><div>Kolesterol: <b>${p.kolesterol || '-'}</b></div><div>Asam Urat: <b>${p.asam_urat || '-'}</b></div><div>Komorbid: <b>${p.riwayat_penyakit || '-'}</b></div></div></div>`;

    const html = `
        <div class="modal-header no-print"><h3 class="text-lg font-black text-slate-800">Detail Rekam Medis</h3><button class="btn-icon" onclick="closeModal()">${icons.close}</button></div>
        <div class="modal-body">
            <div class="text-center pb-4 border-b-2 border-double border-slate-300">
                <h2 class="text-lg font-black text-slate-800 uppercase">POSYANDU DAHLIA MULIA</h2>
                <p class="text-xs text-slate-500 font-semibold">Wilayah Kerja Puskesmas Sehat</p>
            </div>
            <div class="grid grid-cols-2 gap-4 text-xs"><div><p class="text-slate-400 font-bold uppercase">ID PEMERIKSAAN</p><p class="font-bold text-slate-800 font-mono">${p.id}</p></div><div><p class="text-slate-400 font-bold uppercase">TANGGAL</p><p class="font-bold text-slate-800">${new Date(p.tanggal).toLocaleDateString('id-ID', {day:'numeric',month:'long',year:'numeric'})}</p></div></div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 text-xs">
                <span class="section-title">IDENTITAS PESERTA</span>
                <div class="grid grid-cols-2 gap-2"><div>Nama: <b class="text-slate-800">${p.nama_peserta}</b></div><div>No. Reg: <b class="text-slate-800">${p.peserta_id}</b></div><div>Kategori: <b class="text-emerald-700">${p.kategori}</b></div><div>Petugas: <b class="text-slate-700">${p.petugas}</b></div></div>
            </div>
            <div class="space-y-2 text-xs">
                <span class="section-title">HASIL FISIK</span>
                <div class="grid grid-cols-3 gap-3"><div class="border p-2 rounded-xl text-center"><span class="text-slate-400 block text-xs">BERAT</span><span class="font-black text-slate-800">${p.berat_badan} Kg</span></div><div class="border p-2 rounded-xl text-center"><span class="text-slate-400 block text-xs">TINGGI</span><span class="font-black text-slate-800">${p.tinggi_badan} Cm</span></div><div class="border p-2 rounded-xl text-center"><span class="text-slate-400 block text-xs">IMT</span><span class="font-black text-emerald-700">${p.imt || '-'}</span></div></div>
                <div class="grid grid-cols-3 gap-2 pt-2">
                    <div>TD: <b>${p.tekanan_darah || '-'}</b></div>
                    <div>L. Perut: <b>${p.lingkar_perut || '-'} cm</b></div>
                    <div>LiLA: <b>${p.lingkar_lengan_atas || '-'} cm</b></div>
                </div>
            </div>
            ${specificDetail}
            <div class="border-t pt-3 text-xs space-y-2">
                <div><span class="text-slate-400 block font-bold">KELUHAN:</span><p class="font-medium text-slate-700">${p.keluhan || '-'}</p></div>
                <div><span class="text-slate-400 block font-bold">DIAGNOSA:</span><p class="font-medium text-slate-700">${p.diagnosa || '-'}</p></div>
                <div><span class="text-slate-400 block font-bold">TINDAKAN:</span><p class="font-medium text-slate-700">${p.tindakan || '-'}</p></div>
            </div>
            <div class="pt-8 grid grid-cols-2 text-xs text-center"><div></div><div class="space-y-12"><p>Petugas Posyandu,</p><p class="font-bold text-slate-800 underline">${p.petugas}</p></div></div>
        </div>
        <div class="modal-footer no-print"><button class="btn btn-secondary" onclick="closeModal()">Tutup</button><button class="btn btn-primary" onclick="window.print()">Cetak</button></div>
    `;
    openModal(html);
}

// --- JADWAL MODAL ---
function openJadwalModal() {
    const html = `
        <div class="modal-header"><h3 class="text-lg font-black text-slate-800">Terbitkan Agenda</h3><button class="btn-icon" onclick="closeModal()">${icons.close}</button></div>
        <form id="form-jadwal" class="modal-body">
            <div class="form-group"><label class="form-label">Tanggal</label><input type="date" id="j-tgl" class="form-input" required></div>
            <div class="form-group"><label class="form-label">Lokasi</label><input type="text" id="j-lok" class="form-input" placeholder="Balai RW 04" required></div>
            <div class="grid grid-cols-2 gap-4"><div class="form-group"><label class="form-label">Jam Mulai</label><input type="time" id="j-mulai" class="form-input" required></div><div class="form-group"><label class="form-label">Jam Selesai</label><input type="time" id="j-selesai" class="form-input" required></div></div>
            <div class="modal-footer -m-6 mt-4 rounded-b-2xl"><button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button><button type="submit" class="btn btn-primary">Publikasikan</button></div>
        </form>
    `;
    openModal(html);
    document.getElementById('form-jadwal').onsubmit = (e) => {
        e.preventDefault();
        state.jadwalList.push({
            id: Date.now(),
            tanggal: document.getElementById('j-tgl').value,
            lokasi: document.getElementById('j-lok').value,
            jam_mulai: document.getElementById('j-mulai').value,
            jam_selesai: document.getElementById('j-selesai').value
        });
        addAuditLog('Terbitkan jadwal baru');
        showToast('Jadwal diterbitkan!');
        closeModal();
        renderView();
    };
}

function deleteJadwal(id) {
    if (confirm('Hapus jadwal ini?')) {
        state.jadwalList = state.jadwalList.filter(j => j.id != id);
        addAuditLog('Hapus jadwal');
        showToast('Jadwal dihapus.', 'info');
        renderView();
    }
}

// --- USER MODAL ---
function openUserModal(id = null) {
    const u = id ? state.usersList.find(x => x.id == id) : null;
    const html = `
        <div class="modal-header">
            <h3 class="text-lg font-black text-slate-800">${u ? 'Edit' : 'Tambah'} Pengguna</h3>
            <button class="btn-icon" onclick="closeModal()">${icons.close}</button>
        </div>
        <form id="form-user" class="modal-body">
            <div class="form-group">
                <label class="form-label">Nama Lengkap</label>
                <input type="text" id="u-nama" class="form-input" value="${u ? u.nama : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Username</label>
                <input type="text" id="u-user" class="form-input" value="${u ? u.username : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" id="u-pass" class="form-input" 
                       placeholder="${u ? 'Kosongkan jika tidak ingin mengubah' : 'Masukkan password'}" 
                       ${u ? '' : 'required'}>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group">
                    <label class="form-label">Role</label>
                    <select id="u-role" class="form-input">
                        <option value="Kader" ${u?.role === 'Kader' ? 'selected' : ''}>Kader</option>
                        <option value="Admin" ${u?.role === 'Admin' ? 'selected' : ''}>Admin</option>
                        <option value="Petugas Puskesmas" ${u?.role === 'Petugas Puskesmas' ? 'selected' : ''}>Petugas Puskesmas</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Status</label>
                    <select id="u-status" class="form-input">
                        <option value="Aktif" ${u?.status === 'Aktif' ? 'selected' : ''}>Aktif</option>
                        <option value="Nonaktif" ${u?.status === 'Nonaktif' ? 'selected' : ''}>Nonaktif</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer -m-6 mt-4 rounded-b-2xl">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn btn-primary">Simpan</button>
            </div>
        </form>
    `;
    openModal(html);
    
    document.getElementById('form-user').onsubmit = (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById('u-pass').value;
        
        const data = { 
            nama: document.getElementById('u-nama').value, 
            username: document.getElementById('u-user').value, 
            role: document.getElementById('u-role').value, 
            status: document.getElementById('u-status').value 
        };
        
        // ✅ Hanya update password jika diisi (untuk edit) atau wajib untuk user baru
        if (u) {
            Object.assign(u, data);
            if (passwordInput) u.password = passwordInput; // Update password hanya jika diisi
            showToast('User diperbarui!');
        } else {
            if (!passwordInput) return showToast('Password wajib diisi untuk user baru!', 'error');
            state.usersList.push({ id: Date.now(), password: passwordInput, ...data });
            showToast('User baru ditambahkan!');
        }
        addAuditLog(`Update user: ${data.username}`);
        closeModal();
        renderView();
    };
}

function toggleUserStatus(id) {
    const u = state.usersList.find(x => x.id == id);
    if (u) {
        u.status = u.status === 'Aktif' ? 'Nonaktif' : 'Aktif';
        addAuditLog(`Toggle status user: ${u.username}`);
        showToast(`Status ${u.username} diubah menjadi ${u.status}`, 'info');
        renderView();
    }
}

// Close modal on overlay click
document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// ==========================================
// MENU MASTER DATA (KHUSUS ADMIN)
// ==========================================
function renderMasterData() {
    return `
        <div class="card">
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h4 class="text-xl font-black text-slate-800">Manajemen Master Data</h4>
                    <p class="text-xs text-slate-400 mt-1">Kelola data referensi, import massal, dan backup database sistem.</p>
                </div>
                <span class="px-3 py-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">ADMIN ONLY</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Card 1: Data Wilayah -->
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                        ${icons.map}
                    </div>
                    <h5 class="text-base font-bold text-slate-800 mb-1">Data Wilayah & Posyandu</h5>
                    <p class="text-xs text-slate-500 mb-4">Kelola data referensi Provinsi, Kabupaten, Kecamatan, Puskesmas, Desa, dan Posyandu.</p>
                    <button class="btn btn-secondary w-full text-xs" data-action="manage-wilayah">Kelola Data Wilayah</button>
                </div>

                <!-- Card 2: Import Massal (Sesuai format Excel Anda) -->
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                        ${icons.upload}
                    </div>
                    <h5 class="text-base font-bold text-slate-800 mb-1">Import Data Peserta (Massal)</h5>
                    <p class="text-xs text-slate-500 mb-4">Unggah file Excel/CSV (format Data Stats Gizi) untuk mendaftarkan peserta secara massal.</p>
                    <button class="btn btn-primary w-full text-xs" data-action="import-massal">Mulai Import Data</button>
                </div>

                <!-- Card 3: Backup -->
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                        ${icons.database}
                    </div>
                    <h5 class="text-base font-bold text-slate-800 mb-1">Backup & Restore Database</h5>
                    <p class="text-xs text-slate-500 mb-4">Unduh cadangan database atau pulihkan data dari file backup sebelumnya.</p>
                    <div class="flex gap-2">
                        <button class="btn btn-secondary flex-1 text-xs" data-action="backup-db">Unduh Backup</button>
                        <button class="btn btn-danger flex-1 text-xs" data-action="restore-db">Restore</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Info Box Keamanan -->
        <div class="card bg-slate-50 border-dashed border-slate-200">
            <div class="flex gap-3">
                <div class="text-amber-500 mt-0.5">${icons.shield}</div>
                <div>
                    <h5 class="text-sm font-bold text-slate-800">Catatan Keamanan</h5>
                    <p class="text-xs text-slate-600 mt-1">Menu Master Data hanya dapat diakses oleh pengguna dengan role <b>Admin</b>. Setiap aktivitas import, backup, atau perubahan data referensi akan dicatat dalam Log Aktivitas sistem.</p>
                </div>
            </div>
        </div>
    `;
}

function openImportMassalModal() {
    const html = `
        <div class="modal-header">
            <div>
                <h3 class="text-lg font-black text-slate-800">Import Data Peserta Massal</h3>
                <p class="text-xs text-slate-400 mt-1">Unggah file Excel (.xls/.xlsx) format Data Stats Gizi Balita.</p>
            </div>
            <button class="btn-icon" onclick="closeModal()">${icons.close}</button>
        </div>
        <form id="form-import" class="modal-body">
            <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 mb-4">
                <b>Pastikan kolom Excel Anda memiliki header:</b><br>
                NIK, Nama, Jenis_Kelamin, Tanggal_Lahir, BB Lahir, TB Lahir, Nama_Orang_Tua, RT, RW, Alamat.
            </div>
            
            <div class="form-group mb-4">
                <label class="form-label">Pilih File Data</label>
                <input type="file" id="import-file" class="form-input" accept=".xls,.xlsx,.csv" required>
            </div>

            <div class="modal-footer -mx-6 -mb-6 mt-6 pt-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" id="btn-proses-import" class="btn btn-primary">Proses Import</button>
            </div>
        </form>
    `;
    openModal(html);

    document.getElementById('form-import').onsubmit = async (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('import-file');
        const file = fileInput.files[0];
        const btn = document.getElementById('btn-proses-import');

        if (!file) {
            showToast('Silakan pilih file terlebih dahulu!', 'error');
            return;
        }

        btn.innerText = 'Membaca file...';
        btn.disabled = true;

        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                
                // Baca data sebagai JSON
                const rawData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

                if (rawData.length === 0) {
                    showToast('File Excel kosong atau format tidak sesuai!', 'error');
                    btn.innerText = 'Proses Import';
                    btn.disabled = false;
                    return;
                }

                btn.innerText = 'Mengirim ke Database...';

                // Peta kolom Excel ke format aplikasi kita
                const mappedData = rawData.map((row, index) => {
                    // Bersihkan NIK dari spasi atau karakter tersembunyi
                    const nik = String(row['NIK'] || row['nik'] || '').replace(/\s/g, '');
                    
                    // Format Tanggal Lahir (menangani format tanggal Excel)
                    let tglLahir = row['Tanggal_Lahir'] || row['tanggal_lahir'] || '';
                    if (typeof tglLahir === 'number') {
                        // Konversi tanggal Excel serial number ke YYYY-MM-DD
                        const date = new Date(Math.round((tglLahir - 25569) * 86400 * 1000));
                        tglLahir = date.toISOString().split('T')[0];
                    }

                    const jk = String(row['Jenis_Kelamin'] || row['jenis_kelamin'] || '').trim().toUpperCase();
                    
                    return {
                        id: `REG-${Date.now()}-${index}`,
                        no_registrasi: `REG-${Date.now()}-${index}`,
                        nik: nik,
                        nama: String(row['Nama'] || row['nama'] || '').trim(),
                        nama_orang_tua: String(row['Nama_Orang_Tua'] || row['nama_orang_tua'] || '').trim(),
                        tanggal_lahir: tglLahir,
                        jenis_kelamin: (jk === 'L' || jk === 'LAKI-LAKI') ? 'Laki-laki' : 'Perempuan',
                        bb_lahir: String(row['BB Lahir'] || row['bb_lahir'] || ''),
                        tb_lahir: String(row['TB Lahir'] || row['tb_lahir'] || ''),
                        rt: String(row['RT'] || row['rt'] || ''),
                        rw: String(row['RW'] || row['rw'] || ''),
                        alamat: String(row['Alamat'] || row['alamat'] || 'Data Wilayah'),
                        kategori: 'Balita', // Default Balita sesuai nama file
                        no_hp: ''
                    };
                });

                // Kirim ke Google Apps Script
                const response = await fetch(API_URL, {
                    method: 'POST',
                    body: JSON.stringify({
                        action: 'importMassalPeserta',
                        records: mappedData
                    })
                });

                const result = await response.json();

                if (result.status === 'success') {
                    // Update state lokal
                    state.pesertaList.push(...mappedData);
                    addAuditLog(`Import massal ${mappedData.length} data peserta Balita`);
                    showToast(`Berhasil! ${mappedData.length} data peserta ditambahkan.`, 'success');
                    closeModal();
                    renderView(); // Refresh tabel
                } else {
                    showToast('Gagal: ' + result.message, 'error');
                }

            } catch (error) {
                console.error(error);
                showToast('Terjadi kesalahan saat membaca file. Pastikan format sesuai.', 'error');
            } finally {
                btn.innerText = 'Proses Import';
                btn.disabled = false;
            }
        };
        reader.readAsArrayBuffer(file);
    };
}

// ==========================================
// 8. MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    if (menuToggle && sidebar && mobileOverlay) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            mobileOverlay.classList.toggle('hidden');
        });
        
        mobileOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            mobileOverlay.classList.add('hidden');
        });
        
        // Close sidebar when clicking nav button on mobile
        document.addEventListener('click', (e) => {
            if (e.target.closest('.nav-btn') && window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                mobileOverlay.classList.add('hidden');
            }
        });
    }
}

// Initialize mobile menu
initMobileMenu();

// Initialize App: Muat data dari Spreadsheet terlebih dahulu sebelum merender
loadDatabaseFromSpreadsheet();
