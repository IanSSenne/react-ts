import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import {ButtonElement} from '../components/ButtonElement';
import {InputElement} from '../components/InputElement';


export default function App() {
  
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [years, setYears] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [gender, setGender] = useState('');
  const [courses, setCourses] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');



  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data:string[]) => console.log(data);

  return (
      <form className="text-sm" onSubmit={handleSubmit(onSubmit)} >
        <h1 className="text-base font-semibold">Student Name</h1>
        <div className="flex space-x-1 mb-4"> 
          <div className="w-1/3">
            <InputElement className="w-full" name="firstName" />
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
                <select className="w-full" name="month" id="month"  defaultValue={selectedMonth}/>
                <label htmlFor="month">Month</label>
              </div>
              <div className="w-2/5">
                <select className="w-full" name="day" id="day" defaultValue={selectedDay}/>
                <label htmlFor="day">Day</label>
              </div>
              <div className="w-2/5">
                <select className="w-full" name="year" id="year"  defaultValue={selectedYear}/>
                <label htmlFor="year">Year</label>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-base font-semibold">Gender</h1>
            <select className="w-full" name="gender" id="gender"  />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-base text-gray-600 font-semibold">Address</h1>
          <input className="w-full" name="addressLine" />
          <label htmlFor="streetAddress">Street Address</label>
        </div>
        <div className="mb-4">
          <input className="w-full" name="addressLineTwo" />
          <label htmlFor="streetAddressLine">Street address line 2</label>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <select className="w-full" name="city" id="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="w-1/2">
            <select className="w-full" name="state" id="state" />
            <label htmlFor="state">State / Province</label>
          </div>
        </div>
        <div className="mb-4">
          <input className="w-full" name="zipCode" />
          <label htmlFor="zipCode">Postal / Zip Code</label>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="email">Student E-mail*</label>
            <input className="w-full" name="email" />
            <p> example@example.com</p>
          </div>
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="mobile">Mobile Number*</label>
            <input className="w-full" name="mobileNumber" />
            <p>+370 600 00000</p>
          </div>
        </div>
        <div className="flex space-x-3 mb-4">
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="phone">Phone Number</label>
            <input className="w-full" name="phoneNumber" />
            <p>+37060000000</p>
          </div>
          <div className="w-1/2">
            <label className="text-base font-semibold" htmlFor="work">Work Number</label>
            <input className="w-full" name="workNumber" />
            <p>37060000000</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-base text-gray-600 font-semibold" htmlFor="company">Company</label>
          <input className="w-1/2" name="company"
          />
        </div>
        <div className="mb-4">
          <label className="text-base text-gray-600 font-semibold" htmlFor="courses">Courses</label>
          <select className="w-1/2" name="courses" id="courses" />
        </div>
        <div className="">
          <label className="text-base text-gray-600 font-semibold" htmlFor="comments">Additional Comments</label>
          <textarea name="comments" id=""></textarea>
        </div>
        <hr className="mt-3 border-gray-200" />
        <div className="mt-8">
          <ButtonElement type="submit" label="Submit Application" />
          <ButtonElement type="reset" label="Clear Fields" className="float-right" />
        </div >
      </form >
  );
}
