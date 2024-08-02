class ScheduleController {
    create = async (req, res, next) => {
        return res
            .status(200)
            .json({ message: "schedule created successfully", data:[] });
    };

    fetch = async (req, res, next) => {
        const { id } = req.params;
        return res
            .status(200)
            .json({ message: "schedule fetched by id successfully", data: [] });
    };

    update = async (req, res, next) => {
        const { id } = req.params;
        return res
            .status(200)
            .json({ message: "schedule updated successfully", data: [] });
    };

    delete = async (req, res, next) => {
        const { id } = req.params;
        return res
            .status(200)
            .json({ message: "schedule deleted successfully", data: [] });
    };
}

module.exports = new ScheduleController();
