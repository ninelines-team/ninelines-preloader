# ninelines-preloader

Библиотека для создания прелодера на сайте.

## Установка

### NPM

```
npm install --save ninelines-preloader
```

### Использование:

Подключаем стили:

```scss
@import "node_modules/ninelines-preloader/src/ninelines-preloader";
```

Подключаем скрипт:

```js
import {Preloader} from 'ninelines-preloader';
```

Инициализируем:

```js
Preloader.init()
    .then(() => {
        document.querySelector('.preloader').style.display = 'none';
        showPage();
    });
```

По умолчанию для прелоадера установлено минимальное время отображения, равное 3 секундам. Этот параметр можно изменить:

```js
Preloader.init(5000)
    .then(() => {
        // ...
    });
```

Библиотека поддерживает предварительную загрузку изображений:

```js
// Загружаем одно изображение в момент отображение прелоадера
Preloader.init('/images/background.jpg')
    .then(() => {
        // ...
    });

// Можно изменить минимальное время отображения
Preloader.init('/images/background.jpg', 5000)
    .then(() => {
        // ...
    });

// Или загрузить сразу несколько изображений
Preloader.init([
    '/images/image-1.jpg',
    '/images/image-2.jpg',
    '/images/image-3.jpg',
])
    .then(() => {
        // ...
    });
```

### Нюансы работы прелоадера в Safari

Если изначально блоки с изображениями скрыты через CSS (т.е. имеют стиль `display: none`), то при *появлении* этих
блоков, Safari еще раз загрузит эти изображения.

Чтобы этого избежать, следует скрывать блоки не через `display: none`, а с помощью позиционирования за пределами экрана.
