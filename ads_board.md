# `ads board` (zadanie na zaliczenie)

Celem projektu jest stworzenie **PROSTEJ** aplikacji pozwalającej na zarządzanie ogłoszeniami online (tablica ogłoszeń).

Główne założenie aplikacji to stworzenie `REST API` pozwalające na dodawanie, wyświetlanie, zmodyfikowanie i usunięcie ogłoszeń.

Baza użytkowników może być ustawiona na sztywno(bez dodatkowego API do ich zarządzania, a jedynie pobierana z naszej 'bazy')(dopuszczalne jest podejście użytkowników anonimowych).
Każde ogłoszenie powinno być przypisane minimum do jednej kategorii.

Podczas dodawania oraz modyfikowania ogłoszeń powinniśmy operować na identyfikatorach.

## Wymagania na zaliczenie

1. Podstawą zaliczenia jest wykonanie najprostszego REST API pozwalającego na zarządzanie tablicą ogłoszeń. (dodawanie, usuwanie, modyfikowanie, wyświetlanie ogłoszeń jak i pojedynczego ogłoszenia)

2. (*) Aplikacja powinna pozawalać na filtrowanie ogłoszeń po szukanym tekście, cenie, dacie dodania, autorze, itp.

3. (*) Usuwanie jak i modyfikowanie ogłoszeń powinno być zabezpieczone hasłem (np. middleware z hasłem na sztywno)

4. (*) Możliwość przypięcia wielu kategorii do ogłoszenia.

Ma to być aplikacja serwerowa w postaci `REST API`. Interfejs graficzny **nie jest wymagany**!

## **Ważne!**

Przetrzymywanie danych jak i ich struktura zależy od programisty! Pełna dowolność w wykorzystaniu bibliotek oraz bazy danych. Liczę na pomysłowość i kreatywność!

**Zaliczenie indywidualne po wcześniejszym ustaleniu daty!**

## **POWODZENIA**! ;)