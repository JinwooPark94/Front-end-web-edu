const express = require('express');
console.log(express.path);
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

// 페이 로더를 받아서 body라는 프로퍼티안에 담아줌
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// app.get('/', (req, res) => res.send('Hello World!!!!'));

app.get('/test', (req, res) => res.send('Test!!!'));

app.post('/signin', (req, res) => {
  const { username, password} = req.body;

  // GO TO DB
  // Success!
  if ( username === 'park' && password === '1234'){
    res.send({ result: true });
  } else {
    res.send({ result: false, message: '아이디와 패스워드를 확인해 주세요.' });
  }

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

