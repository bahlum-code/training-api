const searchService = require("../services/search");

class SearchController {
  search = async (req, res) => {
    try {
      const searchResults = await searchService.search(req.params.q);
      res.status(200).json(searchResults);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

module.exports = new SearchController();
