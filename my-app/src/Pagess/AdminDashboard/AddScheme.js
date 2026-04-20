import { useState } from "react";
import "./AddScheme.css";

function AddScheme() {
  const [schemes, setSchemes] = useState([]);
  const [formData, setFormData] = useState({
    schemeName: "",
    description: "",
    elligibility:"",
    startDate:"",
    endDate:"",
    postedBy: "Admin"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newScheme = {
      id: Date.now(),
      ...formData
    };

    setSchemes([...schemes, newScheme]);

    setFormData({
      schemeName: "",
      description: "",
      elligibility:"",
      startDate:"",
      endDate:"",
      postedBy: "Admin"
    });
  };
const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this scheme?");
  if (confirmDelete) {
    setSchemes(schemes.filter((scheme) => scheme.id !== id));
  }
};

const handleEdit = (scheme) => {
  setFormData({
    schemeName: scheme.schemeName,
    description: scheme.description,
    eligibility: scheme.eligibility,
    status: scheme.status,
    postedBy: scheme.postedBy
  });

  setSchemes(schemes.filter((s) => s.id !== scheme.id));
};

  return (
    <div className="schemePage">
      <h2>Add Government Scheme</h2>

      {/* FORM */}
      <form className="schemeForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="schemeName"
          placeholder="Scheme Name"
          value={formData.schemeName}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Scheme Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        
        <textarea
        name="elligibility"
        placeholder="Elligibility crieteria(eg.income should be under 2LPA"
        value={formData.elligibility}
        onChange={handleChange}
        required></textarea>
        <label>Starting Date</label>
        <input
        type="date"
        name="startDate"
        value="{form.startdate"
        onChange={handleChange}
        />
        <label>Ending Date</label>
        <input
        type="date"
        name="EndDate"
        value="{form.Enddate"
        onChange={handleChange}
        />
        <input
          type="text"
          name="postedBy"
          value={formData.postedBy}
          onChange={handleChange}
          disabled
        />

        <button type="submit">Add Scheme</button>
      </form>

      {/* TABLE */}
      <table className="schemeTable">
        <thead>
          <tr>
            <th>id</th>
            <th>Scheme Name</th>
            <th>Description</th>
            <th>elligibility</th>
            <th>startDate</th>
            <th>EndDate</th>
            <th>Action</th>
            <th>Status</th>
            <th>Posted By</th>
          </tr>
        </thead>
        <tbody>
          {schemes.length === 0 ? (
            <tr>
              <td colSpan="9" className="noData">
                No schemes added yet
              </td>
            </tr>
          ) : (
            schemes.map((scheme) => (
              <tr key={scheme.id}>
                <td>{scheme.id}</td>
                <td>{scheme.schemeName}</td>
                <td>{scheme.description}</td>
                <td>{scheme.elligibility}</td>
                <td>{scheme.startDate}</td>
                <td>{scheme.endDate}</td>
                <td>
                   <td>
                  <button
                  className="updateBtn"
                  onClick={() => handleEdit(scheme)}
                  > Update</button>
                  
                  <button
                  className="deleteBtn"
                  onClick={() => handleDelete(scheme.id)}
                  >
                    Delete
                  </button>
                </td>
                </td>
                <td>
                  <span
                    className={
                      scheme.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {scheme.status}
                  </span>
                </td>
              
                <td>{scheme.postedBy}</td>
               
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AddScheme;
