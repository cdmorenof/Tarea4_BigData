db.historias_clinicas.aggregate([
  {
    $sort: { fecha_ultima_visita: -1 }
  }
]);
