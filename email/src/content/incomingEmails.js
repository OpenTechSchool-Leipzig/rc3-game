import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    from: "Tpapir<info@tpapir.rc3>",
    created: "",
    title: "👩🏼‍🔧 Successful registration at Tpapir",
    content: `
    Dear customer,<br/><br/>
    thank you for your registration at Tpapir.
    <br/><br>
    Your user name is: ineedtoiletpaper0349
    <br/><br>
    Please take good care of your credentials.
    <br/><br>
    Your Tpapir team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "Tpapir<info@tpapir.rc3>",
    created: "",
    title: "👍 We received your order",
    content: `
    Dear customer,<br/><br/>
    we are happy to announce that we received your order.
    <br/><br/>
    Your Tpapir team
    `,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "Tpapir<info@tpapir.rc3>",
    created: "",
    title: "🙏🏻 Thank you for your order",
    content: `
    Dear customer,<br/><br/>
    we would like to thank you for the following order:
    <br/><br/>
    Order number: 50876471
    <br/><br/>
    1 x Christmas edition scent toilet paper                                 21,50 EUR<br/>
    1 x Shipping                                                              3,80 EUR<br/>
    ----------------------------------------------------------------------------------<br/>
    Total amount including all fees and VAT:                                 25,30 EUR<br/>
    <br/><br/>
    Payment: online by credit card
    <br/><br/>
    Your Tpapir team
    `,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "Tpapir<info@tpapir.rc3>",
    created: "",
    title: "💁‍♀️ Your order was processed",
    content: `
    Dear customer,<br/><br/>
    <br/><br/>
    <br/><br/>
    Your Tpapir team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "Tpapir<info@tpapir.rc3>",
    created: "",
    title: "📦 Your order was scheduled for packaging",
    content: `
    Dear customer,<br/><br/>
    <br/><br/>
    <br/><br/>
    Your Tpapir team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "Tpapir<info@tpapir.rc3>",
    created: "",
    title: "🧚 Your order was handled and is prepared for shipping",
    content: `
    Dear customer,<br/><br/>
    <br/><br/>
    <br/><br/>
    Your Tpapir team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "Tpapir<info@tpapir.rc3>",
    created: "",
    title: "🤷 We are very sorry",
    content: `
    Dear customer,<br/><br/>
    we are reaching out to inform you of an incident.<br/>
    We have detected an issue with our internal system.
    <br/><br/>
    Unfortunately, your order has been destroyed.
    <br/><br/>
    I’d like to apologize for the impact this is having on you.<br/><br/>
    Please be assured that we will do everything we can to prevent this from happening again.
    <br/><br/>
    Your Tpapir team`,
    folder: "inbox",
    incoming: true,
    attachment: "attachment-retrograde.jpg"
  }
];
