import React from 'react';
import dbm from "../Components/dbms2.jpg"
const Dbmscontent=()=>
    {
        return(
            <div>
            
            <h1>hiii</h1>
           
      <h1 >Database Management System (DBMS)</h1>
      <p>
         A Database Management System (DBMS) is a software system that enables users to define, create, maintain, and manipulate databases. It provides an interface between the database and the users or applications, allowing them to access and manage data efficiently.
      </p>
      <h2>DBMS Functions</h2>
      <ul>
        <li>Data Definition: Defining the database structure, including specifying data types, relationships between data elements, and constraints.</li>
        <li>Data Manipulation: Inserting, updating, deleting, and retrieving data from the database using queries and commands.</li>
        <li>Data Security: Enforcing access control to ensure that only authorized users can access and modify the data.</li>
        <li>Data Integrity: Maintaining the accuracy, consistency, and reliability of the data through validation rules and constraints.</li>
        <li>Concurrency Control: Managing simultaneous access to the database by multiple users or applications to prevent conflicts and ensure data consistency.</li>
        <li>Backup and Recovery: Providing mechanisms for backing up data and recovering it in case of system failures or data corruption.</li>
      </ul>
      <h2>Types of Databases</h2>
      
      <h2>Databases Cheat Sheet</h2>
      <ul>
        <li><a href="#">SQL Cheat Sheet</a></li>
        <li><a href="#">SQL Command Cheat Sheet</a></li>
        <li><a href="#">MySQL Cheat Sheet</a></li>
        <li><a href="#">PL/SQL Cheat Sheet</a></li>
        <li><a href="#">PostgreSQL Cheat Sheet</a></li>

        <img src={dbm} alt="dbms picture"  style={{ display: 'block', margin: 'auto' }}/>
      
      <h4>Relational Model :</h4>
    <li>Relational Model</li>
    <li>Keys in Relational Model (Candidate, Super, Primary, Alternate and Foreign)</li>  
    <li>Number of possible Superkeys</li>
    <li>Anomalies in Relational Model</li>
    <li>Mapping from ER Model to Relational Model</li>
    <li>Strategies for Schema design</li>
    <li>Schema Integration</li>
    <li>Star Schema in Data Warehouse modeling</li>
    <li>Data Warehouse Modeling | Snowflake Schema</li>
    <li>Dimensional Data Modeling</li> 
    </ul> 
    </div>

        )
    }
export default Dbmscontent