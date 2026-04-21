// Instagram posts from @adclubtrivandrum
// To add/update posts: replace shortcodes with actual post shortcodes from the URL
// e.g. https://www.instagram.com/p/SHORTCODE/ → add "SHORTCODE" here

export interface InstagramPost {
  shortcode: string;
  caption?: string;
}

export const instagramPosts: InstagramPost[] = [
  { shortcode: "C_example1", caption: "Kreative Kochi 2024" },
  { shortcode: "C_example2", caption: "Workshop Highlights" },
  { shortcode: "C_example3", caption: "ACT Members" },
  { shortcode: "C_example4", caption: "Behind the Scenes" },
  { shortcode: "C_example5", caption: "Award Night" },
  { shortcode: "C_example6", caption: "Creative Session" },
];

export const INSTAGRAM_HANDLE = "adclubtvm";
