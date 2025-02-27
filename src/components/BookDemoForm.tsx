import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import PhoneNumberInput from "./ui/phone-number-input";
import { Textarea } from "./ui/textarea";

const BookDemoForm: React.FC = () => {
  return (
    <main className="container mx-auto p-6 py-10">
      <header className="book-demo-form-header md:mt-10 md:mb-8">
        <h2 className="text-4xl font-black mb-4 text-center max-w-[400px] mx-auto">
          Have a project in mind? Book a demo.
        </h2>
        <p className="text-gray-800 text-sm md:text-xs mb-6 text-center md:max-w-[440px] mx-auto">
          Got a project? Drop me a line if you want to work together on
          something exciting. Or do you need our help? Feel free to contact us.
        </p>
      </header>
      <Card className="form-wrapper max-w-[1200px] mx-auto md:flex md:justify-center shadow rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
        <Sidebar />
        <div className="w-full md:w-2/3 p-4 pb-10 md:p-16">
          <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="first-name" className="block">
                First name
              </Label>
              <Input autoFocus id="first-name" placeholder="First name" />
            </div>

            <div>
              <Label htmlFor="last-name" className="block">
                Last name
              </Label>
              <Input id="last-name" placeholder="Last name" />
            </div>

            <div>
              <Label htmlFor="company-name" className="block">
                Company name
              </Label>
              <Input id="company-name" placeholder="Company name" />
            </div>

            <div>
              <Label htmlFor="work-email" className="block">
                Work email
              </Label>
              <Input id="work-email" placeholder="Work email" />
            </div>

            <div className="w-full col-span-1 md:col-span-2">
              <Label htmlFor="country" className="block ">
                Country
              </Label>
              <Input id="country" placeholder="Country" className=" w-full" />
            </div>

            <PhoneNumberInput />

            <div className="col-span-1 md:col-span-2">
              <Label htmlFor="project-description" className="block">
                Describe the project you need help with
              </Label>

              <Textarea
                id="project-description"
                placeholder="Please tell us how we can help..."
                className=" h-24"
              />
            </div>
          </CardContent>
          <div className="flex mt-6">
            <Button className="w-full md:w-auto">Submit</Button>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default BookDemoForm;
