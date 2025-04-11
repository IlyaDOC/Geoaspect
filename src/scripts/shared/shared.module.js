import inputClear from './features/input-clear.js';
import header from './components/header.component.js';
import showdown from './features/showdown.js';

export default function sharedModule() {
    inputClear();
    header();
}