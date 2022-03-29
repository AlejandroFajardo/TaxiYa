const vehicles = require("../model/Vehicles");

const renderVehicles = async (req, res) => {
  const vehicle = await vehicles.vehicles.find();
  req.app.locals.vehicles = vehicle;
  res.json(vehicle);
};
module.exports.renderVehicles = [renderVehicles];
