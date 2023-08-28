const profile = {
    firstName: "Elon",
    lastName: "Musk",
    walletBalance: 3500
}
document.querySelectorAll('.profile-name').forEach(elem => {
    elem.innerHTML = profile.firstName + " " + profile.lastName;
})
document.querySelector('.profile-firstname').innerHTML = profile.firstName;

const openProfileMenu = () => {
    document.querySelector('.profile-section').classList.remove('hide')
}
const closeProfileMenu = () => {
    document.querySelector('.profile-section').classList.add('hide')
}
