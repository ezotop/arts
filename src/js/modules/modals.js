function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector),
          gift = document.querySelector('.fixed-gift');

    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
    gift.style.right = '2rem';
}

const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelectorAll(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = getScrollWidth(),
              gift = document.querySelector('.fixed-gift');

        function openModal(modalSelector, timer) {
            const modal = document.querySelector(modalSelector);

            modal.classList.remove('hide');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            gift.style.right = `calc(2rem + ${scroll}px`;
        }

        function closeAllModals() {
            windows.forEach(item => {
                item.classList.remove('show');
                item.classList.add('hide');
                item.classList.add('animated', 'fadeIn');
            });
        }
        closeAllModals();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if(destroy) {
                    item.classList.add('hide');
                }

                closeAllModals();
                openModal(modalSelector);
            });
        });

        modal.addEventListener('click', (e) => {
            if ((e.target && e.target === modal) ||
            (e.target && e.target.classList.contains(closeSelector.slice(1)))) {
                closeModal(modalSelector);
            }
        });
        
        function getScrollWidth() {
            let div = document.createElement('div');
            div.style.cssText = `
                width: 50px;
                height: 50px;
                overflow-y: scroll;
                visability: hidden;
            `;
            document.body.append(div);

            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }

        function showModalByTime(selector, time) {
            setTimeout(function() {
                let display;

                windows.forEach(item => {
                    // if (getComputedStyle(item).display !== 'none') {
                    //     display = 'block';
                    // }
                    // if (!display) {
                        // document.querySelector(selector).style.display = 'block';
                        // document.body.style.overflow = 'hidden';
                        // document.body.style.marginRight = `${scroll}px`;
                    // }

                    // if (item.classList.contains('show')) { //Изначально, пока триггеры не нажатые, show и hide на странице нету, поэтому display остаётся false
                    //     display = 'block';
                    // }
                    // if (!display) { //Если display НЕ false (НЕ пустой)
                    //     openModal(selector);
                    // }

                    if (!btnPressed) {
                        openModal(selector);
                    }
                });
            }, time);
        }

        //showModalByTime('.popup-consultation', 5000);

        function showModalByScroll(selector) {
            window.addEventListener('scroll', () => {
                if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                    openModal(selector);
                }
            });
        }

        showModalByScroll('.popup-gift');
    }
    
    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
};

export default modals;