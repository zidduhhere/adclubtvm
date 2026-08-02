import { Camera, Globe, Mail } from "lucide-react";
import { Footer as FooterUI } from "./ui/footer";

export default function Footer() {
  return (
    <FooterUI
      brandName="Ad Club TVM"
      displayText="Ad Club TVM"
      socialLinks={[
        {
          icon: <Camera className="h-4 w-4" />,
          href: "https://instagram.com/adclubtvm",
          label: "Instagram",
        },
        {
          icon: <Globe className="h-4 w-4" />,
          href: "https://linkedin.com/company/adclubtvm",
          label: "LinkedIn",
        },
        {
          icon: <Mail className="h-4 w-4" />,
          href: "mailto:adclubtrivandrum@gmail.com",
          label: "Email",
        },
      ]}
      columns={[
        {
          heading: "Navigate",
          links: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/events", label: "Events" },
            { href: "/gallery", label: "Gallery" },
          ],
        },
        {
          heading: "Programmes",
          links: [
            { href: "/living-room", label: "Living Room" },
            { href: "https://loaawards.com", label: "LOA Awards" },
            { href: "/membership", label: "Membership" },
          ],
        },
        {
          heading: "Community",
          links: [
            { href: "/instagram", label: "Instagram Feed" },
            { href: "https://instagram.com/adclubtvm", label: "Follow on Instagram" },
            { href: "https://linkedin.com/company/adclubtvm", label: "LinkedIn" },
          ],
        },
        {
          heading: "Contact",
          links: [
            { href: "mailto:adclubtrivandrum@gmail.com", label: "Email Us" },
            { href: "tel:04714060881", label: "0471 4060881" },
            { href: "/about", label: "Thiruvananthapuram, KL" },
          ],
        },
      ]}
      copyright={{
        text: `© ${new Date().getFullYear()} Advertising Club Trivandrum`,
        subtitle: "Thiruvananthapuram · Kerala · India",
      }}
    />
  );
}
