db.historias_clinicas.aggregate([
  {
    $group: {
      _id: "$diagnosticos",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  }
]);
