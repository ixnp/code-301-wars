function validatePIN (pin) {
    var pattern =/ ^[0-9]{4}|^[0-9]{6}$/;
    
    return pattern.test(pin);
    }