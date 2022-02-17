Feature: Ordering pizza

Scenario: Loading webpage
  Given A order page as "http://localhost:8080"
  When I enter customer information
  And I select pizza
  Then I validate items