Projeto feito através de um vídeo do LamaDev, desenvolvido do zero utilizando MongoDB, Mongoose, Express, React e NodeJS

### Funcionalidades:
- O usuário pode apontar a localização por onde passou e compartilhar sua opinião e avaliação sobre o local que os outros usuário podem ver
- Sistema de login/registro armazenando os dados no local storage
#### Register
![localhost_3000_](https://user-images.githubusercontent.com/103163622/210079384-ab249616-8eed-47cc-84b9-9f6633b8bca4.png)
#### Login
![localhost_3000_ (1)](https://user-images.githubusercontent.com/103163622/210079532-bf99d450-d47e-4937-a688-131e3c91ad61.png)
#### Aponte uma localização e adicione o título, descrição e avaliação da localização
![localhost_3000_ (2)](https://user-images.githubusercontent.com/103163622/210079671-b089805b-061e-4a12-8fa7-0cd4a24e2220.png)
#### Ver as reviews de todos os usuários
![localhost_3000_ (3)](https://user-images.githubusercontent.com/103163622/210079808-4117d9a1-8bd8-46c3-9aa5-6f9b82bbfc42.png)

Getting Started
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

Prerequisites
For the web application to work, you only need to have a knowledge about ReactMapGl. React App using the ReactMapGL component to use mapbox to display a map theme.

ReactMapGl component props that take from MAPBOX are: mapboxApiAccessToken and mapStyle.

Access key and mapStyle can be found once a MapBox account has been created where the access token will be visible at the bottom of the page. Mapstyle token can be found on Mapbox under Tools & resources, where Design in mapbox studio is selected to select a visual design theme and a code is then generated.

Installation
Clone the repo and change to that folder

git clone https://github.com/DiegoBP02/travelMapApp-MERN.git
Install packages for the backend

Move to backend folder
cd backend

npm install
Update the MongoDB URL (You can see it in .env.example)
    MONGO_URL = <ADD_YOUR_MONGODB_URL>
Run the server
npm start
Install packages for the frontend

Move to frontend folder
cd frontend

npm install
Get a free API Key from Mapbox at their website.

Update the API in "./frontend/.env" (You can see it in .env.example)

REACT_APP_MAPBOX = <YOUR_MAPBOX_API_KEY>
Run the frontend server
npm start

