import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import prop5 from "@/assets/prop-5.jpg";
import prop6 from "@/assets/prop-6.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tag: string;
}

export const properties: Property[] = [
  {
    id: "sonoran-villa",
    title: "Sonoran Glass Villa",
    location: "Scottsdale",
    price: "$2,450,000",
    beds: 5,
    baths: 4,
    sqft: "4,820",
    image: prop1,
    tag: "Featured",
  },
  {
    id: "arcadia-ranch",
    title: "Arcadia Ranch Estate",
    location: "Phoenix",
    price: "$1,875,000",
    beds: 4,
    baths: 3.5,
    sqft: "3,940",
    image: prop2,
    tag: "New Listing",
  },
  {
    id: "maple-court",
    title: "Maple Court Residence",
    location: "Tempe",
    price: "$985,000",
    beds: 4,
    baths: 3,
    sqft: "2,760",
    image: prop3,
    tag: "Open House",
  },
  {
    id: "desert-view",
    title: "Desert View Living",
    location: "Scottsdale",
    price: "$1,620,000",
    beds: 4,
    baths: 3,
    sqft: "3,210",
    image: prop4,
    tag: "Featured",
  },
  {
    id: "casa-blanca",
    title: "Casa Blanca Interior",
    location: "Paradise Valley",
    price: "$2,150,000",
    beds: 5,
    baths: 4.5,
    sqft: "4,100",
    image: prop5,
    tag: "Exclusive",
  },
  {
    id: "sunset-terrace",
    title: "Sunset Terrace Estate",
    location: "Fountain Hills",
    price: "$1,390,000",
    beds: 3,
    baths: 3,
    sqft: "2,980",
    image: prop6,
    tag: "New Listing",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Abraham made our move to Scottsdale effortless. He listened carefully, never rushed us, and negotiated a price we didn't think was possible.",
    name: "Daniel & Maria Whitfield",
    detail: "Bought in Scottsdale",
  },
  {
    quote:
      "Selling a family home is emotional. Abraham handled every detail with patience and honesty — and we closed above asking in eleven days.",
    name: "Karen Doyle",
    detail: "Sold in Phoenix",
  },
  {
    quote:
      "As a first-time investor I had a hundred questions. Abraham walked me through the numbers on every property until I found the right one.",
    name: "James Okafor",
    detail: "Investment purchase, Tempe",
  },
  {
    quote:
      "His knowledge of the Phoenix market is unmatched. We trusted his advice at every step and ended up in a home we absolutely love.",
    name: "The Alvarez Family",
    detail: "Bought in Arcadia",
  },
  {
    quote:
      "Professional, calm, and always one step ahead. Abraham anticipated issues before they became problems. I can't recommend him enough.",
    name: "Susan Meyer",
    detail: "Sold in Paradise Valley",
  },
  {
    quote:
      "We relocated from out of state and Abraham was our eyes on the ground. Video tours, honest assessments, and a seamless closing.",
    name: "Robert & Lena Chen",
    detail: "Relocated to Chandler",
  },
];
