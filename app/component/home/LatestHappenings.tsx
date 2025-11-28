'use clinet';
export default function LatestHappenings() {
    const events = [
        {
            date: "14",
            month: "Nov'2025",
            title: "MIT-WPU, Pune Hosts CxO Meet 2025: A Confluence of Industry Leaders and Academic Visionaries",
            image: "https://mitwpu.edu.in/uploads/events/CXO-Meet-thumbnail.webp"
        },
        {
            date: "07",
            month: "Nov'2025",
            title: "One-Day International Conclave on \"Urban Planning and Land-Use Science: A Civil Engineering Perspective\"",
            image: "https://mitwpu.edu.in/uploads/events/Urban-planning-thumbnail.webp"
        },
        {
            date: "06",
            month: "Nov'2025",
            title: "World Technology Summit 2025: MIT-WPU Pune Sets the Stage for Global Innovation",
            image: "https://mitwpu.edu.in/uploads/events/WTS25-thumb.webp"
        },
        {
            date: "14",
            month: "Nov'2025",
            title: "MIT-WPU, Pune Hosts CxO Meet 2025: A Confluence of Industry Leaders and Academic Visionaries",
            image: "https://mitwpu.edu.in/uploads/events/CXO-Meet-thumbnail.webp"
        },
        {
            date: "07",
            month: "Nov'2025",
            title: "One-Day International Conclave on \"Urban Planning and Land-Use Science: A Civil Engineering Perspective\"",
            image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
        },
        {
            date: "06",
            month: "Nov'2025",
            title: "World Technology Summit 2025: MIT-WPU Pune Sets the Stage for Global Innovation",
            image: "https://mitwpu.edu.in/uploads/events/WTS25-thumb.webp"
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-5xl font-black text-gray-900 mb-4">
                        Latest Happenings
                    </h1>
                    <p className="text-lg md:text-xl  text-gray-700">
                        From intellectual debates to electrifying fests - there's never a dull moment!
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url('${event.image}')`
                                }}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-between p-8 text-white">
                                {/* Date */}
                                <div>
                                    <div className="text-6xl font-bold leading-none mb-1">
                                        {event.date}
                                    </div>
                                    <div className="text-lg font-medium tracking-wide">
                                        {event.month}
                                    </div>
                                </div>

                                {/* Title */}
                                <div>
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}