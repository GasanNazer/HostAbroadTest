$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature GitHub",
  "description": "Verify if user is able to Login in to GitHub",
  "id": "login-feature-github",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "login-feature-github;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on GitHub page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user sees their repositories",
  "keyword": "Then "
});
formatter.match({
  "location": "GitHubSteps.user_is_on_GitHub_page()"
});
formatter.result({
  "duration": 6911742800,
  "status": "passed"
});
formatter.match({
  "location": "GitHubSteps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 757597600,
  "status": "passed"
});
formatter.match({
  "location": "GitHubSteps.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 1637547000,
  "status": "passed"
});
formatter.match({
  "location": "GitHubSteps.user_sees_their_repositories()"
});
formatter.result({
  "duration": 574192300,
  "status": "passed"
});
});