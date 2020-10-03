export interface Wordpress {
    posts:        readonly Post[];
    popularPosts: readonly PopularPost[];
    conversations: readonly Conversation[];
}

export interface PopularPost {
    title:     string;
    slug:      string;
    pageviews: string;
}

export interface ContentJson {
  name:       string;
  data:       string;
  attribs:    Object;
  children:   ContentJson[];
}

export interface Post {
    title:      string;
    html:       string;
    slug:       string;
    thumbnails: Thumbnail[];
    created_at: Date;
    isPost:     Boolean;
    json:       ContentJson;
}

export interface Thumbnail {
    caption: string;
    details: Details;
}

export interface Details {
    thumbnail:    ThumbnailDetails;
    medium:       ThumbnailDetails;
    medium_large: ThumbnailDetails;
    full:         ThumbnailDetails;
}

export interface ThumbnailDetails {
    url:   string;
    width: number;
}

export interface WordpressState {
    wordpress?: Wordpress;
    error: boolean;
    loading: boolean;
    pageType: string;
}





// conversations..
export interface Data {
    text: string;
    img: string;
}

export interface Meta {
    me: boolean;
    showTime: boolean;
    showDate: boolean;
    showName: boolean;
    didSpeakerChange: boolean;
    isLink: boolean;
    name: string;
}

export interface Message {
    id: number;
    time: Date;
    data: Data;
    meta: Meta;
}

export interface Conversation {
    messages: Message[];
    title: string;
    uri: string;
    description: string;
    at: Date;
    cutOffAfterNthLine: number;
    public: boolean;
}
