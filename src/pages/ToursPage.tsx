import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { tourPackages, transfers, WHATSAPP_NUMBER } from "@/data/tourData";
import { Check, Clock, MapPin, ArrowRight, Phone, Car } from "lucide-react";
import heroImage from "@/assets/tours/sigiriya-panorama.jpg";

export default function ToursPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sri Lanka Tours"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white container-custom">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Tour Packages
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Discover Sri Lanka with our carefully crafted tour packages designed for every traveler
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Choose Your Adventure
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Tour Packages
            </h3>
          </div>

          <div className="space-y-12">
            {tourPackages.map((tour, index) => (
              <Card
                key={tour.id}
                className={`overflow-hidden ${
                  tour.featured ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div
                    className={`relative h-64 lg:h-auto min-h-[300px] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover"
                    />
                    {tour.featured && (
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="p-6 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <h4 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                          {tour.name}
                        </h4>
                        <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {tour.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            Sri Lanka
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-primary">${tour.price}</p>
                        <p className="text-sm text-muted-foreground">{tour.priceNote}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{tour.description}</p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Highlights</h5>
                        <ul className="space-y-2">
                          {tour.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Includes</h5>
                        <ul className="space-y-2">
                          {tour.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" className="flex-1">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in the ${tour.name} package ($${tour.price}). Please provide more details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Book via WhatsApp
                        </a>
                      </Button>
                      <Button variant="outline" size="lg">
                        Request Custom Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Transfers */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Quick & Convenient
            </h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Airport Transfers
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Start your journey stress-free with our comfortable airport transfer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {transfers.map((transfer) => (
              <Card key={transfer.id} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {transfer.from} → {transfer.to}
                        </p>
                        <p className="text-sm text-muted-foreground">{transfer.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">${transfer.price}</p>
                      <p className="text-xs text-muted-foreground">per trip</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I need a transfer from ${transfer.from} to ${transfer.to}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Transfer
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-20 bg-secondary">
        <div className="container-custom text-center text-secondary-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Itinerary?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We can create a personalized tour package based on your interests, schedule, and budget.
          </p>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'd like to discuss a custom tour package for Sri Lanka.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Custom Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
