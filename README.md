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
    - `npm run dev` to start dev server, OR
    - `npm run build` and `npm start` to start with production env variable, OR
    - Docker deploy:
        1. `docker build . -t="pz-cheez"` to build the image
        2. `docker run -d -p 3000:3000 --name pz-cheez-test pz-cheez` to run the container
4. Navigate to `localhost:3000` and you should see the page.
5. Navigate to `localhost:3000/api-doc/` to view and execute api calls through SwaggerUI.
    - Here, you can test execute api calls directly against the local server, and see the response message.
    - Navigate back to `localhost:3000` to see resulting changes to the front end UI.
