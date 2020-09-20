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
   - `Git clone `,
   - `npm i`,
   - Utworzyć serwer MySql zawierający bazę `game`
     Ja skorzystałem z MySQL w Xampp.
   - Dodać użytkownika posiadającego dostęp do `game`:
     - `SELECT` oraz `INSERT` na danych,
     - `CREATE` na strukturze (apka utworzy tabelę `action`)
   - utworzyć plik `.env` zawierający poniższe pola i ustawić odpowiednie wartości dla bazy danych:
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
   - `npm run start-dev`
