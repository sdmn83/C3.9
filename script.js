function start(){

  if (getCookie("cityChanged") === "true") {
      removeElem("enter");
      yourCity.innerText = getCookie('cityName');
  }
  else {
      removeElem("view");
      city.value = "";
  }

  if (getCookie("saved") === "true") {
      let checkArr = document.querySelectorAll(".check");
      checkArr.forEach(function(elem){
        if (getCookie(elem.id) === "true"){
          elem.checked = true;
        }
        else {
          elem.checked = false;
        }
        elem.disabled = true;
      });
  }
  console.log(document.cookie);
}

function getCookie(c_name) {
    console.log(document.cookie);
    let matches = document.cookie.match(new RegExp("(?:^|; )" + c_name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : "";
}

function setCookie(name, value, age) {
    value = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; max-age=' + age;
    console.log(value);
    document.cookie = value;
  }

function deleteCookie(name) {
    setCookie(name, "", "-1");
}

function removeElem(elemName) {
    document.getElementById(elemName).remove();
}

city.oninput = () => {
  setCookie('cityName', "Ваш город - "+city.value, 3600);
  setCookie("cityChanged", "true", 3600)
};

clear.onclick = function () {
  deleteCookie("cityName");
  deleteCookie("cityChanged");
  yourCity.innerText = "Город не задан."
  // city.value = "";
  // city.disabled = false;
  console.log(document.cookie);
  // start();
}

saveChkbox.onclick = function () {
  let checkArr = document.querySelectorAll(".check");
  checkArr.forEach(function(elem){
      setCookie(elem.id, elem.checked, 3600);
  });
  setCookie("saved", "true", 3600)
  console.log(document.cookie + " ИЛИ КУКИ НЕ ЗАПИСАЛИСЬ");
}
