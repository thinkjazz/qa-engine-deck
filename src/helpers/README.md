Это общий каталог во многих фреймворках для базовых функций ввода-вывода, которые можно повторно использовать в рамках проекта. Как правило, их легко тестировать, и обычно они используются более одного раза. Мне нравится начинать с одного `index.js` файла, а затем, по мере роста помощников, разбивать их на более сгруппированные файлы, такие как `https.js`, `cache.js`, `time.js`, и т. д. Все в этом каталоге можно просто импортировать и использовать по запросу, а если функция никогда не используется в все это легко вытряхивается из комплекта поставки.