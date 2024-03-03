import { OPERATION_SUCCESS,OPERATION_FAILED } from "../functions/response.js";
import dummy_details from "../models/fresher_bot.models.js";



export const createDummyTable = async (req, res) => {
    
    const { S_no,Customer_Name,Age,Phone_Number,Location,} = req.body;
    console.log(`req`,req.body)
    if (!S_no&&!Customer_Name &&!Age&&!Phone_Number&& !Location) {
      return res.status(400).json(OPERATION_FAILED("Fields are missing"));
    }
  
    try {
      const checkDummy = await dummy_details.findOne({
        where: { S_no:S_no,Customer_Name: Customer_Name,Age:Age,Phone_Number:Phone_Number, Location: Location },
      });
  
      if (checkDummy) {
        return res.status(400).json(OPERATION_FAILED("DummyTable already exists"));
      }
      let Dummy = {
        S_no: S_no,
        Customer_Name: Customer_Name,
        Age:Age,
        Phone_Number:Phone_Number,
        Location: Location,

      };
  
      // Create the DummyTable in the dummy_details collection
      const createDummyTable = await dummy_details.create(Dummy);
  
      if (createDummyTable) {
        
        return res.status(200).json(OPERATION_SUCCESS("DummyTable created successfully", createdDepartment));
      } else {
       
        return res.status(400).json(OPERATION_FAILED("Error while creating DummyTable"));
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(OPERATION_FAILED("Caught exception in DummyTable creation", error));
    }
  };



export const getDummyTableByCustomer_Name = async (req, res) => {
  const Customer_Name = req.query.Customer_Name;
  
    // Check if ID is provided
  if (!Customer_Name) {
    return res.status(400).json(OPERATION_FAILED("Customer_Name is required"));
    }
  
    try {
      // Find the DummyTable with the provided Customer_Name
      let checkDummy = await dummy_details.findOne({
        where: { Customer_Name: Customer_Name },
      });
  
      if (checkDummy) {
          
  
        // Return the retrieved department
        return res
          .status(200)
          .json(OPERATION_SUCCESS("Fetched DummyTable successfully", checkDummy));
      } else {
  
        // Return error message if DummyTable is not found
        return res
          .status(400)
          .json(OPERATION_FAILED("Fetching DummyTable failed"));
      }
    } catch (error) {
      console.log(error);
      
  
      // Return error message if an exception occurred
      res
        .status(500)
        .json(
          OPERATION_FAILED("Caught exception while fetching DummyTable", error)
        );
    }
  };




  export const getDummyTableByLocation = async (req, res) => {
    const Location = req.query.Location;
  
    // Check if Loction is provided
    if (!Location) {
      return res.status(400).json(OPERATION_FAILED("Location is required"));
    }
  
    try {
      // Find the DummyTable with the provided Location
      let checkDummy = await dummy_details.findOne({
        where: { Location: Location },
      });
  
      if (checkDummy) {
          
  
        // Return the retrieved DummyTable
        return res
          .status(200)
          .json(OPERATION_SUCCESS("Fetched DummyTable successfully", checkDummy));
      } else {
  
        // Return error message if department is not found
        return res
          .status(400)
          .json(OPERATION_FAILED("Fetching DummyTable failed"));
      }
    } catch (error) {
      console.log(error);
      
  
      // Return error message if an exception occurred
      res
        .status(500)
        .json(
          OPERATION_FAILED("Caught exception while fetching DummyTable", error)
        );
    }
  };


  export const getallDummyTables = async (req, res) => {
    const Phone_Number = req.query.Phone_Number;
  
    // Check if ID is provided
    // if (!id) {
    //   return res.status(400).json(OPERATION_FAILED("id is required"));
    // }
  
    try {
      // Find the department with the provided ID
      let checkDummy = await dummy_details.findAll({
       where: { Phone_Number:Phone_Number  },
      });
  
      if (checkDept) {
          
  
        // Return the retrieved department
        return res
          .status(200)
          .json(OPERATION_SUCCESS("Fetched department successfully", checkDept));
      } else {
  
        // Return error message if department is not found
        return res
          .status(400)
          .json(OPERATION_FAILED("Fetching department failed"));
      }
    } catch (error) {
      console.log(error);
      
  
      // Return error message if an exception occurred
      res
        .status(500)
        .json(
          OPERATION_FAILED("Caught exception while fetching department", error)
        );
    }
  }

