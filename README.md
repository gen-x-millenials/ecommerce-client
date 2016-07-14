Ecommerce client

WDI Group Project

Our application is an eCommerce store in which a user can sign-up and into our website, can create a user profile to
store an address and credit card, can view a product's description and price, can add an item to the user's shopping cart, can purchase the order using the online payment system, Stripe, and finally, can view the user's past order history.

We built this front end very methodically by focusing around our major CRUD actions and building each one of the features out. Initially, we constructed an HTML skeleton to place buttons for our sign-up, sign-in, sign-out and change password forms.  From there, we built ajax requests to fulfill the CRUD actions of these authorization requests.

Then, we built a profiles modal which collected address and credit card information from a user to fulfill his/her profile needs.  In order to complete an order, a user must provide a payment method (credit card info) and an address to ship their order to.

Next, we built an HTML skeleton of placing dummy products on our SPA for sale.  Then we used a GET Ajax request along with handlebars and CSS in order to display all the products on the page. Then we built another ajax, so that upon clicking on an individual product on a page, we would GET that particular product's more in depth information and display it in a product information modal.

From here, we built a client side shopping cart that pushed all 'add to cart' items into a client-side kept array.  Upon checkout, this array of shopping cart items was posted to the orders database through Stripe payment authentication.

A final feature of the client-side website is the ability for a user to view past orders which is found in the profile tab.

In order for a user to use this repository, he should run "npm install" from the command line upon cloning the repository onto his local machine.

User Stories :
 - as a user, I want to be able to retrieve my order history.
 - as a user, I want to be able to make SECURE purchases through a trusted credit card payment processing third party
 - as a user, I want simplicity in design so that I can quickly and easily make purchases on this site and get onto to drinking my alcohol.
 - as a user, I want password security to log into my site so that I can securely store my credit card in my profile for purchases.

Link to our backend API :

https://github.com/gen-x-millenials/ecommerce-express-api

Links to our wireframes :

http://i.imgur.com/PoXDnVn.jpg

http://i.imgur.com/5eA4Kjx.jpg

Link to our deployed front-end app:

https://gen-x-millenials.github.io/ecommerce-client/
