import { useState } from "react";
import "./previewModal.css";

const initialDetails = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    personalSummary: "",
  },
  education: {
    degree: "",
    fieldOfStudy: "",
    university: "",
    graduationDate: "",
  },
  experience: {
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
  },
};

function PersonalDetails({ data, onChange }) {
  return (
    <form>

      <label>First Name</label>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => onChange("firstName", e.target.value)}
        value={data.firstName}
      />
      <br />
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => onChange("lastName", e.target.value)}
        value={data.lastName}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => onChange("email", e.target.value)}
        value={data.email}
      />
      <br />
      <label>Phone Number</label>
      <input
        type="tel"
        placeholder="Phone Number"
        onChange={(e) => onChange("phone", e.target.value)}
        value={data.phone}
      />
        <br />
        <label>Personal Summary</label>
        <textarea
          placeholder="Personal Summary"
          onChange={(e) => onChange("personalSummary", e.target.value)}
          value={data.personalSummary}
        />
    </form>
  );
}

function EducationDetails({ data, onChange }) {
  return (
    <form>
      <label>Degree</label>
      <input
        type="text"
        placeholder="Degree"
        onChange={(e) => onChange("degree", e.target.value)}
        value={data.degree}
      />
      <br />
      <label>Field of Study</label>
      <input
        type="text"
        placeholder="Field of Study"
        onChange={(e) => onChange("fieldOfStudy", e.target.value)}
        value={data.fieldOfStudy}
      />
      <br />
      <label>University</label>
      <input
        type="text"
        placeholder="University"
        onChange={(e) => onChange("university", e.target.value)}
        value={data.university}
      />
      <br />
      <label>Graduation Date</label>    
      <input
        type="date"
        placeholder="Graduation Date"
        onChange={(e) => onChange("graduationDate", e.target.value)}
        value={data.graduationDate}
      />
    </form>
  );
}

function PracticalExperience({ data, onChange }) {
  return (
    <form>
        <label>Job Title</label>
      <input
        type="text"
        placeholder="Job Title"
        onChange={(e) => onChange("jobTitle", e.target.value)}
        value={data.jobTitle}
      />
      <br />
      <label>Company</label>
      <input
        type="text"
        placeholder="Company"
        onChange={(e) => onChange("company", e.target.value)}
        value={data.company}
      />
      <br />
        <label>Start Date</label>
      <input
        type="date"
        placeholder="Start Date"
        onChange={(e) => onChange("startDate", e.target.value)}
        value={data.startDate}
      />
      <br />
      <label>End Date</label>
      <input
        type="date"
        placeholder="End Date"
        onChange={(e) => onChange("endDate", e.target.value)}
        value={data.endDate}
      />
    </form>
  );
}

function Body() {
  const [details, setDetails] = useState(initialDetails);
  const [showModal, setShowModal] = useState(false);
  const [savedDetails, setSavedDetails] = useState(null);

  const handlePersonalChange = (field, value) => {
    setDetails((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  const handleEducationChange = (field, value) => {
    setDetails((prev) => ({
      ...prev,
      education: { ...prev.education, [field]: value },
    }));
  };

  const handleExperienceChange = (field, value) => {
    setDetails((prev) => ({
      ...prev,
      experience: { ...prev.experience, [field]: value },
    }));
  };

  const handleSave = () => {
    // store a snapshot of the current details and open preview modal
    setSavedDetails(details);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main>

      <section className="form-card">
        <h3 className="form-title">General Information</h3>
        <PersonalDetails data={details.personal} onChange={handlePersonalChange} />
      </section>

      <section className="form-card">
        <h3 className="form-title">Education</h3>
        <EducationDetails data={details.education} onChange={handleEducationChange} />
      </section>

      <section className="form-card">
        <h3 className="form-title">Experience</h3>
        <PracticalExperience data={details.experience} onChange={handleExperienceChange} />
      </section>
      <div className="save-preview">
        <button type="button" onClick={handleSave} className="save-button">
          Save & Preview
        </button>
      </div>

      {/* Modal preview */}
      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <aside className="modal-side" role="dialog" aria-modal="true">
            <div style={{background: 'linear-gradient(90deg, #0b67ff 0%, #5ab0ff 100%)', color: '#fff', padding: '16px 18px', borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
              <h3 style={{margin: 0}}>CV Preview</h3>
            </div>
            <div style={{padding: 14}} className="modal-content">
              <section>
                <h4>Personal Details</h4>
                <p>Name: {savedDetails.personal.firstName} {savedDetails.personal.lastName}</p>
                <p>Email: {savedDetails.personal.email}</p>
                <p>Phone: {savedDetails.personal.phone}</p>
                <p>Personal Summary: {savedDetails.personal.personalSummary}</p>
              </section>
              <section>
                <h4>Education</h4>
                <p>Degree: {savedDetails.education.degree}</p>
                <p>Field of Study: {savedDetails.education.fieldOfStudy}</p>
                <p>University: {savedDetails.education.university}</p>
                <p>Graduation Date: {savedDetails.education.graduationDate}</p>
              </section>
              <section>
                <h4>Experience</h4>
                <p>Job Title: {savedDetails.experience.jobTitle}</p>
                <p>Company: {savedDetails.experience.company}</p>
                <p>Start Date: {savedDetails.experience.startDate}</p>
                <p>End Date: {savedDetails.experience.endDate}</p>
              </section>
              <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 8}}>
                <button className="save-button" onClick={closeModal} aria-label="Close preview">Close</button>
              </div>
            </div>
          </aside>
        </>
      )}
    </main>
  );
}

export default Body;