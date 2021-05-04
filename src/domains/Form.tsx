import { useForm,FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import {ButtonElement} from '../components/ButtonElement';
import {InputElement} from '../components/InputElement';
import { SelectElement } from "../components/SelectElement";
import { generateArrayOfMonths, generateArrayOfDays, generateArrayOfYears, generateArrayOfGenders, generateArrayOfCourses, generateArrayOfCities, generateArrayOfStates } from '../api/getData';
import { TextareaElement } from "../components/TextareaElement";


export default function App() {
 
  const cityByState: any = {
    texas: ['ElPaso', 'Dallas'],
    florida: ['Miami', 'Orlando'],
    indiana: ['Indianapolis', 'Madison'],
    nevada: ['LasVegas', 'VirginiaCity']
  }

  const [month, setMonth] = useState([]);
  const [day, setDay] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [gender, setGender] = useState([]);
  const [courses, setCourses] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const resultMonth: any = generateArrayOfMonths();
    const resultDay: any = generateArrayOfDays();
    const resultYears: any = generateArrayOfYears();
    const resultGender: any = generateArrayOfGenders();
    const resultCourses: any = generateArrayOfCourses();
    const resultCity: any = generateArrayOfCities();
    const resultState: any = generateArrayOfStates();
    if (resultMonth?.length) {
      setMonth(resultMonth);
    }
    if (resultDay?.length) {
      setDay(resultDay);
    }
    if (resultYears?.length) {
      setYears(resultYears);
    }
    if (resultGender?.length) {
      setGender(resultGender);
    }
    if (resultCourses?.length) {
      setCourses(resultCourses);
    }
    if (resultCourses?.length) {
      setCity(resultCity);
    }
    if (resultCourses?.length) {
      setState(resultState);
    }
  }, [])

  const onChangeSelectMonth = (monthNumber:any) => {
    const newDayList:any = generateArrayOfDays(selectedYear,monthNumber);
    setDay(newDayList);
  }

  const onChangeSelectYear = (yearNumber:any) => {
    const newDayList:any = generateArrayOfDays(yearNumber,selectedMonth);
    setDay(newDayList);
  }

  const onChangeSelectState = (newState:string) => {
    const newCityList:any = generateArrayOfCities(cityByState[newState]);
    setCity(newCityList);
  }

  // const onChangeSelectGender = (newGender:any) => {
  //   setGender(newGender);
  // }

  // const onChangeSelectCourses = (newCourses:any) => {
  //   setCourses(newCourses);
  // } 

  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data:string[]) => console.log(data);

  return (
      <form className="text-sm" onSubmit={handleSubmit(onSubmit)} >
        <h1 className="text-base font-semibold">Student Name</h1>
        <div className="flex space-x-1 mb-4"> 
          <div className="w-1/3">
            <InputElement className="w-full " name="firstName" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="w-1/3">
            <InputElement className="w-full" name="middleName" />
            <label htmlFor="middleName">Middle Name</label>
          </div>
          <div className="w-1/3">
            <InputElement className="w-full" name="lastName" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <h1 className="text-base font-semibold">Birth Day</h1>
            <div className="flex space-x-1">
              <div className="w-3/5">
                <SelectElement className="w-full" name="month" id="month" data={month} onChange={onChangeSelectMonth} defaultValue={selectedMonth}/>
                <label htmlFor="month">Month</label>
              </div>
              <div className="w-2/5">
                <SelectElement className="w-full" name="day" id="day" data={day} defaultValue={selectedDay}/>
                <label htmlFor="day">Day</label>
              </div>
              <div className="w-2/5">
                <SelectElement className="w-full" name="year" id="year" data={years} onChange={onChangeSelectYear} defaultValue={selectedYear}/>
                <label htmlFor="year">Year</label>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-base font-semibold">Gender</h1>
            <SelectElement className="w-full" name="gender" id="gender" data={gender} />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-base text-gray-600 font-semibold">Address</h1>
          <InputElement className="w-full" name="addressLine" />
          <label htmlFor="streetAddress">Street Address</label>
        </div>
        <div className="mb-4">
          <InputElement className="w-full" name="addressLineTwo" />
          <label htmlFor="streetAddressLine">Street address line 2</label>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <SelectElement className="w-full" name="city" id="city" data={city}  defaultValue={selectedCity} />
            <label htmlFor="city">City</label>
          </div>
          <div className="w-1/2">
            <SelectElement className="w-full" name="state" id="state" data={state}  defaultValue={selectedState} />
            <label htmlFor="state">State / Province</label>
          </div>
        </div>
        <div className="mb-4">
          <InputElement className="w-full" name="zipCode" />
          <label htmlFor="zipCode">Postal / Zip Code</label>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="email">Student E-mail*</label>
            <InputElement className="w-full" name="email" />
            <p> example@example.com</p>
          </div>
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="mobile">Mobile Number*</label>
            <InputElement className="w-full" name="mobileNumber" />
            <p>+370 600 00000</p>
          </div>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="phone">Phone Number</label>
            <InputElement className="w-full" name="phoneNumber" />
            <p>+37060000000</p>
          </div>
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="work">Work Number</label>
            <InputElement className="w-full" name="workNumber" />
            <p>37060000000</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-base text-gray-600 font-semibold" htmlFor="company">Company</label>
          <InputElement className="w-1/2" name="company"
          />
        </div>
        <div className="mb-4">
          <label className="text-base text-gray-600 font-semibold" htmlFor="courses">Courses</label>
          <SelectElement className="w-1/2" name="courses" id="courses"  data={courses}/>
        </div>
        <div className="">
          <label className="text-base text-gray-600 font-semibold" htmlFor="comments">Additional Comments</label>
          <TextareaElement name='comments' />
        </div>
        <hr className="mt-3 border-gray-200" />
        <div className="mt-8">
          <ButtonElement type="submit" label="Submit Application" />
          <ButtonElement type="reset" label="Clear Fields" className="float-right" />
        </div >
      </form >
  );
}
