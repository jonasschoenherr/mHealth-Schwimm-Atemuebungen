export default class PersistentStorage {

    constructor() {
    }

    #normalizeValue(value, source_name) {
        if (value === undefined) {
            value = null;
        }

        if (value !== null && !this.validate(value)) {
            console.warn("@" + source_name + " return value failed validation");
            value = null;
        }

        return value;
    }

    getDefaultValue() {
        return null;
    }

    validate(value) {
        return true;
    }

    // final
    set(new_value) {
        new_value = this.#normalizeValue(new_value);
        this.setImpl(new_value);
    }

    setImpl() {}

    // final
    get() {
        let storedValue = this.getImpl();

        storedValue = this.#normalizeValue(storedValue, "@PersistantState::getImpl");

        if (storedValue !== null) {
            return storedValue;
        }

        storedValue = this.getDefaultValue();
        storedValue = this.#normalizeValue(storedValue, "@PersistantState::getDefaultValue return value failed validation");

        if (storedValue === null) {
            return null;
        }

        this.setImpl(storedValue);

        return storedValue;
    }

    getImpl() {
        return null;
    }

}


