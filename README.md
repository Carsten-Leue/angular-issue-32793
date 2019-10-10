# Test project

Test project for https://github.com/angular/angular/issues/32793

## Testcase

- Build the project using `ng build --prod`
- In the build output search for the string `TestDirective`

### Expected result

The string `TestDirective` should be part of the bundle both in ivy mode as well as in non-ivy mode (in production builds).

### Actual result

The string `TestDirective` is only part of the bundle in non-ivy mode.