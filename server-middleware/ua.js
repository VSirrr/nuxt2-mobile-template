export default function (req, res, next) {
  // console.log(req.headers["user-agent"]);
  res.setHeader("Set-Cookie", "webp=true");
  next();
}
