const digits = "0123456789";
const otpExpirationTime = 5 * 60 * 1000; // 5 minutes in milliseconds

function generateOTP() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    const expiration = Date.now() + otpExpirationTime;
    return { code: otp, expiration: expiration };
}

function isOTPValid(otp) {
    return otp.expiration >= Date.now();
}

function generateAndDisplayOTP() {
    const otpObj = generateOTP();
    const otpDisplay = document.getElementById("otp-display");
    otpDisplay.innerText = `Your OTP: ${otpObj.code}`;
}

function checkOTPValidity() {
    const otpDisplay = document.getElementById("otp-display");
    const otpValidityDisplay = document.getElementById("otp-validity");
    if (otpDisplay.innerText !== '') {
        const otpObj = { code: otpDisplay.innerText.split(': ')[1], expiration: Number.MAX_SAFE_INTEGER };
        if (isOTPValid(otpObj)) {
            otpValidityDisplay.innerText = 'OTP is still valid';
        } else {
            otpValidityDisplay.innerText = 'OTP has expired';
        }
    } else {
        otpValidityDisplay.innerText = 'Please generate an OTP first';
    }
}
