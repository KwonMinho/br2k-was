/**
 * Module dependencies.
 * @private
 */
var http = require('http');


/**
 * Response prototype.
 * @public
 */

var res = Object.create(http.ServerResponse.prototype)

/**
 * Module exports.
 * @public
 */

module.exports = res

/**
 * Module variables.
 * @private
 */

var charsetRegExp = /;\s*charset\s*=/;

/**
 * Set status `code`.
 *
 * @param {Number} code
 * @return {ServerResponse}
 * @public
 */

res.status = function status(code) {

};

/**
 * Set Link header field with the given `links`.
 *
 * Examples:
 *
 *    res.links({
 *      next: 'http://api.example.com/users?page=2',
 *      last: 'http://api.example.com/users?page=5'
 *    });
 *
 * @param {Object} links
 * @return {ServerResponse}
 * @public
 */

res.links = function(links){

};

/**
 * Send a response.
 *
 * Examples:
 *
 *     res.send(Buffer.from('wahoo'));
 *     res.send({ some: 'json' });
 *     res.send('<p>some html</p>');
 *
 * @param {string|number|boolean|object|Buffer} body
 * @public
 */

res.send = function send() {

};

/**
 * Send JSON response.
 *
 * Examples:
 *
 *     res.json(null);
 *     res.json({ user: 'tj' });
 *
 * @param {string|number|boolean|object} obj
 * @public
 */

res.json = function json() {

};

/**
 * Send JSON response with JSONP callback support.
 *
 * Examples:
 *
 *     res.jsonp(null);
 *     res.jsonp({ user: 'tj' });
 *
 * @param {string|number|boolean|object} obj
 * @public
 */

res.jsonp = function jsonp(obj) {
 
};

/**
 * Send given HTTP status code.
 *
 * Sets the response status to `statusCode` and the body of the
 * response to the standard description from node's http.STATUS_CODES
 * or the statusCode number if no description.
 *
 * Examples:
 *
 *     res.sendStatus(200);
 *
 * @param {number} statusCode
 * @public
 */

res.sendStatus = function sendStatus(statusCode) {

};

/**
 * Transfer the file at the given `path`.
 *
 * Automatically sets the _Content-Type_ response header field.
 * The callback `callback(err)` is invoked when the transfer is complete
 * or when an error occurs. Be sure to check `res.sentHeader`
 * if you wish to attempt responding, as the header and some data
 * may have already been transferred.
 *
 * Options:
 *
 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
 *   - `root`     root directory for relative filenames
 *   - `headers`  object of headers to serve with file
 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
 *
 * Other options are passed along to `send`.
 *
 * Examples:
 *
 *  The following example illustrates how `res.sendFile()` may
 *  be used as an alternative for the `static()` middleware for
 *  dynamic situations. The code backing `res.sendFile()` is actually
 *  the same code, so HTTP cache support etc is identical.
 *
 *     app.get('/user/:uid/photos/:file', function(req, res){
 *       var uid = req.params.uid
 *         , file = req.params.file;
 *
 *       req.user.mayViewFilesFrom(uid, function(yes){
 *         if (yes) {
 *           res.sendFile('/uploads/' + uid + '/' + file);
 *         } else {
 *           res.send(403, 'Sorry! you cant see that.');
 *         }
 *       });
 *     });
 *
 * @public
 */

res.sendFile = function sendFile(path, options, callback) {

};

/**
 * Transfer the file at the given `path`.
 *
 * Automatically sets the _Content-Type_ response header field.
 * The callback `callback(err)` is invoked when the transfer is complete
 * or when an error occurs. Be sure to check `res.sentHeader`
 * if you wish to attempt responding, as the header and some data
 * may have already been transferred.
 *
 * Options:
 *
 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
 *   - `root`     root directory for relative filenames
 *   - `headers`  object of headers to serve with file
 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
 *
 * Other options are passed along to `send`.
 *
 * Examples:
 *
 *  The following example illustrates how `res.sendfile()` may
 *  be used as an alternative for the `static()` middleware for
 *  dynamic situations. The code backing `res.sendfile()` is actually
 *  the same code, so HTTP cache support etc is identical.
 *
 *     app.get('/user/:uid/photos/:file', function(req, res){
 *       var uid = req.params.uid
 *         , file = req.params.file;
 *
 *       req.user.mayViewFilesFrom(uid, function(yes){
 *         if (yes) {
 *           res.sendfile('/uploads/' + uid + '/' + file);
 *         } else {
 *           res.send(403, 'Sorry! you cant see that.');
 *         }
 *       });
 *     });
 *
 * @public
 */

res.sendfile = function ( ) {
 
};


/**
 * Transfer the file at the given `path` as an attachment.
 *
 * Optionally providing an alternate attachment `filename`,
 * and optional callback `callback(err)`. The callback is invoked
 * when the data transfer is complete, or when an error has
 * ocurred. Be sure to check `res.headersSent` if you plan to respond.
 *
 * Optionally providing an `options` object to use with `res.sendFile()`.
 * This function will set the `Content-Disposition` header, overriding
 * any `Content-Disposition` header passed as header options in order
 * to set the attachment and filename.
 *
 * This method uses `res.sendFile()`.
 *
 * @public
 */

res.download = function download () {
 
};

/**
 * Set _Content-Type_ response header with `type` through `mime.lookup()`
 * when it does not contain "/", or set the Content-Type to `type` otherwise.
 *
 * Examples:
 *
 *     res.type('.html');
 *     res.type('html');
 *     res.type('json');
 *     res.type('application/json');
 *     res.type('png');
 *
 * @param {String} type
 * @return {ServerResponse} for chaining
 * @public
 */

res.contentType =
res.type = function contentType(type) {

};

/**
 * Respond to the Acceptable formats using an `obj`
 * of mime-type callbacks.
 *
 * This method uses `req.accepted`, an array of
 * acceptable types ordered by their quality values.
 * When "Accept" is not present the _first_ callback
 * is invoked, otherwise the first match is used. When
 * no match is performed the server responds with
 * 406 "Not Acceptable".
 *
 * Content-Type is set for you, however if you choose
 * you may alter this within the callback using `res.type()`
 * or `res.set('Content-Type', ...)`.
 *
 *    res.format({
 *      'text/plain': function(){
 *        res.send('hey');
 *      },
 *
 *      'text/html': function(){
 *        res.send('<p>hey</p>');
 *      },
 *
 *      'appliation/json': function(){
 *        res.send({ message: 'hey' });
 *      }
 *    });
 *
 * In addition to canonicalized MIME types you may
 * also use extnames mapped to these types:
 *
 *    res.format({
 *      text: function(){
 *        res.send('hey');
 *      },
 *
 *      html: function(){
 *        res.send('<p>hey</p>');
 *      },
 *
 *      json: function(){
 *        res.send({ message: 'hey' });
 *      }
 *    });
 *
 * By default Express passes an `Error`
 * with a `.status` of 406 to `next(err)`
 * if a match is not made. If you provide
 * a `.default` callback it will be invoked
 * instead.
 *
 * @param {Object} obj
 * @return {ServerResponse} for chaining
 * @public
 */

res.format = function(obj){

};

/**
 * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
 *
 * @param {String} filename
 * @return {ServerResponse}
 * @public
 */

res.attachment = function attachment(filename) {
 
};

/**
 * Append additional header `field` with value `val`.
 *
 * Example:
 *
 *    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
 *    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
 *    res.append('Warning', '199 Miscellaneous warning');
 *
 * @param {String} field
 * @param {String|Array} val
 * @return {ServerResponse} for chaining
 * @public
 */

res.append = function append(field, val) {

};

/**
 * Set header `field` to `val`, or pass
 * an object of header fields.
 *
 * Examples:
 *
 *    res.set('Foo', ['bar', 'baz']);
 *    res.set('Accept', 'application/json');
 *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
 *
 * Aliased as `res.header()`.
 *
 * @param {String|Object} field
 * @param {String|Array} val
 * @return {ServerResponse} for chaining
 * @public
 */

res.set =
res.header = function header(field, val) {

};

/**
 * Get value for header `field`.
 *
 * @param {String} field
 * @return {String}
 * @public
 */

res.get = function(field){
  return this.getHeader(field);
};

/**
 * Clear cookie `name`.
 *
 * @param {String} name
 * @param {Object} [options]
 * @return {ServerResponse} for chaining
 * @public
 */

res.clearCookie = function clearCookie(name, options) {
 
};

/**
 * Set cookie `name` to `value`, with the given `options`.
 *
 * Options:
 *
 *    - `maxAge`   max-age in milliseconds, converted to `expires`
 *    - `signed`   sign the cookie
 *    - `path`     defaults to "/"
 *
 * Examples:
 *
 *    // "Remember Me" for 15 minutes
 *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
 *
 *    // same as above
 *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
 *
 * @param {String} name
 * @param {String|Object} value
 * @param {Object} [options]
 * @return {ServerResponse} for chaining
 * @public
 */

res.cookie = function (name, value, options) {
 
};

/**
 * Set the location header to `url`.
 *
 * The given `url` can also be "back", which redirects
 * to the _Referrer_ or _Referer_ headers or "/".
 *
 * Examples:
 *
 *    res.location('/foo/bar').;
 *    res.location('http://example.com');
 *    res.location('../login');
 *
 * @param {String} url
 * @return {ServerResponse} for chaining
 * @public
 */

res.location = function location(url) {
  
};

/**
 * Redirect to the given `url` with optional response `status`
 * defaulting to 302.
 *
 * The resulting `url` is determined by `res.location()`, so
 * it will play nicely with mounted apps, relative paths,
 * `"back"` etc.
 *
 * Examples:
 *
 *    res.redirect('/foo/bar');
 *    res.redirect('http://example.com');
 *    res.redirect(301, 'http://example.com');
 *    res.redirect('../login'); // /blog/post/1 -> /blog/login
 *
 * @public
 */

res.redirect = function redirect(url) {
 
};

/**
 * Add `field` to Vary. If already present in the Vary set, then
 * this call is simply ignored.
 *
 * @param {Array|String} field
 * @return {ServerResponse} for chaining
 * @public
 */

res.vary = function(field){
  
};

/**
 * Render `view` with the given `options` and optional callback `fn`.
 * When a callback function is given a response will _not_ be made
 * automatically, otherwise a response of _200_ and _text/html_ is given.
 *
 * Options:
 *
 *  - `cache`     boolean hinting to the engine it should cache
 *  - `filename`  filename of the view being rendered
 *
 * @public
 */

res.render = function render(view, options, callback) {
  
};

// pipe the send file stream
function sendfile(res, file, options, callback) {

}

/**
 * Stringify JSON, like JSON.stringify, but v8 optimized, with the
 * ability to escape characters that can trigger HTML sniffing.
 *
 * @param {*} value
 * @param {function} replaces
 * @param {number} spaces
 * @param {boolean} escape
 * @returns {string}
 * @private
 */

function stringify (value, replacer, spaces, escape) {
 
}
