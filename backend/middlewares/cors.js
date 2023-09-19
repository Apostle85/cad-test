const allowedCors = [
  'http://localhost:5173',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers; // Сохраняем источник запроса в переменную origin
  // проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    // res.header('Access-Control-Allow-Credentials', 'true');
  }
  return next();
};
