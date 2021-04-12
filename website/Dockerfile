FROM node:12-alpine

WORKDIR /webapp

# Only install NPM packages if package.json or yarn.lock change
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . .

# Build in /web-build folder
RUN yarn build

## Serving directly does not work with router:
# expo web --no-dev

EXPOSE 5000

ENTRYPOINT [ "yarn", "serve" ]
