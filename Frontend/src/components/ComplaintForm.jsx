import React, { useState } from "react";

function ComplaintForm() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [reporterType, setReporterType] = useState("anonymous");
  const [attachments, setAttachments] = useState([]);

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint submitted!");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 ml-0 lg:ml-64">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Submit a Complaint</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="form-control w-full">
            <label className="label pb-3">
              <span className="label-text font-semibold text-lg p-3 text-gray-700 dark:text-gray-300">
                Category
              </span>
            </label>
            <select
              className="select select-bordered border focus:ring focus:border text-base placeholder"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="safety">Safety</option>
              <option value="theft">Theft</option>
              <option value="civic">Civic Issue</option>
              <option value="disaster">Disaster</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label pb-3">
              <span className="label-text font-semibold text-lg p-3">
                Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered border focus:ring focus:border text-base p-6 min-h-[120px] placeholder"
              placeholder="Describe your complaint in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label pb-3">
              <span className="label-text font-semibold text-lg p-3">
                Location
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter address or GPS coordinates"
              className="input input-bordered border focus:ring focus:border text-base placeholder"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label pb-3">
              <span className="label-text font-semibold text-lg p-3">
                Reporter Type
              </span>
            </label>
            <select
              className="select select-bordered border focus:ring focus:border text-base placeholder"
              value={reporterType}
              onChange={(e) => setReporterType(e.target.value)}
              required
            >
              <option value="anonymous">Anonymous</option>
              <option value="pseudonymous">Pseudonymous</option>
              <option value="verified">Verified (Aadhaar)</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label pb-3">
              <span className="label-text font-semibold text-lg p-3">
                Attachments
              </span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered border focus:ring focus:border text-base placeholder"
              multiple
              onChange={handleAttachmentChange}
            />
            {attachments.length > 0 && (
              <label className="label pt-2">
                <span className="label-text-alt">
                  {attachments.length} file(s) selected
                </span>
              </label>
            )}
          </div>

          <div className="card-actions justify-end pt-4">
            <button className="btn btn-success btn-lg text-base font-semibold w-full sm:w-auto px-10">
              Submit Complaint
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;
