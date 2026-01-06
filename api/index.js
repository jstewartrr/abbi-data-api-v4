export default async function handler(req, res) {
  res.status(200).json({
    name: "abbi-data-api-v4",
    version: "4.0.0",
    status: "active",
    description: "ABBI Data API v4"
  });
}
