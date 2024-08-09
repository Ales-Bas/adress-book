
export default async function VersionPage() {

    return (

        <div className="flex flex-col items-center justify-center container py-10">
            <h1 className="text-2xl font-bold">Изменения версий</h1>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.3.8</h2>
                <ul>
                    <li className="py-2">
                        1. Корректировка отображения колонки таблицы на главной странице
                        <div className="">Изменение ширины столбцов.</div>
                    </li>
                    <li className="py-2">
                        2. Изменение функционала главной страницы
                        <div className="">Боковой селектор изменен на навигационное меню.
                        </div>
                        <div>
                            Разработка навигационного меню,
                            настройка и доработка бокового селектора на остальных странницах.
                        </div>
                    </li>
                    <li className="py-2">
                        3. Работа с базой данных
                        <div className="">Добавление и корректировка данных.</div>
                    </li>
                </ul>
            </div>
            <div className="justify-start w-full mx-32 py-5">
                <h2 className="flex items-center justify-center font-bold py-2">Версия сайта 1.3.7</h2>
                <ul>
                    <li className="py-2">
                        1. Корректировка отображения колонки таблицы на главной странице
                        <div className="">Изменение ширины столбцов, для отображения таблицы без горизонтального скрола.</div>
                    </li>
                    <li className="py-2">
                        2. Доработка бокового селектора компаний
                        <div className="">При выборе пункта Все организации, обнуление открытого меню.</div>
                    </li>
                    <li className="py-2">
                        3. Добавлена страница версионности сайта
                        <div className="">Изменения навигационного меню страницы администратора, верстка страницы, настройка роутинга</div>
                    </li>
                </ul>
            </div>
        </div>

    )
}