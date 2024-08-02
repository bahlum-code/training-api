const Billing = require("../../models/billing");

class TransactionService {
    async createTransaction(data) {
        try {
            console.log('creado')
          
            // const transaction = await Transaction.bulkCreate(data);
            return { message: "Billing created successfully",  statusCode: 200 }
        } catch (error) {
            return { message: "Billing could not be created: " + error.message, statusCode: 500 }
        }
    }
}

module.exports = new TransactionService();