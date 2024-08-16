document.addEventListener("DOMContentLoaded", function() {
    const circle = document.getElementById('colorCircle');
    let clickCount = 0;
    let color = getRandomColor();

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function darkenColor(color) {
        let r = parseInt(color.slice(1, 3), 16) - 16;
        let g = parseInt(color.slice(3, 5), 16) - 16;
        let b = parseInt(color.slice(5, 7), 16) - 16;
        r = r < 0 ? 0 : r;
        g = g < 0 ? 0 : g;
        b = b < 0 ? 0 : b;
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    circle.style.backgroundColor = color;

    circle.addEventListener('click', function() {
        if (clickCount >= 8) {
            circle.style.backgroundColor = '#000000';
        } else {
            color = darkenColor(color);
            circle.style.backgroundColor = color;
            clickCount++;
        }
    });
});
