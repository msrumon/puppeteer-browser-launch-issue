# Puppeteer Issue ("Failed to launch the browser process!")

In the [troubleshooting guide](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-is-downloaded-but-fails-to-launch-on-nodejs-14), it's mentioned that the error was due to a bug in Node.js v14.0.0. This sample reprex uses Node.js v16.x (current LTS version as of 2022-05-13) in a Docker container. Still the same error is produced. Just run the following command and see it by yourself.

```bash
docker compose run --rm app
```
