const VRLA_Battery_MODULE = require("../model/VRLABattery");
const Tubular_Battery_MODULE = require("../model/TubularBattery");
const UPS_Battery_MODULE = require("../model/UPSBattery");
const Battery_Access_MODULE = require("../model/BatteryAccess");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "pnchaudhari1996@gmail.com",
    pass: "24496518",
  },
});

exports.productDetails = (obj, callback) => {
  console.log("abc", obj.TYPE);

  switch (obj.TYPE) {
    case "VRLA Battery":
      VRLA_Battery_MODULE.create(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Tubular Battery":
      Tubular_Battery_MODULE.create(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "UPS Battery":
      UPS_Battery_MODULE.create(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Battery Accessories":
      Battery_Access_MODULE.create(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
  }
};

// exports.getProducts = (obj, callback) => {
//   USER_INFO_MODULE.getProducts(obj, (err, data) => {
//     if (err) {
//       return callback(err);
//     }
//     return callback(null, data);
//   });
// };

exports.Deleteproduct = (obj, callback) => {
  switch (obj.TYPE) {
    case "VRLA Battery":
      VRLA_Battery_MODULE.delectProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Tubular Battery":
      Tubular_Battery_MODULE.delectProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "UPS Battery":
      UPS_Battery_MODULE.delectProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Battery Accessories":
      Battery_Access_MODULE.delectProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
  }
};

exports.Findproduct = (obj, callback) => {
  switch (obj.TYPE) {
    case "VRLA Battery":
      VRLA_Battery_MODULE.findProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Tubular Battery":
      Tubular_Battery_MODULE.findProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "UPS Battery":
      UPS_Battery_MODULE.findProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Battery Accessories":
      Battery_Access_MODULE.findProduct({ NAME: obj.NAME }, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
  }
};

exports.updateproduct = (obj, callback) => {
  switch (obj.TYPE) {
    case "VRLA Battery":
      VRLA_Battery_MODULE.updateProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Tubular Battery":
      Tubular_Battery_MODULE.updateProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "UPS Battery":
      UPS_Battery_MODULE.updateProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Battery Accessories":
      Battery_Access_MODULE.updateProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
  }
};

exports.getproduct = (obj, callback) => {
  switch (obj.TYPE) {
    case "VRLA Battery":
      VRLA_Battery_MODULE.getProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Tubular Battery":
      Tubular_Battery_MODULE.getProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "UPS Battery":
      UPS_Battery_MODULE.getProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
    case "Battery Accessories":
      Battery_Access_MODULE.getProduct(obj, (err, data) => {
        if (err) {
          return callback(err);
        }
        return callback(null, data);
      });
      break;
  }
};

exports.sendMail = (data, callback) => {
  console.log("in send email servide");

  var mailOptions = {
    from: "pnchaudhari1996@gmail.com",
    to: data.email,
    subject: data.subject,
    html: `<h1>details</h1>
    <h2> name:${data.fullname} </h2>
    <p> ${data.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email send");
    }
  });
  callback(null, "send mail");
};

exports.sendEnquiryMail = (data, callback) => {
  console.log("in send email servide", data);

  var mailOptions = {
    from: "pnchaudhari1996@gmail.com",
    to: data.email,
    subject: "Customer Enquiry about " + data.product,
    html: `<h1>details</h1>
    <h2> Name:${data.fullname} </h2>
    <h2> Contact:${data.contact} </h2>
    <p> ${data.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email send");
    }
  });
  callback(null, "send mail");
};

exports.distributorshipFrom = (data, callback) => {

  var mailOptions = {
    from: "pnchaudhari1996@gmail.com",
    to: data.email,
    subject: "Distributorship From " + data.firstname + " " + data.lastname,
    html: `<h1> Distributorship From </h1>
    <p> Name:${data.firstname} ${data.lastname}  </p>
    <p> Contact:${data.contact} </p>
    <p> Name of the Firm:${data.nameofthefirm} </p>
    <p> Address of Firm:${data.addreddoffirm} </p>
    <p> Year of Establishment:${data.yearofestablishment} </p>
    <p> city:${data.city} </p>
    <p> state:${data.state} </p>
    <p> pincode:${data.pincode} </p>
    <p> aboutcompany:${data.aboutcompany} </p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email send");
    }
  });
  callback(null, "send mail");
};

// exports.sendMail = (data, callback) => {
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     secure:true,
//     port:465,
//     auth: {
//       user: "dabhade904@gmail.com",
//       pass: 'sachinD9765@'
//     }
//   });

//   var mailOptions = {
//     from: "dabhade904@gmail.com",
//     to: data.EMAIL,
//     subject:  "eBookStore: Order Confirmation and Details",
//     html: 'Dear ' + data.Name + " Thank you for ordering " + data.Books + " Book Your order has been placed successfully. Your order will arrive in 3-5 days on your address " + data.Address + " with shopping id will be " + data.ID+ '<p> if any query please contact- 8888948943 </p>'
//   }

//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("email send");
//     }
//   });
//   callback(null,"send mail")
// };
