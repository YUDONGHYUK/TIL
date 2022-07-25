function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      // 사용자의 입력값이 유효하지 않을 때: 422
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    console.log(userEmail);
    // 성공적으로 리소스가 추가되었을 때: 201
    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
