import express from "express";
const app = express();

const API_KEY = process.env.API_KEY || "jhat-ke-pakode";

app.get("/info", (req, res) => {
  const { num, key } = req.query;

  if (!key || key !== API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Invalid API key"
    });
  }

  if (!num) {
    return res.json({
      success: false, 
      message: "Please provide ?num="
    });
  }

  const data = {
    success: true,
    result: [
      {
        id: 1205627021,
        mobile: "7676184626",
        name: "Shivalingappa ",
        father_name: "Durugappa ",
        address: "S/O: Durugappa!257!!harijana colony!nadanga!Nadanga!Bellary!Karnataka!583114",
        circle: "AIRTEL KARNATKA",
        alt_mobile: "",
        id_number: "",
        email: ""
      }
    ],
    credit: "@CodeVortexHere"
  };

  return res.json(data);
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Server running on ${port}`));
