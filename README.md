# Aplikacja webowa wspierająca osoby z lękiem społecznym

Aplikacja ma na celu wspieranie osób z lękiem społecznym poprzez interaktywne ćwiczenia poznawczo-behawioralne (CBT) zapewniając ćwiczenia poznawczo-behawioralne i zawierająca przydatne informację i recomendację.

---
Aplikacja została stworzona z muślą o osobach cierpiących na lęk społeczny. Dzięki niej użytkownicy mogą:
  1.Otrzymywać rekomendację, wskazówki;
  2.Uzyskać dostęp do ćwiczeń.
  3.Zmotywowac się.

Aplikacja jest częścią badania dotyczącego efektywności terapii CBT w formie cyfrowej.

---

## Funkcjonalności
  1.Ćwiczenia tekstowe CBT - zestaw ćwiczeń opartych na terapii poznawczo-behawioralnej,       
    pomagających użytkownikom stopniowo redukować lęk społeczny.
  2.Recomendację - zebrane recomendację popartę badaniami naukowymi dla lepszego efektu.
  3.Przyjazny UX/UI - minimalistyczny design, który nie przytłacza użytkownika i ułatwia nawigację. 

  ## Technologię użyte w projekcie:
  Html - struktura strony;
  SCSS - zaawansowane stylowanie storny, łatwiejsze zarządzanie wyglądem.
  JS - logika aplikacji.
  React.js - budowa dynamicznych komponentów i zarządzanie stanem aplikacji.z

## Struktura katalogów:
├── src/
│   ├── App.jsx         # Główny komponent aplikacji
│   ├── main.jsx        # Punkt wejściowy aplikacji
│   ├── assets/         # Zasoby statyczne
│   │   ├── fonts/      # Czcionki używane w aplikacji
│   │   ├── images/     # Obrazy i ikony
│   │       ├── About/  
│   │       ├── Causes/  
│   │       ├── Header/  
│   ├── landing/sections/  # Sekcje strony głównej
│   │   ├── About.jsx  
│   │   ├── Causes.jsx  
│   │   ├── Header.jsx  
│   │   ├── Statistics.jsx  
│   │   ├── Steps.jsx  
│   │   ├── Stories.jsx  
│   │   ├── Therapy.jsx  
│   ├── styles/         # Pliki stylów SCSS
│   │   ├── _about.scss  
│   │   ├── _causes.scss  
│   │   ├── _global.scss  
│   │   ├── _header.scss  
│   │   ├── _index.scss  
│   │   ├── _statistics.scss  
│   │   ├── _steps.scss  
│   │   ├── _stories.scss  
│   │   ├── _therapy.scss  
├── package.json        # Zależności i skrypty npm  
├── README.md           # Dokumentacja projektu  

## Kluczowe komponenty 

Header: 
  Do zarądzania stanem wyglądu nagłówka użyłem useState co pozwala na przechowywanie stanu 
```react.js
  const [isMenuOpen, setIsMenuOpen] = useState(false);
```
isMenuOpen - przechowuję informację, czy menu jest otwarte (true) czy zamnknięte (false);
setIsMenuOpen - to funkcja zmieniająca stan menu

```react.js
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
```
funkcja toggleMenu - zmienia stan na przeciwny co pozwala użytkownikowi otwierać i zamykać menu
```
<div className={`header__wrapper ${isMenuOpen ? 'header__wrapper--open' : ''}`}>
```
### wykorzystana jest arrow function js dla dynamicznego dodawania klasy CSS. Gdy isMenuOpen jest true, dodawana jest klasa header__wrapper--open, która pokazuje menu.
---
Stories:
  Ten komponent dynamicznie pobiera posty z Reddita na temat sukcesów związanych z lękiem społecznym. Jest to element motywacyjny, który pozwala zobaczyć historię sukcesu innych osób.
  1.Po załadowaniu się komponentu uruchamia się efekt useEffect, który wysyła żądanie do Reddit Api:
  ```react.js
useEffect(() => {
  const fetchData = async () => {
    const url = "https://www.reddit.com/r/socialanxiety/search.json?q=success&restrict_sr=1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const filteredPosts = data.data.children.map((child) => ({
        title: child.data.title,
        subtitle: child.data.selftext,
        url: child.data.url,
      }));
      setPosts(filteredPosts);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
  ```
### 1.useEffect działa tylko jeden raz po zamontowaniu komponentu i pobiera posty.
### 2.Dane są pobierane z subreddita r/socialanxiety z frazą "success".
### 3.Posty są filtrowane do obiektów {title, subtitle, url} i zapisywane w stanie posts.
-
Obsługa blędów jeśli ładowanie się nie powiodło:
  1.widzi użytkownik jeśli dane jeszcze się ładują
  ```react.js
    if (loading) return <div>Loading...</div>; 
  ```
  2.w razie błądu, wyświetla się komunikat:
  ```react.js
    if (error) return <div>Error: {error}</div>;
  ```
  3.Długie opisy są skracane do 100 znaków, w razie braku opisu wyświeli się komunikat "No       description available".
  ```react.js
  const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  ```
  
## Instalacja i uruchomienie:
1. Sklonuj repozytorium: git clone https://github.com/aminaG08/Diploma-project.git
2. Przejdż do katalogu projektu: cd Diploma-project
3. Zainstaluj zależności: npm install / yarn install
4. Uruchom aplikację: npm start / yarn start
APLIKACJA POWINNA URUCHOMIĆ SIĘ NA http://localhost:3000/

## Demo aplikacji: https://super-moonbeam-bb97b7.netlify.app/

