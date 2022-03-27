//import { Vehicles } from "./modell/Vehicles";
const vehicles = require("../model/Vehicles");
/*
export const renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};
*/
const createNewVehicle = async (req, res) => {
  const { licensePlate, owner, mobile, clas, model, brand } = req.body;
  const errors = [];
  if (!licensePlate) {
    errors.push({ text: "Please Write a license Plate." });
  }
  if (!owner) {
    errors.push({ text: "Please Write a owner" });
  }
  if (!mobile) {
    errors.push({ text: "Please Write a mobile" });
  }
  if (!clas) {
    errors.push({ text: "Please Write a clas" });
  }
  if (!model) {
    errors.push({ text: "Please Write a model" });
  }
  if (!brand) {
    errors.push({ text: "Please Write a brand" });
  }
  if (errors.length > 0) {

  } else {
    const newVehicle = new vehicles.Vehicles({ licensePlate, owner, mobile, clas, model, brand });
    await newVehicle.save();
    console.log(newVehicle);
  }
};

const renderVehicles = async (req, res) => {
  const vehicle = await vehicles.Vehicles.find().lean();
  console.log(vehicle);
  res.send("ok")
  res.render('vehicles', {title: 'vehiculos', vehicle});
};
module.exports.renderVehicles = [renderVehicles];


/*
export const renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};

export const updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Successfully");
  res.redirect("/notes");
};

export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note Deleted Successfully");
  res.redirect("/notes");
};

*/
