# Proyecto: "Who Said that?"

Descripción del proyecto: Un juego interactivo en el que los jugadores deben adivinar quién ha dicho una frase célebre. La versión inicial del juego incluye dos aplicaciones Next.js: una API que proporciona las frases y los personajes de la serie (en este caso los simpsons) y el frontend con el que interactua el usuario con el navegador, seleccionando el personaje que cree que ha dicho esa frase.

## Características:

Una API que devuelve frases célebres y los personajes que las dijeron.
Dos aplicaciones: backend (express.js) y frontend (vite.js)
Frontend: Muestra las frases célebres y permite a los jugadores votar por quién creen que la dijo
Backend: Le proporciona al frontend mediante una API las frases y los posibles personajes que las podrían haber dicho.

Utiliza ESLint y Prettier para mantener el código limpio y organizado
Utiliza Turborepo para gestionar el monorepo y habilitar la caché remota

### Funcionalidades:

Los jugadores pueden votar por quién creen que dijo la frase.
La aplicación muestra la respuesta correcta después de que los jugadores voten.

### Requisitos:
Node.js y npm o yarn instalados en la máquina local
Crear un nuevo proyecto Turborepo con npx create-turbo@latest
Clonar el repositorio del proyecto y ejecutar pnpm build y pnpm dev para construir y ejecutar la aplicación

### Estructura del proyecto:

docs: Aplicación Next.js para mostrar las frases célebres
web: Aplicación Next.js para mostrar los personajes que pudieron haber dicho la frase
@repo/ui: Biblioteca de componentes React compartida por ambas aplicaciones
@repo/eslint-config: Configuración de ESLint para el proyecto
@repo/typescript-config: Configuración de TypeScript para el proyecto

### API:
La API devuelve frases célebres y los personajes que las dijeron
La API se encuentra en localhost:5000/api/characters
La API se encuentra en localhost:5000/api/quotes

### Desarrollo:
Para desarrollar la aplicación, ejecutar pnpm dev en la raíz del proyecto
Para construir la aplicación, ejecutar pnpm build en la raíz del proyecto

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```
