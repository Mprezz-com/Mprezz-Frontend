import Cookie from 'js-cookie';

const SetCookie = (id, token, userType) => {
    Cookie.set('id', id, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
    Cookie.set('token', token, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
    Cookie.set('userType',userType, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
};

export default SetCookie;
