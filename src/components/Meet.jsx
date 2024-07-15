import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Meet = () => {
  const handleScheduleMeeting = () => {
    // Replace this URL with your actual Calendly or scheduling service URL
    window.open("https://calendly.com/your-username", "_blank");
  };

  return (
    <section id="meet" className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Schedule a Meeting</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Interested in discussing a project or just want to chat? Feel free to schedule a
            meeting with me using the button below.
          </p>
          <Button onClick={handleScheduleMeeting} className="w-full sm:w-auto">
            <Calendar className="mr-2 h-4 w-4" /> Schedule a Meeting
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Meet;