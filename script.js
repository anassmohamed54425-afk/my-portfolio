document.addEventListener("DOMContentLoaded", () => {
    // حركة بسيطة وممتعة: كتابة النص تلقائياً (Typewriter) في العناوين
    const codeLine = document.querySelector(".code-line .string");
    const originalText = codeLine.textContent;
    codeLine.textContent = "";

    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            codeLine.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});