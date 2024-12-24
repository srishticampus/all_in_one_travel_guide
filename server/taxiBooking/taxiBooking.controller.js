const calculateTaxiFare = async (req, res, next) => {
    try {
        const { travelDistance} = req.body;
        if (!travelDistance) {
            return res.status(400).json({message: "Please provide all the required fields"});
        }
        const baseFare = 50;
        const chargePerKM = 10;
        const totalKMCharge = travelDistance * chargePerKM;
        const totalCharge = baseFare + totalKMCharge;
        return res.status(200).json({message: "Taxi fare calculated successfully", data: totalCharge});        
    } catch (error) {
        next(error)
    }
}
module.exports = {
    calculateTaxiFare
}