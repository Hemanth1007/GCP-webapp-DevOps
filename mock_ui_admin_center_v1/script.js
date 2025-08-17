document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('statsCanvas');
    if (!canvas.getContext) return;
    const ctx = canvas.getContext('2d');

    const data = [120, 90, 180, 75, 130];
    const barWidth = 50;
    const gap = 20;

    data.forEach((value, index) => {
        const x = index * (barWidth + gap);
        const y = canvas.height - value;
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(x, y, barWidth, value);
    });
});
