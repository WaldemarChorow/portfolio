# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Contact form backend

The contact form ([`src/app/layout/contact/contact.ts`](src/app/layout/contact/contact.ts))
sends a `POST` request to the relative endpoint **`/api/contact`**. The frontend
is fully wired up (validation, loading/success/error states), but **no backend is
included in this repo** — you must provide one on your server.

The endpoint receives a JSON body:

```json
{
  "name": "…",
  "email": "…",
  "message": "…"
}
```

It should return HTTP `2xx` on success (shows the success message) and any error
status otherwise (shows the error message). During local development you can point
`/api/contact` at your backend via an Angular
[proxy configuration](https://angular.dev/tools/cli/serve#proxying-to-a-backend-server).

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
