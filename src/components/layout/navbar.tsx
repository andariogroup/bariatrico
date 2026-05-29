"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-el-doctor", label: "Sobre el Doctor" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
  { href: "/agendamiento", label: "Agendar Cita" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold text-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm text-primary-foreground">
            BM
          </span>
          <span className="hidden sm:block">{siteConfig.name.split(/[-—]/)[0].trim()}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
            aria-label="Llamar al consultorio"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{siteConfig.phone}</span>
          </a>
          <Button
            render={<Link href="/agendamiento" />}
            nativeButton={false}
            size="sm"
          >
            Agendar Consulta
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              render={
                <Link href="/agendamiento" onClick={() => setOpen(false)} />
              }
              nativeButton={false}
              className="w-full"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
