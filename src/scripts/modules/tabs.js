export default function initTabs(selector) {
    const tabsContainers = document.querySelectorAll(selector);
    tabsContainers.forEach((container) => {
        const tabs = container.querySelectorAll('[data-tab]');
        const contents = container.querySelectorAll('[data-content]');

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                tabs.forEach((t) => t.classList.remove('active'));
                contents.forEach((c) => c.classList.remove('active'));
                tab.classList.add('active');
                container.querySelector(`[data-content="${target}"]`).classList.add('active');
            });
        });
    });
}
