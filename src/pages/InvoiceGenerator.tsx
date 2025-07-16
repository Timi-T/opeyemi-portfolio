import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import type { User, Session } from "@supabase/supabase-js";

type Invoice = {
  quotes: { amount: number; title: string; description: string }[];
  total: { usd: number; naira: number };
};

const InvoiceGenerator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [quotes, setQuotes] = useState<Invoice>();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (!session?.user) {
        navigate("/admin/login");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (!session?.user) {
        navigate("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: request } = useQuery({
    queryKey: ["client-request", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("client_requests")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user && !!id,
  });

  const handlePrint = () => {
    window.print();
  };

  async function convertNairaToUSD(amountNaira: number) {
    try {
      const res = await fetch(
        `https://api.exchangerate.host/convert?from=USD&to=NGN&amount=${amountNaira}&access_key=935696d7c5fc790701c1df5ce10014a1`
      );
      const data = await res.json();
      return data.result;
    } catch {
      return 0;
    }
  }

  const generateQuotes = async () => {
    const features = request?.admin_notes?.split("\n");
    let total = 0;
    const quotes = features?.map((feature) => {
      const quoteSplit = feature?.split(":");
      const quoteTitle = quoteSplit?.[0]?.replace("- ", "");
      const qouteRemainingText = quoteSplit?.[1];
      const textSplit = qouteRemainingText?.split("=");
      const quoteDescription = textSplit?.[0];
      const quotePrice = textSplit?.[1]?.replace(" ", "");
      total += Number(quotePrice);

      return {
        description: quoteDescription,
        amount: Number(quotePrice),
        title: quoteTitle,
      };
    });
    const nairaTotal = await convertNairaToUSD(total);
    return { quotes, total: { usd: total, naira: nairaTotal } };
  };

  const getQuotes = async () => {
    const q = await generateQuotes();
    setQuotes(q);
  };

  useEffect(() => {
    getQuotes();
  }, [request]);

  if (!session?.user || !request) {
    return <div>Loading...</div>;
  }

  const invoiceNumber = `INV-${format(new Date(), "yyyyMM")}-${request.id
    .slice(-6)
    .toUpperCase()}`;
  const today = new Date();
  const dueDate = new Date(
    today.getTime() + (request?.invoice_amount || 30) * 24 * 60 * 60 * 1000
  ); // 30 days from now

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="no-print bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/admin/dashboard")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Card className="print:shadow-none print:border-none">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  INVOICE
                </h1>
                <p className="text-gray-600">Frontend Development Services</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {invoiceNumber}
                </div>
                <div className="text-sm text-gray-600">
                  <div>Issue Date: {format(today, "MMM dd, yyyy")}</div>
                  <div>Due Date: {format(dueDate, "MMM dd, yyyy")}</div>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">From:</h3>
                <div className="text-gray-600">
                  <div className="font-medium">{request.client_name}</div>
                  {/* <div>123 Business Street</div>
                  <div>City, State 12345</div> */}
                  <div>{request.client_email}</div>
                  {/* <div>+1 (555) 123-4567</div> */}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bill To:</h3>
                <div className="text-gray-600">
                  <div className="font-medium">{request.client_name}</div>
                  <div>{request.client_email}</div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-0 text-lg">
                Project Details
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {request.message && (
                  <div className="mt-3">
                    <span className="font-medium">Project Description:</span>
                    <p className="mt-1 text-gray-700">{request.message}</p>
                  </div>
                )}
                <div className="text-sm">
                  {request.discussion_date && (
                    <div>
                      <span className="font-medium">Discussion Date:</span>{" "}
                      {format(
                        new Date(request.discussion_date),
                        "MMM dd, yyyy"
                      )}
                    </div>
                  )}
                </div>
                {request.project_type && (
                  <div className="mt-3">
                    <span className="font-medium">Project Type:</span>
                    <p className="mt-1 text-gray-700 capitalize">
                      {request.project_type === "web_app"
                        ? "web application"
                        : "website"}
                    </p>
                  </div>
                )}
                <div className="mt-3">
                  <span className="font-medium">Timeline:</span>
                  <p className="mt-1 text-gray-700 capitalize">
                    {request.timeline}
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice Table */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                Project Breakdown
              </h3>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left">
                      Description
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quotes?.quotes?.map((quote) => {
                    return (
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">
                          <p className="font-medium capitalize">
                            {quote.title}
                          </p>
                          <div className="text-sm text-gray-600 mt-1">
                            {quote.description}
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-right font-medium">
                          ${quote.amount}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-right">
                      Total Amount:
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-bold text-lg">
                      ${quotes?.total?.usd?.toLocaleString() || 0}/₦
                      {quotes?.total?.naira?.toLocaleString() || 0}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-right">
                      Amount due (50% before commencement):
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-right font-bold text-lg">
                      ${((quotes?.total?.usd || 0) / 2)?.toLocaleString() || 0}
                      /₦
                      {((quotes?.total?.naira || 0) / 2)?.toLocaleString() || 0}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Payment Terms */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Account details
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>
                    • (Naira account): 9011164280 Moniepoint | Opeyemi Ogunbode
                  </div>
                  {/* <div>
                    • (Dollar account): 9011164280 Moniepoint | Opeyemi Ogunbode
                  </div>
                  <div>• (Wallet address): hgwhhke</div> */}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Payment Terms
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Payment is due within 30 days of invoice date</div>
                  <div>
                    • Accepted payment methods: Bank transfer & Crypto (USDC).
                  </div>
                  <div>• Late payments may incur additional fees</div>
                  <div>
                    • Please include invoice number in payment reference
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500 border-t pt-4">
              <p>Thank you for your business!</p>
              <p>
                For questions about this invoice, please contact me at
                ogunbodetimi@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .container {
            max-width: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default InvoiceGenerator;
