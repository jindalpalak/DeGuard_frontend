export const validateRequiredFields = (formData, requiredFields) => {
    const emptyFields = [];

    if (!formData) {
        return requiredFields;
    }

    requiredFields.forEach((field) => {
        if (!formData[field]) {
            emptyFields.push(field);
        }
    });

    return emptyFields;
};
