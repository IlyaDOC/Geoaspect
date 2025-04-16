import inputClear from './features/input-clear.js';
import header from './components/header.component.js';
import fileInput from './features/file-input.js';
import CustomSelectComponent from './components/custom-select.component.js';

export default function sharedModule() {
    inputClear();
    header();
    fileInput();
    new CustomSelectComponent();
}