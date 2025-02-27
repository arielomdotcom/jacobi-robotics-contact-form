import SocialFacebook from "@/assets/social-facebook.svg";
import Socialnstagram from "@/assets/social-instagram.svg";
import SociaLinkedin from "@/assets/social-linkedin.svg";
import SociaTwitter from "@/assets/social-twitter.svg";
import { toTitleCase } from "@/utils/titleCase";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfo from "./ContactInfo";
import "./Sidebar.scss";
import SocialIcon from "./SocialIcon";

const title = "Get in touch";
const formattedTitle = toTitleCase(title);

// Address Model
const address = {
  street: "4077 Emery St",
  city: "Emeryville",
  state: "CA",
  zip: "94608",
};

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar rounded-t-xl md:rounded-l-xl md:rounded-tr-none w-full md:w-2/5 bg-primary text-white p-6 md:p-16 flex flex-col justify-center shadow-lg">
      <div className="md:flex-auto">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
          {formattedTitle}
        </h2>
        <div className="space-y-4">
          <ContactInfo
            header="Email us"
            content="contact@jacobirobotics.com"
            icon={Mail}
          />
          <ContactInfo
            header="Phone Number"
            content="+1-222-555-2222"
            icon={Phone}
          />
          <ContactInfo
            variant="address"
            street={address.street}
            city={address.city}
            state={address.state}
            zip={address.zip}
            icon={MapPin}
          />
        </div>
      </div>
      <div className="sidebar-connect-with-us flex flex-col gap-2 mt-12 md:mt-0 md:flex-none">
        <div className="sidebar-connect-with-us-text flex">Connect with us</div>
        <div className="sidebar-connect-with-us-icons flex justify-center md:justify-normal gap-2">
          <SocialIcon src={SocialFacebook} alt="Facebook" href="#" />
          <SocialIcon src={SociaTwitter} alt="Twitter" href="#" />
          <SocialIcon src={SociaLinkedin} alt="LinkedIn" href="#" />
          <SocialIcon src={Socialnstagram} alt="Instagram" href="#" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
