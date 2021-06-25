
//gets spotify credentials from a .env file to be used throughout the app
const Credentials = () => {

    return {
        ClientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        ClientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
    }
}

export { Credentials };