import {
  AppendBlockChildrenResponse,
  QueryDatabaseResponse,
} from "@kritb-blog/notion-db-connector";

interface Object {
  id: string;
  name: string;
  color: string;
}

interface PageSlug {
  id: string;
  type: string;
  multi_select: Object[];
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Title {
  type: string;
  text: {
    content: string;
    link: string;
  };
  annotations: Annotations;
  plain_text: string;
  href: string;
}

interface PageName {
  id: string;
  type: string;
  title: Title[];
}

interface NotionPageProperties {
  slug: PageSlug;
  Name: PageName;
}

export interface NotionPageResponse {
  id: string;
  object: string;
  last_edited_time: string;
  properties: NotionPageProperties;
}

export interface NotionDBResponse {
  result: QueryDatabaseResponse;
  block: AppendBlockChildrenResponse;
}

interface NotionBlockViewModel {
  type: string;
  content: string;
}

export interface NotionPageViewModel {
  id: string;
  name: string;
  createdTime: Date;
  slugs: string[];
  blocks: NotionBlockViewModel[];
}

export interface NotionViewModel {
  pages: NotionPageViewModel[];
}
