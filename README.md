Ecommerce client

WDI Group Project

Our application is an eCommerce store in which a user can sign-up and into our website, can create a user profile to
store an address and credit card, can view a product, can add an item to the user's shopping cart, can
purchase the order using the online payment system, Stripe, and finally, can view the user's past history.

We built this front end very methodically by focusing around our major CRUD actions and building each one of the features out from there. Initially, we constructed an HTML skeleton to place buttons for our sign-up, sign-in, sign-out and change password forms.  From there, we built ajax requests to fulfill the CRUD actions of these authorization requests.

Then, we built a profiles modal which collected address and credit card information from a user to fulfill his/her profile needs.  Afterall, in order to complete an order, a user must provide a payment method (credit card info) and an address to ship their order to.

Next, we built an HTML skeleton of placing dummy products on our SPA for sale.  Then we used a GET Ajax request along with handlebars and CSS in order to display all the products on the page.   Then we built another ajax, so that upon clicking on an individual product on a page, we would GET that particular product's more in depth information and display it in a product information modal.

From here, we built a client side shopping cart that pushed all 'add to cart' items into a client-side kept array.  Upon checkout, this array of shopping cart items was posted to the orders database through Stripe payment authentication.

A final feature of the client-side website is the ability for a user to view past orders.  And just in case a user doesn't want his/her spouse noticing how much alcohol they've been ordering from Brewtiq, we've included a "delete" order button which will delete a order from the user's order history.  
