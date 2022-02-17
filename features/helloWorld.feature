Feature: To test a website

Scenario: Loading webpage
  Given A webpage as "https://josdem.io/"
  When I get page title
  Then I validate title is "josdem"