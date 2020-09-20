# game_api

Zadanie:

- wystawic 1 REST endpoint, który przyjmuje POSTem:
  {userId: ..., gameId: ...., action: ...}
- wstawia do bazy MySql, tabela action to co wysłano temu endpoint'u
  MySql może być lokalny, cloud whatever :)
- wgraj proszę rozwiązanie do githuba
- a w readme.md spisać proszę jak to cudo uruchomić

ToDo;

1. Heroku.
2. Oracle MySql.

How to?

1. Apka jest dostępna na Heroku: https://kalamba-games-api.herokuapp.com/
2. Manualnie/lokalnie:
   a) Git clone,
   b) npm i
   c) opcjonalnie: utworzyć plik .env zawierający PORT=xxxx. W przeciwnym wypadku serwer nasłuchuje na 3001.
   d) npm run start-dev

.env:
NODE_ENV=development
PORT=5001
MYSQL_DB=game
MYSQL_USER=username
MYSQL_PASSWD=password
MYSQL_PORT=3306
MYSQL_ADDRESS=localhost
MOCK_DB=false
