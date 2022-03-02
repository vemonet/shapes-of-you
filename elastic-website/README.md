## Get Started

1. Update the host url to ElasticSearch instance in `pages/api/graphql.js` L15
2. Install the dependencies

```bash
yarn
```

3. Run the app

```bash
yarn dev
```

## Run in production

Build, then serve:

```bash
yarn build
yarn serve
```

## Run with docker

1. Set the `ELASTIC_PASSWORD` in a `.env` file alongside the `docker-compose.yml`

```bash
echo "ELASTIC_PASSWORD=yourpassword > .env"
```

2. Start the containers

```bash
docker-compose up
```
