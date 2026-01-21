// Tour and destination data for Sri Ceylon Tours
// Import tour images
import teaPlantation from "@/assets/tours/tea-plantation.jpg";
import elephantExperience from "@/assets/tours/elephant-experience.jpg";
import kandyViewpoint from "@/assets/tours/kandy-viewpoint.jpg";
import ellaSunrise from "@/assets/tours/ella-sunrise.jpg";
import trainRide from "@/assets/tours/train-ride.jpg";
import waterfall from "@/assets/tours/waterfall.jpg";
import rafting from "@/assets/tours/rafting.jpg";
import sigiriyaJump from "@/assets/tours/sigiriya-jump.jpg";
import sigiriyaRock from "@/assets/tours/sigiriya-rock.jpg";
import mountainView from "@/assets/tours/mountain-view.jpg";
// New gallery images
import elephantPose from "@/assets/tours/elephant-pose.jpg";
import sigiriyaFamily from "@/assets/tours/sigiriya-family.jpg";
import sigiriyaPanorama from "@/assets/tours/sigiriya-panorama.jpg";
import groupFlag from "@/assets/tours/group-flag.jpg";
import safariJeep from "@/assets/tours/safari-jeep.jpg";
import rockFormation from "@/assets/tours/rock-formation.jpg";
import groupHike from "@/assets/tours/group-hike.jpg";
import teaTasting from "@/assets/tours/tea-tasting.jpg";
import trainGirl from "@/assets/tours/train-girl.jpg";
import raftingGroup from "@/assets/tours/rafting-group.jpg";
// Additional gallery images
import sigiriyaPool from "@/assets/tours/sigiriya-pool.jpg";
import tuktukGirls from "@/assets/tours/tuktuk-girls.jpg";
import sigiriyaGroup from "@/assets/tours/sigiriya-group.jpg";
import mountainViewpoint from "@/assets/tours/mountain-viewpoint.jpg";
import sareeLady from "@/assets/tours/saree-lady.jpg";
import sigiriyaJump2 from "@/assets/tours/sigiriya-jump2.jpg";
import teaPicking from "@/assets/tours/tea-picking.jpg";
import villageFamily from "@/assets/tours/village-family.jpg";
import turtleHatchery from "@/assets/tours/turtle-hatchery.jpg";
import tractorRide from "@/assets/tours/tractor-ride.jpg";

export const WHATSAPP_NUMBER = "94779293411";

export const tourPackages = [
  {
    id: "adventure-8",
    name: "08 Days Adventure",
    duration: "8 Days / 7 Nights",
    price: 476,
    priceNote: "No Hotel Included",
    description: "Experience the thrill of Sri Lanka with our adventure-packed tour covering the most exciting destinations.",
    highlights: [
      "White water rafting in Kitulgala",
      "Sigiriya Rock Fortress climb",
      "Ella Nine Arches Bridge",
      "Safari at Yala National Park",
      "Tea plantation visit",
      "Kandy Temple of the Tooth",
    ],
    includes: [
      "Luxury air-conditioned vehicle",
      "Professional English-speaking driver guide",
      "All fuel and parking fees",
      "Comprehensive travel insurance",
    ],
    image: rafting,
  },
  {
    id: "premium-8",
    name: "08 Days Premium",
    duration: "8 Days / 7 Nights",
    price: 976,
    priceNote: "With 3-Star Hotel",
    description: "Our most popular package offering the perfect blend of adventure, culture, and relaxation with quality accommodation.",
    highlights: [
      "All Adventure tour highlights",
      "3-star hotel accommodation",
      "Daily breakfast included",
      "Beach time in Mirissa",
      "Whale watching opportunity",
      "Traditional cooking class",
    ],
    includes: [
      "7 nights 3-star hotel stay",
      "Daily breakfast",
      "Luxury air-conditioned vehicle",
      "Professional English-speaking driver guide",
      "All fuel and parking fees",
      "Comprehensive travel insurance",
    ],
    featured: true,
    image: sigiriyaRock,
  },
  {
    id: "explorer-5",
    name: "05 Days Explorer",
    duration: "5 Days / 4 Nights",
    price: 635,
    priceNote: "With 3-Star Hotel",
    description: "Perfect for travelers with limited time who want to experience the best of Sri Lanka.",
    highlights: [
      "Sigiriya Rock Fortress",
      "Kandy cultural tour",
      "Tea plantation experience",
      "Ella scenic train ride",
      "Nuwara Eliya highlands",
    ],
    includes: [
      "4 nights 3-star hotel stay",
      "Daily breakfast",
      "Luxury air-conditioned vehicle",
      "Professional English-speaking driver guide",
      "All fuel and parking fees",
      "Comprehensive travel insurance",
    ],
    image: trainRide,
  },
];

export const transfers = [
  {
    id: "airport-colombo",
    from: "Airport (CMB)",
    to: "Colombo",
    price: 18,
    duration: "~45 mins",
  },
  {
    id: "airport-negombo",
    from: "Airport (CMB)",
    to: "Negombo",
    price: 10,
    duration: "~20 mins",
  },
];

export const destinations = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    title: "Lion Rock Fortress",
    description: "Ancient rock fortress and UNESCO World Heritage site, featuring stunning frescoes, mirror wall, and panoramic views from the summit.",
    image: sigiriyaRock,
    highlights: ["UNESCO World Heritage Site", "Ancient frescoes", "Mirror wall", "Lion's paw entrance", "360° views"],
  },
  {
    id: "kandy",
    name: "Kandy",
    title: "Cultural Capital",
    description: "Sri Lanka's cultural heart, home to the sacred Temple of the Tooth Relic and surrounded by lush hills and tea plantations.",
    image: kandyViewpoint,
    highlights: ["Temple of the Tooth", "Kandy Lake", "Royal Botanical Gardens", "Cultural dance shows", "Pinnawala Elephant Orphanage"],
  },
  {
    id: "ella",
    name: "Ella",
    title: "Hill Country Paradise",
    description: "Charming mountain town famous for its scenic train rides, hiking trails, and the iconic Nine Arches Bridge.",
    image: ellaSunrise,
    highlights: ["Nine Arches Bridge", "Little Adam's Peak", "Ella Rock", "Scenic train journey", "Tea factories"],
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    title: "Little England",
    description: "Colonial-era hill station with cool climate, lush tea estates, and stunning landscapes reminiscent of the English countryside.",
    image: teaPlantation,
    highlights: ["Tea plantations", "Gregory Lake", "Hakgala Gardens", "Victoria Park", "Strawberry farms"],
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    title: "Pristine Beaches",
    description: "Beautiful coastal city with pristine beaches, historic temples, and excellent opportunities for whale and dolphin watching.",
    image: mountainView,
    highlights: ["Nilaveli Beach", "Pigeon Island", "Koneswaram Temple", "Whale watching", "Hot springs"],
  },
  {
    id: "kitulgala",
    name: "Kitulgala",
    title: "Adventure Hub",
    description: "Sri Lanka's adventure capital, famous for white water rafting, jungle trekking, and the filming location of 'Bridge on the River Kwai'.",
    image: rafting,
    highlights: ["White water rafting", "Canyoning", "Rainforest hikes", "Bird watching", "Waterfall abseiling"],
  },
  {
    id: "negombo",
    name: "Negombo",
    title: "Coastal Gateway",
    description: "Charming fishing town near the airport with Dutch colonial heritage, beautiful beaches, and vibrant fish markets.",
    image: waterfall,
    highlights: ["Dutch Canal", "Fish market", "Beach resorts", "St. Mary's Church", "Lagoon boat rides"],
  },
];

export const services = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: "Comfortable meet & greet service with modern vehicles for stress-free airport pickups and drop-offs.",
    fullDescription: "Our professional drivers will meet you at the airport with a name board, assist with your luggage, and transport you to your destination in air-conditioned comfort. Available 24/7 for all flight times.",
    icon: "Plane",
    features: ["24/7 availability", "Flight tracking", "Meet & greet service", "Comfortable vehicles"],
    price: "From $10",
  },
  {
    id: "hotel-reservations",
    title: "Hotel Reservations",
    description: "Wide range of accommodations from budget-friendly to luxury resorts, all handpicked for quality.",
    fullDescription: "We partner with the best hotels across Sri Lanka to offer you carefully selected accommodations. From boutique guesthouses to 5-star resorts, we find the perfect stay for your budget and preferences.",
    icon: "Hotel",
    features: ["3-5 star options", "Best price guarantee", "Strategic locations", "Verified reviews"],
    price: "Various",
  },
  {
    id: "custom-tours",
    title: "Custom Tour Planning",
    description: "Personalized itineraries tailored to your interests, pace, and travel style.",
    fullDescription: "Every traveler is unique, and so should be your tour. Share your interests, preferred pace, and must-see destinations, and we'll craft a personalized itinerary just for you.",
    icon: "Map",
    features: ["Personalized itineraries", "Flexible schedules", "Special interests", "Group tours available"],
    price: "Custom quote",
  },
  {
    id: "chauffeur-guide",
    title: "Chauffeur Guide Service",
    description: "Professional English-speaking driver-guides with deep local knowledge and expertise.",
    fullDescription: "Our driver-guides are more than just drivers – they're your local experts, storytellers, and travel companions. Fluent in English, they'll share insights about Sri Lanka's history, culture, and hidden gems.",
    icon: "User",
    features: ["English speaking", "Licensed guides", "Local expertise", "Flexible approach"],
    price: "Included in tours",
  },
  {
    id: "adventure-activities",
    title: "Adventure Activities",
    description: "Thrilling experiences from white water rafting to wildlife safaris and hiking.",
    fullDescription: "For the adventure seekers, we organize exciting activities across the island. From adrenaline-pumping rafting in Kitulgala to serene safari drives in Yala, we've got your adventure covered.",
    icon: "Mountain",
    features: ["Rafting", "Safaris", "Hiking", "Water sports"],
    price: "Various",
  },
  {
    id: "cultural-experiences",
    title: "Cultural Experiences",
    description: "Immersive cultural activities including temple visits, cooking classes, and village tours.",
    fullDescription: "Dive deep into Sri Lankan culture with authentic experiences. Learn to cook traditional curries, visit ancient temples, explore rural villages, and participate in local festivals.",
    icon: "Landmark",
    features: ["Temple visits", "Cooking classes", "Village tours", "Festival participation"],
    price: "Various",
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    description: "Comprehensive travel insurance coverage included with all our tour packages.",
    fullDescription: "Travel with peace of mind knowing you're covered. Our comprehensive travel insurance includes medical emergencies, trip cancellation, lost luggage, and more.",
    icon: "Shield",
    features: ["Medical coverage", "Trip protection", "24/7 support", "Easy claims"],
    price: "Included",
  },
  {
    id: "support-247",
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your trip via phone, WhatsApp, or email.",
    fullDescription: "We're always just a message away. Our team provides 24/7 support during your trip, helping with any questions, changes to plans, or emergencies that may arise.",
    icon: "Headphones",
    features: ["WhatsApp support", "Phone assistance", "Emergency help", "Travel updates"],
    price: "Free",
  },
];

export const heroSlides = [
  {
    image: sigiriyaRock,
    title: "Experience the Heart of Paradise",
    subtitle: "Welcome to Sri Lanka",
  },
  {
    image: kandyViewpoint,
    title: "Unforgettable Group Adventures",
    subtitle: "Travel With Friends",
  },
  {
    image: trainRide,
    title: "Scenic Train Journeys",
    subtitle: "Discover Rich Heritage",
  },
  {
    image: ellaSunrise,
    title: "Breathtaking Landscapes",
    subtitle: "Nature Awaits",
  },
];

export const faqs = [
  {
    question: "What's included in the tour price?",
    answer: "Our tour prices include a luxury air-conditioned vehicle, professional English-speaking driver-guide, all fuel and parking fees, and comprehensive travel insurance. Packages with hotel accommodation also include daily breakfast. Entry fees to attractions are not included unless specified.",
  },
  {
    question: "How do I book a tour?",
    answer: "Booking is easy! Simply contact us via WhatsApp at +94 77 929 3411 or fill out our contact form. We'll discuss your requirements, customize your itinerary if needed, and confirm your booking with a small deposit.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash (USD, EUR, GBP, or LKR), bank transfers, and major credit cards. A 20% deposit is required to confirm your booking, with the balance due upon arrival.",
  },
  {
    question: "Can tours be customized?",
    answer: "Absolutely! All our tours can be fully customized based on your interests, preferred destinations, pace of travel, and budget. Just let us know your preferences when inquiring.",
  },
  {
    question: "What should I pack for Sri Lanka?",
    answer: "Light, breathable clothing is recommended. Bring modest attire for temple visits (covering shoulders and knees), comfortable walking shoes, sunscreen, insect repellent, and a light jacket for hill country areas.",
  },
  {
    question: "Is travel insurance included?",
    answer: "Yes, comprehensive travel insurance is included with all our tour packages. This covers basic medical emergencies during your trip. We recommend having additional personal travel insurance for extended coverage.",
  },
  {
    question: "What languages do your guides speak?",
    answer: "All our driver-guides are fluent in English. We can also arrange guides speaking German, French, Spanish, or other languages upon request with advance notice.",
  },
  {
    question: "What's the best time to visit Sri Lanka?",
    answer: "Sri Lanka can be visited year-round! The west and south coasts are best from December to March, while the east coast is ideal from April to September. The hill country is pleasant throughout the year.",
  },
  {
    question: "Are meals included in the packages?",
    answer: "Breakfast is included in packages with hotel accommodation. Lunch and dinner are at your own expense, allowing you to explore Sri Lanka's diverse culinary scene. Your guide can recommend the best local restaurants.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-4 weeks in advance, especially during peak season (December-March). Last-minute bookings are possible subject to availability.",
  },
];

export const galleryImages = [
  {
    id: "1",
    src: sigiriyaRock,
    alt: "Sigiriya Rock Fortress",
    category: "heritage",
  },
  {
    id: "2",
    src: sigiriyaJump,
    alt: "Fun at Sigiriya",
    category: "adventure",
  },
  {
    id: "3",
    src: trainRide,
    alt: "Scenic Train Ride",
    category: "nature",
  },
  {
    id: "4",
    src: teaPlantation,
    alt: "Tea Plantation Visit",
    category: "nature",
  },
  {
    id: "5",
    src: ellaSunrise,
    alt: "Ella Sunrise",
    category: "nature",
  },
  {
    id: "6",
    src: rafting,
    alt: "White Water Rafting",
    category: "adventure",
  },
  {
    id: "7",
    src: kandyViewpoint,
    alt: "Kandy Viewpoint",
    category: "heritage",
  },
  {
    id: "8",
    src: elephantExperience,
    alt: "Elephant Experience",
    category: "adventure",
  },
  {
    id: "9",
    src: waterfall,
    alt: "Waterfall Visit",
    category: "nature",
  },
  {
    id: "10",
    src: mountainView,
    alt: "Mountain Viewpoint",
    category: "nature",
  },
  // New gallery photos
  {
    id: "11",
    src: elephantPose,
    alt: "Elephant Encounter",
    category: "adventure",
  },
  {
    id: "12",
    src: sigiriyaFamily,
    alt: "Family at Sigiriya",
    category: "heritage",
  },
  {
    id: "13",
    src: sigiriyaPanorama,
    alt: "Sigiriya Panoramic View",
    category: "heritage",
  },
  {
    id: "14",
    src: groupFlag,
    alt: "Group with Sri Lankan Flag",
    category: "heritage",
  },
  {
    id: "15",
    src: safariJeep,
    alt: "Safari Adventure",
    category: "adventure",
  },
  {
    id: "16",
    src: rockFormation,
    alt: "Ancient Rock Formation",
    category: "heritage",
  },
  {
    id: "17",
    src: groupHike,
    alt: "Group Hiking Adventure",
    category: "adventure",
  },
  {
    id: "18",
    src: teaTasting,
    alt: "Tea Tasting Experience",
    category: "nature",
  },
  {
    id: "19",
    src: trainGirl,
    alt: "Train Journey",
    category: "nature",
  },
  {
    id: "20",
    src: raftingGroup,
    alt: "Rafting Fun",
    category: "adventure",
  },
  // Additional gallery photos
  {
    id: "21",
    src: sigiriyaPool,
    alt: "Sigiriya Ancient Pool",
    category: "heritage",
  },
  {
    id: "22",
    src: tuktukGirls,
    alt: "Tuk Tuk Adventure",
    category: "adventure",
  },
  {
    id: "23",
    src: sigiriyaGroup,
    alt: "Group at Sigiriya Rock",
    category: "heritage",
  },
  {
    id: "24",
    src: mountainViewpoint,
    alt: "Mountain Viewpoint Experience",
    category: "nature",
  },
  {
    id: "25",
    src: sareeLady,
    alt: "Traditional Saree Experience",
    category: "heritage",
  },
  {
    id: "26",
    src: sigiriyaJump2,
    alt: "Jump for Joy at Sigiriya",
    category: "adventure",
  },
  {
    id: "27",
    src: teaPicking,
    alt: "Tea Picking Experience",
    category: "nature",
  },
  {
    id: "28",
    src: villageFamily,
    alt: "Village Cultural Experience",
    category: "heritage",
  },
  {
    id: "29",
    src: turtleHatchery,
    alt: "Turtle Hatchery Visit",
    category: "adventure",
  },
  {
    id: "30",
    src: tractorRide,
    alt: "Countryside Tractor Ride",
    category: "adventure",
  },
];
