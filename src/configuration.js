const configuration = {
  validationText: {
    protocol: 'You don\'t have a valid protocol in your url. Try using <code>https://</code> or <code>http://</code>.',
    host: 'You don\'t have a valid host. An example of a valid host would be <code>www.example.com</code>',
    path: 'You don\'t have a proper path. An example would be <code>/example</code>',
    validChars: 'Your URL has invalid characters. Please remove one or more of the following characters: <code>" < > % { } | \\ ^ ~ [ ] `</code>'
  }
}
export { configuration as default };
