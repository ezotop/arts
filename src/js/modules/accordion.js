const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(itemsSelector);


    // Вариант 1
    // function hideItems() {
    //     btns.forEach(btn => {
    //         btn.classList.remove('active-style');
    //     });
    //     blocks.forEach(item => {
    //         item.classList.remove('show');
    //         item.classList.add('animated', 'fadeInUp', 'hide');
    //     });
    // }
    // hideItems();

    // btns.forEach((btn, i) => {
    //     btn.addEventListener('click', () => {
    //         // hideItems();
    //         btn.classList.toggle('active-style');
            
    //         if (btn.classList.contains('active-style')) {
    //             blocks[i].classList.remove('hide');
    //             blocks[i].classList.add('show');
    //         } else {
    //             blocks[i].classList.remove('show');
    //             blocks[i].classList.add('hide');
    //         }

            
    //     });
    // });



    // Вариант 2
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });



    // Вариант 3
    btns.forEach((btn, i) => {
        btn.addEventListener('click', function() {
            // this.classList.toggle('active-style');
            // this.nextElementSibling.classList.toggle('active-content');

            // if (this.classList.contains('active-style')) {
            //     this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'; //Высота контента внутри элемента + 80px на padding

            // } else {
            //     this.nextElementSibling.style.maxHeight = '0px';
            // }

            // Одновременно блоки не могут быть открыты:
            if (!this.classList.contains('active-style')) {
                btns.forEach(item => {
                    item.classList.remove('active-style');
                    item.nextElementSibling.classList.remove('active-content');
                    item.nextElementSibling.style.maxHeight = '0px';
                });
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.classList.toggle('active-style');
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
    

};

export default accordion;