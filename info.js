export default function handler(req, res) {
  const { num, key } = req.query;

  if (!key || key !== "jhat-ke-pakode") {
    return res.status(401).json({
      success: false,
      message: "Invalid API key"
    });
  }

  if (!num) {
    return res.status(400).json({
      success: false,
      message: "Please provide ?num="
    });
  }

  return res.status(200).json({
    success: true,
    result: [
      {
        id: 1205627021,
        mobile: "7676184626",
        name: "Shivalingappa ",
        father_name: "Durugappa ",
        address: "S/O: Durugappa!257!!harijana colony!nadanga!Nadanga!Bellary!Karnataka!583114",
        alt_mobile: "",
        circle: "AIRTEL KARNATKA"
      }
    ],
    credit: "@BRONX_ULTRA"
  });
}