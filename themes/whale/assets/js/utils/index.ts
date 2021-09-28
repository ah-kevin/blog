export const scrollToDest = (pos, time) => {
    if (pos < 0 || time < 0) {
        return;
    }

    const currentPos = window.scrollY || window.screenTop;
    if (currentPos > pos) pos = pos - 70;

    if ('CSS' in window && CSS.supports('scroll-behavior', 'smooth')) {
        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        });
        return;
    }

    let start = null;
    time = time || 500;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        if (currentPos < pos) {
            const progress = currentTime - start;
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        } else {
            const progress = currentTime - start;
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        }
    });
};
