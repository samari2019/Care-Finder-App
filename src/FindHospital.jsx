import React from 'react'

function FindHospital() {
    return (
        <>
            <div className="FindHospital-Container">
                <div className="Geolocation-container">
                <input className="Address" type="text" name="" placeholder="Address" />
                <input className="ZipCode" type="text" name="" placeholder="ZipCode" />
                </div>
                <h1 className="Hospi-h1">Hospital NearBy</h1>
                <div className="Card-1">
                </div>
                
                <div className="Card-2">
                </div>
                <div className="Card-3">
                </div>
                <div className="Card-4">
                </div>
                <h3 className="Address-1"> Eve Foundation Hospital 32, Aldmiralty way</h3>
                <h3 className="Address-2">Nigerian Police Hospital Falomo</h3>
                <h3 className="Address-3">Gold cross Hospital Bourdillon Road </h3>
                <h3 className="Address-4">Mayo Clinic12, Femi Okunnu Road </h3>
            </div>
        </>
    )
}

export default FindHospital
