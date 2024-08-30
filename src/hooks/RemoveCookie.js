import Cookie from 'js-cookie';

const RemoveCookie = (id, token, userType) => {
    Cookie.remove(id);
    Cookie.remove(token);
    Cookie.remove(userType)
};

export default RemoveCookie;
