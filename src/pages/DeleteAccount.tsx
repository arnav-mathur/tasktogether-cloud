
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DeleteAccount = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7ff] to-[#eef2ff]">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <Trash2 className="h-8 w-8 text-destructive" />
            <h1 className="text-3xl md:text-4xl font-bold text-destructive">Delete Your Focus Flow Account</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            At Focus Flow, your privacy matters. If you'd like to delete your account and all related data, please follow the instructions below.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">🔧 How to Request Account Deletion</h2>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <ol className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="font-medium">1.</span>
                    <div>
                      <p>Send an email to:</p>
                      <a 
                        href="mailto:support@focusflowapp.io"
                        className="text-primary font-medium hover:underline"
                      >
                        📩 support@focusflowapp.io
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">2.</span>
                    <p>From the Google account linked to your Focus Flow account.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium">3.</span>
                    <div>
                      <p>Use the subject line:</p>
                      <p className="font-medium">"Delete My Focus Flow Account"</p>
                    </div>
                  </li>
                </ol>
                <Alert className="mt-6">
                  <AlertTitle>Processing Time</AlertTitle>
                  <AlertDescription>
                    We'll process your request within 7 days.
                  </AlertDescription>
                </Alert>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">📂 What Data Will Be Deleted</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <p>Your Google account email and display name</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <p>All tasks, schedules, and productivity history</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <p>Friends, challenges, and progress data</p>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <p>AI-generated tips and suggestions</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">⏳ Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your data for up to 7 days after your request to allow for accidental recovery. 
                After that, your data is permanently and irreversibly deleted.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">💬 Need Help?</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns, feel free to reach out at
                <a 
                  href="mailto:support@focusflowapp.io"
                  className="text-primary font-medium hover:underline mx-1"
                >
                  support@focusflowapp.io
                </a>
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/40 text-center">
            <p className="text-sm text-muted-foreground">
              ©️ 2025 Focus Flow. All rights reserved.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default DeleteAccount;
