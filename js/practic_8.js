const formRegster = document.getElementById("register");
// console.log(formRegster);

const formLogin = document.getElementById("login");
// console.log(formLogin);

const formUpdate = document.getElementById("update");
// console.log(formUpdate);
class User {
  constructor(a, b, c, d) {
    this.name = a;
    this.email = b;
    this.tel = c;
    this.pass = d;
  }
}
const users = [];

formRegster.addEventListener("submit", (evt) => {
  evt.preventDefault(); //остановка дефолтного события (дефолтное события ссылка и кнопка - основные)
  console.log(evt.target);
  let name = evt.target.elements.name.value;
  let email = evt.target.elements.email.value;
  let tel = evt.target.elements.tel.value;
  let pass = evt.target.elements.pass.value;
  const user = new User(name, email, tel, pass);
  console.log(user);
  users.push(user);
  console.log(users);
  let jsonUsers = JSON.stringify(users); //формат JSON это строка

  //   const myUsers = JSON.parse(localStorage.getItem("users"));
  //   console.log("isLocaleStorage", myUsers);
  //   console.log(localStorage.getItem("users"));
  const data = localStorage.getItem("users");
  console.log(data);
  const normData = JSON.parse(data);
  console.log(normData);

  normData.forEach((el) => {
    console.log(el);

    if (el.email === user.email) {
      alert("Такой пользователь уже есть");
      return;
    }
  });
  localStorage.setItem("users", jsonUsers);
  formRegster.reset();
});
console.log(localStorage.getItem("users"));

formLogin.addEventListener("submit", (evt) => {
  evt.preventDefault(); //остановка дефолтного события (дефолтное события ссылка и кнопка - основные)
  let name = evt.target.elements.name.value;
  let email = evt.target.elements.email.value;
  let tel = evt.target.elements.tel.value;
  let pass = evt.target.elements.pass.value;

  const allName = JSON.parse(localStorage.getItem("users"));
  console.log(allName);

  allName.some((el) => {
    if (el.email !== email) {
      const user = new User(name, email, tel, pass);
      console.log(user);
      console.log("Вы успешно зарегестрированы");
    } else {
      alert("Такой ТИП уже есть");
    }
  });
});
