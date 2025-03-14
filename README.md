## Опис
Даний проєкт було реалізовано згідно з технічним завданням, у якому зазначено використання HTML, CSS (з можливістю SCSS) та JavaScript. Основна мета - забезпечити просту та гнучку структуру для верстки, а також зручне розширення функціоналу в майбутньому.

## Опис структури проєкту

Проєкт має чітку модульну структуру, що полегшує підтримку, масштабування та рефакторинг коду. Основні папки та файли згруповані за призначенням.

### 1. **img/** (Зображення та медіа-файли)
   - підпапки відповідають за конкретні розділи сайту, щоб уникнути хаосу у файловій системі;
   - **hero-bg.png, logo.svg** — головне фонове зображення та логотип.

### 2. **scripts/** (JS-логіка проєкту)
   - **animations.js** — анімації на сторінці;
   - **config.js** — глобальні змінні та налаштування;
   - **opinions.js** — обробка секції "Відгуки";
   - **script.js** — головний сценарій, що імпортує всі інші скрипти;
   - **speakers.js** — обробка секції зі спікерами;
   - **video.js** — управління відеоплеєром.

### 3. **styles/** (SCSS-стилі проєкту)
   - **base/** — основні стилі (шрифти, міксіни, змінні);
   - **components/** — окремі компоненти (кнопки, картки, модальні вікна, меню тощо);
   - **layout/** — стилі для секцій сайту (хедер, футер, секції контенту);
   - **style.scss** — головний SCSS-файл, що збирає всі стилі.

#### Використання SCSS-модулів
SCSS-стилі розбиті за методологією **SMACSS**:
   - `@forward` у стилях дозволяє уникати дублювання та зробити код більш організованим;
   - `mixins.scss` містить корисні міксіни (анімації, адаптивність);
   - `variables.scss` зберігає глобальні змінні (кольори, типографіка, брейкпоінти).

### 4. **index.html** (Головна HTML-сторінка)
   - використовує підключені стилі та скрипти.
     
Такий підхід забезпечує чистоту коду та швидку навігацію по проєкту.

## Технології
- **HTML** - використано для розмітки сторінки;
- **CSS / SCSS** - застосовано SCSS для полегшення стилізації та підтримки;
- **JavaScript** - реалізація інтерактивності та логіки роботи.

## Рішення щодо збірки
- раніше використовувалася збірка через Gulp, проте через оновлення (зокрема SCSS) без додаткових налаштуван;
- використання Vite потребувало б додаткового часу на налаштування, тому було вирішено виконувати мініфікацію напряму через Netlify.

## Альтернативні підходи
Зазвичай у своїх проектах використовую **Next.js (TypeScript)** та **React (React Native)**, що забезпечує зручніший підхід до розробки та підтримки коду. Проте, у цьому випадку використано plain HTML, CSS та JS, оскільки це відповідало вимогам ТЗ та забезпечувало простоту реалізації.

## Висновки
Обраний підхід дозволив швидко та ефективно реалізувати проект, відповідно до ТЗ, з урахуванням оптимального використання часу та ресурсів.
