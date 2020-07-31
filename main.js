document.forms[`picture-scale`].addEventListener('change', () => {

	console.log(`Найдём все формы на данной странице с помощью document.forms`, document.forms);

	console.log(`Найдём Форму с id = "picture-scale" с помощью document.forms[\`picture-scale\`]`);
	console.dir(document.forms[`picture-scale`]);
	console.log(`^^^^^^^^^^^^^^^^^\n\nВ этом объекте нет ключа "scale" на первом уровне вложенности, но как мы тогда можем получить доступ к нему через "document.forms[\`picture-scale\`].scale"?\n\n`);

	
	console.log(`Выведем document.forms[\`picture-scale\`].scale в консоль`);
	console.dir(document.forms[`picture-scale`].scale);
	console.log(`В .....scale.value будет значение выбранной radio кнопки`);
	console.dir(document.forms[`picture-scale`].scale.value);
});