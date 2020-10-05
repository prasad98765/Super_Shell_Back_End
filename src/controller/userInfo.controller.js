const USER_INFO_SERVICE = require("../service/userInfo.service");
let response = {};
exports.userDetails = (req, res) => {
  console.log(req.body);
  
  try {
    req.checkBody("type").exists();
    req.checkBody("name").exists();
    req
      .checkBody("price")
      .exists();
    req
      .checkBody("nooforder")
      .isNumeric()
      .exists();
    req.checkBody("decription").exists();
    req.checkBody("imagepath").exists();
    req.checkBody("moreinfo").exists();
    const error = req.validationErrors();
    if (error) {
      console.log("in validetion error");
      
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    } else {
      var userObj = {
        TYPE : req.body.type,
        NAME: req.body.name,
        PRICE: req.body.price,
        ORDER: req.body.nooforder,
        DECRIPTION: req.body.decription,
        IMAGEPATH: req.body.imagepath,
        LIST: req.body.moreinfo,
      };
    }
    console.log("get obj",userObj);
    
    USER_INFO_SERVICE.productDetails(userObj, (err, data) => {
            if (err) {
              response = {
                success: "false",
                message: err
              };
              res.status(500).send(response);
            } else {
              response = {
                success: "true",
                message: "successfully Details given",
                data: data
              };
              res.status(200).send(response);
            }
          });
  } catch (err) {
    res.status(500).send({ message: "error while storing data" });
  }
};




exports.delectProduct = (req,res) => {
  try {
    req.checkBody("type").exists();
    req.checkBody("name").exists();

    var Delect = {
      TYPE : req.body.type,
      NAME: req.body.name,
    }
    USER_INFO_SERVICE.Deleteproduct(Delect, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully Details given",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while storing data" });
  }
}





exports.findProduct = (req,res) => {
  try {
    req.checkBody("type").exists();
    req.checkBody("name").exists();

    var Find = {
      TYPE : req.body.type,
      NAME: req.body.name,
    }
    USER_INFO_SERVICE.Findproduct(Find, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully Details given",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while storing data" });
  }
}


exports.updateproduct = (req,res) => {
  try {
    // req.checkBody("_id").exists();
    // req.checkBody("type").exists();
    // req.checkBody("name").exists();
    // req
    //   .checkBody("price")
    //   .exists();
    // req
    //   .checkBody("nooforder")
    //   .isNumeric()
    //   .exists();
    // req.checkBody("decription").exists();
    // req.checkBody("moreinfo").exists();
    // const error = req.validationErrors();
    // if (error) {
    //   console.log("in validetion error");
      
    //   Response = {
    //     success: "validetion false"
    //   };
    //   res.status(500).send(Response);
    // } else {
      var userObj = {
        _id : req.body._id,
        TYPE : req.body.type,
        NAME: req.body.name,
        PRICE: req.body.price,
        ORDER: req.body.nooforder,
        DECRIPTION: req.body.decription,
        LIST: req.body.moreinfo,
      };
      console.log(userObj);
      
    //}
    USER_INFO_SERVICE.updateproduct(userObj, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully Details given",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while storing data" });
  }
}



exports.getProduct = (req,res) => {
  try {
    req.checkBody("type").exists();

    var Find = {
      TYPE : req.body.type,
    }
    USER_INFO_SERVICE.getproduct(Find, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully Details given",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while storing data" });
  }
}
exports.sendMail = (req,res) =>{
  console.log("in send email controller");
  req.checkBody("FUllNAME").exists();
  req.checkBody("EMAIL").exists();
  req.checkBody("SUBJECT").exists();
  req.checkBody("MESSAGE").exists();

  var emailMessage = {
    fullname : req.body.FUllNAME,
    email : req.body.EMAIL,
    subject: req.body.SUBJECT,
    message : req.body.MESSAGE

  }
  USER_INFO_SERVICE.sendMail(emailMessage,(err,data)=>{
    if (err) {
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    }
    res.send(data)
  })
}


exports.sendEnquiryMail = (req,res) =>{
  console.log("in send email controller");
  req.checkBody("PRODUCT").exists();
  req.checkBody("FUllNAME").exists();
  req.checkBody("EMAIL").exists();
  req.checkBody("SUBJECT").exists();
  req.checkBody("MESSAGE").exists();

  var emailMessage = {
    product : req.body.PRODUCT,
    fullname : req.body.FUllNAME,
    email : req.body.EMAIL,
    contact: req.body.CONTACT,
    message : req.body.MESSAGE

  }
  console.log("get full name ",req.body.FUllNAME);
  
  USER_INFO_SERVICE.sendEnquiryMail(emailMessage,(err,data)=>{
    if (err) {
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    }
    res.send(data)
  })
}



exports.distributorshipFrom = (req,res) =>{
  console.log("in send email controller");
  req.checkBody("firstname").exists();
  req.checkBody("lastname").exists();
  req.checkBody("email").exists();
  req.checkBody("contact").exists();
  req.checkBody("nameofthefirm").exists();
  req.checkBody("addreddoffirm").exists();
  req.checkBody("yearofestablishment").exists();
  req.checkBody("city").exists();
  req.checkBody("state").exists();
  req.checkBody("pincode").exists();
  req.checkBody("aboutcompany").exists();

  var form = {
    firstname : req.body.firstname,
    lastname: req.body.lastname,
    email : req.body.email,
    contact: req.body.contact,
    nameofthefirm : req.body.nameofthefirm,
    addreddoffirm: req.body.addreddoffirm,
    yearofestablishment: req.body.yearofestablishment,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    aboutcompany: req.body.aboutcompany,
  }
  
  USER_INFO_SERVICE.distributorshipFrom(form,(err,data)=>{
    if (err) {
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    }
    res.send(data)
  })
}


exports.customerDetails = (req,res) =>{
  console.log("in send email controller");
  req.checkBody("firstname").exists();
  req.checkBody("lastname").exists();
  req.checkBody("email").exists();
  req.checkBody("contact").exists();
  req.checkBody("address").exists();
  req.checkBody("city").exists();
  req.checkBody("state").exists();
  req.checkBody("pincode").exists();

  var form = {
    firstname : req.body.firstname,
    lastname: req.body.lastname,
    email : req.body.email,
    contact: req.body.contact,
    nameofthefirm : req.body.address,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
  }
  
  USER_INFO_SERVICE.distributorshipFrom(form,(err,data)=>{
    if (err) {
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    }
    res.send(data)
  })
}



// exports.sendMail = (req,res) =>{
//   var books = []
//   var obj = {
//     EMAIL : req.body.EMAIL,
//     ID:req.body.ID,
//     Name : req.body.Name,
//     Address : req.body.Address,
//     Books : req.body.Books
//   }
//   USER_INFO_SERVICE.sendMail(obj,(err,data)=>{
//     if (err) {
//       Response = {
//         success: "validetion false"
//       };
//       res.status(500).send(Response);
//     }
//     res.send(data)
//   })
// }

// exports.getProducts = (req, res) => {
//   USER_INFO_SERVICE.getProducts("abc",function(err, data) {
//     if (err) {
//       res.status(404).send({
//         message: err.message || "Soame Error Occurred While Creating"
//       });
//     }
//     res.send(data);
//   });
// };

