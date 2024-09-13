const searchService = require("../services/search");

class SearchController {

  fetch = async (req, res) => {
    try {
      const doctors = await searchService.getDoctorByQuery(req.params.q);
      res.status(200).json(doctors);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  fetchAll = async (req, res) => {
    try {
      const doctors = await searchService.getAllDoctors();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

}

module.exports = new SearchController();
