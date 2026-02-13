import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
    {
        slug: "top-5-plumbing-tips-every-homeowner-should-know",
        title: "Top 5 Plumbing Tips Every Homeowner Should Know",
        excerpt:
            "From preventing pipe bursts to simple leak fixes, here are 5 essential plumbing tips every homeowner should keep in mind to save money and avoid emergencies.",
        date: "February 10, 2026",
        readTime: "4 min read",
        category: "Plumbing",
        image: "/services/plumbing.png",
    },
    {
        slug: "how-to-maintain-your-ac-for-maximum-efficiency",
        title: "How to Maintain Your AC for Maximum Efficiency",
        excerpt:
            "Regular AC maintenance extends your unit's life by years. Learn the best practices for filter cleaning, gas refilling schedules, and when to call a professional.",
        date: "February 5, 2026",
        readTime: "5 min read",
        category: "AC Maintenance",
        image: "/services/ac-service.png",
    },
    {
        slug: "electrical-safety-tips-for-home-and-office",
        title: "Electrical Safety Tips for Home and Office",
        excerpt:
            "Electrical issues can be dangerous if ignored. Learn about warning signs, proper outlet usage, and when to call a licensed electrician for your safety.",
        date: "January 28, 2026",
        readTime: "3 min read",
        category: "Electrical",
        image: "/services/electrical.png",
    },
];

export { blogPosts };

export default function Blog() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 sm:px-12 lg:px-20">
            <Helmet>
                <title>Blog | Tackles Handyman Services</title>
                <meta name="description" content="Expert handyman tips, maintenance guides, and home improvement advice from the Tackles professional team." />
                <link rel="canonical" href="https://www.tackles.pro/blog" />
                <meta property="og:title" content="Blog | Tackles Handyman Services" />
                <meta property="og:description" content="Expert handyman tips and maintenance guides." />
                <meta property="og:url" content="https://www.tackles.pro/blog" />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-wide">
                    Our Blog
                </h1>
                <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
                    Tips, guides, and expert advice to help you maintain your home and office spaces.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <article
                        key={post.slug}
                        className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                        onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                {post.category}
                            </span>

                            <h2 className="text-lg font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-xs text-gray-400">
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={13} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={13} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-1 text-emerald-700 text-sm font-semibold group-hover:gap-2 transition-all">
                                Read More <ArrowRight size={14} />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
