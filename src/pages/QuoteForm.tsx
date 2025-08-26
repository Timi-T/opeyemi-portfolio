import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    project_type: "",
    timeline: "",
    message: "",
  });
  const [discussionDate, setDiscussionDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("client_requests").insert({
        ...formData,
        project_type: formData.project_type as "website" | "web_app",
        discussion_date: discussionDate
          ? format(discussionDate, "yyyy-MM-dd")
          : null,
      });

      if (error) throw error;

      navigate("/success");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-cyan-950/50 to-black py-8 text-neutral-200">
      <div className="mx-auto px-4 max-w-2xl">
        <div className="my-8">
          <Link to="/">
            <Button variant="ghost" className="mb-16">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">
            Get Your Project Quote
          </h1>
          <p className="text-neutral-300">
            Tell me about your project and I'll provide a personalized quote.
          </p>
        </div>

        <Card className="bg-white text-neutral-900 rounded-xl">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-neutral-800" htmlFor="client_name">
                    Your Name/Business Name *
                  </Label>
                  <Input
                    id="client_name"

                    required
                    value={formData.client_name}
                    onChange={(e) =>
                      setFormData({ ...formData, client_name: e.target.value })
                    }
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label className="text-neutral-800" htmlFor="client_email">
                    Email Address *
                  </Label>
                  <Input
                    id="client_email"
                    type="email"
                    required
                    value={formData.client_email}
                    onChange={(e) =>
                      setFormData({ ...formData, client_email: e.target.value })
                    }
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <Label className="text-neutral-800" htmlFor="project_type">
                  Project Type *
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, project_type: value })
                  }
                  required
                >
                  <SelectTrigger className="rounded">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="web_app">Web Application</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-neutral-800" htmlFor="timeline">
                  Project Timeline *
                </Label>
                <Input
                  id="timeline"
                  required
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  placeholder="e.g., 2-3 weeks, 1 month, ASAP"
                />
              </div>

              <div>
                <Label className="text-neutral-800">
                  Preferred Discussion Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal rounded",
                        !discussionDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {discussionDate
                        ? format(discussionDate, "PPP")
                        : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      className="bg-white"
                      mode="single"
                      selected={discussionDate}
                      onSelect={setDiscussionDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-neutral-800" htmlFor="message">
                  Project Description
                </Label>
                <Textarea
                  className="rounded"
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us more about your project requirements..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-black h-12 font-semibold text-base rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteForm;
