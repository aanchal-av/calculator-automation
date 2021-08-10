Feature: As a user I should be able to perform all the non arithmetic operations on the calculator

    Background: I should be able to launch the calculator application
        Given I launch the calculator application
        And I should see "0" in the display


    Scenario: I should be able to clear the numbers in the display
        And I enter "7" positive number
        When I click "AC" button
        Then I should see "0" in the display

    Scenario: I should see a negative number when sign function is clicked once
        And I enter "7" positive number
        When I click "+/-" button
        Then I should see "-7" in the display

    Scenario: I should see a positive number when sign function is clicked twice
        And I enter "7" positive number
        And I click "+/-" button
        When I click "+/-" button
        Then I should see "7" in the display

    Scenario: I should see a positive number when a negative number is entered sign function is clicked once
        And I enter "7" negative number
        When I click "+/-" button
        Then I should see "7" in the display
