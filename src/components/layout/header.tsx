'use client';

import Link from 'next/link';
import { Menu, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sun className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              AJ Tech Solutions
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
              <Sun className="h-6 w-6 text-primary" />
              <span className="font-bold">
                AJ Tech
              </span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 text-lg font-medium p-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Sun className="h-6 w-6 text-primary" />
                  <span className="font-bold">
                    AJ Tech Solutions
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'transition-colors hover:text-primary block',
                       pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <Button asChild>
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
