document.addEventListener('DOMContentLoaded', () => {
    // --- DRAWER (İLETİŞİM PANELİ) YÖNETİMİ ---
    const contactTriggers = document.querySelectorAll('.contact-trigger');
    const drawerContainer = document.getElementById('drawerContainer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');

    const openDrawer = (e) => {
        if (e) e.preventDefault();
        drawerContainer.classList.add('open');
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        drawerContainer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    contactTriggers.forEach(btn => btn.addEventListener('click', openDrawer));
    drawerCloseBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    // ESC Tuşu ile kapama
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
});

// --- PROJE DETAY AÇMA/KAPAMA (VIEW PROJECT) ---
function toggleProject(id) {
    const panel = document.getElementById(`detail-${id}`);
    if (!panel) return;

    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        // Tüm panelleri kapatıp sadece tıklananı açabiliriz (isteğe bağlı)
        // document.querySelectorAll('.project-detail-panel').forEach(p => p.style.display = 'none');
        panel.style.display = 'block';
    }
}
<script>
let index = 0;

setInterval(() => {
    const slider = document.getElementById("serviceSlider");
    index++;

    if (index > 5) index = 0;

    slider.style.transform = `translateY(-${index * 40}px)`;
}, 2000);
</script>