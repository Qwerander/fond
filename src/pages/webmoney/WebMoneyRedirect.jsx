// WebMoneyRedirect.js
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export const WebMoneyRedirect = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // Получение параметров из строки запроса URL
    const params = new URLSearchParams(location.search);
    const webmoneyParams = {};
    params.forEach((value, key) => {
      webmoneyParams[key] = value;
    });

    // Пример: Обработка полученных параметров
    const orderId = webmoneyParams['orderId'];
    const amount = webmoneyParams['amount'];
    const status = webmoneyParams['status'];

    // Ваша логика обработки данных от WebMoney
    if (status === 'success') {
      // Выполните необходимые действия при успешной оплате (например, аутентификация пользователя)
      // ...
    } else {
      // Обработка других статусов или ошибок
      // ...
    }

    // Перенаправление на главную страницу после обработки
    history.push('/');
  }, [location, history]);

  return (
    <div>
      <h1>Обработка возврата с WebMoney</h1>
      {/* Вывод данных или ожидание результата */}
    </div>
  );
};
