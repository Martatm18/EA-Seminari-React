# Enllaç Vídeo Explicació Exercici React Seminari 8: 
https://drive.google.com/file/d/1gR1hgNC29ZSTeDW68dVKIPbUquKZKUVa/view?usp=sharing

# Documentació:
**1. Referències dels materials consultats**
- Repositoris del seminari.
- Els vídeos proposats.
- Explicació de classe.

**2. Detall de l'ús de la IA generativa**
Eina i model d'IA usat: Gemini (Google)
- **Registre d'usos:**
- **Registre 1:** Tipatge en TypeScript i Persistència Robusta amb localStorage (Frontend):
  - **Prompt literal:** Com tipo correctament un àtom de Nanostores a TypeScript per gestionar un array d'IDs de tipus string[] afegint persistència amb localStorage sense que falli per dades corrompudes o valors nulls?
  - **Incoherències detectades en la resposta:** La IA no va contemplar la gestió d'errors si el navegador bloqueja el localStorage o si JSON.parse llegeix un format invàlid, la qual cosa llançava excepcions a l'inici.
  - **Solució / adaptació manual:** Vaig haver d'afegir manualment blocs try/catch a la funció getInitialFavorites() i al mètode .listen() del store per garantir que l'aplicació sigui tolerant a fallades d'emmagatzematge local.
- **Registre 2:** Subscripció Reactiva a Nanostores en un Component Independent (Frontend):
  - **Prompt literal:** Com subscric el component FavouriteButton al store de Nanostores usant @nanostores/react (useStore) perquè l'etiqueta del botó canviï dinàmicament entre "★ Favorito" i "☆ Marcar favorito"?
  - **Incoherències detectades en la resposta:** La IA va intentar proposar la creació d'un React Context innecessari per passar l'estat de favorits, ignorant que Nanostores ja resol la subscripció de manera atòmica.
  - **Solució / adaptació manual:** Vaig simplificar el codi manualment important només el hook useStore i cridant directament a la funció exportada toggleFavorite(bookId) en l'esdeveniment onClick.
- **Registre 3:** Cruce Asíncron entre Dades de l'API i Estat Local del Store (Frontend):
  - **Prompt literal:** Com combino la llista de llibres obtinguda de manera asíncrona mitjançant el hook useApiList(bookService.getBooks) amb el store global de Nanostores per pintar exclusivament els favorits a FavouritesList.tsx?
  - **Incoherències detectades en la resposta:** La IA va suggerir crear un useEffect addicional amb un estat local duplicat (useState) per guardar els favorits, generant redundància innecessària.
  - **Solució / adaptació manual:** Vaig eliminar la complexitat innecessària i vaig calcular la llista filtrada de manera reactiva directa al cos del component amb un simple .filter() sobre els llibres de l'API utilitzant l'array de favorits del store.

