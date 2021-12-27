class FVal {

    #formElement;
    #fieldTypes = ['input', 'textarea']

    constructor(formId) {
        const form = document.getElementById(formId);

        if (!form)
            throw new Error('Form ID invalid or does not exist.');

        this.#formElement = form;
        this.#formElement.setAttribute('novalidate', '');
        this.#formElement.addEventListener('submit', (event) => {
            event.preventDefault();

            const elements = this.#formElement.elements;
            const fieldTypes = this.#fieldTypes;

            for (let i = 0; i < elements.length; i++) {
                if (fieldTypes.indexOf(elements[i].nodeName.toLowerCase()) !== -1)
                    console.log(elements[i].nodeName);
            }
        });
    }
}
