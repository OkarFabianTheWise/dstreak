"use client";

import type React from "react";
import { useState } from "react";
import { AdminSidebar } from "@/components/superAdmin/sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SuperAdminNav } from "@/components/reuse/superAdminNav";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <div className="fixed">
          <AdminSidebar />
        </div>
      </div>

      {/* Mobile Sidebar */}

      {/* Main Content */}
      <div className="flex-1 md:ml-64 ml-0">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-4 md:px-6">
          <SuperAdminNav demoProfilePics="/path-to-profile-pic.jpg" />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="ml-2 mt-2">
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <AdminSidebar />
              </SheetContent>
            </Sheet>
        </header>

        <main className="h-[calc(100vh-5rem)] overflow-y-auto no-scrollbar md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
