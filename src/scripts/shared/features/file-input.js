export default function fileInput() {
    const fileInputs = document.querySelectorAll("input[type='file']");

    fileInputs.forEach(fileInput => {
        const inputLabelSpan = fileInput.previousElementSibling;
        const inputLabelSpanText = inputLabelSpan.textContent;

        fileInput.addEventListener("change", function() {
            let fileName = this.files[0].name;
            if (fileName) {
                inputLabelSpan.innerText = fileName;
                fileInput.classList.add("has-file");
            }
        });

        const clearButton = fileInput.closest(".input-wrapper").querySelector(".clear-input");
        clearButton.addEventListener("click", function() {
            fileInput.classList.remove("has-file");
            inputLabelSpan.textContent = inputLabelSpanText;
            fileInput.value = "";
        });
    });
}