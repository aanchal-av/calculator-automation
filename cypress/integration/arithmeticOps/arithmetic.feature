Feature: As a user I should be able to perform all the arithmetic operations on the calculator

    Background: I should be able to launch the calculator application
        Given I launch the calculator application
        And I should see "0" in the display

    Scenario: I should be able to perform the addition of two integer numbers
        When I perform "+" operation on two "711" and "11" positive numbers
        Then The result should be "=" to "722"

    Scenario: I should be able to perform the addition of two integer numbers
        And I enter "7" positive number
        And I enter "7" positive number
        And I perform "+" operation
        When I enter "1" positive number
        Then The result should be "=" to "78"

    Scenario: I should be able to perform the addition of two negative numbers
        When I perform "+" operation on two "1" and "7" negative numbers
        Then The result should be "=" to "-8"

    Scenario: I should be able to perform the addition of one positive and one negative number
        When I perform "+" operation on one positive "1" and one negative "7" number
        Then The result should be "=" to "-6"

    Scenario: I should be able to perform the subtraction of two integer numbers
        When I perform "-" operation on two "8" and "1" positive numbers
        Then The result should be "=" to "7"

    Scenario: I should be able to perform the subtraction of two negative numbers
        When I perform "-" operation on two "8" and "1" negative numbers
        Then The result should be "=" to "-7"

    Scenario: I should be able to perform the subtraction of one positive and one neagtive number
        When I perform "-" operation on one positive "9" and one negative "7" number
        Then The result should be "=" to "16"

    Scenario: I should be able to perform the multiplication of two integer numbers
        When I perform "x" operation on two "8" and "1" positive numbers
        Then The result should be "=" to "8"

    Scenario: I should be able to perform the multiplication of two negative numbers
        When I perform "x" operation on two "9.5" and "10.05" negative numbers
        Then The result should be "=" to "95.475"

    Scenario: I should be able to perform the multiplication of one positive and one neagtive number
        When I perform "x" operation on one positive "4" and one negative "4" number
        Then The result should be "=" to "-16"

    Scenario: I should be able to perform the division of two integer numbers
        When I perform "÷" operation on two "8" and "2" positive numbers
        Then The result should be "=" to "4"

    Scenario: I should be able to perform the division of two negative numbers
        When I perform "÷" operation on two "6" and "4" negative numbers
        Then The result should be "=" to "1.5"

    Scenario: I should be able to perform the division of one positive and one neagtive number
        When I perform "÷" operation on one positive "8" and one negative "4" number
        Then The result should be "=" to "-2"

    Scenario: I should be able to perform the percentage of a positive number
        And I enter "8" positive number
        When I click "%" button
        Then I should see "0.08" in the display

    Scenario: I should be able to perform the percentage of the sum of two positive number
        And I perform "+" operation on two "711" and "11" positive numbers
        And The result should be "=" to "722"
        When I click "%" button
        Then The result should be "=" to "722"

    Scenario: I should be able to perform the percentage of a negative number
        And I enter "-88" negative number
        When I click "%" button
        Then I should see "-0.88" in the display