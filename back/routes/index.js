const {
    getAnnonces,
    getAnnonceByID,
    createAnnonce,
    updateAnnonceByID,
    deleteAnnonceByID,
  } = require("../controllers/annonce");
  
  const createAnnonceImmoRoutes = (app) => {
    app.get("/annonces", getAnnonces);
  
    app.get("/annonce/:id", getAnnonceByID);
  
    app.post("/annonce", createAnnonce);
  
    app.put("/annonce/:id", updateAnnonceByID);
  
    app.delete("/annonce/:id", deleteAnnonceByID);
  };
  
module.exports = createAnnonceImmoRoutes;
