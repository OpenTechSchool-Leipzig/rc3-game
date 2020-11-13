import html from "@/content/html.js";

export default [
  {
    id: "1C83A577-3609-4B22-8505-FF06EF2EA8EE",
    from: "Footbook",
    created: "",
    title: "Karsten Meißner shared a post.",
    content: "Karsten Meißner shared a post.",
    folder: "inbox"
  },
  {
    id: "EB5BA286-3C11-4675-BAAA-699DDB453611",
    from: "Footbook",
    created: "",
    title: "Anna Kauert invited you to Sunny Art opening",
    content:
      "Anna Kauert invited you to Sunny Art opening<br/><img src='https://media.giphy.com/media/LzJinu3jqfdinGWLNa/giphy.gif'>",
    folder: "inbox"
  },
  {
    id: "CFE96D43-8F0A-4EF3-ABC9-22E50D338E12",
    from: "Microsoft<customerservice@microsoft.com>",
    created: "",
    title: "Avoid suspension",
    content:
      "Your Microsoft account has been compromised. You must update it immediately or your account will be closed. Click <a href=''>here</a> to update.",
    folder: "spam"
  },
  {
    id: "5B3E1083-21B4-4778-BECA-BB2734BA01A4",
    from: "Excellent Cannabis<Nkhlsoler@blantomanr.cc>",
    created: "",
    title: "This unbelievable cure has helped millions!",
    content: html.template1({
      header: "Excellent Cannabis",
      url: "https://",
      link: "Click here"
    }),
    folder: "spam"
  }
];
