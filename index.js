var express = require('express');
const path = require('path');
const app = express();
const nodemailer = require("nodemailer");
var logger = require('morgan');
var bodyParser = require('body-parser');

require('dotenv').config()
// console.log(process.env.password);
/* GET home page. */
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/book', function(req, res, next) {
  console.log(req.body);
  main()
  .then((data) => {
    console.log(data);
  })
  // res.sendFile(path.join(__dirname+'/index.html'));
});

const PORT = process.argv[3] || 8080;
const HOST = process.argv[2] || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${HOST} ${PORT}.`);
});

const userEmail = process.env.email_address;
const password = process.env.password;
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  console.log(userEmail, password);
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: userEmail,
      pass: password 
    }
  }); 
  // auth: {
  //     user: "e185b4b393374a",
  //     pass: "d41516f9b7a94a"
  //   }
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Ufulu reservations 👻" <${userEmail}>`, // sender address
    to: `sulemartin87@gmail.com`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return {status: "done", message: info.messageId};
}

main().catch(console.error);