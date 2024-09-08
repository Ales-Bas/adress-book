
export default async function VersionPage() {

    return (

        <div className="flex flex-col items-center justify-center container py-10">
            <h1 className="text-2xl font-bold">Изменения версий</h1>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.3.9</h2>
                <ul>
                    <li className="py-2">
                        1. Добавлена маска телефона в поиск по телефону
                        <div className="ml-4">Позволяет приводить в нужный поисковый формат вводимый или вставляемый номер телефона.</div>
                    </li>
                    <li className="py-2">
                        2. Корректировка запроса для отображения сотрудиков по алфавиту
                        <div className="ml-4">При навигации по меню главной страницы, сотрудники отображаються по алфавиту по умолчанию.
                        </div>
                    </li>
                    <li className="py-2">
                        3. Работа с базой данных
                        <div className="ml-4">Добавление и корректировка данных.</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.3.8</h2>
                <ul>
                    <li className="py-2">
                        1. Корректировка отображения колонки таблицы на главной странице
                        <div className="ml-4">Изменение ширины столбцов.</div>
                    </li>
                    <li className="py-2">
                        2. Изменение главной страницы
                        <div className="ml-4">Боковой селектор изменен на навигационное меню.
                        </div>
                        <div className="ml-4">
                            Разработка навигационного меню,
                            настройка и доработка бокового селектора на остальных странницах.
                        </div>
                    </li>
                    <li className="py-2">
                        3. Работа с базой данных
                        <div className="ml-4">Добавление и корректировка данных.</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.3.7</h2>
                <ul>
                    <li className="py-2">
                        1. Корректировка отображения колонки таблицы на главной странице
                        <div className="ml-4">Изменение ширины столбцов, для отображения таблицы без горизонтального скрола.</div>
                    </li>
                    <li className="py-2">
                        2. Доработка бокового селектора компаний
                        <div className="ml-4">При выборе пункта Все организации, обнуление открытого меню.</div>
                    </li>
                    <li className="py-2">
                        3. Добавлена страница версионности сайта
                        <div className="ml-4">Изменения навигационного меню страницы администратора, верстка страницы, настройка роутинга</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.3.6</h2>
                <ul>
                    <li className="py-2">
                        1. Изменено время аутентификации на 1 час
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.3.5</h2>
                <ul>
                    <li className="py-2">
                        1. Добавлен функционал экспорта в excel файл на главной странице
                        <div className="ml-4">Сохранение xlsx файла по нажатию кнопки.</div>
                    </li>
                    <li className="py-2">
                        2. Доработка панели администратора
                        <div className="ml-4">Добавлен функционал импорта из excel файла.</div>
                        <div className="ml-4">Добавлен режим скрытия записи для отображения на главной странице.</div>
                        <div className="ml-4">Добавлено навигационное меню для панели администратора.</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.2.4</h2>
                <ul>
                    <li className="py-2">
                        1. Заполнение базы данных
                        <div className="ml-4">Добавлены записидля КСК, Сафари, КСБ.</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.2.3</h2>
                <ul>
                    <li className="py-2">
                        1. Добавлена логика выбора бокового селектора.
                        <div className="ml-4">Добавлена колонка Юр. Лицо и Департамент в базу данных.</div>
                        <div className="ml-4">Изменение логики отображения таблицы на главной странице.</div>
                    </li>
                    <li className="py-2">
                        2. Правки на странице печатной формы
                        <div className="ml-4">Изменен шрифт на Arial.</div>
                        <div className="ml-4">Добавлен логотип.</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.1.2</h2>
                <ul>
                    <li className="py-2">
                        1. Добавлена админ панель
                        <div className="ml-4">Добавлены страницы отображения записей сотрудников адресной книги, компаний, департаментов.</div>
                        <div className="ml-4">Добавлен функционал работы с записями базы данных (формы добавления и редактирования пользователей,
                            записей в адресную книгу, добавления компаний и отделов компаний).</div>
                        <div className="ml-4">Добавлена логика авторизации для администратора.</div>
                    </li>
                    <li className="py-2">
                        2. Изменена схема регистрации пользователей
                        <div className="ml-4">Учетные записи пользователей добавляются только админом.</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.0.1</h2>
                <ul>
                    <li className="py-2">
                        1. Размещен логотип
                    </li>
                    <li className="py-2">
                        2. Добавлен поиск по почте и телефону
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.0.0</h2>
                <ul>
                    <li className="py-2">
                        1. Развертывание инфраструктуры проекта на сервере
                    </li>
                    <li className="py-2">
                        2. Деплой приложения
                    </li>
                    <li className="py-2">
                        3. Подключение базы данных
                    </li>
                    <li className="py-2">
                        3. Настройка NGINX
                    </li>
                    <li className="py-2">
                        3. Настройка аутентификации
                    </li>
                </ul>
            </div>
        </div>

    )
}