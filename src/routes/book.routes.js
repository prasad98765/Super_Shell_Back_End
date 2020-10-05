module.exports = app => {
  const USER_INFO_CONTROLLER = require("../controller/userInfo.controller");
  var multer = require("multer");
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./upload/");
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    }
  });

  app.post("/Producinfo", USER_INFO_CONTROLLER.userDetails)
  app.post("/GetProducinfo", USER_INFO_CONTROLLER.getProduct)

  app.post("/DelectProduct", USER_INFO_CONTROLLER.delectProduct)
  app.post("/sendEmail",  USER_INFO_CONTROLLER.sendMail)


  app.post("/sendEnquiryEmail",  USER_INFO_CONTROLLER.sendEnquiryMail)
  app.post("/UpdateProduct", USER_INFO_CONTROLLER.updateproduct)

  app.post("/distributorshipFrom", USER_INFO_CONTROLLER.distributorshipFrom)

  app.post("/customerDetails",  USER_INFO_CONTROLLER.customerDetails)


  app.post("/FindProduct", USER_INFO_CONTROLLER.findProduct)


  app.post("/image", upload.single("filePath"), (req, res, next) => {
    res.send({
      type: "GET",
      url: "http://localhost:5000/" + req.file.path
    });
  });
  
};


 
