import Vaccine from "../models/vaccine";

const vaccine = async (req, res) => {
  const vaccines = await Vaccine.find();
  res.send(vaccines);
};

const create = async (req, res) => {
  const { brand, description, manufacturer } = req.body;
  const newVaccine = new Vaccine({
    brand,
    description,
    manufacturer
  });
  const savedVaccine = await newVaccine.save();
  res
    .send(savedVaccine)
    .then(() => console.log("New Vaccine Added!"), res.redirect("/vaccines"))
    .catch(error => res.status(400).json("Error" + error));
};

module.exports = {
  vaccine,
  create
};
