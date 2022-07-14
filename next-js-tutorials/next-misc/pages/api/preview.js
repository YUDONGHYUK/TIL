export default function handler(req, res) {
  res.setPreviewData({ user: 'Doyu' });
  // res.end('Preview mode enabled');
  res.redirect(req.query.redirect);
}
