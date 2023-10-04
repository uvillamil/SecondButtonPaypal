import {HOST, API_PAYPAL, API_CLIENT, API_SECRET} from '../config.js'
import axios from 'axios';

export const createOrder = async (req, res)=> {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const {data: {access_token},
} = await axios.post(`${API_PAYPAL}/v1/oauth2/token`, params, {
        auth: {
            username: API_CLIENT,
            password: API_SECRET
        }
    })

    const response = await axios.post(`${API_PAYPAL}/v2/checkout/orders`, order, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
   
   return res.json(response.data);
}
    const order = {
        intent: "CAPTURE",
        purchase_units: [
           {
            amount: {
                currency_code: 'USD',
                value: "27.02"
            },
            description: "Banking actions",
           },
        ],
        application_context: {
            brand_name: "villamilcompany.com",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: `${HOST}/capture-order`,
            cancel_url: `${HOST}/cancel-order`,
        }
    }

export const captureOrder = async (req, res)=> {
    const { token } = req.query
    const response = await axios.post(`${API_PAYPAL}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: API_CLIENT,
            password: API_SECRET,
        }
    })

    console.log(response.data)
    return res.redirect('/payed.html')
}
export const cancelPayment = (req, res) => {
    res.send("cancel-order");
}