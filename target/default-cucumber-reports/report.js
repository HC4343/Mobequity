$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/API.feature");
formatter.feature({
  "name": "API Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "User should be able to get details when search any valid user with username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends GET request to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies the a record with username \"Delphine\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.verifies_the_a_record_with_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to get details when search any invalid user with username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends GET request to endpoint \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to_endpoint(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies there is no record with username \"Yasin\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.verifies_there_is_no_record_with_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to search for the posts written by any user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is able to GET endpoint \"/posts\" written by username \"Delphine\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_is_able_to_GET_endpoint_written_by_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies the 10 posts written by the user",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.verifies_the_posts_written_by_the_user(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to search for the posts written by invalid user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is able to GET endpoint \"/posts\" written by username \"Yilmaz\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_is_able_to_GET_endpoint_written_by_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies the 0 posts written by the user",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.verifies_the_posts_written_by_the_user(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate all posts\u0027comments e-mails is proper format for a username",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is able to GET all comments for each posts written by username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verifies that response status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Verifies that response content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verifies comments e-mails of \"\u003cusername\u003e\" posts are proper format",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "Delphine"
      ]
    },
    {
      "cells": [
        "Bret"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate all posts\u0027comments e-mails is proper format for a username",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is able to GET all comments for each posts written by username \"Delphine\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_is_able_to_GET_all_comments_for_each_posts_written_by_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies comments e-mails of \"Delphine\" posts are proper format",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.verifies_comments_e_mails_of_posts_are_proper_format(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all posts\u0027comments e-mails is proper format for a username",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User is able to GET all comments for each posts written by username \"Bret\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_is_able_to_GET_all_comments_for_each_posts_written_by_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies that response content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies comments e-mails of \"Bret\" posts are proper format",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.verifies_comments_e_mails_of_posts_are_proper_format(String)"
});
formatter.result({
  "status": "passed"
});
});