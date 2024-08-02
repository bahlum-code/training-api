const BillingService = require("../services/billing");

class billingController {
    create = async (req, res, next) => {

        const data = req.body;

        const result = await BillingService.createTransaction(data);

        return res.status(200).json({ message: "Create billing successfully"});
      };
    
      fetch = async (req, res, next) => {
        return res.status(200).json({ message: "transaction successfully"});
      };
    
      fetchAll = async (req, res, next) => {
        return res
          .status(200)
          .json({ message: "All transaction successfully"});
      }
    
      delete = async (req, res, next) => {
        return res
          .status(200)
          .json({ message: "transaction deleted successfully"})
      };
    
      update = async (req, res, next) => {
        return res
          .status(200)
          .json({ message: "transaction deleted successfully"})
      }
}

module.exports = new billingController()