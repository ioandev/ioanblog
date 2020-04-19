export interface Wordpress {
    posts:        Post[];
    popularPosts: PopularPost[];
}

export interface PopularPost {
    title:     string;
    slug:      string;
    pageviews: string;
}

export interface Post {
    title:      string;
    html:       string;
    slug:       string;
    thumbnails: Thumbnail[];
    created_at: Date;
    isPost:     Boolean;
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
}


