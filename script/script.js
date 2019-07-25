const getEl = (objet) => {
    return document.getElementById(objet);
}
const testValidity = (objet) => {
    return (objet.length == 0) ? flase : true;
}
const styleModifier = (objet) => {
    return getEl(objet).style.border = "2px solid red";

}

const validat = () => {

    let name = getEl("firstName").value;
    let lasName = getEl("lastName").value;
    let adress = getEl("adress").value;
    let mail = getEl("mail").value;
    let phoneNumber = getEl("phoneNumber").value;
    let userPwd = getEl("userPwd").value;
    let userPwdConfirm = getEl("userPwdConfirm").value;
    let user = [name, lasName, adress, mail, phoneNumber, userPwd, userPwdConfirm];
    for (let i in user) {
        if (!testValidity(user[i])) { styleModifier(user[i]); }
    }

}