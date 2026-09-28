document.addEventListener('DOMContentLoaded', () => {
    const levelA = document.getElementById('a');
    const levelB = document.getElementById('b');
    const output = document.getElementById('levvel');
    const image = document.getElementById('toggleImage');
    const hoverImage = document.getElementById('hoverImage');
    const wordInput = document.getElementById('wordInput');
    const letterCount = document.getElementById('letterCount');
    const plusBtn = document.getElementById('plusBtn');
    const minusBtn = document.getElementById('minusBtn');
    const numberCount = document.getElementById('numberCount');
    const colorText = document.getElementById('colorText');
    const images = ['img/img1.png', 'img/img2.png', 'img/img1.png'];
    const colors = ['#8b5cf6', '#22c55e', '#f59e0b', '#ef4444', '#38bdf8'];
    let currentIndex = 0;
    let numberValue = 0;
    let colorIndex = 0;

    const updateDisplay = () => {
        output.textContent = `${levelA.value} / ${levelB.value}`;
    };

    const updateLetterCount = () => {
        const word = wordInput.value;
        const count = word.length;
        letterCount.textContent = count;
    };

    const updateNumber = () => {
        numberCount.textContent = numberValue;
    };

    levelA.addEventListener('change', () => {
        levelB.value = levelA.value;
        updateDisplay();
    });

    levelB.addEventListener('change', () => {
        levelA.value = levelB.value;
        updateDisplay();
    });

    image.addEventListener('click', () => {
        image.classList.remove('is-spinning');
        void image.offsetWidth;
        image.classList.add('is-spinning');

        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];

        setTimeout(() => {
            image.classList.remove('is-spinning');
        }, 550);
    });

    hoverImage.addEventListener('mouseenter', () => {
        hoverImage.src = 'img/img4.png';
    });

    hoverImage.addEventListener('mouseleave', () => {
        hoverImage.src = 'img/img3.png';
    });

    wordInput.addEventListener('input', updateLetterCount);

    plusBtn.addEventListener('click', () => {
        numberValue += 1;
        updateNumber();
    });

    minusBtn.addEventListener('click', () => {
        numberValue -= 1;
        updateNumber();
    });

    colorText.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        colorText.style.color = colors[colorIndex];
    });

    updateDisplay();
    updateLetterCount();
    updateNumber();
});
