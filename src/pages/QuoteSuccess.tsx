import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const QuoteSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="text-center bg-white rounded">
          <CardHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-800">
              Request Submitted Successfully!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Thank you for your interest in working with us. We've received
              your project details and will get back to you within 24 hours with
              a personalized quote.
            </p>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center text-green-700 mb-2">
                <Mail className="h-4 w-4 mr-2" />
                <span className="font-medium">What's Next?</span>
              </div>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• We'll review your project requirements</li>
                <li>• Prepare a detailed quote and timeline</li>
                <li>• Schedule a discussion call if requested</li>
                <li>• Send you a comprehensive proposal</li>
              </ul>
            </div>

            <div className="pt-4">
              <Link to="/">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteSuccess;
