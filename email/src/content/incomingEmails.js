import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    from: "TPAPIR<info@tpapir.rc3>",
    created: "",
    title: "👩🏼‍🔧 Successful registration at TPAPIR",
    content: `
    Dear customer,<br/><br/>
    thank you for your registration at TPAPIR.
    <br/><br>
    Your username is: <i>ineedtoiletpaper0349</i>
    <br/><br>
    Please take good care of your credentials.
    <br/><br>
    Your TPAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tpapir.rc3>",
    created: "",
    title: "👍 We received your order",
    content: `
    Dear customer,<br/><br/>
    we are happy to announce that we received your order.
    <br/><br/>
    Your TPAPIR team
    `,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tpapir.rc3>",
    created: "",
    title: "🙏🏻 Thank you for your order",
    content: `
    Dear customer,<br/><br/>
    we would like to thank you for the following order:
    <br/><br/>
    Order number: 50876471
    <br/><br/>
    1 x Fortune Teller (4 Rolls)                                             37,00 EUR<br/>
    1 x Shipping                                                              3,80 EUR<br/>
    ----------------------------------------------------------------------------------<br/>
    Total amount including all fees and VAT:                                 40,80 EUR<br/>
    <br/><br/>
    Payment: online by credit card
    <br/><br/>
    Your TPAPIR team
    `,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tpapir.rc3>",
    created: "",
    title: "💁‍♀️ Your order was processed",
    content: `
    Dear customer,<br/><br/>
    your order was processed.
    <br/><br/>
    You can expect to hear back from us as soon as your order is ready for packaging.
    <br/><br/>
    Your TPAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tpapir.rc3>",
    created: "",
    title: "📦 Your order was scheduled for packaging",
    content: `
    Dear customer,<br/><br/>
    your order is was scheduled and will be packed soon.
    <br/><br/>
    If you have any questions please reach out.
    <br/><br/>
    Your TPAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tpapir.rc3>",
    created: "",
    title: "🧚 Your order was handled and is prepared for shipping",
    content: `
    Dear customer,<br/><br/>
    we are now preparing your order for shipping.
    <br/><br/>
    Your TPAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tpapir.rc3>",
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
    Your TPAPIR team`,
    folder: "inbox",
    incoming: true,
    attachment: "attachment-retrograde.jpg"
  }
];
