const express = require('express');

const qrCodeService = require('../../services/QRCodeService');

const router = express.Router();
router.get('/', async (req, res) => {
  await qrCodeService.generateQr(req, res, 'sanjay');
});

module.exports = router;
