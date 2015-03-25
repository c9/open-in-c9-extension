# Cloud9 for Chrome

This is an extension for Google Chrome and Mozilla Firefox that adds 'Edit in Cloud9' buttons to websites. At this point just GitHub but feel free to add more!

### Firefox build instructions

1. Install Mozilla's [Add-on SDK](https://addons.mozilla.org/en-US/developers/builder) according to the [instructions](https://addons.mozilla.org/en-US/developers/docs/sdk/1.3/dev-guide/addon-development/installation.html).

2. Edit the build.sh script in the firefox directory; adjust CFX variable to point to the 'cfx' script provided by the SDK:

	CFX="/path/to/addon-sdk/bin/cfx"

3. Run the ./build.sh script. This copies the current version of 'githubc9.user.js' and the 48 pixel icon to the firefox extension directory and then creates the xpi archive.

This plugin is released under the MIT [License](https://github.com/c9/open-in-c9-extension/blob/master/LICENSE).
