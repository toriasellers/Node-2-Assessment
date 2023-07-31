### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON web token

- What is the signature portion of the JWT?  What does it do?
verfies the sender of the JWT
- If a JWT is intercepted, can the attacker see what's inside the payload?
yes
- How can you implement authentication with a JWT?  Describe how it works at a high level.
a client application must send a jwt in the authorization header of the http request to your backend api
- Compare and contrast unit, integration and end-to-end tests.
Unit tests are first lines of defend against bugs, integration tests check whether parts of code are interacting successfully, E2E tests verify codes deployed behavior from a user perspective
- What is a mock? What are some things you would mock?
a technique used for unit testing where any code or noncode dependencies are swapped out
- What is continuous integration?
automating the integration of code changes from multiple contributiors into a single software project
- What is an environment variable and what are they used for?
determined values to proivde the ability that can affect the way programs applications and services behave
- What is TDD? What are some benefits and drawbacks?
test driven development
- What is the value of using JSONSchema for validation?
the value can be any valid json asserts constraints on the structure of instance data
- What are some ways to decide which code to test?
unit testing
- What does `RETURNING` do in SQL? When would you use it?
used to uncondtionally and immediatiely end a sql procedure by returning the flow of control to the caller of the stored procedure
- What are some differences between Web Sockets and HTTP?
websockets are faster than http
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I hated both flask and express but I think I'd choose flask over express and node LOL