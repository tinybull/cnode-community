import { Author, TopicDetailEntity } from "@/types/responseEntity";

export function emptyAuthor(): Author {
  return {
    avatar_url: "",
    loginname: ""
  };
}

export function emptyTopicDetailEntity(): TopicDetailEntity {
  const author = emptyAuthor();
  return {
    author: author,
    author_id: "",
    content: "",
    create_at: "",
    good: false,
    id: "",
    is_collect: false,
    last_reply_at: "",
    replies: [],
    reply_count: 0,
    tab: "",
    title: "",
    top: false,
    visit_count: 0
  };
}
