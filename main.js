
function selectWeapon(weaponName) {
  const text = document.getElementById("chosen-weapon");
  text.innerText = "Вы выбрали: " + weaponName;
  text.classList.add("fade");
}
