# game_api

## Zadanie:

```
- wystawic 1 REST endpoint, który przyjmuje POSTem:
  {userId: ..., gameId: ...., action: ...}
- wstawia do bazy MySql, tabela action to co wysłano temu endpoint'u
  MySql może być lokalny, cloud whatever :)
- wgraj proszę rozwiązanie do githuba
- a w readme.md spisać proszę jak to cudo uruchomić
```

## How to?

1. Apka jest dostępna na Heroku: [https://kalamba-games-api.herokuapp.com/] ale korzysta z tablicy zamiast mysql.
2. Manualnie/lokalnie:
   a) `Git clone `,
   b) `npm i`
   c) utworzyć plik `.env` zawierający:
   ```
   .env:
   NODE_ENV=development
   PORT=5001
   MYSQL_DB=game
   MYSQL_USER=username
   MYSQL_PASSWD=password
   MYSQL_PORT=3306
   MYSQL_ADDRESS=localhost
   MOCK_DB=false
   ```
   d) `npm run start-dev`
