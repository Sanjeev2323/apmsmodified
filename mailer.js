const nodemailer = require('nodemailer');
const cron = require('node-cron');
const tenant = require('./models/tenants')


cron.schedule(' * * * * * *', async () => {
  
  mail();
})

 function mail() {

 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sanjeevpadma2323@gmail.com',
      pass: 'S@njeev123'
    }
  });

  
  const te =  tenant.find();
  console.log(te);
  const em = [];
  for (var i = 0; i < te.length; i++) {
    // em[i] = te[i].email;

    const mailOptions = {
      from: 'sanjeevpadma2323@gmail.com',
      to: te[i].email,
      subject: 'hi all this is a system genrated email',
      text: 'hi',
      html: '<h1>payment to be paid on or before 5 th of the month below is the link</h1>'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log("email sent" + info.response);
      }
    })
  }

}





