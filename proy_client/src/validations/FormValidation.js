

export function minLengthValidation(inputData, minLength) {
    const { value } = inputData;
    removeClassErrorSucces(inputData);
    if(value.length >= minLength) {
        inputData.classList.add("success");
        return true;
    } else {
        return false;
    }
}

export function emailValidation(inputData) {

    const emailValid = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const { value } = inputData;
    removeClassErrorSucces(inputData);
    const resultValidation = emailValid.test(value);
    if(resultValidation) {
        inputData.classList.add("success");
        return true;
    } else {
        inputData.classList.add("error");
        return false;
    }
    
}

function removeClassErrorSucces(inputData) {
    inputData.classList.remove("success");
    inputData.classList.remove("error");
}