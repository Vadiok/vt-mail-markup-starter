# vtMailMarkupStarter

Стартовый пакет для верстки писем. Исходники писем компилируются из Pug и SCSS в HTML файл с инлайновыми стилями.


## Установка

```bash
git clone https://github.com/Vadiok/vt-mail-markup-starter
```
```bash
npm i
```
или
```bash
yarn
```


## Использование

1. Создать папку в директории ``/source/``

2. Создать в созданной папке файл разметки ``index.pug`` и файл
стилей ``style.scss``

3. Можно наследовать шаблон письма из ``/source/extends/base.pug`` и
подключить сброс и задание некоторых базовых стилей из
``/source/extends/_reset.scss``. Пример подключения можно посмотреть
в ``/source/mail-example/``

4. Слежение за изменениями осуществляется командой ``gulp``.
Сгенерированный файл будет расположен в
``/dist/{созданная-папка}/{имя-исходного-файла}.html``


## Особенности верстки писем

Некоторые стили нельзя задавать, т.к. некоторые или большинство
основных браузерных клиентов такие стили удаляют. К таким стилям
относятся:

* position
* отрицательные отступы

Верстать проще, используя следующие теги ``div``, ``span``, ``img``,
``a``, ``table``, ``tr``, ``td``. Все остальные особенности лучше
задавать стилями классов.