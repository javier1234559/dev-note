import React from "react";
import Image from "next/image";

import AppLink from "@/components/common/AppLink";

import { CategoryEntity } from "@/types/categories";

import ReactionArticle from "../ReactionArticle";
import TagArticle from "../TagArticle";

interface Props {
  articleImage: string;
  authorName: string;
  nickname: string;
  postingTime: string;
  title: string;
  authorAvatar: string;
  linkAuthor: string;
  categories: CategoryEntity[];
}

function HeaderContent(props: Props) {
  const {
    articleImage,
    authorName,
    nickname,
    postingTime,
    title,
    authorAvatar,
    linkAuthor,
    categories,
  } = props;

  return (
    <header>
      <Image
        src={articleImage}
        alt="article image"
        className="h-auto w-full rounded-md"
        width={0}
        height={0}
        sizes="100vw"
      />

      <div className="px-14 pt-8">
        <div className="mb-5 flex">
          <AppLink className="" href={linkAuthor} aria-label={authorName}>
            <Image
              src={authorAvatar}
              alt="avatar"
              className="rounded-full"
              width={40}
              height={40}
            />
          </AppLink>

          <div className="ml-3 flex-1">
            <AppLink
              className="font-bold"
              href={linkAuthor}
              aria-label={authorName}
            >
              {authorName} ({nickname})
            </AppLink>

            <p className="text-heading-7 text-gray-500">
              Posted on {postingTime}
            </p>
          </div>
        </div>

        <ReactionArticle />

        <h1 className="mt-4 text-heading-1 font-bold">{title}</h1>

        <TagArticle categories={categories} />
      </div>
    </header>
  );
}

export default React.memo(HeaderContent);
