const Annonce = require("../models/index.js");

const getAnnonces = (req, res, next) => {
  Annonce.find({})
    .then((annonces) => {
      res.send(annonces);
    })
    .catch(next);
};

const getAnnonceByID = (req, res, next) => {
  Annonce.findById(req.params.id)
    .then((annonce) => {
      res.send(annonce);
    })
    .catch(next);
};

const createAnnonce = (req, res, next) => {
  const newAnnonce = req.body;
  Annonce.create(newAnnonce)
    .then((annonce) => {
      res.send(annonce);
    })
    .catch(next);
};

const updateAnnonceByID = (req, res, next) => {
  const { id } = req.params;

  Annonce.findByIdAndUpdate({ _id: id }, req.body)
    .then(() => {
      Annonce.findOne({ _id: id }).then((newAnnonce) => {
        res.send(newAnnonce);
      });
    })
    .catch(next);
};

const deleteAnnonceByID = (req, res, next) => {
  const { id } = req.params;
  Annonce.findByIdAndDelete({ _id: id })
    .then((annonce) => {
      res.send(annonce);
    })
    .catch(next);
};

module.exports = {
    getAnnonces,
    getAnnonceByID,
    createAnnonce,
    updateAnnonceByID,
    deleteAnnonceByID
};
