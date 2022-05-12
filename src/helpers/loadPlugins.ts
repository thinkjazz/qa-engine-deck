export const loadPlugins = (filenames: Array<string>):void => {
  const requirePlugin = require.context("@/plugins", false, /\.js$/);
  // Создайте карту объектов, чтобы избежать вложенного цикла для проверки
  // каждого передаваемого файла на соответствие файлам, найденным require.context
  let fileMap = {};
  // Перебираем найденные файлы и добавляем их в fileMap
  // Удалите префикс './', чтобы мы могли сопоставить найденные имена файлов с именами файлов плагинов, которые мы хотим импортировать
  for (const filename of requirePlugin.keys()) {
    fileMap[filename.replace("./", "")] = true;
  }

  // Перебираем плагины, которые мы хотим импортировать
  for (const filename of filenames) {
    const filenameWithExt = `${filename}.js`;
    // Соедините префикс './' с именем файла и импортируйте плагин
    if (Object.prototype.hasOwnProperty.call(fileMap, filenameWithExt)) {
      requirePlugin(`./${filenameWithExt}`);
    } else {
      // Выброс ошибки, если у нас нет совпадений
      throw new Error(
        `No plugin found for ${filename}. Did you spell the plugin filename correctly?`
      );
    }
  }
};
