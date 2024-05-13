# PZ-Cheez

A cheeseria app built with [vite-express](https://github.com/szymmis/vite-express)

# Commands

- `npm run dev`: Runs the dev server
- `npm build`: Builds the client as static files to serve in `./dist`
- `npm start`: Starts the server from `main.ts`
- `test`: Runs tests
- `api-update`: Downloads latest swagger api files and autogens ts definitions

# Getting Started

1. `git clone` the app
2. `npm i` to install dependencies
3. Starting 
    - `npm dev` to start dev server, OR
    - `npm build` and `npm start` to start with production env variable, OR
    - `docker build` and `docker run` the `Dockerfile`.
4. Navigate to `localhost:3000` and you should see the page.
5. Navigate to `localhost:3000/api-doc/` to view and execute api calls through SwaggerUI.
