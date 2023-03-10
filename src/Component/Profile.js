import React from "react";
import './profile.css';
import Education from './education'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Profile() {
  return (<Router>
    <div id="container">

    <header>
        <div className="quoteoftheday">Profile</div>
        <div className="name"></div>
    </header>

    <article>

        <div className="quote">
            <h1> People don't care about what you say, they care about what you build. </h1>
        </div>

        <div className="quoteby">
            <h4>Amber Younus</h4>
        </div>

    </article>

    <footer>

        <div className="skills">
            <h6>Menu</h6>
            <ul>
                <li><Link to='/'>Introduction</Link></li>
                <li><Link to='/education'>Education</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>

        <Switch>
          <Route exact path="/">
          <div className="content">
            <p>Hello , I am <strong> Amber </strong>, I am intending to study a computing related subject as I think that the future will be all about computers and they are also becoming ever more necessary in all jobs and everyday life. Throughout school, my interest in computers has always been second to none as I took standard grade and higher and achieved good grades for both.</p>
        </div>
           
          </Route>
          <Route exact path="/education">
            <Education/>
         
          
          </Route>
          <Route exact path="/contact">
          <div className="content">
            <p>For Email Address: amberyounus22@gmail.com</p>
        </div>
           
          </Route>
        </Switch>
    
 

    </footer>
</div>
</Router>
  );
}

