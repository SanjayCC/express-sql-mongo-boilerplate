// const fs = require('fs');
// const qrcode = require('qrcode');
const qr = require('qr-image');

// module.exports.generateQr = async (req, res, url) => {
//   const qr = await qrcode.toDataURL('chutiya he tu !!!');

//   fs.writeFileSync('./qr.html', `<img src="${qr}">`);
//   console.log('Wrote to ./qr.html');
//   return res.json(qr);
// };


module.exports.generateQr = async (req, res, url) => {
  const code = qr.image('https://miro.medium.com/max/970/1*D_yyBm1aoG6whV66hAGVhA.png', { type: 'pdf' });
  res.type('pdf');
  code.pipe(res);
};
