# Tekky Toi's-frontend

## Goals

#### Providing user with the ability to sign up or create an account on Tekky Toi's, where tech gear is for sale. Accessories, PC/Mac products, and Phone products are featured.

#### User can add items to cart, view cart products, add products to an official order, and add their shipping and payment information.

#### User can remove products from their carts and orders, as well as logout, if necessary.


# User Story

#### When I visit the website, I am asked if I want to sign up or log in.

#### When I sign up, I am asked my email address and password.

#### When I am in my account, I can see links to Home, My Cart, My Orders, and Logout.

#### On the main products page, I can view product images, prices, name, and descriptions. I can press "add to cart" if I want to add the product to cart.

#### After I press "add to cart", I notice that my cart item count reflects how many products I've added.

#### If I press "My cart", I can see the item I just added, and press "checkout". The "My Orders" count increases to reflect this change.

#### If I press the "My Orders" page, I can see the item I just added, and I am able to press a button named "submit", where it takes me to a page that allows me to submit my shipping information.

#### If I press the "add payment info" button, I am taken to a page where I can add my payment details. I can now see a buttons that say "submit" and "remove".

#### If I press "submit", I am taken to a page that shows the product I ordered, with the name, description, image, original price, and shipping price. I can see the date I submitted the order as well.

## HTTP Routes

* POST'/', user can sign up
* POST '/users', user can log in
* GET '/verify', user verification
* GET '/', get all products
* GET '/:id', get one product




## MVP

* New user can sign up and create a new account
* Pre-existing user can log in using their email and password
* Once logged in, a user can view all products, and nav links that say "Home", "My Cart", "My Orders".
* If a user adds an item to cart, the cart amount updates.
* If a user visits the My Cart page, they can see an added nav link named "All Products". Also, they can view a "checkout" button on the My Cart page.
* User can see a page that says "My Orders" after pressing "checkout", which allows them to view their product.
* User can add their shipping information and payment information.
* User's "My Orders" page reflects their shipping and payment information, the date they ordered, and the product information of the product they selected.



## Stretch Goals
