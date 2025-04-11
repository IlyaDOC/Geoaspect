import { Fancybox } from '@fancyapps/ui';

export default function initFancybox() {
    // Присваиваем Fancybox глобальной переменной
    window.Fancybox = Fancybox;

    const fancyboxOptions = {
        dragToClose: false,
        autoFocus: false,
        compact: false,
        l10n: {
            CLOSE: 'Закрыть',
            NEXT: 'Следующий',
            PREV: 'Предыдущий',
            MODAL: 'Вы можете закрыть это модальное окно, нажав клавишу ESC'
        }
    };

    Fancybox.bind('[data-fancybox]', fancyboxOptions);

    // Место для кода
}
