const drpdwn = document.getElementById('cats-drp');
const catsBtn = document.getElementById('cats-btn');

document.addEventListener('DOMContentLoaded', () => {
    catsBtn.addEventListener('mouseover', () => {
        const rect = catsBtn.getBoundingClientRect();
        drpdwn.style.display = 'flex';
        drpdwn.style.position = 'absolute';
        drpdwn.style.top = rect.bottom + 'px';
        drpdwn.style.left = rect.left + 'px';
    });

    drpdwn.addEventListener('mouseover', () => {
        const rect = catsBtn.getBoundingClientRect();
        drpdwn.style.display = 'flex';
        drpdwn.style.position = 'absolute';
        drpdwn.style.top = rect.bottom + 'px';
        drpdwn.style.left = rect.left + 'px';
    });
    
    catsBtn.addEventListener('mouseout', () => {
        drpdwn.style.display = 'none';
    });

    drpdwn.addEventListener('mouseout', () => {
        drpdwn.style.display = 'none';
    });
    
    catsBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });
});