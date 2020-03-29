Это тестовый пакет Table.

Для установки - npm i table-pb.
Подключить - import Table from 'table-pb/dist/index';

Для запуска демонстрации нужно перейти в папку example выполнить npm i & npm start.

Формат данных

const headers = [
    {title: 'Первая'},
    {title: 'Вторая'},
    {title: 'Третья'},
    {title: 'Четвертая'},
];

const data = [
    {id: '1', label: 'label 1', description: 'description 1', date: '1.1.1.1', info: 'info 1'},
    {id: '2', label: 'label 2', description: 'description 2', date: '2.2.2.2', info: 'info 2'},
    {id: '3', label: 'label 3', description: 'description 3', date: '3.3.3.3', info: 'info 3'},
    {id: '4', label: 'label 4', description: 'description 4', date: '4.4.4.4', info: 'info 4'},
];

API

headers - Это хедер таблицы
data - Данные для рендера таблицы
handleAdd - Функция добавления строки
handleRemove - Функция удаления строки
uniqId - Уникальный идентификатор
tableClass - Класс для таблицы
fieldClass - Класс для полей
addButtonClass - Класс для кнопки добавления
remButtonClass - Класс для кнопки удаления
addButtonTitle - Заголовок для кнопки добавления
remButtonTitle - Заголовок для кнопки удаления