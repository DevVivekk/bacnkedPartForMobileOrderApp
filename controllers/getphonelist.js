const phonemodel = require("../model/phonedata");
const ErrorHandler = require("../utils/errorHandler");

const getphonelist = async (req, res, next) => {
  try {
    const { phone_name, phone_price, phone_type, phone_processor, phone_os, page } = req.query;
    const query = {};
    console.log("api hit")
    //handling pagination
    let ITEM_PER_PAGE;
    if(page ==="undefined"){
       ITEM_PER_PAGE = 2;
    }else{
      ITEM_PER_PAGE=page;
    }
    if (phone_name) {
      query.phone_name = { $regex: phone_name, $options: "i" };
    }

    if (phone_price) {
      query.phone_price = phone_price;
    }

    if (phone_type) {
      query.phone_type = phone_type;
    }

    if (phone_processor) {
      query.phone_processor = phone_processor;
    }

    if (phone_os) {
      query.phone_os = phone_os;
    }
    const getdata = await phonemodel.find(query).limit(ITEM_PER_PAGE)
    return res.status(200).json(getdata);
  } catch (e) {
    console.error(e);
    return next(new ErrorHandler(e, 500));
  }
};

module.exports = getphonelist;
