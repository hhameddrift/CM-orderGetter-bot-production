require("dotenv").config();
const axios = require("axios");


const orderGetter = async (contactAttributes) => {
  const cmNumber = contactAttributes.order_number
  const requestUrl = `https://dlapi.covalentmetrology.com/api/order/v1/GetOrderStatusByCMNumberForLoggedInUser/${cmNumber}`;
  const config = {
    method: "get",
    url: requestUrl,
    headers: {
      Accept: "*/*",
      SessionToken: `${contactAttributes.session_token}`,
    }
    
  };
  return axios(config)
    .then((res) => {
    
    if (res.data.success == true) {
        console.log(response.data.data.opStatus)
              return res.data.data.opStatus

    }
    else {
      console.log("ERROR - Request Status message ---> " + response.data.message);

    }
    
    })
    .catch((err) => {
      console.log("ERR CODE ---> " + err);
    });
};

module.exports = {
  orderGetter,
};
