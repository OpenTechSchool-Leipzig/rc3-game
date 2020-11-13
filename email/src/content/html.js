export default {
  template1: (props) => {
    return `
    <div style="font-family: serif;">
      <h1>${props.header}</h1>
      <a href="${props.url}">${props.link}</a>
    </div>
  `;
  }
}
