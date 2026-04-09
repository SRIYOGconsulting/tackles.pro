import React from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "./Blog";

const blogContent = {
    "top-5-plumbing-tips-every-homeowner-should-know": {
        content: `
      <h2>1. Know Where Your Main Shutoff Valve Is</h2>
      <p>The most important thing any homeowner can do is know the location of their main water shutoff valve. In case of a burst pipe or major leak, shutting off the water supply quickly can save thousands in water damage repairs.</p>
      
      <h2>2. Don't Ignore Small Leaks</h2>
      <p>A dripping faucet may seem harmless, but even a slow drip can waste hundreds of gallons of water per year. Small leaks can also lead to mold growth and structural damage if left unchecked. Fix drips promptly or call a professional.</p>
      
      <h2>3. Never Pour Grease Down the Drain</h2>
      <p>Grease solidifies as it cools, creating blockages deep within your pipes. Instead, let grease cool and dispose of it in the trash. If you already have slow drains, a professional drain cleaning can restore full flow.</p>
      
      <h2>4. Use Drain Screens</h2>
      <p>Simple mesh drain screens can prevent hair, food particles, and debris from entering your pipes. They're inexpensive and can save you from costly clog removal services down the line.</p>
      
      <h2>5. Schedule Annual Inspections</h2>
      <p>Even if everything seems fine, an annual plumbing inspection can catch worn-out parts, corroding pipes, and potential issues before they become expensive emergencies. Prevention is always cheaper than repair.</p>
    `,
    },
    "how-to-maintain-your-ac-for-maximum-efficiency": {
        content: `
      <h2>Why AC Maintenance Matters</h2>
      <p>Your air conditioning system works hard, especially in hot climates like San Francisco. Regular maintenance not only keeps your energy bills low but also extends the life of your unit by 5-10 years.</p>
      
      <h2>Clean or Replace Filters Monthly</h2>
      <p>Dirty filters restrict airflow and force your AC to work harder. During heavy use months, check your filters every 2-4 weeks. A clean filter can reduce your AC's energy consumption by 5-15%.</p>
      
      <h2>Check Your Thermostat Settings</h2>
      <p>Setting your thermostat to 24°C (75°F) is the sweet spot for comfort and efficiency. Every degree lower increases energy consumption by approximately 3-5%.</p>
      
      <h2>Keep the Outdoor Unit Clear</h2>
      <p>Ensure at least 2 feet of clearance around your outdoor condenser unit. Remove any debris, leaves, or objects that could block airflow. A blocked condenser can reduce efficiency by up to 25%.</p>
      
      <h2>Schedule Professional Servicing</h2>
      <p>Have a professional technician service your AC at least twice a year - once before summer and once before winter. This includes checking refrigerant levels, cleaning coils, and inspecting electrical connections.</p>
      
      <h2>Watch for Warning Signs</h2>
      <p>Strange noises, unusual smells, uneven cooling, or higher-than-normal electricity bills are signs your AC needs immediate attention. Don't wait for a complete breakdown.</p>
    `,
    },
    "electrical-safety-tips-for-home-and-office": {
        content: `
      <h2>Never Overload Outlets</h2>
      <p>Plugging too many devices into a single outlet or power strip is one of the most common causes of electrical fires. Use one high-wattage appliance per outlet and invest in surge protectors for sensitive electronics.</p>
      
      <h2>Watch for Warning Signs</h2>
      <p>Flickering lights, buzzing outlets, frequently tripping breakers, or a burning smell near switches are all serious warning signs. These indicate potential wiring issues that need immediate professional attention.</p>
      
      <h2>Keep Water Away from Electrical Sources</h2>
      <p>Never use electrical appliances near water. Install GFCI (Ground Fault Circuit Interrupter) outlets in bathrooms, kitchens, and outdoor areas. These outlets automatically cut power when they detect moisture.</p>
      
      <h2>Don't DIY Major Electrical Work</h2>
      <p>While changing a light bulb is fine, tasks like rewiring, installing new circuits, or upgrading your electrical panel should always be done by a licensed electrician. Improper electrical work can be life-threatening.</p>
      
      <h2>Schedule Regular Electrical Inspections</h2>
      <p>Homes and offices should have their electrical systems inspected every 3-5 years, or immediately if you notice any warning signs. An inspection can identify outdated wiring, overloaded circuits, and potential fire hazards.</p>
    `,
    },
};

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = blogPosts.find((p) => p.slug === slug);
    const content = blogContent[slug];

    if (!post || !content) {
        return (
            <section className="min-h-screen bg-white py-20 px-6 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-emerald-900 mb-4">Post Not Found</h1>
                <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
                <button
                    onClick={() => navigate("/blog")}
                    className="bg-emerald-700 text-white px-6 py-2 rounded-lg hover:bg-emerald-800 transition"
                >
                    Back to Blog
                </button>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-white py-20 px-6 sm:px-12 lg:px-20">
            <Helmet>
                <title>{post.title} | Tackles Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://www.tackles.pro/blog/${post.slug}`} />
                <meta property="og:title" content={`${post.title} | Tackles Blog`} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:url" content={`https://www.tackles.pro/blog/${post.slug}`} />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="max-w-3xl mx-auto">
                {/* Back */}
                <button
                    onClick={() => navigate("/blog")}
                    className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft size={18} /> Back to Blog
                </button>

                {/* Header Image */}
                <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 sm:h-80 object-cover"
                    />
                </div>

                {/* Category + Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-400">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 mb-8 leading-tight">
                    {post.title}
                </h1>

                {/* Content */}
                <div
                    className="prose prose-emerald max-w-none
            prose-h2:text-xl prose-h2:font-bold prose-h2:text-emerald-800 prose-h2:mt-8 prose-h2:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4"
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />

                {/* CTA */}
                <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-bold text-emerald-900 mb-3">
                        Need Professional Help?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Book a trusted Tackles professional for any maintenance or repair service.
                    </p>
                    <button
                        onClick={() => navigate("/book")}
                        className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                        Book a Service
                    </button>
                </div>
            </div>
        </section>
    );
}
