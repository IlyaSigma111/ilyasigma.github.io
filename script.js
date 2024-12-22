// Открытие модальных окон
document.getElementById('loginButton').addEventListener('click', () => {
  openModal('registerModal');
});

document.getElementById('editProfileButton').addEventListener('click', () => {
  openModal('editProfileModal');
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Закрытие модальных окон
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Регистрация пользователя
document.getElementById('registerForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('registerName').value;
  const surname = document.getElementById('registerSurname').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  // Здесь будет логика сохранения данных, например, отправка на сервер.
  console.log('Регистрация:', name, surname, email, password);

  // Закрыть окно регистрации
  closeModal('registerModal');
});

// Редактирование профиля
document.getElementById('editProfileForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = document.getElementById('editUserName').value;
  const userBio = document.getElementById('editUserBio').value;

  // Обновление информации профиля
  document.getElementById('userName').innerText = userName;
  document.getElementById('userBio').innerText = userBio;

  // Закрыть окно редактирования профиля
  closeModal('editProfileModal');
});
