import {
  NotionDBResponse,
  NotionPageResponse,
  NotionPageViewModel,
  NotionViewModel,
} from "./types";

class NotionService {
  public static convertDbToViewModel({
    result,
  }: NotionDBResponse): NotionViewModel {
    const pages: NotionPageViewModel[] = result.results.map((page) => {
      const pageResponse = page as NotionPageResponse;
      return {
        id: pageResponse.id,
        name: pageResponse.properties.Name.title[0].plain_text,
        createdTime: new Date(pageResponse.last_edited_time),
        slugs: pageResponse.properties.slug.multi_select.map((s) => s.name),
        blocks: [],
      };
    });

    return {
      pages,
    };
  }
}

export default NotionService;
