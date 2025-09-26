import React, { useState } from "react";

function VlogPage() {
    const [vlogs, setVlogs] = useState([
        // original vlogs 1–17 omitted for brevity
        {
            id: 18,
            title: "Mulching Techniques",
            author: "Dr. Arafat Rahman",
            fullDesc: "Learn how mulching conserves moisture, suppresses weeds, and improves soil health.",
            thumbnail: "https://images.unsplash.com/photo-1581094655367-3e7b3a0a98a1?auto=format&fit=crop&w=600&q=80",
            likes: 0,
            dislikes: 0,
            userVote: null,
        },
        // ... other new vlogs 19–27
    ]);

    const [expanded, setExpanded] = useState(null);
    const [newVlog, setNewVlog] = useState({ title: "", fullDesc: "", thumbnail: "", author: "" });
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleExpand = (id) => setExpanded(expanded === id ? null : id);
    const handleChange = (e) => setNewVlog({ ...newVlog, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newVlog.title || !newVlog.fullDesc || !newVlog.thumbnail || !newVlog.author) {
            alert("Please fill in all fields.");
            return;
        }
        const vlogToAdd = { ...newVlog, id: vlogs.length + 1, likes: 0, dislikes: 0, userVote: null };
        setVlogs([vlogToAdd, ...vlogs]);
        setNewVlog({ title: "", fullDesc: "", thumbnail: "", author: "" });
        setShowForm(false);
    };

    const handleVote = (id, type) => {
        setVlogs(
            vlogs.map((vlog) => {
                if (vlog.id === id) {
                    let likes = vlog.likes;
                    let dislikes = vlog.dislikes;
                    let userVote = vlog.userVote;

                    if (type === "like") {
                        if (userVote === "like") {
                            likes--;
                            userVote = null;
                        } else {
                            likes++;
                            if (userVote === "dislike") dislikes--;
                            userVote = "like";
                        }
                    } else if (type === "dislike") {
                        if (userVote === "dislike") {
                            dislikes--;
                            userVote = null;
                        } else {
                            dislikes++;
                            if (userVote === "like") likes--;
                            userVote = "dislike";
                        }
                    }
                    return { ...vlog, likes, dislikes, userVote };
                }
                return vlog;
            })
        );
    };

    const filteredVlogs = vlogs.filter(
        (vlog) =>
            vlog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vlog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-[95%] mx-auto mt-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-lime-900 text-center mb-6">
                Harvest Blogs 📝
            </h1>

            {/* Top Section: Upload Form + Search */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
                <div className="lg:w-1/2">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="w-full px-6 py-2 rounded-lg bg-lime-700 text-white font-semibold hover:bg-lime-800 transition"
                    >
                        {showForm ? "Close Upload Form" : "Upload New Vlog"}
                    </button>

                    {showForm && (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-lime-50 border border-lime-300 rounded-2xl p-6 mt-4 shadow-md"
                        >
                            <h2 className="text-2xl font-bold text-lime-900 mb-4">✍ Upload a New Vlog</h2>
                            <input
                                type="text"
                                name="author"
                                value={newVlog.author}
                                onChange={handleChange}
                                placeholder="Author Name"
                                className="w-full p-3 border border-lime-300 rounded-lg mb-3 text-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            <input
                                type="text"
                                name="title"
                                value={newVlog.title}
                                onChange={handleChange}
                                placeholder="Vlog Title"
                                className="w-full p-3 border border-lime-300 rounded-lg mb-3 text-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            <input
                                type="text"
                                name="thumbnail"
                                value={newVlog.thumbnail}
                                onChange={handleChange}
                                placeholder="Thumbnail Image URL"
                                className="w-full p-3 border border-lime-300 rounded-lg mb-3 text-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            <textarea
                                name="fullDesc"
                                value={newVlog.fullDesc}
                                onChange={handleChange}
                                placeholder="Full Description"
                                className="w-full p-3 border border-lime-300 rounded-lg mb-3 text-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            <button
                                type="submit"
                                className="w-full py-2 rounded-lg bg-lime-700 text-white font-medium hover:bg-lime-800 transition"
                            >
                                Upload Vlog
                            </button>
                        </form>
                    )}
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="bg-lime-50 border border-lime-300 rounded-2xl p-4 shadow-md">
                        <span className="text-lime-900 font-semibold mb-2 block">
                            Search by title or author 🌱
                        </span>
                        <input
                            type="text"
                            placeholder="Enter vlog title or author name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 border border-lime-300 rounded-lg text-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVlogs.map((vlog) => (
                    <div
                        key={vlog.id}
                        className="bg-lime-50 rounded-2xl shadow-lg border border-lime-300 overflow-hidden hover:shadow-xl transition-all duration-500"
                    >
                        <div className="h-[180px] overflow-hidden">
                            <img
                                src={vlog.thumbnail}
                                alt={vlog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-bold text-lime-900">{vlog.title}</h2>
                            <p className="text-sm text-lime-700 font-medium">By: {vlog.author}</p>
                            <p className="text-sm text-lime-800 mt-2">
                                {expanded === vlog.id ? vlog.fullDesc : vlog.fullDesc.slice(0, 120) + "..."}
                            </p>

                            <button
                                onClick={() => toggleExpand(vlog.id)}
                                className="mt-3 px-4 py-2 rounded-lg bg-lime-600 text-white font-medium hover:bg-lime-700 transition"
                            >
                                {expanded === vlog.id ? "Show Less" : "Read More"}
                            </button>

                            <div className="mt-4 flex items-center gap-4">
                                <button
                                    onClick={() => handleVote(vlog.id, "like")}
                                    className={`px-3 py-1 border border-lime-300 rounded-lg font-medium hover:bg-lime-200 transition ${
                                        vlog.userVote === "like" ? "bg-lime-300" : "text-lime-800"
                                    }`}
                                >
                                    👍 {vlog.likes}
                                </button>
                                <button
                                    onClick={() => handleVote(vlog.id, "dislike")}
                                    className={`px-3 py-1 border border-lime-300 rounded-lg font-medium hover:bg-lime-200 transition ${
                                        vlog.userVote === "dislike" ? "bg-lime-300" : "text-lime-800"
                                    }`}
                                >
                                    👎 {vlog.dislikes}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VlogPage;
