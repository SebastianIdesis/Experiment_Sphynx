// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Testing for Sphynx",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "content": "\u003Cp style=\"font-size: 24px; text-align: center;\"\u003EWelcome! Press SPACE to begin.\u003C\u002Fp\u003E\r\n"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "content": "\u003Cp style=\"font-size: 24px; text-align: center;\"\u003EThank you for participating!\u003C\u002Fp\u003E\r\n"
    }
  ]
})

// Let's go!
study.run()