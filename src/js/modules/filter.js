const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    function filter(btnClass, markClass) {
        const btn = menu.querySelector(btnClass),
              mark = wrapper.querySelectorAll(markClass);

        const typeFilter = (markType) => {
            markAll.forEach(item => {
                item.classList.remove('animated', 'fadeIn', 'show');
                item.classList.add('hide');
            });

            no.classList.remove('animated', 'fadeIn', 'show');
            no.classList.add('hide');

            if (markType.length > 0) {
                markType.forEach(item => {
                    item.classList.remove('hide');
                    item.classList.add('animated', 'fadeIn', 'show');
                });
            } else {
                no.classList.remove('hide');
                no.classList.add('animated', 'fadeIn', 'show');
            }
        };

        btn.addEventListener('click', () => {
            typeFilter(mark);
        });

        menu.addEventListener('click', (e) => {
            let target = e.target;
    
            if (target && target.tagName == "LI") {
                items.forEach(btn => btn.classList.remove('active'));
                target.classList.add('active');
            }
        });
    }

    filter('.all', '.all');
    filter('.lovers', '.lovers');
    filter('.chef', '.chef');
    filter('.girl', '.girl');
    filter('.guy', '.guy');
    filter('.grandmother');
    filter('.granddad');
};

export default filter;