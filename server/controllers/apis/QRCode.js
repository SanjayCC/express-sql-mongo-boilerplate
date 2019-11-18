const express = require('express');

const qrCodeService = require('../../services/QRCodeService');
const logger = require('../../utils/logs');

const router = express.Router();
router.get('/', async (req, res) => {
  logger.log('info', 'Logger is working.');
  await qrCodeService.generateQr(req, res, 'sanjay');
});

module.exports = router;
