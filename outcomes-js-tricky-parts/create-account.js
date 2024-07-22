function createAccount(pin, amount) {
    return {
        checkBalance(enteredPin) {
            if (enteredPin !== pin) {
                return 'Invalid PIN'
            } else {
                return `$(amount)`
            }
        },

        deposit(enteredPin, depositAmount) {
            if (enteredPin !== pin) {
                return 'Invalid PIN'
            } else {
                amount += depositAmount;
            }
            return `Current balance: $(amount)`
        },

        withdraw(withdrawlAmount) {
            if (enteredPin !== pin) {
                return 'Invalid PIN'
            } else {
                if (amount > withdrawlAmount) {
                    amount -= withdrawlAmount;
                }
            }
        },

        changePin(newPin) {
            if (enteredPin !== pin) {
                return 'Invalid PIN'
            } else {
                pin = newPin
            }
        }
    
    }
}

module.exports = { createAccount };
