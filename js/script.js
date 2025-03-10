document.addEventListener("DOMContentLoaded", function () {

  //show/hide mobile menu (mobile)
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuBtn = document.querySelector('.menu-btn');
  document.querySelectorAll('.js-btn-menu').forEach(function (item) {
    item.addEventListener('click', function () {
      if (document.body.classList.contains('_show-header-menu')) {
        document.body.classList.remove('_show-header-menu');
        mobileMenuBtn.classList.remove('_active');
        mobileMenu.classList.remove('_active');
      } else {
        document.body.classList.add('_show-header-menu');
        mobileMenuBtn.classList.add('_active');
        mobileMenu.classList.add('_active');
        window.scrollTo(0, 0)
      }
    })
  })

  //modal
  //get modal window ID from button, link
  document.querySelectorAll('[data-modal]').forEach(function (item) {
    item.addEventListener('click', function () {
      let modalId = this.getAttribute('href') || this.getAttribute('data-modal');
      if (!modalId) return;
      openModal(modalId.replace("#", ""));
    })
  })
  //show modal window by ID
  function openModal(modalId) {
    document.getElementById(modalId).classList.add('_active')
    document.body.classList.add('_show-modal');
  }
  //hide modal window by click
  document.querySelectorAll('.js-modal-hide').forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target.classList.contains('js-modal-hide')) {
        let modal = this.closest('.modal');
        let modalID = modal.getAttribute('id');
        closeModal(modalID);
      }
    })
  })
  //close modal window by id or all
  function closeModal(modalId) {
    if (modalId) {
      document.getElementById(modalId).classList.remove('_active')
    } else {
      document.querySelectorAll('.modal._active').forEach(function (item) {
        item.classList.remove('_active')
      })
    }
    document.body.classList.remove('_show-modal');
  }

  //tooltip
  let tooltipElem;
  document.addEventListener('mouseover', function (e) {
    let target = e.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) {
      return;
    }

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + target.offsetHeight + 5;
    }
    tooltipElem.style.top = top + 'px';
  });
  document.addEventListener('mouseout', function (e) {
    hideTooltip()
  });
  window.addEventListener('scroll', function (e) {
    hideTooltip()
  });
  function hideTooltip() {
    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }
  }

  //nice-select2
  if (document.getElementById('select-region')) {
    NiceSelect.bind(document.getElementById('select-region'));
  }


  //autoCompleteJS
  /*if (document.getElementById('autoComplete')) {
    const autoCompleteJS = new autoComplete({
      selector: '#autoComplete',
      threshold: 3,
      data: {
        src: ['окна пластиковые москва',
          'окна пластиковые москва2',
          'окна пластиковые москва3',
          'окна пластиковые москва4',
          'окна пластиковые москва5',
          'окна пластиковые москва6',
          'окна пластиковые москва7',
          'окна пластиковые москва8',
          'пример',
          'пример2',
          'пример3',
          'пример4',
          'пример5',
          'пример6',
          'пример7'],
        cache: true,
      },
      resultsList: {
        element: (list, data) => {
          if (!data.results.length) {
            const message = document.createElement('div');
            message.setAttribute('class', 'no_result');
            message.innerHTML = 'Не найдено результатов для "' + data.query + '"</span>';
            list.prepend(message);
          }
        },
        noResults: true,
        maxResults: 10
      },
      resultItem: {
        highlight: true
      },
      events: {
        input: {
          selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteJS.input.value = selection;
          },
          focus: (event) => {
            autoCompleteJS.start();
          }
        }
      }
    });
  }*/

});