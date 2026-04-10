import ServiceCard from "../components/ServiceCard.jsx";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6">

      <Helmet>
        <title>Our Services | Tackles</title>
      </Helmet>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-emerald-900">Our Services</h1>
        <p className="text-gray-700 mt-4">
          Complete on-demand home services platform.
        </p>
      </div>

      {/* 1. Cleaning */}
      <h2 className="text-3xl font-bold text-center mb-10">Cleaning & Exterior Maintenance</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <ServiceCard image="/services/deep-cleaning.jpg" title="Deep Cleaning" desc="Complete home cleaning." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/pressure-washing.jpg" title="Pressure Washing" desc="Outdoor surface cleaning." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/roof-gutter-cleaning.jpg" title="Roof & Gutter Cleaning" desc="Roof and drainage cleaning." extra={<button onClick={() => navigate("/book")}>Book</button>} />
      </div>

      {/* 2. Repair */}
      <h2 className="text-3xl font-bold text-center mb-10">Home Repair & Maintenance</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <ServiceCard image="/services/handyman.jpg" title="Handyman" desc="Small repair works." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/carpentry.jpg" title="Carpentry" desc="Wood and furniture work." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/plumbing.jpg" title="Plumbing" desc="Pipe and leak fixing." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/electrical.jpg" title="Electrical Repairs" desc="Wiring and power fixes." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/flooring.jpg" title="Flooring Fixes" desc="Tile and surface repair." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/washing-machine-repair.jpg" title="Washing Machine Repair" desc="Appliance maintenance." extra={<button onClick={() => navigate("/book")}>Book</button>} />
      </div>

      {/* 3. Installation */}
      <h2 className="text-3xl font-bold text-center mb-10">Installation & Smart Home</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <ServiceCard image="/services/smart-home.jpg" title="Smart Home Setup" desc="CCTV & automation." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/electric-charger-installation.jpg" title="EV Charger" desc="EV charging install." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/ac-service.jpg" title="AC Servicing" desc="Cooling system maintenance." extra={<button onClick={() => navigate("/book")}>Book</button>} />
      </div>

      {/* 4. Improvement */}
      <h2 className="text-3xl font-bold text-center mb-10">Home Improvement</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <ServiceCard image="/services/painting.jpg" title="Painting" desc="Interior & exterior paint." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/wall-decoration.jpg" title="Wallpaper" desc="Wall decoration." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/drywall-repair.jpg" title="Drywall Repair" desc="Wall fixing." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/tiling-work.jpg" title="Tile Work" desc="Tile install & repair." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/window-repair.jpg" title="Window Repair" desc="Window fixing." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/floor-repair.jpg" title="Floor Repair" desc="Floor fixing." extra={<button onClick={() => navigate("/book")}>Book</button>} />
      </div>

      {/* 5. Outdoor */}
      <h2 className="text-3xl font-bold text-center mb-10">Outdoor Services</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <ServiceCard image="/services/lawn-care.jpg" title="Lawn Care" desc="Grass & landscaping." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/tree-cutting.jpg" title="Tree Cutting" desc="Tree trimming." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/garden-care.jpg" title="Garden Care" desc="Garden maintenance." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/smart-irrigation.jpg" title="Irrigation" desc="Water system setup." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/fence-repair.jpg" title="Fence Repair" desc="Outdoor fixes." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/outdoor-lightning.jpg" title="Outdoor Lighting" desc="Lighting setup." extra={<button onClick={() => navigate("/book")}>Book</button>} />
      </div>

      {/* 6. Moving */}
      <h2 className="text-3xl font-bold text-center mb-10">Moving & Property</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <ServiceCard image="/services/relocation-assistance.jpg" title="Moving" desc="Relocation help." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/airbnb-maintenance.jpg" title="Airbnb Maintenance" desc="Property care." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/packing.jpg" title="Packing" desc="Packing service." extra={<button onClick={() => navigate("/book")}>Book</button>} />

      </div>

      {/* 7. Subscription */}
      <h2 className="text-3xl font-bold text-center mb-10">Subscription Services</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard image="/services/home-concierge.jpg" title="Home Concierge" desc="Home management." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/cleaning-plan.jpg" title="Cleaning Plan" desc="Regular cleaning." extra={<button onClick={() => navigate("/book")}>Book</button>} />
        <ServiceCard image="/services/maintenance-plan.jpg" title="Maintenance Plan" desc="Seasonal care." extra={<button onClick={() => navigate("/book")}>Book</button>} />
      </div>

    </section>
  );
}