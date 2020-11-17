import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    from: "TPAPIR<info@tapir.rc3>",
    created: "",
    title: "Successful registration at TPAPIR",
    content: `
    Dear customer,<br/><br/>
    thank you for your registration at TPAPIR.
    <br/><br>
    Your TAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tapir.rc3>",
    created: "",
    title: "We received your order",
    content: `
    Dear customer,<br/><br/>
    we are happy to announce that we received your order.
    <br/><br/>
    Your TAPIR team
    `,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tapir.rc3>",
    created: "",
    title: "Thank you for your order",
    content: `
    Dear customer,<br/><br/>
    we would like to thank you for the following order:
    <br/><br/>
    Order number: 50876471
    <br/><br/>
    1 x Einheitskategorie - Normalpreis                                      13,00 EUR<br/>
    1 x Servicegebühr                                                         0,49 EUR<br/>
    -----------------------------------------------------------------------------------<br/>
    Total amount including all fees and VAT:                                 13,49 EUR<br/>
    <br/><br/>
    Payment: online by credit card
    <br/><br/>
    Your TAPIR team
    `,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tapir.rc3>",
    created: "",
    title: "Your order is beeing processed",
    content: `
    Dear customer,<br/><br/>
    <br/><br/>
    <br/><br/>
    Your TAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tapir.rc3>",
    created: "",
    title: "Your order was scheduled for packaging",
    content: `
    Dear customer,<br/><br/>
    <br/><br/>
    <br/><br/>
    Your TAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tapir.rc3>",
    created: "",
    title: "Your order was handled and is prepared for shipping",
    content: `
    Dear customer,<br/><br/>
    <br/><br/>
    <br/><br/>
    Your TAPIR team`,
    folder: "inbox",
    incoming: true
  },
  {
    id: uuidv4(),
    from: "TPAPIR<info@tapir.rc3>",
    created: "",
    title: "Critical Security Notification",
    content: `
    Dear customer,<br/><br/>
    we are reaching out to inform you of additional information we have uncovered as a result of our continuing investigation of the recent security breach:
    <br/><br/>
    Unfortunately all your user data and orders have been deleted.
    <br/></br/>
    Possible reasons of the security breach is the Mercury in retrograde.
    <br/><br/>
    Last but not least, I’d like to apologize for the impact this is having on you.<br/><br/>
    Please be assured that we will do everything we can to prevent this from happening again.
    <br/><br/>
    <br/><br/>
    Your TAPIR team`,
    folder: "inbox",
    incoming: true
  }
];
