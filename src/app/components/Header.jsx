'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
    const router = usePathname()
    console.log(router)
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "FaQ",
      link: "/faq",
    },
    {
        title: "Posts",
        link: "/posts",
      },
  ];
  return (
    <div className="flex py-[30px] gap-12">
      {navItems.map((item) => (
        <Link key={item.link} href={item.link} className={router===`${item.link}`? 'text-blue-500 font-bold':""}>
        {item.title}
      </Link>
      
      ))}
    </div>
  );
}
