// ==========================================
// 1. ICONS & INITIAL DATA
// ==========================================
const icons = {
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
        { id: 'REG-001', no_registrasi: 'REG-001', nik: '3201020304050001', no_kk: '3201020304059999', nama: 'Alvaro Putra', tanggal_lahir: '2024-03-15', jenis_kelamin: 'Laki-laki', alamat: 'RT 02/RW 04', kategori: 'Balita', no_hp: '081234567890' },
        { id: 'REG-002', no_registrasi: 'REG-002', nik: '3201020304050002', no_kk: '3201020304058888', nama: 'Siti Rahma', tanggal_lahir: '1998-08-20', jenis_kelamin: 'Perempuan', alamat: 'RT 01/RW 03', kategori: 'Ibu Hamil', no_hp: '082345678901' },
        { id: 'REG-003', no_registrasi: 'REG-003', nik: '3201020304050003', no_kk: '3201020304057777', nama: 'Mbah Kromo', tanggal_lahir: '1955-11-12', jenis_kelamin: 'Laki-laki', alamat: 'RT 03/RW 04', kategori: 'Lansia', no_hp: '083456789012' }
    ],

    pemeriksaan: [
        { id: 'PEM-001', peserta_id: 'REG-001', nama_peserta: 'Alvaro Putra', kategori: 'Balita', tanggal: new Date().toISOString().split('T')[0], berat_badan: '12.5', tinggi_badan: '88', imt: '16.1', tekanan_darah: '90/60', suhu: '36.5', nadi: '98', pernapasan: '24', status_gizi: 'Sesuai / Baik', tinggi_menurut_umur: 'Normal', imunisasi: 'DPT-HB-Hib 3', vitamin_a: 'Ya', keluhan: 'Tidak ada', diagnosa: 'Pertumbuhan baik', tindakan: 'PMT Balita', petugas: 'Siti Aminah', rujukan: 'Tidak' },
        { id: 'PEM-002', peserta_id: 'REG-002', nama_peserta: 'Siti Rahma', kategori: 'Ibu Hamil', tanggal: new Date().toISOString().split('T')[0], berat_badan: '62.4', tinggi_badan: '158', imt: '25.0', tekanan_darah: '110/70', suhu: '36.6', nadi: '84', pernapasan: '20', usia_kehamilan: '24 Minggu', tinggi_fundus: '22', lila: '26', tablet_tambah_darah: 'Ya', djj: '142', keluhan: 'Mual ringan', diagnosa: 'Kehamilan normal', tindakan: 'Konseling gizi', petugas: 'Siti Aminah', rujukan: 'Tidak' }
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
// 2. STATE MANAGEMENT
// ==========================================
const state = {
    user: null,
    currentMenu: 'dashboard',
    usersList: [...INITIAL_DATA.users],
    pesertaList: [...INITIAL_DATA.peserta],
    pemeriksaanList: [...INITIAL_DATA.pemeriksaan],
    jadwalList: [...INITIAL_DATA.jadwal],
    logActivities: [...INITIAL_DATA.logs],
    filters: {
        peserta: { search: '', kategori: 'Semua' },
        riwayat: { search: '', kategori: 'Semua', tanggal: '' },
        laporan: { kategori: 'Semua', tanggal: '' }
    }
};

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

function addAuditLog(activity) {
    state.logActivities.unshift({
        id: Date.now(),
        user: state.user ? state.user.username : 'Sistem',
        aktivitas: activity,
        tanggal: new Date().toISOString().replace('T', ' ').substring(0, 19)
    });
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
    if (['user', 'logs'].includes(menu)) return role === 'Admin';
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
        errorEl.textContent = 'Username dan password wajib di isi.';
        errorEl.classList.remove('hidden');
        return;
    }

    const foundUser = state.usersList.find(u => 
        u.username.toLowerCase() === username.toLowerCase() && u.status === 'Aktif'
    );

    if (!foundUser) {
        errorEl.textContent = 'Pengguna tidak ditemukan atau berstatus Nonaktif.';
        errorEl.classList.remove('hidden');
        return;
    }

    if (foundUser.password !== password) {
        errorEl.textContent = 'Password salah ! Silahkan coba lagi.';
        errorEl.classList.remove('hidden');
        return;
    }

    // ✅ LANGSUNG GUNAKAN ROLE DARI DATABASE, TIDAK PERLU PILIH MANUAL
    state.user = { ...foundUser, actualRole: foundUser.role };
    
    errorEl.classList.add('hidden');
    addAuditLog(`Login sebagai ${state.user.nama} (${state.user.actualRole})`);
    showToast(`Selamat datang, ${state.user.nama}!`);
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-shell').classList.add('active');
    renderApp();
});

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
                <p class="px-4 text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Keamanan & Admin</p>
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
        const matchSearch = p.nama.toLowerCase().includes(state.filters.peserta.search.toLowerCase()) || p.nik.includes(state.filters.peserta.search);
        const matchKat = state.filters.peserta.kategori === 'Semua' || p.kategori === state.filters.peserta.kategori;
        return matchSearch && matchKat;
    });

    return `
        <div class="card flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="filter-bar flex-1">
                <input type="text" id="filter-peserta-search" class="form-input" placeholder="Cari Nama, NIK..." value="${state.filters.peserta.search}">
                <select id="filter-peserta-kat" class="form-input" style="max-width: 12rem;">
                    <option value="Semua" ${state.filters.peserta.kategori === 'Semua' ? 'selected' : ''}>Semua Kategori</option>
                    <option value="Balita" ${state.filters.peserta.kategori === 'Balita' ? 'selected' : ''}>Balita</option>
                    <option value="Ibu Hamil" ${state.filters.peserta.kategori === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option>
                    <option value="Lansia" ${state.filters.peserta.kategori === 'Lansia' ? 'selected' : ''}>Lansia</option>
                </select>
            </div>
            ${!isReadOnly() ? `<button class="btn btn-primary" data-action="add-peserta">${icons.plus} Daftarkan Peserta</button>` : ''}
        </div>
        <div class="card p-0 overflow-x-auto">
            <table class="data-table">
                <thead><tr><th>No. Reg / NIK</th><th>Nama Lengkap</th><th>Kategori</th><th>Umur & Gender</th><th class="text-right">Aksi</th></tr></thead>
                <tbody>
                    ${filtered.length ? filtered.map(p => `
                        <tr>
                            <td><span class="font-bold text-slate-800 block">${p.no_registrasi}</span><span class="text-xs text-slate-400 font-mono">NIK: ${p.nik}</span></td>
                            <td class="font-bold text-slate-800">${p.nama}</td>
                            <td><span class="badge ${p.kategori === 'Balita' ? 'badge-rose' : p.kategori === 'Ibu Hamil' ? 'badge-emerald' : 'badge-blue'}">${p.kategori}</span></td>
                            <td><span class="block text-slate-800">${calculateAge(p.tanggal_lahir)}</span><span class="text-xs text-slate-400">${p.jenis_kelamin}</span></td>
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
                    `).join('') : '<tr><td colspan="5" class="text-center text-slate-400 italic p-8">Tidak ada data.</td></tr>'}
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
                <option value="Balita" ${state.filters.riwayat.kategori === 'Balita' ? 'selected' : ''}>Balita</option>
                <option value="Ibu Hamil" ${state.filters.riwayat.kategori === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option>
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
                            <td class="text-xs space-y-1"><div>BB: <b>${p.berat_badan} kg</b></div><div>TB: <b>${p.tinggi_badan} cm</b></div>${p.tekanan_darah ? `<div>TD: <b>${p.tekanan_darah}</b></div>` : ''}</td>
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
                <div class="form-group"><label class="form-label">Kategori</label><select id="filter-laporan-kat" class="form-input" style="width: 12rem;"><option value="Semua">Semua</option><option value="Balita" ${state.filters.laporan.kategori === 'Balita' ? 'selected' : ''}>Balita</option><option value="Ibu Hamil" ${state.filters.laporan.kategori === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option><option value="Lansia" ${state.filters.laporan.kategori === 'Lansia' ? 'selected' : ''}>Lansia</option></select></div>
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
    };
}

// --- PESERTA MODAL ---
function openPesertaModal(id = null) {
    const p = id ? state.pesertaList.find(x => x.id === id) : null;
    const html = `
        <div class="modal-header"><h3 class="text-lg font-black text-slate-800">${p ? 'Ubah' : 'Daftarkan'} Peserta</h3><button class="btn-icon" onclick="closeModal()">${icons.close}</button></div>
        <form id="form-peserta" style="display: flex; flex-direction: column; flex: 1; overflow: hidden;">
            <div class="modal-body" style="flex: 1; overflow-y: auto;">
                <div class="form-group"><label class="form-label">NIK (16 Digit)</label><input type="text" id="p-nik" class="form-input" maxlength="16" value="${p ? p.nik : ''}" required></div>
                <div class="form-group"><label class="form-label">No. KK</label><input type="text" id="p-kk" class="form-input" maxlength="16" value="${p ? p.no_kk : ''}" required></div>
            </div>
            <div class="form-group"><label class="form-label">Nama Lengkap</label><input type="text" id="p-nama" class="form-input" value="${p ? p.nama : ''}" required></div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group"><label class="form-label">Kategori</label><select id="p-kat" class="form-input"><option value="Balita" ${p?.kategori === 'Balita' ? 'selected' : ''}>Balita</option><option value="Ibu Hamil" ${p?.kategori === 'Ibu Hamil' ? 'selected' : ''}>Ibu Hamil</option><option value="Lansia" ${p?.kategori === 'Lansia' ? 'selected' : ''}>Lansia</option><option value="Remaja" ${p?.kategori === 'Remaja' ? 'selected' : ''}>Remaja</option><option value="Dewasa" ${p?.kategori === 'Dewasa' ? 'selected' : ''}>Dewasa</option></select></div>
                <div class="form-group"><label class="form-label">Gender</label><select id="p-gender" class="form-input"><option value="Laki-laki" ${p?.jenis_kelamin === 'Laki-laki' ? 'selected' : ''}>Laki-laki</option><option value="Perempuan" ${p?.jenis_kelamin === 'Perempuan' ? 'selected' : ''}>Perempuan</option></select></div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-group"><label class="form-label">Tanggal Lahir</label><input type="date" id="p-tgl" class="form-input" value="${p ? p.tanggal_lahir : ''}" required></div>
                <div class="form-group"><label class="form-label">No. HP</label><input type="text" id="p-hp" class="form-input" value="${p ? p.no_hp : ''}"></div>
            </div>
            <div class="form-group"><label class="form-label">Alamat</label><textarea id="p-alamat" class="form-input" rows="2">${p ? p.alamat : ''}</textarea></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn btn-primary">Simpan</button>
            </div>
        </form>
    `;
    openModal(html);
    document.getElementById('form-peserta').onsubmit = (e) => {
        e.preventDefault();
        const data = {
            nik: document.getElementById('p-nik').value,
            no_kk: document.getElementById('p-kk').value,
            nama: document.getElementById('p-nama').value,
            kategori: document.getElementById('p-kat').value,
            jenis_kelamin: document.getElementById('p-gender').value,
            tanggal_lahir: document.getElementById('p-tgl').value,
            no_hp: document.getElementById('p-hp').value,
            alamat: document.getElementById('p-alamat').value
        };
        if (data.nik.length !== 16 || data.no_kk.length !== 16) return showToast('NIK dan KK harus 16 digit!', 'error');
        
        if (p) {
            Object.assign(p, data);
            addAuditLog(`Update peserta: ${data.nama}`);
            showToast('Data diperbarui!');
        } else {
            const newId = `REG-${String(state.pesertaList.length + 1).padStart(3, '0')}`;
            state.pesertaList.push({ id: newId, no_registrasi: newId, ...data });
            addAuditLog(`Tambah peserta: ${data.nama}`);
            showToast('Peserta baru ditambahkan!');
        }
        closeModal();
        renderView();
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
                    <div class="form-group"><label class="form-label">Suhu (°C)</label><input type="number" step="0.1" id="pem-suhu" class="form-input" value="36.5"></div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="form-group"><label class="form-label">Tekanan Darah</label><input type="text" id="pem-td" class="form-input" placeholder="120/80"></div>
                    <div class="form-group"><label class="form-label">Nadi (/mnt)</label><input type="number" id="pem-nadi" class="form-input" value="80"></div>
                    <div class="form-group"><label class="form-label">Pernapasan</label><input type="number" id="pem-napas" class="form-input" value="20"></div>
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
            imt: document.getElementById('pem-imt').value, suhu: document.getElementById('pem-suhu').value,
            tekanan_darah: document.getElementById('pem-td').value, nadi: document.getElementById('pem-nadi').value, pernapasan: document.getElementById('pem-napas').value,
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
                <div class="grid grid-cols-3 gap-2 pt-2"><div>TD: <b>${p.tekanan_darah || '-'}</b></div><div>Suhu: <b>${p.suhu || '-'} °C</b></div><div>Nadi: <b>${p.nadi || '-'}</b></div></div>
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

// Initialize App
renderApp();
