module.exports = (req, res, next) => {
  const localhost = req.headers.host.indexOf('localhost') === 0;

  if (!localhost) {
    const isHttp = req.headers['x-forwarded-proto'] === 'http';

    if (isHttp) {
      return res.redirect(301, `https://${req.headers.host}${req.url}`);
    }
  } else {
    /* eslint-disable no-console */
    console.log('Ingoring https while in localhost');
  }

  return next();
};
