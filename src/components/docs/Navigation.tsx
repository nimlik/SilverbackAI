"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "overview",
    href: "/docs",
  },
  {
    title: "sora",
    href: "/docs/sora",
    items: [{ title: "purpose", href: "/docs/sora/purpose" }],
  },
  {
    title: "projects",
    href: "/docs/projects",
    items: [
      { title: "zen", href: "/docs/projects/zen" },
      { title: "hana", href: "/docs/projects/hana" },
      { title: "toolkit", href: "/docs/projects/toolkit" },
    ],
  },
];

function getNavigationPath(pathname: string, navigation: NavItem[]): string[] {
  const path = ["documentation"];

  const matchingItem = navigation.find((item) => item.href === pathname);
  if (matchingItem) {
    path.push(matchingItem.title.toLowerCase());
  }

  for (const navItem of navigation) {
    if (navItem.items) {
      const nestedItem = navItem.items.find((item) => item.href === pathname);
      if (nestedItem) {
        path.push(navItem.title.toLowerCase(), nestedItem.title.toLowerCase());
        break;
      }
    }
  }

  return path;
}

function NavLink({
  item,
  isNested = false,
  onNavigate,
}: {
  item: NavItem;
  isNested?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <div>
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`${
          isActive
            ? "text-sora-secondary font-medium"
            : "text-gray-700 hover:text-sora-secondary"
        } ${
          isNested ? "text-xs pl-4" : "text-sm"
        } transition-colors duration-200 block py-2`}
      >
        {item.title}
      </Link>
      {item.items && (
        <div className="ml-2 border-l border-x-sora-accent my-1">
          {item.items.map((subItem) => (
            <NavLink
              key={subItem.href}
              item={subItem}
              isNested
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navigationPath = getNavigationPath(pathname, navigation);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("navigation-menu");
      const button = document.getElementById("nav-toggle-button");
      if (
        isOpen &&
        nav &&
        !nav.contains(event.target as Node) &&
        !button?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div className="lg:hidden flex items-center gap-4">
        <button
          id="nav-toggle-button"
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 p-2 rounded-lg border-sora-secondary/20"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {!isOpen && (
          <span className="text-sm text-gray-700 truncate">
            {navigationPath.map((item, index) => (
              <span key={item}>
                {index > 0 && " → "}
                <span
                  className={
                    index === navigationPath.length - 1
                      ? "text-sora-secondary font-medium"
                      : ""
                  }
                >
                  {item}
                </span>
              </span>
            ))}
          </span>
        )}
      </div>

      <div
        id="navigation-menu"
        className={`${!isOpen && "hidden lg:block"} relative z-50`}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Documentation
        </h2>
        <div className="space-y-4 ml-4">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              onNavigate={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 200);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
