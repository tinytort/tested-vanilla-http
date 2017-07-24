# Quiz: Tested Vanilla Http Server

Write a tested vanilla node http server:

1. If the path is `/coder` and the http method is `GET`, respond 
with `application/json` of a static object (fill in the `<...>` details for yourself):

  ```json
  { 
      "name": "<your github account name>",
      "since": "<date you started coding>"
  }
  ```
2. Any other `GET` request, respond with `<p>Hello World</p>`
3. Any other method (non-GET), response with a status code of `404`

Test:

You *only* need to write E2E `mocha`/`chai-http` tests for #1 and #2 above.

Besides your `lib` and `tests`, your repo at a minimum should include:
* `package.json`
* `.travis.yml`
* `.gitignore` (don't commit `node_modules`!)

Quiz is open book, internet, etc...

Goal is have PR with **passing travis** by end of alotted time.
