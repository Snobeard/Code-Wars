## <a href="https://www.codewars.com/kata/simple-validation-of-a-username-with-regex">Username Validation</a>

#### Task

Write a simple regex to validate a username.

Allowed characters are:

`-lowercase letters` `-numbers` `-underscore`

length should be between 4 and 16 characters.

#### Examples

- `'asddsa'` => `true`
- `'a'` => `false`
- `'Hass'` => `false`
- `'Hasd_12assssssasasasasasaasasasasas'` => `false`
- `''` => `false`
- `'____'` => `true`
- `'012'` => `false`
- `'p1pp1'` => `true`
- `'asd43 34'` => `false`
- `'asd43_34'` => `true`
