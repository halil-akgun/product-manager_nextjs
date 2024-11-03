export const getYupErrors = (errors) => {
    const errObj = {};
    errors.forEach((err) => {
        errObj[err.path] = err.message
    })
    return {
        message: null,
        errors: errObj
    }
};

export const convertFormDataToObject = (formData) =>
    Object.fromEntries(formData.entries());