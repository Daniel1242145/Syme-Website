import {
  Blinds,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Home,
  KeyRound,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Timer,
  WandSparkles,
} from "lucide-react";

export const business = {
  name: "Syme Carpet Cleaning",
  phone: "022 422 1696",
  phoneHref: "tel:0224221696",
  email: "Daniel@symecleaning.co.nz",
  emailHref: "mailto:Daniel@symecleaning.co.nz",
  location: "Christchurch, NZ",
  rating: "5.0",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/maintenance-plans", label: "Maintenance Plans" },
  { href: "/resources", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Carpet Cleaning",
    keyword: "Carpet Cleaning Christchurch",
    description:
      "Deep extraction carpet cleaning for homes, rentals and high-traffic family spaces across Christchurch.",
    icon: Sparkles,
  },
  {
    title: "Upholstery Cleaning",
    keyword: "Upholstery Cleaning Christchurch",
    description:
      "Refresh sofas, chairs and soft furnishings with careful fabric-aware upholstery cleaning.",
    icon: WandSparkles,
  },
  {
    title: "End of Tenancy Cleaning",
    keyword: "End of Tenancy Cleaning Christchurch",
    description:
      "Move-out cleaning support for tenants, landlords and property managers who need a reliable finish.",
    icon: KeyRound,
  },
  {
    title: "Pre-Sale Cleaning",
    keyword: "Pre-Sale Cleaning Christchurch",
    description:
      "Presentation-focused cleaning that helps carpets, windows and interiors look inspection-ready.",
    icon: Home,
  },
  {
    title: "Window Cleaning",
    keyword: "Window Cleaning Christchurch",
    description:
      "Clear, streak-free window cleaning for homes, rentals, offices and local shopfronts.",
    icon: Blinds,
  },
  {
    title: "Commercial Cleaning",
    keyword: "Commercial Cleaning Christchurch",
    description:
      "Flexible commercial cleaning for offices, small businesses, retail spaces and shared facilities.",
    icon: Building2,
  },
];

export const trustBadges = [
  { label: "5.0 Stars", icon: Star },
  { label: "Christchurch Owned", icon: MapPin },
  { label: "Fast Quotes", icon: Timer },
  { label: "No Long-Term Contracts", icon: ShieldCheck },
];

export const whyChooseUs = [
  {
    title: "Detail-first service",
    text: "Every job is approached with care, clear communication and a premium finish.",
    icon: CheckCircle2,
  },
  {
    title: "Local Christchurch knowledge",
    text: "Responsive cleaning support for homes, rentals, offices and businesses across the city.",
    icon: MapPin,
  },
  {
    title: "Flexible booking",
    text: "One-off cleans, pre-sale work, tenancy cleans and maintenance plans without long contracts.",
    icon: CalendarCheck,
  },
];

export const reviews = [
  {
    name: "Christchurch Homeowner",
    text: "Professional, friendly and fast to quote. The carpets looked fresh and the whole process was easy.",
  },
  {
    name: "Rental Property Client",
    text: "Reliable end of tenancy cleaning with great communication. Exactly what we needed before handover.",
  },
  {
    name: "Local Business",
    text: "Syme Carpet Cleaning keeps our office carpets and windows looking sharp without locking us into a contract.",
  },
];

export const maintenancePlans = [
  {
    title: "Carpet Cleaning Maintenance",
    cadence: "Every 6-12 months on average",
    details:
      "We remind you when your carpets are due for a clean so they stay fresh, protected and properly maintained.",
  },
  {
    title: "Commercial Care",
    cadence: "Weekly, fortnightly or monthly",
    details: "Flexible office, retail and shared-space cleaning with no long-term contract pressure.",
  },
];

export const contactMethods = [
  { label: business.phone, href: business.phoneHref, icon: Phone },
  { label: business.email, href: business.emailHref, icon: Mail },
  { label: business.location, href: "/contact", icon: Store },
];
