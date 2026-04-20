import { useState } from "react";
import "./PostAnnouncement.css";   
function PostAnnouncement() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("Notice");
  const [search, setSearch] = useState("");

  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Water Supply Notice",
      message: "Water supply will be off tomorrow",
      type: "Notice",
      postedBy: "Admin",
      status: "Active",
    },
  ]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (!title || !message) {
      alert("Please fill all fields");
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      title,
      message,
      type,
      postedBy: "Admin",
      status: "Active",
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setTitle("");
    setMessage("");
    setType("Notice");
  };

  const filteredAnnouncements = announcements.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="announcementPage">
      <h2>Post Announcement</h2>

      <form className="announcementForm" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Announcement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Announcement Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Notice</option>
          <option>Alert</option>
          <option>Meeting</option>
          <option>Scheme</option>
        </select>

        <button type="submit">Post Announcement</button>
      </form>

      <input
        className="searchBox"
        type="text"
        placeholder="Search announcement..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="announcementTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Message</th>
            <th>Type</th>
            <th>Posted By</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredAnnouncements.length === 0 ? (
            <tr>
              <td colSpan="5" className="noData">
                No announcements found
              </td>
            </tr>
          ) : (
            filteredAnnouncements.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td>{a.message}</td>
                <td>{a.type}</td>
                <td>{a.postedBy}</td>
                <td>
                  <span className={`status ${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PostAnnouncement;
