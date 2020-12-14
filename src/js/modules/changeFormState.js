const changeFormState = (state) => {
    const sizeBlock = document.querySelectorAll('#size');

    function bindActionToElems(event, elem, prop) { //prop - свойство, которое записываем в обьект

        elem.forEach((item, i) => {   
            item.addEventListener(event, () => {
                state[prop] = item.value;
            });
        });
    }

    bindActionToElems('change', sizeBlock, 'size');
};

export default changeFormState;