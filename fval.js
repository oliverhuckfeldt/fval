class FVal {

    #formElement;

    constructor(formId) {
        const form = document.getElementById(formId);
        if (!form)
            throw new Error('Form ID invalid or does not exist.');
        this.#formElement = form;
    }
}
