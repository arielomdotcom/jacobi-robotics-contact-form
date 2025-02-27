import { LucideIcon } from "lucide-react";
import "./ContactInfo.scss";
import IconCircle from "./IconCircle";

interface ContactInfoProps {
  header?: string;
  content?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  icon: LucideIcon;
  variant?: "default" | "address";
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  header,
  content,
  street,
  city,
  state,
  zip,
  icon: Icon,
  variant = "default",
}) => {
  if (variant === "address") {
    return (
      <div className="contact-info flex items-center gap-6">
        <div className="flex-shrink-0">
          <IconCircle Icon={Icon} />
        </div>
        <div className="contact-info-content flex flex-col">
          {header && (
            <span className="contact-info-header text-xs">{header}</span>
          )}
          <span className="contact-info-detail">{street}</span>
          <span className="contact-info-detail">{`${city}, ${state} ${zip}.`}</span>
        </div>
      </div>
    );
  }

  // Default behavior if the ariant is not 'address'
  return (
    <div className="contact-info flex items-center gap-5">
      <div className="flex-shrink-0">
        <IconCircle Icon={Icon} />
      </div>
      <div className="contact-info-content flex flex-col gap-2">
        {header && (
          <span className="contact-info-header text-xs">{header}</span>
        )}
        <span className="contact-info-detail">{content}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
