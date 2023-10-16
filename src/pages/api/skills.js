const handler = async (req, res) => {
  if (req.method === "GET") {
    res.send({ Hello: "Hello World!" });
  }
};
export default handler;
