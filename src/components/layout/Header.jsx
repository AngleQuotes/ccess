import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="max-w-7xl rounded-lg flex justify-center items-center">
      <Image alt="Logo" src="/logo.png" width={100} height={50} />
      <div className="flex gap-4 align-center justify-center">
        <Link href="/">الرئيسية</Link>
        <Link href="/">من نحن</Link>
        <Link href="/">الأبحاث والدراسات</Link>
        <Link href="/">المركز الأعلامي</Link>
        <Link href="/">الوظائف</Link>
        <Link href="/">خدمتنا</Link>
        <Link href="/">تواصل معنا </Link>
      </div>
    </nav>
  );
};

export default Header;
