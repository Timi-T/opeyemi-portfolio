import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LogOut,
  FileText,
  DollarSign,
  Calendar,
  Mail,
  User,
  MessageSquare,
  Clock,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import type { User as SupabaseUser, Session } from "@supabase/supabase-js";
import { format } from "date-fns";

const AdminDashboard = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const { data: requests, refetch } = useQuery({
    queryKey: ["client-requests"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("client_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user,
  });

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleUpdateRequest = async () => {
    if (!selectedRequest) return;

    try {
      const { error } = await supabase
        .from("client_requests")
        .update({
          admin_notes: adminNotes,
          invoice_amount: invoiceAmount ? parseFloat(invoiceAmount) : null,
          status: status as any,
          updated_at: new Date().toISOString(),
        })
        .eq("id", selectedRequest.id);

      if (error) throw error;

      toast({
        title: "Request updated successfully!",
        description: "The client request has been updated.",
      });

      setSelectedRequest(null);
      setAdminNotes("");
      setInvoiceAmount("");
      setStatus("");
      refetch();
    } catch (error) {
      console.error("Error updating request:", error);
      toast({
        title: "Error",
        description: "Failed to update request.",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "discussed":
        return "bg-blue-100 text-blue-800";
      case "invoiced":
        return "bg-purple-100 text-purple-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!session?.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.email}
              </span>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Client Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {requests?.map((request) => (
                    <div
                      key={request.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedRequest(request);
                        setAdminNotes(request.admin_notes || "");
                        setInvoiceAmount(
                          request.invoice_amount?.toString() || ""
                        );
                        setStatus(request.status || "pending");
                      }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">
                            {request.client_name}
                          </span>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {request.client_email}
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {request.project_type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {request.timeline}
                        </div>
                        {request.discussion_date && (
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {format(
                              new Date(request.discussion_date),
                              "MMM dd, yyyy"
                            )}
                          </div>
                        )}
                      </div>

                      {request.message && (
                        <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                          {request.message}
                        </p>
                      )}

                      <div className="mt-2 text-xs text-gray-500">
                        Submitted:{" "}
                        {format(
                          new Date(request.created_at),
                          "MMM dd, yyyy HH:mm"
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            {selectedRequest ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Manage Request</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="discussed">Discussed</SelectItem>
                        <SelectItem value="invoiced">Invoiced</SelectItem>
                        <SelectItem value="invoiced">In progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="invoice_amount">Timeframe (days)</Label>
                    <Input
                      id="invoice_amount"
                      type="number"
                      step="0.01"
                      value={invoiceAmount}
                      onChange={(e) => setInvoiceAmount(e.target.value)}
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <Label htmlFor="admin_notes">Admin Notes</Label>
                    <Textarea
                      id="admin_notes"
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add notes about the discussion, requirements, etc..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={handleUpdateRequest}
                      className="w-full bg-blue-500 text-white rounded hover:bg-blue"
                    >
                      Update Request
                    </Button>

                    {invoiceAmount && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() =>
                          navigate(`/admin/invoice/${selectedRequest.id}`)
                        }
                      >
                        <DollarSign className="mr-2 h-4 w-4" />
                        Generate Invoice
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-8 text-center text-gray-500">
                  Select a client request to manage it
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
