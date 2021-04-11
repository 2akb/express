module.exports = {
  // UWAGA HASŁA NIGDY NIE KOMITOWAĆ
  db:
    'mongodb+srv://adminmw:PiesciarZ951$mw@cluster0.yyobt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  // db:'TUTAJ WPISZ SWOJE HASŁO' // moje nie jest komitowane
  keySession: ['TWOJKLUCZ'],
  maxAgeSession: 24 * 60 * 60 * 1000,
};
