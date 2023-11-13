"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const TitleComponent = ({ title, href }: { title: string; href?: string }) => {
  return (
    <div className="py-2 px-4 bg-main-secondary flex items-center justify-between w-full rounded-md">
      <span className="font-semibold">{title}</span>
      {href ? (
        <Link
          href={href}
          className="font-light flex items-center gap-2 hover:text-sky-500"
        >
          Show More
          <Icon icon="mingcute:right-fill" />
        </Link>
      ) : null}
    </div>
  );
};

export default TitleComponent;
