import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { DestinationSlider } from "@/components/ui/DestinationSlider";
import { ServiceSlider } from "@/components/ui/ServiceSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  heroSlides,
  tourPackages,
  destinations,
  WHATSAPP_NUMBER,
} from "@/data/tourData";
import {
  Car,
  Shield,
  Users,
  Clock,
  Check,
  ArrowRight,
  Phone,
  Hotel,
  Map,
  Mountain,
} from "lucide-react";

const servicePreview = [
  {
    id: "1",
    title: "Airport Transfers",
    description: "Comfortable pickups from Colombo Airport",
    icon: Car,
  },
  {
    id: "2",
    title: "Hotel Bookings",
    description: "3-5 star accommodations across Sri Lanka",
    icon: Hotel,
  },
  {
    id: "3",
    title: "Custom Tours",
    description: "Personalized itineraries for your needs",
    icon: Map,
  },
  {
    id: "4",
    title: "Adventures",
    description: "Rafting, safaris, and outdoor activities",
    icon: Mountain,
  },
];

const whyChooseUs = [
  {
    icon: Car,
    title: "Luxury Transport",
    description: "Travel in comfort with our modern, air-conditioned vehicles",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Professional English-speaking driver-guides with local knowledge",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage included in all tour packages",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Customize your tour timing and pace as you prefer",
  },
];

const destinationData = destinations.map((d) => ({
  id: d.id,
  name: d.name,
  description: d.description,
  image: d.image,
  highlights: d.highlights,
}));

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in booking a tour with Sri Ceylon Tours.`;

  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            <Link to="/tours">Explore Tours</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </Button>
        </div>
      </HeroSlider>

      {/* Destinations Slider */}
      <DestinationSlider destinations={destinationData} />

      {/* Featured Tours */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Popular Packages
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Tours
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted tour packages designed to showcase the best of Sri Lanka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
              <Card
                key={tour.id}
                className={`overflow-hidden card-hover ${
                  tour.featured ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                  />
                  {tour.featured && (
                    <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-xl font-bold">{tour.name}</h4>
                      <p className="text-muted-foreground text-sm">{tour.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">${tour.price}</p>
                      <p className="text-xs text-muted-foreground">{tour.priceNote}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                  <ul className="space-y-2">
                    {tour.highlights.slice(0, 4).map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button asChild className="flex-1">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the ${tour.name} package ($${tour.price}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/tours">Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/tours">
                View All Tours
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <ServiceSlider services={servicePreview} className="bg-muted" />

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Why Travel With Us
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Sri Ceylon Difference
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586166323715-c15ae36e2b97?w=1920')] bg-cover bg-center" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Sri Lankan Adventure?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to start planning your perfect trip. Our team is ready to create an unforgettable experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                <Link to="/contact">Send Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
