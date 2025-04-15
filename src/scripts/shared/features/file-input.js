export default function fileInput() {
    const fileInputs = document.querySelectorAll('input[type=\'file\']');

    fileInputs.forEach(fileInput => {
        const inputLabel = fileInput.nextElementSibling;
        const inputLabelText = inputLabel.textContent;

        fileInput.addEventListener("change", function() {
            let fileName = this.files[0].name;
            if (fileName) {
                inputLabel.textContent = fileName;
                fileInput.classList.add("has-file");
            }
        });

        const clearButton = fileInput.closest('.input-wrapper').querySelector('.clear-input');
        clearButton.addEventListener("click", function() {
            fileInput.classList.remove("has-file");
            inputLabel.textContent = inputLabelText;
            fileInput.value = "";
        });
    });
}