function showPreloader() {
    document.getElementById('preloader').style.display = 'flex';
    document.documentElement.classList.add('overflow-hidden'); // Prevent scrolling on the <html> element
}

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('opacity-0', 'transition-opacity', 'duration-1000'); // Fade-out effect

    setTimeout(() => {
        preloader.style.display = 'none'; // Hide it after fade-out
        document.documentElement.classList.remove('overflow-hidden'); // Restore scrolling
    }, 1000); // Match the transition duration
}

window.onload = function() {
    setTimeout(hidePreloader, 1500); // Wait 500ms before starting to hide
};

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    const navbar_navi = document.getElementById('navbar_navi');
    const menuItems = document.querySelectorAll('#menu li');

    let isMenuOpen = false;

    menuButton.addEventListener('click', toggleMenu);

    // Add event listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Close the menu and spin the icon back
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    function toggleMenu() {
        menuButton.classList.add('spin');

        setTimeout(() => {
            menuButton.classList.remove('spin');
        }, 200);

        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="3" x2="21" y2="21"></line>
                    <line x1="3" y1="21" x2="21" y2="3"></line>
                </svg>`; // Close icon SVG
            navbar.classList.remove('h-14');
            navbar.classList.add('h-auto');
            menu.classList.remove('hidden');
            navbar.classList.add('expanded');
            navbar.classList.remove('unexpanded');
            menu.classList.add('my-4');
            menu.classList.add('overflow-y-scroll');
            menu.classList.add('h-40');
            navbar_navi.classList.add('mt-4');
        } else {
            menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>`; // Menu icon SVG
            navbar.classList.remove('expanded');
            navbar.classList.add('unexpanded');

            setTimeout(() => {
                menu.classList.add('hidden');
                navbar.classList.add('h-14');
                navbar.classList.remove('h-auto');
                menu.classList.remove('my-4');
                navbar_navi.classList.remove('mt-4');
                menu.classList.remove('overflow-y-scroll');
                menu.classList.remove('h-40');
            }, 500);
        }
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992 && isMenuOpen || !isMenuOpen) {
            navbar.classList.remove('h-auto');
            navbar.classList.add('h-14');
            isMenuOpen = false;
            menu.classList.add('hidden');
            menu.classList.remove('my-4');
            navbar_navi.classList.remove('mt-4');
            menu.classList.remove('overflow-y-scroll');
            menu.classList.remove('h-40');
            navbar.classList.remove('expanded', 'unexpanded');
            menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>`; // Menu icon SVG
        }
    });
});

