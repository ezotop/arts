import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
          

    // Стилями
    // cards.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(item => {
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.classList.add('hide');
    // });

    //Сервером
    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
            .then(res => {
                createCards(res);
                this.classList.add('hide');
            })
            .catch(error => btn.textContent = 'Упс... Что-то пошло не так');
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => { //Сразу же деструктурировали item, поскольку это обьект
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt=""style>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).append(card);
        });
    }
};

export default showMoreStyles;