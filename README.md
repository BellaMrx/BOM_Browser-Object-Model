# BOM_Browser-Object-Model
 
 - Browser Object Model - Control browser and read browser information

In browser runtime environments, the so-called **BOM (Browser Object Model)** is available in addition to the **DOM (Document Object Model)**. Using this object model, it is possible to control certain aspects of the browser (e.g. going back and forth in the browser history) and to read out certain information from the browser (e.g. information on the size and position of the current browser window).

## The Browser Object Model
The entry point for the browser object model is the global `window` object. This object represents a single browser window. This object represents a single browser window. This global object is also the entry point into the **DOM**, which is represented by the `document` object. The `document` object is actually a property of the `window` object, so it is possible to write both `document` and `window.document`.

The following objects in particular play a role in the BOM API:
 - The general properties of the `window` object to access window information.
 - The `location` property contains information on the current URL of the browser window.
 - The `history` property contains a reference to an object of the `History` type, which can be used to access and change the browser history.
 - The `navigation` property contains a reference to an object of the type `Navigator`, this object provides various general information about the browser.
 - The `screen` property contains a reference to an object of the `Screen` type, which can be used to determine various information about the screen.


## Access window information
### Determine the size and position of a browser window
There is a whole range of properties for determining the size and position of a browser window:

| Property            | Description  |
| ------------------- | ------------ | 
| `innerHeight` | Contains the height of the window content including the horizontal scrollbar. |
| `innerWidth` | Contains the width of the window content including the vertical scrollbar.|
| `outerHeight` | Contains the height of the browser window including all browser bars. |
| `outerWidth` | Contains the width of the browser window including all browser bars. |
| `screenX` | Contains the position of the browser window on the x-axis, i.e. the distance of the browser window to the left edge of the screen.  |
| `screenY` | Contains the position of the browser window on the y-axis, i.e. the distance of the browser window to the top of the screen. |
| `scrollX` | Contains the number of pixels that the web page has already been scrolled horizontally. |
| `scrollY` | Contains the number of pixels that the web page has already been scrolled vertically. |
| `pageXOffset` | An alias for `window.scrollX` |
| `pageYOffset` | An alias for `window.scrollY` |

Example:
   
 [Complete code - Part_1 - click here](https://github.com/BellaMrx/BOM_Browser-Object-Model/tree/main/BOM/Part_1)

  ```
    console.log(window.innerHeight);        // 611
    console.log(window.innerWidth);         // 780
    console.log(window.screenX);            // -7
    console.log(window.screenY);            // -7
  ```

  <img src="images/BOM_Part_1.png" width="900">


### Change the size and position of a browser window
It is also possible to change the size and position of a browser window on the screen. The `window` object offers various methods for this purpose:

| Method              | Description  |
| ------------------- | ------------ | 
| `moveBy()` | Moves the current browser window horizontally and vertically by a certain number of pixels. The first parameter determines the horizontal shift in pixels, the second parameter the vertical shift. |
| `moveTo()` | Moves the current browser window horizontally and vertically to a specific position. The first parameter determines the horizontal position in pixels, the second parameter the vertical position. |
| `resizeBy()` | Scales the current browser window horizontally and vertically by a certain number of pixels. The first parameter determines the horizontal scaling value, the second parameter the vertical scaling value. |
| `resizeTo()` | Scales the current browser window horizontally and vertically to a specific size. The first parameter determines the width, the second parameter the height. |
| `scroll()` | Scrolls the window content to a specific position. The first parameter specifies the horizontal position, the second parameter the vertical position. |
| `scrollBy()` | Scrolls the window content by a certain factor. The first parameter specifies the horizontal scroll factor, the second parameter the vertical scroll factor. |
| `scrollTo()` | Scrolls the window content to a specific position. The first parameter specifies the horizontal position, the second parameter the vertical position. |

Example:
   
 [Complete code - Part_2 - click here](https://github.com/BellaMrx/BOM_Browser-Object-Model/tree/main/BOM/Part_2)

  ```
    // Move browser window by 200 pixels horizontally and vertically
    window.moveBy(200, 200);
    // Move browser window to position (200, 200)
    window.moveTo(200, 200);
    // Enlarge browser window by 200 pixels in width and height
    window.resizeBy(200, 200);
    // Reduce browser window by 200 pixels in width and height
    window.resizeBy(-200, -200);
    // Move browser content by 200 pixels horizontally and vertically
    window.scrollBy(200, 200);
    // Move browser content to position (200, 200)
    window.scrollTo(200, 200);
  ```


### Access display information of the browser bars
A browser window usually consists of various components. In addition to the content area, in which the respective website is displayed, there is also the address bar, in which the URL can be entered. A status bar, which informs you, among other things, whether a web page has been loaded or is currently loading. These components also include the menu bar, the toolbar, bookmarks and scrollbars, which show the horizontal and vertical position of the respective web page.

| Property            | Description  |
| ------------------- | ------------ |
| `locationbar` | Contains a reference to an object that provides information on whether the address bar is displayed or not. |
| `menubar` | Contains a reference to an object that provides information on whether the menu bar is displayed or not. |
| `personalbar` | Contains a reference to an object that provides information on whether the personal bar (e.g. the bookmark bar) is displayed or not. |
| `scrollbars` | Contains a reference to an object that provides information on whether the scrollbars are displayed or not.  |
| `statusbar` | Contains a reference to an object that provides information on whether the traffic jam bar is displayed or not. |
| `toolbar` | Contains a reference to an object that provides information on whether the toolbar is displayed or not. |


### Determine general properties of the `window` object
In addition to the properties presented above, there are a few more properties:

| Property            | Description  |
| ------------------- | ------------ |
| `name` | Contains the name of the window, not the title (which is determined via `document.title`) but a name to identify the browser window as such. |
| `opener` | If you open another browser window from a browser window using JavaScript, this property contains a reference to the original window. |
| `self` | Contains a reference to an object that represents the current browser window. |


### Open new browser windows
The `open()` method is available for opening a new browser window:

Example:

 [Complete code - Part_3 - click here](https://github.com/BellaMrx/BOM_Browser-Object-Model/tree/main/BOM/Part_3)
 
  ```
   const linkOpen = document.getElementById('link-open');
   linkOpen.addEventListener('click', (e) => {
     const url = document.getElementById('url').value;
     window.open(
       url,                  // URL to be opened
       'Window title',       // Title of the window
       'width=600,' +        // Width of the window
       'height=400,' +       // Height of the window
       'resizable=yes,' +    // Size changes possible
       'scrollbars=yes,' +   // Scrollbar activated
       'status=1'            // Status bar activated
     );
   });
  ```

The URL of the website to be opened in the new window is passed to the method as the first argument. The name of the new window can optionally be specified as the second argument (not the name of the website). The third argument can also be used to influence the appearance and behavior of the window. A character string consisting of properties can be transferred here. The value of the respective property is written directly after the property using an equal sign `=`; several property-value pairs are separated by a comma.
In the example, a browser window with a width of 600 pixels (property `width`) and a height of 400 pixels (property `height`) is created in this way, which is resizable (property `resizable`) and has scrollbars and a status bar (properties `scrollbars` and `status`). The values `yes` and `no` (for `resizable`) and `1` and `0` (for `scrollbar`) are permitted for `scrollbars` and `status` and generally for those that can only assume one of two states. Alternatively, the value can also be omitted, in which case the presence of the property name is evaluated as `yes` or `1` (in the example here for `status`).

  <img src="images/BOM_Part_3.png" width="800">

Selected parameters for opening browser windows:

| Parameters     | Meaning      |
| -------------- | ------------ | 
| `height` | the height of the new browser window in pixels |
| `innerHeight` | the height of the display area of the new browser window in pixels |
| `innerWidth` | the width of the display area of the new browser window in pixels  |
| `left` | Distance from the top left corner of the new browser window to the left edge of the screen in pixels |
| `location` | Indication of whether the new browser window should have an address bar or not |
| `menubar` | Indication of whether the new browser window should have a menu bar or not  |
| `resizable` | Information on whether the new browser window can be resized or not |
| `screenX` | Distance from the top left corner of the new browser window to the left edge of the screen in pixels  |
| `screenY` | Distance from the top left corner of the new browser window to the top edge of the screen in pixels  |
| `scrollbars` | Specification of whether the new browser window should have a scrollbar or not   |
| `status` | Specification of whether the new browser window should have a status bar or not |
| `toolbar` | Specification of whether the new browser window should have a toolbar or not |
| `top` | Distance from the top left corner of the new browser window to the top edge of the screen in pixels |
| `width` | the width of the new browser window in pixels |


### Close the browser window
In contrast to the `open()` method, the `close()` method can be used to close a browser window. 

Example:

 [Complete code - Part_4 - click here](https://github.com/BellaMrx/BOM_Browser-Object-Model/tree/main/BOM/Part_4)
 
  ```
   let windowReference;
   const linkOpen = document.getElementById('link-open');
   const linkClose = document.getElementById('link-close');
   linkOpen.addEventListener('click', (e) => {
     const url = document.getElementById('url').value;
     windowReference = window.open(
       url,
       'Window title',
       'width=600,height=400,resizable,scrollbars=yes,status=1'
     );
   });
   linkClose.addEventListener('click', (e) => {
     windowReference.close();
   });
  ```

This code has only been extended by a `linkClose` button, based on the previous example. The open browser window is noted in the event listener for the `linkOpen` button. Within the event listener for the `linkCClose` button, the `close()` method is called on this object, which closes the previously opened browser window.

  <img src="images/BOM_Part_4.png" width="700">


### Further methods of the `window` object
The `window` object offers further methods. The `alert()` method can be used to open a message dialog, the `confirm()` method can be used to open a confirmation dialog and the `prompt()` method can be used to open a dialog in which a text can be entered. The `find()` method can be used to search for texts within a web page and the `print()` method can be used to print the content of the current web page.


### Execute functions time-controlled
If you want to execute certain functions within a web page with a time delay (once or repeatedly) at certain intervals, the `window` object offers two helper methods:

| Method              | Description  |
| ------------------- | ------------ | 
| `setInterval()`     | Executes a function at certain intervals. Returns an ID that can be passed as a parameter to the `clearInterval()` method in order to cancel the execution of the function. |
| `clearInterval()`   | Cancels the execution of the function that was triggered via `setInterval()`. |
| `setTimeout()`      | Executes a function after a certain period of time. Returns an ID that can be passed as a parameter to the `clearTimeout()` method to prevent the function from being executed. |
| `clearTimeout()`    | Cancels the execution of the function that was triggered via `setTimeout()`. |

The `setTimeout()` method can be used to define the time period after which a specific function is to be executed. An anonymous function or the name of the corresponding function is passed as an argument and the time period in milliseconds after which the function is to be executed is passed as a second argument.

Example:

 [Complete code - Part_5 - click here](https://github.com/BellaMrx/BOM_Browser-Object-Model/tree/main/BOM/Part_5)
 
  ```
   window.setTimeout(function() {
     console.log('Hello World');
   }, 5000);
   window.setTimeout(() => {
     console.log('Hello World');
   }, 5000);
   function printMessage() {
     console.log('Hello World');
   }
   window.setTimeout(printMessage, 5000);
  ```

Here, the first call to `setTimeout()` passes an anoynme function, the second call passes an Arrow function and the third call passes the `printMessage()` function. All three calls ensure that the passed function is executed after 5000 milliseconds (5s) and the message `Hello World` is displayed on the console.

Analogous to the `setTimeout` method, there is also the `setInterval()` method, which can be used to execute a function at certain intervals. Here too, either an anonymous function or the name of the function to be executed is passed as an argument, and the interval in milliseconds in which the function is to be executed is passed as the time argument.

Example:

 [Complete code - Part_6 - click here](https://github.com/BellaMrx/BOM_Browser-Object-Model/tree/main/BOM/Part_6)
 
  ```
   window.setInterval(function() {
     console.log('Hello World');
   }, 5000);
   windowsetInterval(() => {
     console.log('Hello World');
   }, 5000);
   function printMessage() {
     console.log('Hello World');
   }
   window.setInterval(printMessage, 5000);
  ```

All three calls to `setInterval()` cause the corresponding function to be executed every 5000 milliseconds.


## Access navigation information on the current website
The object stored in the `location` property can be used to access information about the URL that is currently loaded in the browser. 


### Access the individual components of the URL
A URL consists of various components, a protocol, the host name, a port specification, a path specification, query parameters and more.

| Protocol  | Hostname       | Path           | Filename     | Querystring |
| --------- | -------------- | -------------- | ------------ | ----------- |
| https://  | launchfree.net | /BookOfCoding/ | example.html | search?keyword=javascript&output=list |

#### The properties of **Location**
| Property      | Description     |
| ------------- | --------------- | 
| `host` 		    | Contains the entire URL |
| `protocol` 	  | Contains the protocol of the URL including the colon, e.g: `https:` |
| `host` 		    | Contains the host name of a URL, for example `launchfree.net`. If there is a port input, this is also listed, for example `launchfree.net:6000`. |
| `hostname` 	  | Contains the domain of a URL, for example `launchfree.net`. In contrast to the `host` property, `hostname` does not contain a port specification. |
| `port` 		    | Contains the port of a URL, for example `7000`. |
| `pathname` 	  | Contains the path of a URL, starting with a `/`.  |
| `search` 		  | Contains the parameters of a URL. In other words, the **query string** including a preceding question mark `?`, for example `?keyword=javascript`. Several parameter-value pairs are separated by an ampersand symbol `&`, for example `?keyword=javascript&output=list`. |
| `hash`	 	    | Contains the so-called **fragment identifier** including a preceding `#`, for example `#2-the-css-selectors` in `https://github.com/BellaMrx/CSS_Guide#2-the-css-selectors`. If you call up a URL with a fragment identifier and there is an element with the corresponding ID on the associated web page, the display area is scrolled to this element. |
| `username` 	  | Contains the user name specified in the URL, for example the value `bella` for the URL `https://bella:secret@launchfree.net`. Not all browsers support this. |
| `password` 	  | Contains the password specified in the URL, for example for the URL `https://bella:secret@launchfree.net` the value `secret`. Not all browsers support this. |
| `origin` 		  | Contains the canonical form of the URL, consisting of protocol, followed by `://` and the domain and, if the URL contains a port specification, also a colon and the port specification. |


### Access query string parameters


