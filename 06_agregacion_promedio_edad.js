db.historias_clinicas.aggregate([
  {
    $group: {
      _id: "$sexo",
      promedio_edad: { $avg: "$edad" }
    }
  }
]);
