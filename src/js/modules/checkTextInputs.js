const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(item => {
        item.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/gi)) {
                e.preventDefault();
                e.key.replace(/[a-z]/gi, '');
            }
        });
        item.addEventListener('input', (e) => {
            if (item.value.match(/[a-z]/gi)) {
                item.value = '';
            }
        });
    });

};

export default checkTextInputs;