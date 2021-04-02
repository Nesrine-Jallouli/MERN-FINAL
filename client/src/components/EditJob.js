import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addJob, editJob } from "../JS/actions/actionJob";
import { Link } from "react-router-dom";

const EditJob = () => {
    
  const [newJob, setNewJob] = useState({
    titre: "",
    description: "",
    dateDep: "",
    dateFin:"",
    salaire:"",
    emplacement:"",
    experience:"",
    niveauEtude:""
  });

  const dispatch = useDispatch();
  const jobId = useSelector((state) => state.reducerJob.jobId);
  const isEdit = useSelector((state) => state.reducerJob.isEdit);

  useEffect(() => {
    if (isEdit) {
      setNewJob(jobId);
    } else {
      setNewJob({ titre: "",
      description: "",
      dateDep: "",
      dateFin:"",
      salaire:"",
      emplacement:"",
      experience:"",
      niveauEtude:""});
    }
  }, [jobId, isEdit]);

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  return (
    <div className="contenue" >
    <div className="container rounded bg-white mt-4 mb-4" >
    <div className="row">
   <div className="col-md-3 border-right">
        {/* <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fdes.az.gov%2Fsites%2Fdefault%2Ffiles%2Fjob-searching.png%3Ftime%3D1576194094&imgrefurl=https%3A%2F%2Fdes.az.gov%2Ffiles%2Fjob-searchingpng&tbnid=4gLsefxii_R47M&vet=12ahUKEwjDkqvGp97vAhUEdxoKHThqAKcQMygnegUIARDOAQ..i&docid=OpqddKVUVapWEM&w=600&h=400&q=job.png&ved=2ahUKEwjDkqvGp97vAhUEdxoKHThqAKcQMygnegUIARDOAQ" /></div> */}
      </div>
      <div className="col-md-6 border-right">
        <div className="p-6 py-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Modifier Offre </h4>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
			<label className="labels">Titre</label>
			<input type="text" className="form-control" name="titre" placeholder="Enter titre de l'offre"
                  onChange={handleChange} defaultValue={newJob.titre} /></div>
            <div className="col-md-12"><label className="labels">Description</label><input type="text" className="form-control" name="description" placeholder="Enter description de l'offre"
                  onChange={handleChange}defaultValue={newJob.description}/></div>
            <div className="col-md-12"><label className="labels">Salaire</label><input type="text" className="form-control" name="salaire" placeholder="Enter salaire"
                  onChange={handleChange} defaultValue={newJob.salaire}/></div>
            <div className="col-md-12"><label className="labels">Emplacement</label><input type="text" className="form-control"  name="emplacement" placeholder="Enter l'adresse"
                  onChange={handleChange} defaultValue={newJob.emplacement}/></div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6"><label className="labels">Date depart</label><input type="date" className="form-control" name="dateDep" onChange={handleChange} defaultValue={newJob.dateDep}/></div>
            <div className="col-md-6"><label className="labels">Date fin</label><input type="date" className="form-control" name="dateFin" onChange={handleChange} defaultValue={newJob.dateFin}/></div>
          </div>
          
          <div className="row mt-3">
            <div className="col-md-6"><label className="labels">Experience</label><input type="text" className="form-control" name="experience" placeholder="Enter experience"
                  onChange={handleChange} defaultValue={newJob.experience}/></div>
            <div className="col-md-6"><label className="labels">Niveau d'étude</label><input type="text" className="form-control" name="niveauEtude" placeholder="Enter niveau d'étude"
                  onChange={handleChange} defaultValue={newJob.niveauEtude}/></div>
          </div>
          <br/>
          <div className="buttons">
          
            <Link to="/JobCardEntreprise">
            <Button
              variant="outline-primary edit-button"
              onClick={() => 
                dispatch(editJob(newJob._id, newJob))
              }
            >
               Enregistrer
            </Button>
          </Link>
          <Link to="/JobCardEntreprise"> 
          <Button variant="outline-danger edit-button">Cancel</Button>
          </Link>
         
        </div>
        </div>
      </div>
      
    </div>
  </div>

  </div>


  );
};

export default EditJob;
