const timeConverter = require("./timeConverter");

test('Converte 30 segundos para "0h 0m 30s"', () => {
  expect(timeConverter(30)).toBe("0h 0m 30s");
});

test('Converte 350 segundos para "0h 5m 50s"', () => {
  expect(timeConverter(350)).toBe("0h 5m 50s");
});

test('Converte 3725 segundos para "1h 2m 5s"', () => {
  expect(timeConverter(3725)).toBe("1h 2m 5s");
});
