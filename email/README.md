# You got mail!

[![Netlify Status](https://api.netlify.com/api/v1/badges/c3962767-a744-4095-9faa-27308923d308/deploy-status)](https://app.netlify.com/sites/gifted-hodgkin-c43264/deploys)

Page can be found at: https://gifted-hodgkin-c43264.netlify.app

# Story

The user is redirected from the Tapir shop to this mail client. She can browse the email while being distracted from incoming mails. The incoming mails are notifying her about her recent purchase at Tapir. The last incoming email has a hint to look for a fortune teller email. The inbox contains a bunch of attention seeking emails from social media platforms and the spam folder contains common spam emails. The fortune teller email can be found in the spam folder and will send the user to the next level page. All other emails will bring the user to some random page in the internet.

# ToDos

### Must have:

- [ ] add fortune teller email with link to next page
- [ ] finalize email copy of Tapir emails
- [ ] add innagram email design
- [ ] add switch email design
- [ ] update all email links/buttons with a link to giphy
- [ ] add fav icon, update app title and description

### Nice to have:

- [ ] add new message modal
- [ ] add fake contacts
- [ ] add fake settings
- [ ] allow the user to trash emails
- [ ] add date to emails and show it in the email list + email view
- [ ] personalize emails based on cookie data (name, address)

# Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Lints and fixes files

```
yarn lint
```

### Deployment

Netlify is taking care of automatic deployment with each `git push`. See `netlify.toml` for configuration.

# Bootstrap styles

Please see: https://bootstrap-vue.org/

# HowTos

## Add and update emails

Under `src/content` you can find the emails in the `email.js` file. Use the `folder` prop to define the folder "inbox", "spam", "trash".

Incoming emails can be found under `src/content/incomingEmails.js`

## Stop incoming mails

To stop the incoming emails `ALT+Click` on the "Great, take me to the inbox" button.

In Dev you can also set the `stopIncomingEmails` data property to `true` in the `NewEmail.vue` component.
