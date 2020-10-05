const MONGOOSE = require("mongoose");

const USER_DETAIL_SCHEMA = MONGOOSE.Schema(
  {
    TYPE: { type: String, require: true },
    NAME: { type: String, require: true },
    PRICE: { type: Number, require: true },
    ORDER: { type: Number, require: true },
    DECRIPTION: { type: String, require: true },
    IMAGEURL: { type: String, require: true },
    LIST: { type: Object, require: true },
  },
  { timestamps: true }
);

const USERDETAILS = MONGOOSE.model("Tubular_Battery_Products", USER_DETAIL_SCHEMA);

exports.create = (userData, callback) => {
  const USERDETAILSS = new USERDETAILS();
  USERDETAILSS.TYPE = userData.TYPE;
  USERDETAILSS.NAME = userData.NAME;
  USERDETAILSS.PRICE = userData.PRICE;
  USERDETAILSS.ORDER = userData.ORDER;
  USERDETAILSS.DECRIPTION = userData.DECRIPTION;
  USERDETAILSS.IMAGEURL= userData.IMAGEPATH;
  USERDETAILSS.LIST = userData.LIST;

  USERDETAILSS.save()
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback({ message: "Error While Store Book Details in DataBase" }, null);
    });
};

exports.getProducts = (userData, callback) => {
  USERDETAILS.find({})
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback({ message: "Error While Store Book Details in DataBase" }, null);
    });
};

exports.delectProduct = (data,callback) => {
    USERDETAILS.deleteOne(data)
    .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback({ message: "Error While Store Book Details in DataBase" }, null);
      });
}

exports.findProduct = (data,callback) => {
    USERDETAILS.findOne(data)
    .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback({ message: "Error While Store Book Details in DataBase" }, null);
      });
}


exports.getProduct = (data,callback) => {
  USERDETAILS.find()
  .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback({ message: "Error While Store Book Details in DataBase" }, null);
    });
}

exports.updateProduct = (data,callback) => {    
    USERDETAILS.updateOne({_id:data._id},{$set:{NAME : data.NAME,
        PRICE:data.PRICE,
        ORDER:data.ORDER,
        DECRIPTION:data.DECRIPTION,
        LIST : data.LIST
    }})
    .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback({ message: "Error While Store Book Details in DataBase" }, null);
      });
}
