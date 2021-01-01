# Developer documentation

This documentation includes background information around building the game.

## Level Pages

| level | description         | folder         | netlify url                                   | game url                                               |
| ----- | ------------------- | -------------- | --------------------------------------------- | ------------------------------------------------------ |
| 1     | internet search     | -              | https://rc3-game-bot.herokuapp.com            | https://0.100101.online                                |
| 2     | cookie consent      | cookie-consent | https://xenodochial-wilson-5c2b98.netlify.app | https://01000101101101001000000011000101.100101.online |
| 3     | toilet paper shop   | shop           | https://elastic-jennings-22cb6a.netlify.app   | https://00001110001000010100010001001010.100101.online |
| 4     | email app           | email          | https://gifted-hodgkin-c43264.netlify.app     | https://11100011001011000001110010110011.100101.online |
| 5     | fortune-teller site | fortune        | https://jovial-shaw-68a326.netlify.app        | https://01010001100010010011011011011110.100101.online |
| 6     | food blog page      | blog           | https://sharp-joliot-036e2b.netlify.app       | https://10110101111001001010101111111111.100101.online |
| 7     | gameover            | gameover       | https://quirky-lalande-3f5aaf.netlify.app     | https://10010011000001000010001000011011.100101.online |

## RC3 World Game entry page

| level | description | folder | netlify url                           | game url                |
| ----- | ----------- | ------ | ------------------------------------- | ----------------------- |
|       | pre start   | start  | https://angry-saha-fe6325.netlify.app | https://1.100101.online |

## WIP pages

| level | description | folder | netlify url                              | game url                                               |
| ----- | ----------- | ------ | ---------------------------------------- | ------------------------------------------------------ |
|       | cats page   | cats   | https://hardcore-borg-141238.netlify.app | https://10101000000110110001110001011111.100101.online |

## Achievements

"Discovered ten different HTTP cats" ("http-cat")

"Walked in the delicious cookie rain" ("cookie-rain")

"Trusted your privacy to a PRNG" ("random-cookies")

"Picked the CORRECT tarot card" ("tarot-card")

"Found the secret email attachment" ("email-attachment")

"Said hi to Donnie (wuff wuff)" ("hello-donnie")

"Took a ride on a flying roll of toilet paper" ("flying-toiletpaper")

## Page views and achievements tracking

Startseite:

```
<head>
  <script type="module">
    import { reset_tracking_session, track_event } from "https://00100011111100011111111110111101.100101.online/rc3gt/rc3gt-wrapper.js";
    reset_tracking_session().then(() => track_event("pageload"));
  </script>
</head>
```

Für alle anderen Seiten:

```
<head>
  <script type="module">
    import { load_tracking_session, track_event } from "https://00100011111100011111111110111101.100101.online/rc3gt/rc3gt-wrapper.js";
    load_tracking_session().then(() => track_event("pageload"));
</script>
</head>
```

## Other game related repos

### Bot backend

tbd

### Stats, achievements backend

https://github.com/OpenTechSchool-Leipzig/rc3-game-backend

Test app: https://00100011111100011111111110111101.100101.online/example/

### HTTP Cats Proxy

https://github.com/OpenTechSchool-Leipzig/rc3-game-proxy
