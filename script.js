function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
document.addEventListener('DOMContentLoaded', () => {
    const title2 = document.querySelector('.title-2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5  // Adjust this value to determine when the animation triggers
    });

    if (title2) {
        observer.observe(title2);
    }
});