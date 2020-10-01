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

1. Docker:

   - `Git clone https://github.com/klazowski/game_api.git`,
   - `docker-compose up -d --build`

2. Apka jest dostępna na Heroku: [https://kalamba-games-api.herokuapp.com/] ale korzysta z tablicy zamiast mysql.
