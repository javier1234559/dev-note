import React from "react";

import { cn } from "@/lib/utils";
import { LocaleKeys } from "@/types/locales";

import AppLink from "../AppLink";
import AppSVGIcon from "../AppSVGIcon";

import sx from "./AppSectionTitle.module.scss";

interface Props {
  title: string;
  linkShowMore?: string;
  dictionary: LocaleKeys;
  className?: string;
}

function AppSectionTitle(props: Props) {
  const { title, linkShowMore, dictionary, className = "" } = props;

  return (
    <div className={cn(sx.AppSectionTitle, className)}>
      <h2 className="relative text-heading-2">{title}</h2>

      {linkShowMore && (
        <AppLink
          href={linkShowMore}
          aria-label={title}
          className="flex items-center gap-1"
        >
          {dictionary["See more"]}

          <AppSVGIcon
            src="/svg/chevron-right.svg#id"
            aria-label={dictionary["See more"]}
          />
        </AppLink>
      )}
    </div>
  );
}

export default React.memo(AppSectionTitle);
