$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PlaceOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Add 2 items to the cart and Place an Order",
  "description": "",
  "id": "add-2-items-to-the-cart-and-place-an-order",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1691383998,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a Customer, I want to place an order for 2 items",
  "description": "",
  "id": "add-2-items-to-the-cart-and-place-an-order;as-a-customer,-i-want-to-place-an-order-for-2-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "PlaceOrder.i_land_on_the_homepage()"
});
formatter.result({
  "duration": 6527916507,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrder.i_sign_in()"
});
formatter.result({
  "duration": 13354875756,
  "status": "passed"
});
formatter.after({
  "duration": 107455247,
  "status": "passed"
});
});