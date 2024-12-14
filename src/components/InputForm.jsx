import React, { useState } from 'react';
import './InputForm.css';

const InputForm = () => {
  const [contractValue, setContractValue] = useState('');
  const [claimValue, setClaimValue] = useState('');
  const [place, setPlace] = useState('');
  const [language, setLanguage] = useState('');
  // const [statement, setStatement] = useState('');
  // const [agreement, setAgreement] = useState(null);
  // const [additionalDocs, setAdditionalDocs] = useState(null);

  const handleClaimValueChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setClaimValue(value);
    }
  };
  const handleContractValue = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setContractValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-section claim-value-section">
          <h3>🔣 Claim Value</h3>
          <div className="form-group">
            <label>Contract Value</label>
            <input style={{background:"#e0ebeb"}}
              type="text"
              value={contractValue}
              onChange={handleContractValue}
              placeholder="Enter Contract Value"
              required="true"
            />
          </div>
          <div className="form-group">
            <label>Claim Value</label>
            <input style={{background:"#e0ebeb"}}
              type="text"
              value={claimValue}
              onChange={handleClaimValueChange}
              placeholder="Enter Claim Value"
              required="true"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>📍 Place</h3>
          <div className="form-group">
          <label>Select the Place for proceedings</label>
            <select
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                 background:"#e0ebeb"
              }}
            >
            <option value="" disabled selected>
            Select the place 
          </option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
          <div className="form-group">
            <label>Is the place for the proceedings the one mentioned in the agreement?</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="place"
                  value="Yes"
                  checked={place === 'Yes'}
                  required="true"
                  onChange={() => setPlace('Yes')}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="place"
                  value="No"
                  checked={place === 'No'}
                   required="true"
                  onChange={() => setPlace('No')}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>🗣 Language</h3>
          <div className="form-group" >
            <label>Select the language for proceedings</label>
            <select 
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              background:"#e0ebeb"
            }}
          >
          <option value="" disabled selected>
          Select the language
        </option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
          </div>
          <div className="form-group">
            <label>Is the language for the proceedings the one mentioned in the agreement?</label>
            <div  className="radio-options">
              <label>
                <input
                  type="radio"
                  name="language"
                  value="Yes"
                  checked={language === 'Yes'}
                  onChange={() => setLanguage('Yes')}
                   required="true"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="No"
                  checked={language === 'No'}
                  onChange={() => setLanguage('No')}
                  required="true"
                />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="form-section">
        <h3>📝 Statement</h3>
          <div className="upload-box-1" style={{background:"#e0ebeb"}}>
            <p>Write your Statement Here</p>
            <textarea 
        placeholder="Type your statement here..."
        style={{
          width: '80%',
          height: '50px',
          marginTop: '1rem',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      ></textarea>
            <p style={{marginBottom: '1rem'}}>or</p>
            <label className="upload-btn" >
              📤 Upload a Pdf
              <input type="file" accept=".pdf" style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        <div className="form-section" >
  <h3>🗐 Agreement under Disputes</h3>
  <div className="form-group">
    <div className="container" >
      <div className="upload-section" >
      {/* <p className="description">Max 2MB, PDF</p> */}
        <div className="upload-box" style={{background:"#e0ebeb"}}>
        <span className="icon">&#8593;</span>
      <b> Upload the Contract</b>
           <input
              type="file"
              // onChange={(e) => setAdditionalDocs(e.target.files[0])}
            />
        
          <span className="icon">&#8593;</span>
       <b>Arbitration Agreement</b>
        <input
              type="file"
              // onChange={(e) => setAdditionalDocs(e.target.files[0])}
            />
        
        </div>
      </div>
    </div>
  </div>
</div>

<div className="form-section" >
  <h3>📑Additional Documentation</h3>
  <div className="form-group" >
    <div className="container">
      <div className="upload-section" >
        <div className="upload-box" style={{background:"#e0ebeb"}}>
        <input
              type="file"
              // onChange={(e) => setAdditionalDocs(e.target.files[0])}
            />
          <p className="description">Max 2MB, PDF</p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default InputForm;