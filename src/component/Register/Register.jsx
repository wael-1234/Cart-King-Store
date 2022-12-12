import React, { useState } from "react";
import "./Register.css";
import avatar from'../../images/2.png';
import Swal from "sweetalert2";

export default function Profile() {

 
  const [user,setUser]=useState(
    {
      name:null,
      familyName:null,
      picture:avatar,
      addres:'Current addres',
      phone:'Phone number',
      country:'Country',
      state:'State',
      education:'Education',
      profession:'Profession',
      email:'exemple@exemple.com',
      password:'Password',
      details:''
    }
    )

    let secondPassword='secondPassword'

  const alert = async () => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })
    
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUser({...user,picture:e.target.result})
      }
      reader.readAsDataURL(file)
    }
  }

const  confirmProfilealert = () =>{
  
  if((user.name.length>2))

      Swal.fire({ title:`You are welcome ${user.name} ${user.familyName}`})
      

  }

  return (
   
    <div className="container" >
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img src={user.picture} style={{ cursor: "pointer" ,width:'50%',height:'50%'}} alt="avatar" 
           onClick={alert}
          />
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>{setUser({...user,name:e.target.value})}}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>{setUser({...user,familyName:e.target.value})}}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label className="labels">Education</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>{setUser({...user,education:e.target.value})}}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Profession</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>{setUser({...user,profession:e.target.value})}}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Address </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>{setUser({...user,addres:e.target.value})}}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>{setUser({...user,country:e.target.value})}}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e)=>{setUser({...user,state:e.target.value})}}
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button"
              onClick={confirmProfilealert}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{marginTop:'53px'}}>
          <div className="py-5">
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <input
                type="text"
                className="form-control"
                onChange={(e)=>{setUser({...user,details:e.target.value})}}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Phone Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(e)=>{setUser({...user,phone:e.target.value})}}
              />
            </div>
            <br/>
            <div className="col-md-12">
              <label className="labels">Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(e)=>{setUser({...user,email:e.target.value})}}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e)=>{setUser({...user,password:e.target.value})}}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Confirm your password</label>
              <input
                type="password"
                className="form-control"
                onChange={e=>secondPassword=e.target.value}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
