const getEl = objet => {
    return (document.forms["regForm"][objet]);
};
const testValidity = objet => {
    return (objet.length == 0) ? false : true;
};

const regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ig;
const regExPwd = /^[a-z][A-Z][0-9][!@#\$%\^&\*]^/g;

const msgError = objet => {
    alert("the " + objet + " field should not be empty!!!!!");


};
const validate = () => {
    let form = (document.forms['regForm']);
    let name = (getEl("firstName")).value;
    let lastName = (getEl("lastName"));
    let adress = (getEl("adress"));
    let mail = (getEl("mail")).value;
    let phoneNumber = (getEl("phoneNumber"));
    let userPwd = (getEl("userPwd").value);
    let userPwdConfirm = (getEl("userPwdConfirm").value);

    if (!testValidity(name)) {
        msgError("name");
        return false;
    }
    if (!testValidity(lastName)) {
        msgError("lastName");
        return false;
    }
    if (!testValidity(adress)) {
        msgError("adress");
        return false;
    }
    if (!testValidity(phoneNumber)) {
        msgError("phoneNumber");
        return false;
    }
    if (!regExMail.test(mail)) {

        alert('The email field should be exemple@example.com');
        return false;

    }
    if (!testValidity(userPwd) || (userPwd.length < 8)) {
        alert("password should not be empty or less than eight caracters");
    }
    if (regExPwd.test(userPwd)) {
        alert("password should containe upper case and lower case and special caracters");
        return false;
    }
    if (userPwdConfirm.toString() !== userPwd.toString()) {
        alert('Password confirmation is not the same as password ');
        return false;
    }

    return true;
};
