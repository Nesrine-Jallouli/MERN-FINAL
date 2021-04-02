/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState} from 'react';
import {Row, Col, Container,Form,FormGroup, Label, Button,input} from 'reactstrap'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import { Component } from 'react'
import axios from 'axios'
import Footer from './../components/Footer'
import bgimage from './../images/jobpic.png'
import bgimage2 from './../images/ben_img.jpg'
import { Jumbotron} from 'reactstrap';
import {getOffres} from './../JS/actions/indexOffre';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import JobCard from './../components/JobCard'
const Home = () => {
  const jobs = useSelector((state) => state.reducerJob.jobs)
  const [titleSearch, settitleSearch] = useState("");
  const [nameEntrepriseSearch, setnameEntrepriseSearch] = useState("");
  const dispatch = useDispatch();
  const getAllOffres = () => {
    dispatch(getOffres());
  };

  useEffect(() => {
    getAllOffres();
  }, []);
 
    return (
      <div>   
     
     {/* Header */}
      {/* <Content/> */}
      <Jumbotron fluid style={{backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}} className="text-light">
        <h1 className="display-3 text-center">Welcome</h1>
        <p className="lead text-center">The Best Online Recruitment and Assessment Platform for Leading Information companies.</p>
        <hr className="my-2 text-center" />
        <p className="text-center">Filter candidates who are not relevant to the pre-assessment questionProfile your candidates efficiently with online psychometric assessments
        Test solution from start to finish (including testing, selection and placement centers)</p>
        <p className="lead text-center">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <div className="container" >
        <Form inline className="Search-header">
       {/* search {data.name} */}
      <FormGroup>
        <input type="text" name="name"  placeholder="rechercher par domaine" className ="form-control"  />
        <input type="text" name="company"  placeholder="recherche par entreprise" className ="form-control" />

        <Button className="btn btn-success "  >Search</Button>
      
      </FormGroup>
    </Form>
    </div>
      <div>
        {/* {jobs
        .filter(
          (jobs) =>
          jobs.nameEntrepriseSearch .toLowerCase().includes(setnameEntrepriseSearch.toLowerCase().trim())
            &&
            jobs.titleSearch.toLowerCase().includes(settitleSearch.toLowerCase().trim())
        )} */}


          {/* {jobs.filter((e) => e.titre .includes (titleSearch).map((el, i) => (
                  <JobCard job={el} key={i} />
                )))} */}
      </div>


      
      {/* <Container> */}
          {/* <OffreCard /> */}
          <div>
          {jobs.map((el, i) => (
                  <JobCard job={el} key={i} />
                ))}
              </div>
      {/* </Container> */}
      <Footer/> 
      </div>
    )
  }

export default Home;
