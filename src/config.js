function getUrl(){
    let hostName = window.location.hostname;
    if(hostName=="localhost"){
        return 'http://127.0.0.1:2500/api/'
    }else if(hostName === 'netlify.com'){
        return "http://api.devstress.com/api/";
    }
    return 'http://127.0.0.1:2500/api/';
}

const API_URL = getUrl();
export default{
    POSTS_URL : API_URL + 'posts'
}

