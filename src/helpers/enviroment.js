let APIURL = '';

switch (window.location.hostname){
    case 'localhost':
        APIURL = 'http://localhost:3000';
        break;
    case 'jwd-pokertrackerclient.herokuapp.com':
    
        APIURL = 'https://jwd-pokertracker.herokuapp.com'

    
}

export default APIURL;