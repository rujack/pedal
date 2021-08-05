import Data from "../../data/lagu.json"

export default function handler (req, res) {
  res.status(200).json(Data)
}
