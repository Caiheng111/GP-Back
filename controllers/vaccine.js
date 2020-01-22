const Vaccine = require("../models/vaccines");

const VaccineList = async (req, res) => {
  const vaccines = await Vaccine.find();
  res.send(vaccines);
};

// const VaccineList = async (req, res) => {
//   const query = await Vaccine.find({});
//   query instanceof mongoose.Query;
//   const vaccines = await query;
//   res.send(vaccines);
//   return res;
// };

// const create = async (req, res) => {
//   const { brand, description, manufacturer } = req.body;
//   const newVaccine = new Vaccine({
//     brand,
//     description,
//     manufacturer
//   });
//   const savedVaccine = await newVaccine.save();
//   res
//     .send(savedVaccine)
//     .then(() => console.log("New Vaccine Added!"), res.redirect("/vaccines"))
//     .catch(error => res.status(400).json("Error" + error));
// };

module.exports = {
  VaccineList
};
