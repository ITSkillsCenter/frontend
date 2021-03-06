import { NotificationManager } from 'react-notifications';
import { hideLoader } from './loader';

var validation = {
  isEmailAddress:function(str) {
      var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return pattern.test(str);  // returns a boolean
  },
  isNotEmpty:function (str) {
      var pattern =/\S+/;
      return pattern.test(str);  // returns a boolean
  },
  isNumber:function(str) {
      var pattern = /^\d+$/;
      return pattern.test(str);  // returns a boolean
  },
  isSame:function(str1,str2){
      return str1 === str2;
  },
  isPhoneNumber: (str) => {
    // const pattern = /^[\d+-]{3,15}$/;
    const pattern = /^\d{10}$/;
    return pattern.test(str);
  },
  isBvnNumber: (str) => {
    // const pattern = /^[\d+-]{3,15}$/;
    const pattern = /^\d{11}$/;
    return pattern.test(str);
  },
  isLetterOnly: (str) => {
    const pattern = /^[a-z]{2,40}$/i;
    return pattern.test(str);
  },
  isNameOnly: (str) => {
    const pattern = /^(?=.{1,50}$)[a-z]+(?:['-_.\s][a-z ]+)*$/i;
    return pattern.test(str);
  }
};


const validateQualification = (name, value, otherValue) => {
  let error = false;
  if(name === 'endDate'){
    if (new Date(value) < new Date(otherValue)) {
      return {
        error,
        errorMessage: 'Invalid date, you can not select a day before start date'
      }
      
    }
  }

  if(name === 'startDate'){
    if (new Date(value) > new Date(Date.now())) {
      return {
        error,
        errorMessage: 'Invalid date, you can only select a day before today'
      }
      
    }
  }

  return {
    error: true
  }
}

const validatePreviousExperience = (name, value, otherValue) => {
  let error = false;
  if(name === 'endDate'){
    if (new Date(value) < new Date(otherValue)) {
      return {
        error,
        errorMessage: 'Invalid date, you can not select a day before start date'
      }
      
    }

    if (new Date(value) > new Date(Date.now())) {
      return {
        error,
        errorMessage: 'Invalid date, you can not select a day after today'
      }
      
    }
  }

  if(name === 'startDate'){
    if (new Date(value) > new Date(Date.now())) {
      return {
        error,
        errorMessage: 'Invalid date, you can only select a day before today'
      }
      
    }
  }

  return {
    error: true
  }
}


const validateD = (name, value) => {
  let error = false;

  if(name === 'accountNumber'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error: true
      }
    } else if(!(validation.isPhoneNumber(value))){
      return {
        error,
        errorMessage: 'Account number must be valid: 10 characters and only numbers'
      }
    }

    return {
      error: true
    }
  }
  
  if(name === 'employerName'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error,
        errorMessage: 'Employer name cannot be less than 1 character'
      }
    }

    // console.log(validation.isNameOnly(value))
    // if(!(validation.isNameOnly(value))){
    //   return {
    //     error,
    //     errorMessage: 'Employer name should only contain alphabets'
    //   };
    // }

    return {
      error: true
    }
  }

  if(name === 'phoneNumber'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error: true
      }
    } else if(!(validation.isPhoneNumber(value))){
      return {
        error,
        errorMessage: 'Phone number must be valid: 10 characters and only numbers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'firstName'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error,
        errorMessage: 'First name cannot be less than 1 character'
      }
    }

    // console.log(validation.isNameOnly(value))
    // if(!(validation.isNameOnly(value))){
    //   return {
    //     error,
    //     errorMessage: 'First name should only contain alphabets'
    //   };
    // }

    return {
      error: true
    }
  }

  if(name === 'lastName'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error,
        errorMessage: 'Surname cannot be less than 1 character'
      }
    }
  
    // if(!(validation.isNameOnly(value))){
    //   return {
    //     error,
    //     errorMessage: 'Surname should only contain alphabets'
    //   }
    // }

    return {
      error: true
    }
  }

  if(name  === 'middleName'){
    // if (value === '' || value === null || value === undefined || !value.length){
    //   return {
    //     error,
    //     errorMessage: 'Middle name cannot be less than 1 character'
    //   }
    // }
    
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error: true
      }
    }

    // if(!(validation.isNameOnly(value))){
    //   return {
    //     error,
    //     errorMessage: 'Middle name should only contain alphabets'
    //   }
    // }

    return {
      error: true
    }
  }

  if(name === 'email'){
    if(!(validation.isEmailAddress(value))){
      return {
        error,
        errorMessage: 'Please enter a valid email address'
      }
    }
    
    return {
      error: true
    }
  }

  if(name === 'bvn'){
    if (value !== ''){
      console.log(value)
      if(!(validation.isBvnNumber(value))){
        return {
          error,
          errorMessage: 'Bvn must be valid: 11 characters and only numbers'
        }
      }
    }

    return {
      error: true
    }
  }

  if(name === 'mobilePhone'){
    if(!(validation.isPhoneNumber(value))){
      return {
        error,
        errorMessage: 'Mobile phone must be valid: 10 characters and only numbers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'homePhone'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error: true
      }
    } else if(!(validation.isPhoneNumber(value))){
      return {
        error,
        errorMessage: 'Home phone must be valid: 10 characters and only numbers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'nationality'){
    if (value === '' || value === null || value === undefined ){
      return {
        error,
        errorMessage: 'Nationality is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'currentAddress'){
    if (value === '' || value === null || value === undefined ){
      return {
        error,
        errorMessage: 'Current Address is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'gender'){
    if (value === '' || value === null || value === undefined ){
      return {
        error,
        errorMessage: 'Gender is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'noOfDependant'){
    if(!(validation.isNumber(value))){
      return {
        error,
        errorMessage: 'Number of dependants can only be positive integers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'noOfImmediateFamily'){
    if(!(validation.isNumber(value))){
      return {
        error,
        errorMessage: 'Number of immediate family can only be positive integers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'dob'){
    if (value === '' || value === null || value === undefined ){
      return {
        error,
        errorMessage: 'Date of birth is required'
      }
    }

    let today = new Date();
    let newDob = new Date(value);
    if(((today.getFullYear() - newDob.getFullYear()) < 16) || ((today.getFullYear() - newDob.getFullYear()) > 70)){
      return {
        error,
        errorMessage: 'Date of birth cannot be less than 16 years and greater than 70 years'
      }
    }

    return {
      error: true
    }
  }
}


const validateData = (postData) => {
  let error = false;
  const {
        firstName,
        lastName,
        // middleName,
        email,
        mobilePhone,
        homePhone,
        nationality,
        dob,
        gender,
        currentAddress,
        currentCountry,
        currentState,
        currentLga,
        currentCity,
        lga,
        maritalStatus,
        noOfDependants,
        noOfImmediateFamily,
        permanentAddress,
        permanentCountry,
        permanentState,
        permanentLga,
        permanentCity,
        currentLandmark,
        permanentLandmark,
        bankName,
        accountNumber
      } = postData;

    if (firstName === '' || firstName === null || firstName === undefined){
      return {
        error,
        type: 'firstName',
        errorMessage: 'First name is required'
      }
    }

    if (lastName === '' || lastName === null || lastName === undefined){
      return {
        error,
        type: 'lastName',
        errorMessage: 'Surname is required'
      }
    }

    // if (middleName === '' || middleName === null || middleName === undefined || middleName.length < 3){
    //   return {
    //     error,
    //     type: 'middleName',
    //     errorMessage: 'Middle name is required'
    //   }
    // }

    if (email === '' || email === null || email === undefined || email.length < 3){
      return {
        error,
        type: 'email',
        errorMessage: 'Email is required'
      }
    }

    if (gender === '' || gender === null || gender === undefined ){
      return {
        error,
        type: 'gender',
        errorMessage: 'Gender is required'
      }
    }

    if (dob === '' || dob === null || dob === undefined ){
      return {
        error,
        type: 'dob',
        errorMessage: 'Date of birth is required'
      }
    }

    if (mobilePhone === '' || mobilePhone === null || mobilePhone === undefined || mobilePhone.length < 3){
      return {
        error,
        type: 'mobilePhone',
        errorMessage: 'Mobile phone is required'
      }
    }

    if (homePhone === '' || homePhone === null || homePhone === undefined || homePhone.length < 3){
      return {
        error,
        type: 'homePhone',
        errorMessage: 'Home phone is required'
      }
    }

    if (nationality === '' || nationality === null || nationality === undefined || nationality.length < 3){
      return {
        error,
        type: 'nationality',
        errorMessage: 'Nationality is required'
      }
    }

    if (currentAddress === '' || currentAddress === null || currentAddress === undefined){
      return {
        error,
        type: 'currentAddress',
        errorMessage: 'Current Address is required'
      }
    }

    if (currentCountry === '' || currentCountry === null || currentCountry === undefined){
      return {
        error,
        type: 'currentCountry',
        errorMessage: 'Current Country is required'
      }
    }

    if (currentState === '' || currentState === null || currentState === undefined){
      return {
        error,
        type: 'currentState',
        errorMessage: 'Current State is required'
      }
    }

    if (currentLga === '' || currentLga === null || currentLga === undefined){
      return {
        error,
        type: 'currentLga',
        errorMessage: 'Current Lga is required'
      }
    }

    if (currentCity === '' || currentCity === null || currentCity === undefined){
      return {
        error,
        type: 'currentCity',
        errorMessage: 'Current City is required'
      }
    }

    if (lga === '' || lga === null || lga === undefined){
      return {
        error,
        type: 'lga',
        errorMessage: 'Lga is required'
      }
    }

    if (maritalStatus === '' || maritalStatus === null || maritalStatus === undefined){
      return {
        error,
        type: 'maritalStatus',
        errorMessage: 'Marital status is required'
      }
    }

    if (noOfDependants === ''){
      return {
        error,
        type: 'noOfDependants',
        errorMessage: 'No of dependants is required'
      }
    }

    if (noOfImmediateFamily === ''){
      return {
        error,
        type: 'noOfImmediateFamily',
        errorMessage: 'No of immediate family is required'
      }
    }

    if (permanentAddress === '' || permanentAddress === null || permanentAddress === undefined || permanentAddress.length < 3){
      return {
        error,
        type: 'permanentAddress',
        errorMessage: 'Permanent Address is required'
      }
    }

    if (permanentCountry === '' || permanentCountry === null || permanentCountry === undefined){
      return {
        error,
        type: 'permanentCountry',
        errorMessage: 'Permanent Country is required'
      }
    }

    if (permanentState === '' || permanentState === null || permanentState === undefined){
      return {
        error,
        type: 'permanentState',
        errorMessage: 'Permanent State is required'
      }
    }

    if (permanentLga === '' || permanentLga === null || permanentLga === undefined){
      return {
        error,
        type: 'permanentLga',
        errorMessage: 'Permanent Lga is required'
      }
    }

    if (permanentCity === '' || permanentCity === null || permanentCity === undefined){
      return {
        error,
        type: 'permanentCity',
        errorMessage: 'Permanent City is required'
      }
    }

    if (currentLandmark === '' || currentLandmark === null || currentLandmark === undefined){
      return {
        error,
        type: 'currentLandmark',
        errorMessage: 'Current Landmark is required'
      }
    }

    if (permanentLandmark === '' || permanentLandmark === null || permanentLandmark === undefined){
      return {
        error,
        type: 'permanentLandmark',
        errorMessage: 'Permanent Landmark is required'
      }
    }

    if (bankName === '' || bankName === null || bankName === undefined){
      return {
        error,
        type: 'bankName',
        errorMessage: 'Bank Name is required'
      }
    }

    if (accountNumber === '' || accountNumber === null || accountNumber === undefined){
      return {
        error,
        type: 'accountNumber',
        errorMessage: 'Account Number is required'
      }
    }

    return {
      error: true
    }
}



const validateEmploymentInfoForm = (postData) => {
  let error = false;
  const {
    rank,
    dateOfResumption,
    branchId,
    jobTitle,
    unitId,
    salaryAmount,
    employeeNumber,
    employmentDate,
    departmentId,
    staffCategory
  } = postData;

  if (rank === '' || rank === null || rank === undefined){
    return {
      error,
      type: 'rank',
      errorMessage: 'Rank at employment field is required'
    }
  }

  if (staffCategory === '' || staffCategory === null || staffCategory === undefined){
    return {
      error,
      type: 'staffCategory',
      errorMessage: 'Staff category is required'
    }
  }

  // if (unitId === '' || unitId === null || unitId === undefined){
  //   return {
  //     error,
  //     type: 'unitId',
  //     errorMessage: 'Unit at employment is required'
  //   }
  // }

  if (dateOfResumption === '' || dateOfResumption === null || dateOfResumption === undefined){
    return {
      error,
      type: 'dateOfResumption',
      errorMessage: 'Date of resumption is required'
    }
  }

  if (salaryAmount === '' || salaryAmount === null || salaryAmount === undefined){
    return {
      error,
      type: 'salaryAmount',
      errorMessage: 'Salary amount is required'
    }
  }

  if (branchId === '' || branchId === null || branchId === undefined){
    return {
      error,
      type: 'branchId',
      errorMessage: 'Branch at employment is required'
    }
  }

  // if (employeeNumber === '' || employeeNumber === null || employeeNumber === undefined || employeeNumber.length < 2){
  //   return {
  //     error,
  //     type: 'employeeNumber',
  //     errorMessage: 'Employee number is required'
  //   }
  // }

  if (jobTitle === '' || jobTitle === null || jobTitle === undefined){
    return {
      error,
      type: 'jobTitle',
      errorMessage: 'Job title is required'
    }
  }

  if (departmentId === '' || departmentId === null || departmentId === undefined){
    return {
      error,
      type: 'departmentId',
      errorMessage: 'Department at employment is required'
    }
  }

  if (employmentDate === '' || employmentDate === null || employmentDate === undefined){
    return {
      error,
      type: 'employmentDate',
      errorMessage: 'Employment Date is required'
    }
  }

  return {
    error: true
  }
}

const validateEmpoymentFields = (name, value, otherDate) => {
  let error = false;
  if(name === 'rank'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Rank at employment is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'dateOfResumption'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Date of resumption is required'
      }
    }

    if(new Date(value) < new Date(otherDate)){
      return {
        error,
        errorMessage: 'The Date of Resumption should be equal or higher than Employment date'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'branchId'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Branch at employment is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'jobTitle'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Job title is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'unitId'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Unit at employment is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'salaryAmount'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Salary amount is required'
      }
    }

    if(!(validation.isNumber(value))){
      return {
        error,
        errorMessage: 'Salary amount can only be positive integers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'employeeNumber'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Employment number is required'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'employmentDate'){
    if (value === '' || value === null || value === undefined){
      return {
        error,
        errorMessage: 'Employment Date is required'
      }
    }

    if (new Date(value) > new Date(Date.now())){
      return {
        error,
        errorMessage: 'Employment Date cannot be beyond today'
      }
    }

    return {
      error: true
    }
  }
}


const validateGuarantorFields = (name, value) => {
  let error = false;
  if(name === 'firstName'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error,
        errorMessage: 'First name cannot be less than 1 character'
      }
    }

    // if(!(validation.isNameOnly(value))){
    //   return {
    //     error,
    //     errorMessage: 'First name should only contain alphabets'
    //   };
    // }

    return {
      error: true
    }
  }

  if(name === 'lastName'){
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error,
        errorMessage: 'Surname cannot be less than 1 character'
      }
    }
  
    // if(!(validation.isNameOnly(value))){
    //   return {
    //     error,
    //     errorMessage: 'Surname should only contain alphabets'
    //   }
    // }

    return {
      error: true
    }
  }

  if(name  === 'middleName'){
    // if (value === '' || value === null || value === undefined || !value.length){
    //   return {
    //     error,
    //     errorMessage: 'Middle name cannot be less than 1 character'
    //   }
    // }
  
    if (value === '' || value === null || value === undefined || !value.length){
      return {
        error: true
      }
    } 
    
    // if(!(validation.isNameOnly(value))){
    //   return {
    //     error,
    //     errorMessage: 'Middle name should only contain alphabets'
    //   }
    // }

    return {
      error: true
    }
  }

  if(name === 'mobilePhone'){
    if(!(validation.isPhoneNumber(value))){
      return {
        error,
        errorMessage: 'Mobile phone must be valid: 10 characters and only numbers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'homePhone'){
    if(!(validation.isPhoneNumber(value))){
      return {
        error,
        errorMessage: 'Home phone must be valid: 10 characters and only numbers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'businessPhone'){
    if(!(validation.isPhoneNumber(value))){
      return {
        error,
        errorMessage: 'Business phone must be valid: 10 characters and only numbers'
      }
    }

    return {
      error: true
    }
  }

  if(name === 'employeeKnownDate'){
    let today = new Date();
    today.setHours(0,0,0,0);
    let newDob = new Date(value);
    // console.log(('today', today.getDate()))
    if(newDob >= today){
      return {
        error,
        errorMessage: 'Date cannot be beyond today'
      }
    }

    return {
      error: true
    }
  }
}

export {
  validateData,
  validateD,
  validateQualification,
  validateEmploymentInfoForm,
  validateEmpoymentFields,
  validateGuarantorFields,
  validatePreviousExperience
}
