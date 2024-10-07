// const crypto = require('crypto');

// Use a secure, randomly generated key and IV
// const ALGORITHM = 'aes-256-cbc';
// const SECRET_KEY = process.env.SECRET_KEY; // 32-byte key
// const IV_LENGTH = 16; // For AES, this is always 16

// Encrypt function
// function encrypt(text) {
//     const iv = crypto.randomBytes(IV_LENGTH);
//     const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY, 'hex'), iv);
//     let encrypted = cipher.update(text, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     return iv.toString('hex') + ':' + encrypted; // Include IV with encrypted text
// }

// Decrypt function
// function decrypt(encryptedText) {
//     const parts = encryptedText.split(':');
//     const iv = Buffer.from(parts.shift(), 'hex');
//     const encryptedTextBuffer = Buffer.from(parts.join(':'), 'hex');
//     const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY, 'hex'), iv);
//     let decrypted = decipher.update(encryptedTextBuffer, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }

// module.exports = { encrypt, decrypt };
