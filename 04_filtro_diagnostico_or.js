db.historias_clinicas.find({
  $or: [
    { "diagnosticos": { $regex: "Asma", $options: "i" } },
    { "diagnosticos": { $regex: "Hipertensión", $options: "i" } }
  ]
});
