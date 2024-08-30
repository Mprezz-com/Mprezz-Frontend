import Cookie from 'js-cookie';

const GetCookie = (key) => {
    return Cookie.get(key);
};

export default GetCookie;
