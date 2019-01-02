module.exports = {
    /* imageServerPath:'http://localhost/RInteger/serviceproviders/', */
    workServerPath: 'http://localhost/RIntegerWorks/',
    imageServerPath: process.env.IMAGE_SERVER_PATH || 'https://rinteger.com/admin/images/',
    adsServerPath:  'https://rinteger.com/admin/images/ads/',
    imageUrl: process.env.IMAGE_URL_PATH || 'https://rinteger.com/assets/images/logohomepage.jpg'
};