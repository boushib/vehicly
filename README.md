# Vehicly

This is the frontend for _Vehicly_, a vehicles online store.

Backend: <https://github.com/boushib/vehiclesStoreAPI>

## Stack to be used in the project

- **Frontend**: Vue.js, & Vuex.
- **Backend**: Rest API in C# (.NET core).
- **Database Engine**: PostgreSQL.
- **File Storage**: AWS S3.

## Tools used during development

- VSCode.
- Postman.
- Docker

## Run dev environment

### Install packages

```text
yarn
```

Create a `.env` file in the project root directory and add these 2 entries to it:

```text
VUE_APP_API_URI=http://localhost:5000/api/v1
VUE_APP_GOOGLE_MAPS_API_KEY=[Google Maps API Key]
```

### Run dev server

```text
yarn serve
```

to use a specific port:

```bash
npm run serve -- --port PORT_NUMBER
```
