const searchService = require("../services/search");

class SearchController {
  search = async (req, res) => {
    try {
      const q = req.params.q;
      const { page = 1, limit = 10 } = req.query;
      
      if (!q) {
        return res.status(400).json({ message: "Search query is required" });
      }
      
      const results = await searchService.searchDoctors(q, page, limit);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  getDoctorById = async (req, res) => {
    try {
      const id = req.params.id;
      
      if (!id) {
        return res.status(400).json({ message: "Doctor ID is required" });
      }
      
      const doctor = await searchService.getDoctorById(id);
      
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
      
      res.status(200).json(doctor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

module.exports = new SearchController();