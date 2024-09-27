const translations = {
    ru: {
        traps: "ловушек",
        play: "Получить сигнал",
        test: "ТЕСТ"
        // Добавьте другие переводы здесь
    },
    en: {
        traps: "traps",
        play: "Get signal",
        test: "TEST"
        // Добавьте другие переводы здесь
    },
    az: {
        traps: "1",
        play: "2",
        test: "3"
        // Добавьте другие переводы здесь
    },
    uz: {
        traps: "1",
        play: "2",
        test: "4"
        // Добавьте другие переводы здесь
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');

    if (!languageSelect) {
        console.error('Элемент выпадающего списка языков не найден!');
        return;
    }

    // Функция для обновления текста на странице
    function updateLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Переводы для языка "${lang}" не найдены.`);
            return;
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Ключ перевода "${key}" не найден для языка "${lang}".`);
            }
        });

        // Обновление атрибута lang у html для SEO и доступности
        document.documentElement.lang = lang;

        // Обновление заголовка страницы
        const titleElement = document.querySelector('title[data-i18n="title"]');
        if (titleElement && translations[lang]['title']) {
            titleElement.textContent = translations[lang]['title'];
        }
    }

    // Проверяем, есть ли сохранённый язык в localStorage
    const savedLanguage = localStorage.getItem('language') || 'ru';
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);

    // Обработчик изменения языка
    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        updateLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    });
});