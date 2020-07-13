@smoketest
Feature: Add 2 items to the cart and Place an Order

    Scenario: As a Customer, I want to place an order for 2 items
    Given I land on the homepage
    And I Sign in
    When I add 2 items to the cart
    Then I click on Proceed to Checkout
    Then I click on Proceed to Checkout on OrderStep1 Page
    And I accept terms of services
    And I choose the Payment type
    And I Successfully complete my Order
