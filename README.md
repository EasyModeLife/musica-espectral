# Reproductor de Música con Colores

Este proyecto es un reproductor de música interactivo creado con Astro. El reproductor visualiza la música y cambia los colores de la interfaz basándose en la amplitud de las ondas sonoras.

## Demo en Vivo

Puedes ver una demostración en vivo del proyecto aquí: [https://reproductor-musica-colores.netlify.app/](https://reproductor-musica-colores.netlify.app/)

## Características

*   **Reproducción de audio:** Reproduce archivos de audio arrastrándolos y soltándolos en la zona designada o seleccionándolos desde tu dispositivo.
*   **Visualizador de audio:** Muestra una representación visual de la onda sonora del audio en reproducción.
*   **Colores dinámicos:** Los colores de fondo de la página y del encabezado cambian en función de la amplitud del audio, creando una experiencia visual inmersiva.
*   **Controles de reproducción:** Incluye un botón de reproducción/pausa y una barra de progreso para controlar la reproducción.
*   **Header con enlaces:** El encabezado contiene enlaces a GitHub y PayPal.
*   **Canción por defecto:** Carga y reproduce una canción por defecto al iniciar.

## Tecnologías Utilizadas

*   **Astro:** Framework web para construir sitios web rápidos.
*   **HTML:** Lenguaje de marcado para la estructura de la página.
*   **CSS:** Lenguaje de estilos para el diseño visual.
*   **JavaScript:** Lenguaje de programación para la interactividad y la lógica del reproductor.
*   **Web Audio API:** API para procesar y sintetizar audio en aplicaciones web.

## Estructura del Proyecto
content_copy
download
Use code with caution.
Markdown

reproductor-musica/
├── src/
│ ├── components/
│ │ ├── AudioProcessor.astro
│ │ └── Header.astro
│ ├── layouts/
│ │ └── Layout.astro
│ └── pages/
│ └── index.astro
├── public/
│ └── favicon.svg
├── astro.config.mjs
├── package.json
├── README.md
└── ...

## Cómo Usar

1. **Clonar el repositorio:**

    ```bash
    git clone <URL_del_repositorio>
    ```
2. **Instalar las dependencias:**

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```
3. **Iniciar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    o

    ```bash
    yarn dev
    ```
4. **Abrir el navegador:** El proyecto estará disponible en `http://localhost:4321` (o el puerto que te indique Astro).

## Contribuir

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna sugerencia, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia [Nombre de la Licencia - Enlaza al archivo de licencia si es necesario].
content_copy
download
Use code with caution.