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

```
Aplikacja powinna posiadać dwie strony:
Lista wszystkich Action
z tabelą o kolumnach:
User ID
Game ID
Action
proszę o dodanie możliwości paginacji wyświetlanych danych (z wyborem ilości danych na stronę 5 i 10) –  może być to zrobione wyłącznie po stronie frontendu dla ułatwienia
proszę wyświetlić użytkownikowi liczbę wszystkich wpisów w tabeli
Formularz dodania Action z polami:
User ID – text input
Game ID – text input
Action – select input z wartościami "SAVE" i "CANCEL" (tak jak na backendzie)
Przyciskiem "Submit", który wyśle dane POSTem do API
Skorzystaj proszę z create-react-app (możesz użyć domyślniego szablonu JavaScript, bądź użyć TypeScript).
Do komunikacji z serwerem użyj Fetch API.
```

## How to?

1. Docker:

   - `Git clone https://github.com/klazowski/game_api.git`,
   - `docker-compose up -d --build`
