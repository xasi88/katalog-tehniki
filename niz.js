// Нижний бар (телефон и планшет). Кнопки «Разделы» и «Контакты» открывают панель снизу.
// Общий для главной и страниц моделей. Разметку бара пишут index.html и собрать-страницы.py.
(function () {
  document.querySelectorAll('[data-list]').forEach(function (k) {
    var d = document.getElementById(k.dataset.list);
    if (!d || !d.showModal) return;
    k.addEventListener('click', function () {
      d.showModal();
      k.setAttribute('aria-expanded', 'true');
    });
    d.addEventListener('close', function () { k.setAttribute('aria-expanded', 'false'); });
  });
  document.querySelectorAll('dialog.list').forEach(function (d) {
    d.addEventListener('click', function (e) {
      // Нажали на затемнение вокруг панели, на крестик или на ссылку: панель закрывается
      if (e.target === d || e.target.closest('[data-zakryt], a')) d.close();
    });
  });
})();
