function validate(password) {
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[\. !@#\$%\^&\*])(?=.{6,})");
  return strongRegex.test(password);
}