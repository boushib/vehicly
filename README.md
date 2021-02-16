# vehiclesStoreFrontend

A vehicles online store project, for the **Web Services** class in my master degree at High Tech Rabat.

Backend: <https://github.com/boushib/vehiclesStoreAPI>

## Stack to be used in the project

- **Frontend**: Vue.js, & Vuex.
- **Backend**: Rest API in C# (.NET core).
- **Database Engine**: PostgreSQL.
- **File Storage**: AWS S3.

## Tools used during development

- VSCode.
- Postman.
- pgAdmin
- Docker

## Run dev environment

### Install packages

```bash
npm install
```

Create a `.env` file and add these 2 entries to it:

```env
VUE_APP_API_URI=http://localhost:5000/api/v1
VUE_APP_GOOGLE_MAPS_API_KEY=[Google Maps API Key]
```

### Run dev server

```bash
npm run serve
```

to use a specific port:

```bash
npm run serve -- --port PORT_NUMBER
```
