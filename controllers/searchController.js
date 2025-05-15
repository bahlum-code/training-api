const searchDoctorsService = require("../services/search");

class SearchController {
  search = async (req, res) => {
    try {
      const doctors = await searchDoctorsService.searchDoctors(req.params.q);
      res.status(200).json(doctors);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

module.exports = new SearchController();
