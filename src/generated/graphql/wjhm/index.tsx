import gql from "graphql-tag"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BlockJsonArray: any
  BlockAttributesArray: any
  BlockAttributesObject: any
  AcfColor: any
}

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: "RootQuery"
  /**
   * A 0bject
   * @deprecated
   */
  caseStudy?: Maybe<CaseStudy>
  /**
   * A CaseStudy object
   * @deprecated
   */
  caseStudyBy?: Maybe<CaseStudy>
  /**
   * A 0bject
   * @deprecated
   */
  event?: Maybe<Event>
  /**
   * A Event object
   * @deprecated
   */
  eventBy?: Maybe<Event>
  /**
   * A 0bject
   * @deprecated
   */
  inspiration?: Maybe<Inspiration>
  /**
   * A Inspiration object
   * @deprecated
   */
  inspirationBy?: Maybe<Inspiration>
  /**
   * A 0bject
   * @deprecated
   */
  review?: Maybe<Review>
  /**
   * A Review object
   * @deprecated
   */
  reviewBy?: Maybe<Review>
  /**
   * A 0bject
   * @deprecated
   */
  series?: Maybe<Series>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  serieses?: Maybe<RootQueryToSeriesConnection>
  /**
   * Entry point to get all settings for the site
   * @deprecated
   */
  allSettings?: Maybe<Settings>
  /** @deprecated  */
  blocksBy?: Maybe<Array<Maybe<Block>>>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  caseStudies?: Maybe<RootQueryToCaseStudyConnection>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  categories?: Maybe<RootQueryToCategoryConnection>
  /**
   * A 0bject
   * @deprecated
   */
  category?: Maybe<Category>
  /**
   * Returns a Comment
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  comments?: Maybe<RootQueryToCommentConnection>
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  events?: Maybe<RootQueryToEventConnection>
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  inspirations?: Maybe<RootQueryToInspirationConnection>
  /**
   * A 0bject
   * @deprecated
   */
  mediaItem?: Maybe<MediaItem>
  /**
   * A mediaItem object
   * @deprecated
   */
  mediaItemBy?: Maybe<MediaItem>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>
  /**
   * A WordPress navigation menu
   * @deprecated
   */
  menu?: Maybe<Menu>
  /**
   * A WordPress navigation menu item
   * @deprecated
   */
  menuItem?: Maybe<MenuItem>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  menuItems?: Maybe<RootQueryToMenuItemConnection>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  menus?: Maybe<RootQueryToMenuConnection>
  /**
   * Fetches an object given its ID
   * @deprecated
   */
  node?: Maybe<Node>
  /**
   * A 0bject
   * @deprecated
   */
  page?: Maybe<Page>
  /**
   * A page object
   * @deprecated
   */
  pageBy?: Maybe<Page>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  pages?: Maybe<RootQueryToPageConnection>
  /**
   * A WordPress plugin
   * @deprecated
   */
  plugin?: Maybe<Plugin>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  plugins?: Maybe<RootQueryToPluginConnection>
  /**
   * A 0bject
   * @deprecated
   */
  post?: Maybe<Post>
  /**
   * A post object
   * @deprecated
   */
  postBy?: Maybe<Post>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  posts?: Maybe<RootQueryToPostConnection>
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  reviews?: Maybe<RootQueryToReviewConnection>
  /**
   * A 0bject
   * @deprecated
   */
  revision?: Maybe<Revision>
  /**
   * A revision object
   * @deprecated
   */
  revisionBy?: Maybe<Revision>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  revisions?: Maybe<RootQueryToRevisionConnection>
  /**
   * A 0bject
   * @deprecated
   */
  tag?: Maybe<Tag>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  tags?: Maybe<RootQueryToTagConnection>
  /**
   * A Theme object
   * @deprecated
   */
  theme?: Maybe<Theme>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  themes?: Maybe<RootQueryToThemeConnection>
  /**
   * Returns a user
   * @deprecated
   */
  user?: Maybe<User>
  /**
   * Returns a user role
   * @deprecated
   */
  userRole?: Maybe<UserRole>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  userRoles?: Maybe<RootQueryToUserRoleConnection>
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated
   */
  users?: Maybe<RootQueryToUserConnection>
  /**
   * Returns the current user
   * @deprecated
   */
  viewer?: Maybe<User>
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>
}

/** The root entry point into the Graph */
export type RootQueryCaseStudyArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryCaseStudyByArgs = {
  id?: Maybe<Scalars["ID"]>
  caseStudyId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryEventArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryEventByArgs = {
  id?: Maybe<Scalars["ID"]>
  eventId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryInspirationArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryInspirationByArgs = {
  id?: Maybe<Scalars["ID"]>
  inspirationId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryReviewArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryReviewByArgs = {
  id?: Maybe<Scalars["ID"]>
  reviewId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQuerySeriesArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQuerySeriesesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToSeriesConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryBlocksByArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryCaseStudiesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToCaseStudyConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToCommentConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryEventsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToEventConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryInspirationsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToInspirationConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: Maybe<Scalars["ID"]>
  mediaItemId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: Maybe<Scalars["ID"]>
}

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: Maybe<Scalars["ID"]>
  pageId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToPageConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: Maybe<Scalars["ID"]>
  postId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToPostConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryReviewsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToReviewConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryRevisionArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryRevisionByArgs = {
  id?: Maybe<Scalars["ID"]>
  revisionId?: Maybe<Scalars["Int"]>
  uri?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToRevisionConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToTagConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars["ID"]
}

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
}

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<RootQueryToUserConnectionWhereArgs>
}

/** The CaseStudy type */
export type CaseStudy = Node & {
  __typename?: "CaseStudy"
  /** @deprecated  */
  CaseStudyFields?: Maybe<CaseStudy_Casestudyfields>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  caseStudyId: Scalars["Int"]
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * Connection between the CaseStudy type and the CaseStudy type
   * @deprecated
   */
  categories?: Maybe<CaseStudyToCategoryConnection>
  /**
   * Connection between the CaseStudy type and the CaseStudy type
   * @deprecated
   */
  childCaseStudies?: Maybe<CaseStudyToCaseStudyConnection>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * The content of the post.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The featured image for the object
   * @deprecated
   */
  featuredImage?: Maybe<MediaItem>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the case object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The Yoast SEO data of the CaseStudy
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Connection between the CaseStudy type and the CaseStudy type
   * @deprecated
   */
  tags?: Maybe<CaseStudyToTagConnection>
  /**
   * Terms connected to the CaseStudy
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the CaseStudy
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the CaseStudy
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The CaseStudy type */
export type CaseStudyAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The CaseStudy type */
export type CaseStudyBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The CaseStudy type */
export type CaseStudyCategoriesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CaseStudyToCategoryConnectionWhereArgs>
}

/** The CaseStudy type */
export type CaseStudyChildCaseStudiesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CaseStudyToCaseStudyConnectionWhereArgs>
}

/** The CaseStudy type */
export type CaseStudyContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The CaseStudy type */
export type CaseStudyExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The CaseStudy type */
export type CaseStudyTagsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CaseStudyToTagConnectionWhereArgs>
}

/** The CaseStudy type */
export type CaseStudyTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The CaseStudy type */
export type CaseStudyTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The CaseStudy type */
export type CaseStudyTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The CaseStudy type */
export type CaseStudyTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars["ID"]
}

/** Field Group */
export type CaseStudy_Casestudyfields = {
  __typename?: "CaseStudy_Casestudyfields"
  /** @deprecated  */
  blocks?: Maybe<Array<Maybe<CaseStudy_Casestudyfields_Blocks>>>
  /** @deprecated  */
  devicePreviews?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  devices?: Maybe<CaseStudy_Casestudyfields_Devices>
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  gallery?: Maybe<Array<Maybe<MediaItem>>>
  /** @deprecated  */
  intro?: Maybe<CaseStudy_Casestudyfields_Intro>
  /** @deprecated  */
  related?: Maybe<Array<Maybe<CaseStudy_Casestudyfields_Related>>>
  /** @deprecated  */
  siteUrl?: Maybe<Scalars["String"]>
  /** @deprecated  */
  testimonials?: Maybe<Array<Maybe<CaseStudy_Casestudyfields_Testimonials>>>
}

/** Field Group */
export type CaseStudy_Casestudyfields_Blocks = {
  __typename?: "CaseStudy_Casestudyfields_blocks"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  fields?: Maybe<CaseStudy_Casestudyfields_Blocks_Fields>
}

/** Field Group */
export type CaseStudy_Casestudyfields_Blocks_Fields = {
  __typename?: "CaseStudy_Casestudyfields_blocks_Fields"
  /** @deprecated  */
  columnOne?: Maybe<Scalars["String"]>
  /** @deprecated  */
  columnTwo?: Maybe<Scalars["String"]>
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  title?: Maybe<Scalars["String"]>
}

/** Field Group */
export type CaseStudy_Casestudyfields_Devices = {
  __typename?: "CaseStudy_Casestudyfields_Devices"
  /** @deprecated  */
  desktop?: Maybe<Scalars["String"]>
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mobile?: Maybe<Scalars["String"]>
}

/** The mediaItem type */
export type MediaItem = Node & {
  __typename?: "MediaItem"
  /**
   * Alternative text to display when resource is not displayed
   * @deprecated
   */
  altText?: Maybe<Scalars["String"]>
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * The caption for the resource
   * @deprecated
   */
  caption?: Maybe<Scalars["String"]>
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  commentCount?: Maybe<Scalars["Int"]>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * Connection between the mediaItem type and the mediaItem type
   * @deprecated
   */
  comments?: Maybe<MediaItemToCommentConnection>
  /**
   * The content of the post.
   * @deprecated Use the description field instead of content
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * Description of the image (stored as post_content)
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated Use the caption field instead of excerpt
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the attachment object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * Details about the mediaItem
   * @deprecated
   */
  mediaDetails?: Maybe<MediaDetails>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  mediaItemId: Scalars["Int"]
  /**
   * Url of the mediaItem
   * @deprecated
   */
  mediaItemUrl?: Maybe<Scalars["String"]>
  /**
   * Type of resource
   * @deprecated
   */
  mediaType?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The mime type of the mediaItem
   * @deprecated
   */
  mimeType?: Maybe<Scalars["String"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The Yoast SEO data of the mediaItem
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The sizes attribute value for an image.
   * @deprecated
   */
  sizes?: Maybe<Scalars["String"]>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * Url of the mediaItem
   * @deprecated
   */
  sourceUrl?: Maybe<Scalars["String"]>
  /**
   * The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths.
   * @deprecated
   */
  srcSet?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Terms connected to the mediaItem
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the mediaItem
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the mediaItem
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The mediaItem type */
export type MediaItemBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemCommentsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: Maybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: Maybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: Maybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The mediaItem type */
export type MediaItemTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The mediaItem type */
export type MediaItemTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** Allowed Post Types */
export enum PostTypeEnum {
  Attachment = "ATTACHMENT",
  Case = "CASE",
  Event = "EVENT",
  Inspiration = "INSPIRATION",
  Page = "PAGE",
  Post = "POST",
  Review = "REVIEW",
  Revision = "REVISION",
}

export type PostObjectUnion =
  | Post
  | Page
  | MediaItem
  | Revision
  | CaseStudy
  | Event
  | Inspiration
  | Review

/** The post type */
export type Post = Node & {
  __typename?: "Post"
  /** @deprecated  */
  PostFields?: Maybe<Post_Postfields>
  /**
   * Connection between the post type and the post type
   * @deprecated
   */
  serieses?: Maybe<PostToSeriesConnection>
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * Connection between the post type and the post type
   * @deprecated
   */
  categories?: Maybe<PostToCategoryConnection>
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  commentCount?: Maybe<Scalars["Int"]>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * Connection between the post type and the post type
   * @deprecated
   */
  comments?: Maybe<PostToCommentConnection>
  /**
   * The content of the post.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The featured image for the object
   * @deprecated
   */
  featuredImage?: Maybe<MediaItem>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the post object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  postId: Scalars["Int"]
  /**
   * Connection between the post type and the post type
   * @deprecated
   */
  revisions?: Maybe<PostToRevisionConnection>
  /**
   * The Yoast SEO data of the post
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Connection between the post type and the post type
   * @deprecated
   */
  tags?: Maybe<PostToTagConnection>
  /**
   * Terms connected to the post
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the post
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the post
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The post type */
export type PostSeriesesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PostToSeriesConnectionWhereArgs>
}

/** The post type */
export type PostAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The post type */
export type PostBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The post type */
export type PostCategoriesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PostToCategoryConnectionWhereArgs>
}

/** The post type */
export type PostCommentsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PostToCommentConnectionWhereArgs>
}

/** The post type */
export type PostContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostRevisionsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PostToRevisionConnectionWhereArgs>
}

/** The post type */
export type PostTagsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PostToTagConnectionWhereArgs>
}

/** The post type */
export type PostTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The post type */
export type PostTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The post type */
export type PostTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The post type */
export type PostTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** Field Group */
export type Post_Postfields = {
  __typename?: "Post_Postfields"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  learn?: Maybe<Post_Postfields_Learn>
  /** @deprecated  */
  relatedPosts?: Maybe<Array<Maybe<Post_Postfields_RelatedPosts>>>
}

/** Field Group */
export type Post_Postfields_Learn = {
  __typename?: "Post_Postfields_Learn"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  items?: Maybe<Array<Maybe<Post_Postfields_Learn_Items>>>
  /** @deprecated  */
  title?: Maybe<Scalars["String"]>
}

/** Field Group */
export type Post_Postfields_Learn_Items = {
  __typename?: "Post_Postfields_Learn_items"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  value?: Maybe<Scalars["String"]>
}

export type Post_Postfields_RelatedPosts = Post

/** Arguments for filtering the PostToSeriesConnection connection */
export type PostToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  Count = "COUNT",
  Description = "DESCRIPTION",
  Name = "NAME",
  Slug = "SLUG",
  TermGroup = "TERM_GROUP",
  TermId = "TERM_ID",
  TermOrder = "TERM_ORDER",
}

/** Connection between the post type and the post type */
export type PostToSeriesConnection = {
  __typename?: "PostToSeriesConnection"
  /**
   * Edges for the PostToSeriesConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToSeriesConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Series>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type PostToSeriesConnectionEdge = {
  __typename?: "PostToSeriesConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Series>
}

/** The Series type */
export type Series = Node & {
  __typename?: "Series"
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Taxonomy: Series&quot; was assigned to the &quot;taxonomy_series&quot; taxonomy
   * @deprecated
   */
  SeriesFields?: Maybe<Series_Seriesfields>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  seriesId?: Maybe<Scalars["Int"]>
  /**
   * The ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<Series>>>
  /**
   * Connection between the Series type and the Series type
   * @deprecated
   */
  children?: Maybe<SeriesToSeriesConnection>
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  count?: Maybe<Scalars["Int"]>
  /**
   * The description of the object
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier for the taxonomy_series term object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The link to the term
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * The parent object
   * @deprecated
   */
  parent?: Maybe<Series>
  /**
   * Connection between the Series type and the Series type
   * @deprecated
   */
  posts?: Maybe<SeriesToPostConnection>
  /**
   * The Yoast SEO data of the Serieses taxonomy.
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated
   */
  taxonomy?: Maybe<Taxonomy>
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  termGroupId?: Maybe<Scalars["Int"]>
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  termTaxonomyId?: Maybe<Scalars["Int"]>
}

/** The Series type */
export type SeriesChildrenArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<SeriesToSeriesConnectionWhereArgs>
}

/** The Series type */
export type SeriesPostsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<SeriesToPostConnectionWhereArgs>
}

/** Field Group */
export type Series_Seriesfields = {
  __typename?: "Series_Seriesfields"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  index?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  seriesImage?: Maybe<MediaItem>
  /** @deprecated  */
  youtubePlaylist?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the SeriesToSeriesConnection connection */
export type SeriesToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the Series type and the Series type */
export type SeriesToSeriesConnection = {
  __typename?: "SeriesToSeriesConnection"
  /**
   * Edges for the SeriesToSeriesConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<SeriesToSeriesConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Series>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type SeriesToSeriesConnectionEdge = {
  __typename?: "SeriesToSeriesConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Series>
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  __typename?: "WPPageInfo"
  /**
   * When paginating forwards, the cursor to continue.
   * @deprecated
   */
  endCursor?: Maybe<Scalars["String"]>
  /**
   * When paginating forwards, are there more items?
   * @deprecated
   */
  hasNextPage: Scalars["Boolean"]
  /**
   * When paginating backwards, are there more items?
   * @deprecated
   */
  hasPreviousPage: Scalars["Boolean"]
  /**
   * When paginating backwards, the cursor to continue.
   * @deprecated
   */
  startCursor?: Maybe<Scalars["String"]>
}

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: "Taxonomy"
  /**
   * A list of Post Types associated with the taxonomy
   * @deprecated
   */
  connectedPostTypeNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * List of Post Types connected to the Taxonomy
   * @deprecated
   */
  connectedPostTypes?: Maybe<Array<Maybe<PostType>>>
  /**
   * Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlPluralName?: Maybe<Scalars["String"]>
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlSingleName?: Maybe<Scalars["String"]>
  /**
   * Whether the taxonomy is hierarchical
   * @deprecated
   */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /**
   * The globally unique identifier of the taxonomy object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * Name of the taxonomy shown in the menu. Usually plural.
   * @deprecated
   */
  label?: Maybe<Scalars["String"]>
  /**
   * The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * Whether the taxonomy is publicly queryable
   * @deprecated
   */
  public?: Maybe<Scalars["Boolean"]>
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  restBase?: Maybe<Scalars["String"]>
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated
   */
  restControllerClass?: Maybe<Scalars["String"]>
  /**
   * Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
   * @deprecated
   */
  showCloud?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to display a column for the taxonomy on its post type listing screens.
   * @deprecated
   */
  showInAdminColumn?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated
   */
  showInGraphql?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to show the taxonomy in the admin menu
   * @deprecated
   */
  showInMenu?: Maybe<Scalars["Boolean"]>
  /**
   * Whether the taxonomy is available for selection in navigation menus.
   * @deprecated
   */
  showInNavMenus?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to show the taxonomy in the quick/bulk edit panel.
   * @deprecated
   */
  showInQuickEdit?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  showInRest?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to generate and allow a UI for managing terms in this taxonomy in the admin
   * @deprecated
   */
  showUi?: Maybe<Scalars["Boolean"]>
}

/** A taxonomy object */
export type TaxonomyConnectedPostTypeNamesArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** A taxonomy object */
export type TaxonomyConnectedPostTypesArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** An Post Type object */
export type PostType = Node & {
  __typename?: "PostType"
  /**
   * Whether this content type should can be exported.
   * @deprecated
   */
  canExport?: Maybe<Scalars["Boolean"]>
  /**
   * List of Taxonomies connected to the Post Type
   * @deprecated
   */
  connectedTaxonomies?: Maybe<Array<Maybe<Taxonomy>>>
  /**
   * A list of Taxonomies associated with the post type
   * @deprecated
   */
  connectedTaxonomyNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Whether delete this type of content when the author of it is deleted from the system.
   * @deprecated
   */
  deleteWithUser?: Maybe<Scalars["Boolean"]>
  /**
   * Description of the content type.
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * Whether to exclude posts with this post type from front end search results.
   * @deprecated
   */
  excludeFromSearch?: Maybe<Scalars["Boolean"]>
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlPluralName?: Maybe<Scalars["String"]>
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlSingleName?: Maybe<Scalars["String"]>
  /**
   * Whether this content type should have archives. Content archives are generated by type and by date.
   * @deprecated
   */
  hasArchive?: Maybe<Scalars["Boolean"]>
  /**
   * Whether the post type is hierarchical, for example pages.
   * @deprecated
   */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /**
   * The globally unique identifier of the post-type object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * Display name of the content type.
   * @deprecated
   */
  label?: Maybe<Scalars["String"]>
  /**
   * Details about the post type labels.
   * @deprecated
   */
  labels?: Maybe<PostTypeLabelDetails>
  /**
   * The name of the icon file to display as a menu icon.
   * @deprecated
   */
  menuIcon?: Maybe<Scalars["String"]>
  /**
   * The position of this post type in the menu. Only applies if show_in_menu is true.
   * @deprecated
   */
  menuPosition?: Maybe<Scalars["Int"]>
  /**
   * The internal name of the post type. This should not be used for display purposes.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * Whether a post type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention.
   * @deprecated
   */
  public?: Maybe<Scalars["Boolean"]>
  /**
   * Whether queries can be performed on the front end for the post type as part of parse_request().
   * @deprecated
   */
  publiclyQueryable?: Maybe<Scalars["Boolean"]>
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  restBase?: Maybe<Scalars["String"]>
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated
   */
  restControllerClass?: Maybe<Scalars["String"]>
  /**
   * Makes this post type available via the admin bar.
   * @deprecated
   */
  showInAdminBar?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated
   */
  showInGraphql?: Maybe<Scalars["Boolean"]>
  /**
   * Where to show the post type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that.
   * @deprecated
   */
  showInMenu?: Maybe<Scalars["Boolean"]>
  /**
   * Makes this post type available for selection in navigation menus.
   * @deprecated
   */
  showInNavMenus?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  showInRest?: Maybe<Scalars["Boolean"]>
  /**
   * Whether to generate and allow a UI for managing this post type in the admin.
   * @deprecated
   */
  showUi?: Maybe<Scalars["Boolean"]>
}

/** An Post Type object */
export type PostTypeConnectedTaxonomiesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** An Post Type object */
export type PostTypeConnectedTaxonomyNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** Allowed taxonomies */
export enum TaxonomyEnum {
  Category = "CATEGORY",
  Series = "SERIES",
  Tag = "TAG",
}

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: "PostTypeLabelDetails"
  /**
   * Default is ‘Add New’ for both hierarchical and non-hierarchical types.
   * @deprecated
   */
  addNew?: Maybe<Scalars["String"]>
  /**
   * Label for adding a new singular item.
   * @deprecated
   */
  addNewItem?: Maybe<Scalars["String"]>
  /**
   * Label to signify all items in a submenu link.
   * @deprecated
   */
  allItems?: Maybe<Scalars["String"]>
  /**
   * Label for archives in nav menus
   * @deprecated
   */
  archives?: Maybe<Scalars["String"]>
  /**
   * Label for the attributes meta box.
   * @deprecated
   */
  attributes?: Maybe<Scalars["String"]>
  /**
   * Label for editing a singular item.
   * @deprecated
   */
  editItem?: Maybe<Scalars["String"]>
  /**
   * Label for the Featured Image meta box title.
   * @deprecated
   */
  featuredImage?: Maybe<Scalars["String"]>
  /**
   * Label for the table views hidden heading.
   * @deprecated
   */
  filterItemsList?: Maybe<Scalars["String"]>
  /**
   * Label for the media frame button.
   * @deprecated
   */
  insertIntoItem?: Maybe<Scalars["String"]>
  /**
   * Label for the table hidden heading.
   * @deprecated
   */
  itemsList?: Maybe<Scalars["String"]>
  /**
   * Label for the table pagination hidden heading.
   * @deprecated
   */
  itemsListNavigation?: Maybe<Scalars["String"]>
  /**
   * Label for the menu name.
   * @deprecated
   */
  menuName?: Maybe<Scalars["String"]>
  /**
   * General name for the post type, usually plural.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * Label for the new item page title.
   * @deprecated
   */
  newItem?: Maybe<Scalars["String"]>
  /**
   * Label used when no items are found.
   * @deprecated
   */
  notFound?: Maybe<Scalars["String"]>
  /**
   * Label used when no items are in the trash.
   * @deprecated
   */
  notFoundInTrash?: Maybe<Scalars["String"]>
  /**
   * Label used to prefix parents of hierarchical items.
   * @deprecated
   */
  parentItemColon?: Maybe<Scalars["String"]>
  /**
   * Label for removing the featured image.
   * @deprecated
   */
  removeFeaturedImage?: Maybe<Scalars["String"]>
  /**
   * Label for searching plural items.
   * @deprecated
   */
  searchItems?: Maybe<Scalars["String"]>
  /**
   * Label for setting the featured image.
   * @deprecated
   */
  setFeaturedImage?: Maybe<Scalars["String"]>
  /**
   * Name for one object of this post type.
   * @deprecated
   */
  singularName?: Maybe<Scalars["String"]>
  /**
   * Label for the media frame filter.
   * @deprecated
   */
  uploadedToThisItem?: Maybe<Scalars["String"]>
  /**
   * Label in the media frame for using a featured image.
   * @deprecated
   */
  useFeaturedImage?: Maybe<Scalars["String"]>
  /**
   * Label for viewing a singular item.
   * @deprecated
   */
  viewItem?: Maybe<Scalars["String"]>
  /**
   * Label for viewing post type archives.
   * @deprecated
   */
  viewItems?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the SeriesToPostConnection connection */
export type SeriesToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Filter the connection based on input */
export type DateQueryInput = {
  after?: Maybe<DateInput>
  before?: Maybe<DateInput>
  /** Column to query against */
  column?: Maybe<PostObjectsConnectionDateColumnEnum>
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars["String"]>
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars["Int"]>
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars["Int"]>
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars["Boolean"]>
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars["Int"]>
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars["Int"]>
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<RelationEnum>
  /** Second (0 to 59) */
  second?: Maybe<Scalars["Int"]>
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars["Int"]>
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars["Int"]>
}

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars["Int"]>
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars["Int"]>
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars["Int"]>
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  Date = "DATE",
  Modified = "MODIFIED",
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  And = "AND",
  Or = "OR",
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  ApplicationJava = "APPLICATION_JAVA",
  ApplicationMsword = "APPLICATION_MSWORD",
  ApplicationOctetStream = "APPLICATION_OCTET_STREAM",
  ApplicationOnenote = "APPLICATION_ONENOTE",
  ApplicationOxps = "APPLICATION_OXPS",
  ApplicationPdf = "APPLICATION_PDF",
  ApplicationRar = "APPLICATION_RAR",
  ApplicationRtf = "APPLICATION_RTF",
  ApplicationTtafXml = "APPLICATION_TTAF_XML",
  ApplicationVndAppleKeynote = "APPLICATION_VND_APPLE_KEYNOTE",
  ApplicationVndAppleNumbers = "APPLICATION_VND_APPLE_NUMBERS",
  ApplicationVndApplePages = "APPLICATION_VND_APPLE_PAGES",
  ApplicationVndMsAccess = "APPLICATION_VND_MS_ACCESS",
  ApplicationVndMsExcel = "APPLICATION_VND_MS_EXCEL",
  ApplicationVndMsExcelAddinMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12",
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12",
  ApplicationVndMsExcelSheetMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12",
  ApplicationVndMsExcelTemplateMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12",
  ApplicationVndMsPowerpoint = "APPLICATION_VND_MS_POWERPOINT",
  ApplicationVndMsPowerpointAddinMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12",
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12",
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12",
  ApplicationVndMsPowerpointSlideMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12",
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12",
  ApplicationVndMsProject = "APPLICATION_VND_MS_PROJECT",
  ApplicationVndMsWordDocumentMacroenabled_12 = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12",
  ApplicationVndMsWordTemplateMacroenabled_12 = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12",
  ApplicationVndMsWrite = "APPLICATION_VND_MS_WRITE",
  ApplicationVndMsXpsdocument = "APPLICATION_VND_MS_XPSDOCUMENT",
  ApplicationVndOasisOpendocumentChart = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART",
  ApplicationVndOasisOpendocumentDatabase = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE",
  ApplicationVndOasisOpendocumentFormula = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA",
  ApplicationVndOasisOpendocumentGraphics = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS",
  ApplicationVndOasisOpendocumentPresentation = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION",
  ApplicationVndOasisOpendocumentSpreadsheet = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET",
  ApplicationVndOasisOpendocumentText = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT",
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION",
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE",
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW",
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE",
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET",
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE",
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT",
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE",
  ApplicationWordperfect = "APPLICATION_WORDPERFECT",
  ApplicationX_7ZCompressed = "APPLICATION_X_7Z_COMPRESSED",
  ApplicationXGzip = "APPLICATION_X_GZIP",
  ApplicationXTar = "APPLICATION_X_TAR",
  ApplicationZip = "APPLICATION_ZIP",
  AudioAac = "AUDIO_AAC",
  AudioFlac = "AUDIO_FLAC",
  AudioMidi = "AUDIO_MIDI",
  AudioMpeg = "AUDIO_MPEG",
  AudioOgg = "AUDIO_OGG",
  AudioWav = "AUDIO_WAV",
  AudioXMatroska = "AUDIO_X_MATROSKA",
  AudioXMsWax = "AUDIO_X_MS_WAX",
  AudioXMsWma = "AUDIO_X_MS_WMA",
  AudioXRealaudio = "AUDIO_X_REALAUDIO",
  ImageBmp = "IMAGE_BMP",
  ImageGif = "IMAGE_GIF",
  ImageJpeg = "IMAGE_JPEG",
  ImagePng = "IMAGE_PNG",
  ImageSvgXml = "IMAGE_SVG_XML",
  ImageTiff = "IMAGE_TIFF",
  ImageWebp = "IMAGE_WEBP",
  ImageXIcon = "IMAGE_X_ICON",
  TextCalendar = "TEXT_CALENDAR",
  TextCss = "TEXT_CSS",
  TextCsv = "TEXT_CSV",
  TextPlain = "TEXT_PLAIN",
  TextRichtext = "TEXT_RICHTEXT",
  TextTabSeparatedValues = "TEXT_TAB_SEPARATED_VALUES",
  TextVtt = "TEXT_VTT",
  Video_3Gpp = "VIDEO_3GPP",
  Video_3Gpp2 = "VIDEO_3GPP2",
  VideoAvi = "VIDEO_AVI",
  VideoDivx = "VIDEO_DIVX",
  VideoMp4 = "VIDEO_MP4",
  VideoMpeg = "VIDEO_MPEG",
  VideoOgg = "VIDEO_OGG",
  VideoQuicktime = "VIDEO_QUICKTIME",
  VideoWebm = "VIDEO_WEBM",
  VideoXFlv = "VIDEO_X_FLV",
  VideoXMatroska = "VIDEO_X_MATROSKA",
  VideoXMsAsf = "VIDEO_X_MS_ASF",
  VideoXMsWm = "VIDEO_X_MS_WM",
  VideoXMsWmv = "VIDEO_X_MS_WMV",
  VideoXMsWmx = "VIDEO_X_MS_WMX",
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  field: PostObjectsConnectionOrderbyEnum
  order?: Maybe<OrderEnum>
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = "AUTHOR",
  /** Order by publish date */
  Date = "DATE",
  /** Preserve the ID order given in the IN array */
  In = "IN",
  /** Order by the menu order value */
  MenuOrder = "MENU_ORDER",
  /** Order by last modified date */
  Modified = "MODIFIED",
  /** Preserve slug order given in the NAME_IN array */
  NameIn = "NAME_IN",
  /** Order by parent ID */
  Parent = "PARENT",
  /** Order by slug */
  Slug = "SLUG",
  /** Order by title */
  Title = "TITLE",
}

/** The cardinality of the connection order */
export enum OrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = "ACF_DISABLED",
  /** Objects with the auto-draft status */
  AutoDraft = "AUTO_DRAFT",
  /** Objects with the draft status */
  Draft = "DRAFT",
  /** Objects with the future status */
  Future = "FUTURE",
  /** Objects with the inherit status */
  Inherit = "INHERIT",
  /** Objects with the pending status */
  Pending = "PENDING",
  /** Objects with the private status */
  Private = "PRIVATE",
  /** Objects with the publish status */
  Publish = "PUBLISH",
  /** Objects with the request-completed status */
  RequestCompleted = "REQUEST_COMPLETED",
  /** Objects with the request-confirmed status */
  RequestConfirmed = "REQUEST_CONFIRMED",
  /** Objects with the request-failed status */
  RequestFailed = "REQUEST_FAILED",
  /** Objects with the request-pending status */
  RequestPending = "REQUEST_PENDING",
  /** Objects with the trash status */
  Trash = "TRASH",
}

/** Connection between the Series type and the Series type */
export type SeriesToPostConnection = {
  __typename?: "SeriesToPostConnection"
  /**
   * Edges for the SeriesToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<SeriesToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type SeriesToPostConnectionEdge = {
  __typename?: "SeriesToPostConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

export type Seo = {
  __typename?: "SEO"
  /** @deprecated  */
  focuskw?: Maybe<Scalars["String"]>
  /** @deprecated  */
  metaDesc?: Maybe<Scalars["String"]>
  /** @deprecated  */
  metaKeywords?: Maybe<Scalars["String"]>
  /** @deprecated  */
  metaRobotsNofollow?: Maybe<Scalars["String"]>
  /** @deprecated  */
  metaRobotsNoindex?: Maybe<Scalars["String"]>
  /** @deprecated  */
  opengraphDescription?: Maybe<Scalars["String"]>
  /** @deprecated  */
  opengraphImage?: Maybe<Scalars["String"]>
  /** @deprecated  */
  opengraphTitle?: Maybe<Scalars["String"]>
  /** @deprecated  */
  title?: Maybe<Scalars["String"]>
  /** @deprecated  */
  twitterDescription?: Maybe<Scalars["String"]>
  /** @deprecated  */
  twitterImage?: Maybe<Scalars["String"]>
  /** @deprecated  */
  twitterTitle?: Maybe<Scalars["String"]>
}

/** A User object */
export type User = Node & {
  __typename?: "User"
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   * @deprecated
   */
  avatar?: Maybe<Avatar>
  /**
   * User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
   * @deprecated
   */
  capKey?: Maybe<Scalars["String"]>
  /**
   * This field is the id of the user. The id of the user matches WP_User-&gt;ID field and the value in the ID column for the &quot;users&quot; table in SQL.
   * @deprecated
   */
  capabilities?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  caseStudies?: Maybe<UserToCaseStudyConnection>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  comments?: Maybe<UserToCommentConnection>
  /**
   * Description of the user.
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * Email of the user. This is equivalent to the WP_User-&gt;user_email property.
   * @deprecated
   */
  email?: Maybe<Scalars["String"]>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  events?: Maybe<UserToEventConnection>
  /**
   * A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps.
   * @deprecated
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   * @deprecated
   */
  firstName?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier for the user object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  inspirations?: Maybe<UserToInspirationConnection>
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   * @deprecated
   */
  lastName?: Maybe<Scalars["String"]>
  /**
   * The preferred language locale set for the user. Value derived from get_user_locale().
   * @deprecated
   */
  locale?: Maybe<Scalars["String"]>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  mediaItems?: Maybe<UserToMediaItemConnection>
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated
   */
  nicename?: Maybe<Scalars["String"]>
  /**
   * Nickname of the user.
   * @deprecated
   */
  nickname?: Maybe<Scalars["String"]>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  pages?: Maybe<UserToPageConnection>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  posts?: Maybe<UserToPostConnection>
  /**
   * The date the user registered or was created. The field follows a full ISO8601 date string format.
   * @deprecated
   */
  registeredDate?: Maybe<Scalars["String"]>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  reviews?: Maybe<UserToReviewConnection>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  revisions?: Maybe<UserToRevisionConnection>
  /**
   * Connection between the User type and the User type
   * @deprecated
   */
  roles?: Maybe<UserToUserRoleConnection>
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * A website url that is associated with the user.
   * @deprecated
   */
  url?: Maybe<Scalars["String"]>
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated
   */
  userId?: Maybe<Scalars["Int"]>
  /**
   * Username for the user. This field is equivalent to WP_User-&gt;user_login.
   * @deprecated
   */
  username?: Maybe<Scalars["String"]>
}

/** A User object */
export type UserAvatarArgs = {
  size?: Maybe<Scalars["Int"]>
  forceDefault?: Maybe<Scalars["Boolean"]>
  rating?: Maybe<AvatarRatingEnum>
}

/** A User object */
export type UserCaseStudiesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToCaseStudyConnectionWhereArgs>
}

/** A User object */
export type UserCommentsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToCommentConnectionWhereArgs>
}

/** A User object */
export type UserEventsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToEventConnectionWhereArgs>
}

/** A User object */
export type UserInspirationsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToInspirationConnectionWhereArgs>
}

/** A User object */
export type UserMediaItemsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToMediaItemConnectionWhereArgs>
}

/** A User object */
export type UserPagesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToPageConnectionWhereArgs>
}

/** A User object */
export type UserPostsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToPostConnectionWhereArgs>
}

/** A User object */
export type UserReviewsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToReviewConnectionWhereArgs>
}

/** A User object */
export type UserRevisionsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<UserToRevisionConnectionWhereArgs>
}

/** A User object */
export type UserRolesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
}

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  G = "G",
  Pg = "PG",
  R = "R",
  X = "X",
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: "Avatar"
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   * @deprecated
   */
  default?: Maybe<Scalars["String"]>
  /**
   * HTML attributes to insert in the IMG element. Is not sanitized.
   * @deprecated
   */
  extraAttr?: Maybe<Scalars["String"]>
  /**
   * Whether to always show the default image, never the Gravatar.
   * @deprecated
   */
  forceDefault?: Maybe<Scalars["Boolean"]>
  /**
   * Whether the avatar was successfully found.
   * @deprecated
   */
  foundAvatar?: Maybe<Scalars["Boolean"]>
  /**
   * Height of the avatar image.
   * @deprecated
   */
  height?: Maybe<Scalars["Int"]>
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   * @deprecated
   */
  rating?: Maybe<Scalars["String"]>
  /**
   * Type of url scheme to use. Typically HTTP vs. HTTPS.
   * @deprecated
   */
  scheme?: Maybe<Scalars["String"]>
  /**
   * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
   * @deprecated
   */
  size?: Maybe<Scalars["Int"]>
  /**
   * URL for the gravatar image source.
   * @deprecated
   */
  url?: Maybe<Scalars["String"]>
  /**
   * Width of the avatar image.
   * @deprecated
   */
  width?: Maybe<Scalars["Int"]>
}

/** Arguments for filtering the UserToCaseStudyConnection connection */
export type UserToCaseStudyConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToCaseStudyConnection = {
  __typename?: "UserToCaseStudyConnection"
  /**
   * Edges for the UserToCaseStudyConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToCaseStudyConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToCaseStudyConnectionEdge = {
  __typename?: "UserToCaseStudyConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<CaseStudy>
}

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars["String"]>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars["String"]>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars["String"]>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars["String"]>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars["ID"]>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars["String"]>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars["Int"]>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars["Int"]>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars["Int"]>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars["String"]>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars["String"]>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars["ID"]>
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  CommentAgent = "COMMENT_AGENT",
  CommentApproved = "COMMENT_APPROVED",
  CommentAuthor = "COMMENT_AUTHOR",
  CommentAuthorEmail = "COMMENT_AUTHOR_EMAIL",
  CommentAuthorIp = "COMMENT_AUTHOR_IP",
  CommentAuthorUrl = "COMMENT_AUTHOR_URL",
  CommentContent = "COMMENT_CONTENT",
  CommentDate = "COMMENT_DATE",
  CommentDateGmt = "COMMENT_DATE_GMT",
  CommentId = "COMMENT_ID",
  CommentIn = "COMMENT_IN",
  CommentKarma = "COMMENT_KARMA",
  CommentParent = "COMMENT_PARENT",
  CommentPostId = "COMMENT_POST_ID",
  CommentType = "COMMENT_TYPE",
  UserId = "USER_ID",
}

/** Connection between the User type and the User type */
export type UserToCommentConnection = {
  __typename?: "UserToCommentConnection"
  /**
   * Edges for the UserToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
  __typename?: "UserToCommentConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** A Comment object */
export type Comment = Node & {
  __typename?: "Comment"
  /**
   * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL.
   * @deprecated
   */
  agent?: Maybe<Scalars["String"]>
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated
   */
  approved?: Maybe<Scalars["Boolean"]>
  /**
   * The author of the comment
   * @deprecated
   */
  author?: Maybe<CommentAuthorUnion>
  /**
   * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL.
   * @deprecated
   */
  authorIp?: Maybe<Scalars["String"]>
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated
   */
  children?: Maybe<CommentToCommentConnection>
  /**
   * ID for the comment, unique among comments.
   * @deprecated
   */
  commentId?: Maybe<Scalars["Int"]>
  /**
   * The object the comment was added to
   * @deprecated
   */
  commentedOn?: Maybe<PostObjectUnion>
  /**
   * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier for the comment object
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL.
   * @deprecated
   */
  karma?: Maybe<Scalars["Int"]>
  /**
   * Parent comment of current comment. This field is equivalent to the WP_Comment instance matching the WP_Comment-&gt;comment_parent ID.
   * @deprecated
   */
  parent?: Maybe<Comment>
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
   * @deprecated
   */
  type?: Maybe<Scalars["String"]>
}

/** A Comment object */
export type CommentChildrenArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CommentToCommentConnectionWhereArgs>
}

/** A Comment object */
export type CommentContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

export type CommentAuthorUnion = User | CommentAuthor

/** A Comment Author object */
export type CommentAuthor = Node & {
  __typename?: "CommentAuthor"
  /**
   * The email for the comment author
   * @deprecated
   */
  email?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier for the comment author object
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The name for the comment author.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * The url the comment author.
   * @deprecated
   */
  url?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars["String"]>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars["String"]>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars["String"]>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars["String"]>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars["ID"]>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars["String"]>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars["Int"]>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars["Int"]>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars["Int"]>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars["String"]>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars["String"]>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars["ID"]>
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
  __typename?: "CommentToCommentConnection"
  /**
   * Edges for the CommentToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
  __typename?: "CommentToCommentConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = "RAW",
  /** Apply the default WordPress rendering */
  Rendered = "RENDERED",
}

/** Arguments for filtering the UserToEventConnection connection */
export type UserToEventConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToEventConnection = {
  __typename?: "UserToEventConnection"
  /**
   * Edges for the UserToEventConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToEventConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Event>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToEventConnectionEdge = {
  __typename?: "UserToEventConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Event>
}

/** The Event type */
export type Event = Node & {
  __typename?: "Event"
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  eventId: Scalars["Int"]
  /** @deprecated  */
  PostTypeEventFields?: Maybe<Event_Posttypeeventfields>
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * Connection between the Event type and the Event type
   * @deprecated
   */
  categories?: Maybe<EventToCategoryConnection>
  /**
   * Connection between the Event type and the Event type
   * @deprecated
   */
  childEvents?: Maybe<EventToEventConnection>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * The content of the post.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The featured image for the object
   * @deprecated
   */
  featuredImage?: Maybe<MediaItem>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the event object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The Yoast SEO data of the Event
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Connection between the Event type and the Event type
   * @deprecated
   */
  tags?: Maybe<EventToTagConnection>
  /**
   * Terms connected to the Event
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the Event
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the Event
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The Event type */
export type EventAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The Event type */
export type EventBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The Event type */
export type EventCategoriesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<EventToCategoryConnectionWhereArgs>
}

/** The Event type */
export type EventChildEventsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<EventToEventConnectionWhereArgs>
}

/** The Event type */
export type EventContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The Event type */
export type EventExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The Event type */
export type EventTagsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<EventToTagConnectionWhereArgs>
}

/** The Event type */
export type EventTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Event type */
export type EventTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Event type */
export type EventTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Event type */
export type EventTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** Field Group */
export type Event_Posttypeeventfields = {
  __typename?: "Event_Posttypeeventfields"
  /** @deprecated  */
  date?: Maybe<Scalars["String"]>
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
  /** @deprecated  */
  venue?: Maybe<Scalars["String"]>
}

/** Gutenberg block interface */
export type Block = {
  /** Inner blocks. */
  innerBlocks: Array<Maybe<Block>>
  /** Block validation assumes an idempotent operation from source block to serialized block */
  isValid: Scalars["Boolean"]
  /** Name of the block. */
  name: Scalars["String"]
  /** Original HTML content. */
  originalContent: Scalars["String"]
  /** Prent post. */
  parent?: Maybe<PostObjectTypesUnion>
  /** Parent post id. */
  parentId?: Maybe<Scalars["Int"]>
  /** Original HTML content with inner blocks. */
  saveContent: Scalars["String"]
}

export type PostObjectTypesUnion =
  | Post
  | Page
  | MediaItem
  | Revision
  | CaseStudy
  | Event
  | Inspiration
  | Review

/** The page type */
export type Page = Node & {
  __typename?: "Page"
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * Connection between the page type and the page type
   * @deprecated
   */
  childPages?: Maybe<PageToPageConnection>
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated
   */
  commentCount?: Maybe<Scalars["Int"]>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * Connection between the page type and the page type
   * @deprecated
   */
  comments?: Maybe<PageToCommentConnection>
  /**
   * The content of the post.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The featured image for the object
   * @deprecated
   */
  featuredImage?: Maybe<MediaItem>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the page object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether this page is set to the static front page.
   * @deprecated
   */
  isFrontPage: Scalars["Boolean"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  pageId: Scalars["Int"]
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Connection between the page type and the page type
   * @deprecated
   */
  revisions?: Maybe<PageToRevisionConnection>
  /**
   * The Yoast SEO data of the page
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Terms connected to the page
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the page
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the page
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The page type */
export type PageAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The page type */
export type PageBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The page type */
export type PageChildPagesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PageToPageConnectionWhereArgs>
}

/** The page type */
export type PageCommentsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PageToCommentConnectionWhereArgs>
}

/** The page type */
export type PageContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The page type */
export type PageExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The page type */
export type PageRevisionsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<PageToRevisionConnectionWhereArgs>
}

/** The page type */
export type PageTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The page type */
export type PageTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The page type */
export type PageTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The page type */
export type PageTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** Arguments for filtering the PageToPageConnection connection */
export type PageToPageConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the page type and the page type */
export type PageToPageConnection = {
  __typename?: "PageToPageConnection"
  /**
   * Edges for the PageToPageConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PageToPageConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Page>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type PageToPageConnectionEdge = {
  __typename?: "PageToPageConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Page>
}

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars["String"]>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars["String"]>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars["String"]>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars["String"]>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars["ID"]>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars["String"]>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars["Int"]>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars["Int"]>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars["Int"]>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars["String"]>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars["String"]>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars["ID"]>
}

/** Connection between the page type and the page type */
export type PageToCommentConnection = {
  __typename?: "PageToCommentConnection"
  /**
   * Edges for the PageToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
  __typename?: "PageToCommentConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** Info on whether the object is locked by another user editing it */
export type EditLock = {
  __typename?: "EditLock"
  /**
   * The time when the object was last edited
   * @deprecated
   */
  editTime?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  user?: Maybe<User>
}

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
  __typename?: "PageToRevisionConnection"
  /**
   * Edges for the PageToRevisionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Revision>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
  __typename?: "PageToRevisionConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Revision>
}

/** The revision type */
export type Revision = Node & {
  __typename?: "Revision"
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * The content of the post.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the revision object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  revisionId: Scalars["Int"]
  /**
   * The Yoast SEO data of the revision
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Terms connected to the revision
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the revision
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the revision
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The revision type */
export type RevisionAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The revision type */
export type RevisionBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The revision type */
export type RevisionContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The revision type */
export type RevisionExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The revision type */
export type RevisionTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The revision type */
export type RevisionTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The revision type */
export type RevisionTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The revision type */
export type RevisionTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

export type TermObjectUnion = Category | Tag | Series

/** The category type */
export type Category = Node & {
  __typename?: "Category"
  /**
   * The ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<Category>>>
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  caseStudies?: Maybe<CategoryToCaseStudyConnection>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  children?: Maybe<CategoryToCategoryConnection>
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  count?: Maybe<Scalars["Int"]>
  /**
   * The description of the object
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  events?: Maybe<CategoryToEventConnection>
  /**
   * The globally unique identifier for the category term object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  inspirations?: Maybe<CategoryToInspirationConnection>
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The link to the term
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * The parent object
   * @deprecated
   */
  parent?: Maybe<Category>
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  posts?: Maybe<CategoryToPostConnection>
  /**
   * Connection between the category type and the category type
   * @deprecated
   */
  reviews?: Maybe<CategoryToReviewConnection>
  /**
   * The Yoast SEO data of the Categories taxonomy.
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated
   */
  taxonomy?: Maybe<Taxonomy>
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  termGroupId?: Maybe<Scalars["Int"]>
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  termTaxonomyId?: Maybe<Scalars["Int"]>
}

/** The category type */
export type CategoryCaseStudiesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CategoryToCaseStudyConnectionWhereArgs>
}

/** The category type */
export type CategoryChildrenArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>
}

/** The category type */
export type CategoryEventsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CategoryToEventConnectionWhereArgs>
}

/** The category type */
export type CategoryInspirationsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CategoryToInspirationConnectionWhereArgs>
}

/** The category type */
export type CategoryPostsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CategoryToPostConnectionWhereArgs>
}

/** The category type */
export type CategoryReviewsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<CategoryToReviewConnectionWhereArgs>
}

/** Arguments for filtering the CategoryToCaseStudyConnection connection */
export type CategoryToCaseStudyConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the category type and the category type */
export type CategoryToCaseStudyConnection = {
  __typename?: "CategoryToCaseStudyConnection"
  /**
   * Edges for the CategoryToCaseStudyConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToCaseStudyConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type CategoryToCaseStudyConnectionEdge = {
  __typename?: "CategoryToCaseStudyConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<CaseStudy>
}

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
  __typename?: "CategoryToCategoryConnection"
  /**
   * Edges for the CategoryToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
  __typename?: "CategoryToCategoryConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the CategoryToEventConnection connection */
export type CategoryToEventConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the category type and the category type */
export type CategoryToEventConnection = {
  __typename?: "CategoryToEventConnection"
  /**
   * Edges for the CategoryToEventConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToEventConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Event>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type CategoryToEventConnectionEdge = {
  __typename?: "CategoryToEventConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Event>
}

/** Arguments for filtering the CategoryToInspirationConnection connection */
export type CategoryToInspirationConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the category type and the category type */
export type CategoryToInspirationConnection = {
  __typename?: "CategoryToInspirationConnection"
  /**
   * Edges for the CategoryToInspirationConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToInspirationConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type CategoryToInspirationConnectionEdge = {
  __typename?: "CategoryToInspirationConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Inspiration>
}

/** The Inspiration type */
export type Inspiration = Node & {
  __typename?: "Inspiration"
  /** @deprecated  */
  InspirationFields?: Maybe<Inspiration_Inspirationfields>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  inspirationId: Scalars["Int"]
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * Connection between the Inspiration type and the Inspiration type
   * @deprecated
   */
  categories?: Maybe<InspirationToCategoryConnection>
  /**
   * Connection between the Inspiration type and the Inspiration type
   * @deprecated
   */
  childInspirations?: Maybe<InspirationToInspirationConnection>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * The content of the post.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The featured image for the object
   * @deprecated
   */
  featuredImage?: Maybe<MediaItem>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the inspiration object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The Yoast SEO data of the Inspiration
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Connection between the Inspiration type and the Inspiration type
   * @deprecated
   */
  tags?: Maybe<InspirationToTagConnection>
  /**
   * Terms connected to the Inspiration
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the Inspiration
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the Inspiration
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The Inspiration type */
export type InspirationAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The Inspiration type */
export type InspirationBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The Inspiration type */
export type InspirationCategoriesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<InspirationToCategoryConnectionWhereArgs>
}

/** The Inspiration type */
export type InspirationChildInspirationsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<InspirationToInspirationConnectionWhereArgs>
}

/** The Inspiration type */
export type InspirationContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The Inspiration type */
export type InspirationExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The Inspiration type */
export type InspirationTagsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<InspirationToTagConnectionWhereArgs>
}

/** The Inspiration type */
export type InspirationTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Inspiration type */
export type InspirationTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Inspiration type */
export type InspirationTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Inspiration type */
export type InspirationTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** Field Group */
export type Inspiration_Inspirationfields = {
  __typename?: "Inspiration_Inspirationfields"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  media?: Maybe<MediaItem>
  /** @deprecated  */
  source?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the InspirationToCategoryConnection connection */
export type InspirationToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the Inspiration type and the Inspiration type */
export type InspirationToCategoryConnection = {
  __typename?: "InspirationToCategoryConnection"
  /**
   * Edges for the InspirationToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<InspirationToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type InspirationToCategoryConnectionEdge = {
  __typename?: "InspirationToCategoryConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the InspirationToInspirationConnection connection */
export type InspirationToInspirationConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the Inspiration type and the Inspiration type */
export type InspirationToInspirationConnection = {
  __typename?: "InspirationToInspirationConnection"
  /**
   * Edges for the InspirationToInspirationConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<InspirationToInspirationConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type InspirationToInspirationConnectionEdge = {
  __typename?: "InspirationToInspirationConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Inspiration>
}

/** Arguments for filtering the InspirationToTagConnection connection */
export type InspirationToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the Inspiration type and the Inspiration type */
export type InspirationToTagConnection = {
  __typename?: "InspirationToTagConnection"
  /**
   * Edges for the InspirationToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<InspirationToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type InspirationToTagConnectionEdge = {
  __typename?: "InspirationToTagConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** The tag type */
export type Tag = Node & {
  __typename?: "Tag"
  /**
   * Connection between the tag type and the tag type
   * @deprecated
   */
  caseStudies?: Maybe<TagToCaseStudyConnection>
  /**
   * The number of objects connected to the object
   * @deprecated
   */
  count?: Maybe<Scalars["Int"]>
  /**
   * The description of the object
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * Connection between the tag type and the tag type
   * @deprecated
   */
  events?: Maybe<TagToEventConnection>
  /**
   * The globally unique identifier for the post_tag term object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Connection between the tag type and the tag type
   * @deprecated
   */
  inspirations?: Maybe<TagToInspirationConnection>
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The link to the term
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * The human friendly name of the object.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * Connection between the tag type and the tag type
   * @deprecated
   */
  posts?: Maybe<TagToPostConnection>
  /**
   * Connection between the tag type and the tag type
   * @deprecated
   */
  reviews?: Maybe<TagToReviewConnection>
  /**
   * The Yoast SEO data of the Tags taxonomy.
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  tagId?: Maybe<Scalars["Int"]>
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated
   */
  taxonomy?: Maybe<Taxonomy>
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated
   */
  termGroupId?: Maybe<Scalars["Int"]>
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated
   */
  termTaxonomyId?: Maybe<Scalars["Int"]>
}

/** The tag type */
export type TagCaseStudiesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<TagToCaseStudyConnectionWhereArgs>
}

/** The tag type */
export type TagEventsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<TagToEventConnectionWhereArgs>
}

/** The tag type */
export type TagInspirationsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<TagToInspirationConnectionWhereArgs>
}

/** The tag type */
export type TagPostsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<TagToPostConnectionWhereArgs>
}

/** The tag type */
export type TagReviewsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<TagToReviewConnectionWhereArgs>
}

/** Arguments for filtering the TagToCaseStudyConnection connection */
export type TagToCaseStudyConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the tag type and the tag type */
export type TagToCaseStudyConnection = {
  __typename?: "TagToCaseStudyConnection"
  /**
   * Edges for the TagToCaseStudyConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<TagToCaseStudyConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type TagToCaseStudyConnectionEdge = {
  __typename?: "TagToCaseStudyConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<CaseStudy>
}

/** Arguments for filtering the TagToEventConnection connection */
export type TagToEventConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the tag type and the tag type */
export type TagToEventConnection = {
  __typename?: "TagToEventConnection"
  /**
   * Edges for the TagToEventConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<TagToEventConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Event>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type TagToEventConnectionEdge = {
  __typename?: "TagToEventConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Event>
}

/** Arguments for filtering the TagToInspirationConnection connection */
export type TagToInspirationConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the tag type and the tag type */
export type TagToInspirationConnection = {
  __typename?: "TagToInspirationConnection"
  /**
   * Edges for the TagToInspirationConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<TagToInspirationConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type TagToInspirationConnectionEdge = {
  __typename?: "TagToInspirationConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Inspiration>
}

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the tag type and the tag type */
export type TagToPostConnection = {
  __typename?: "TagToPostConnection"
  /**
   * Edges for the TagToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type TagToPostConnectionEdge = {
  __typename?: "TagToPostConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** Arguments for filtering the TagToReviewConnection connection */
export type TagToReviewConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the tag type and the tag type */
export type TagToReviewConnection = {
  __typename?: "TagToReviewConnection"
  /**
   * Edges for the TagToReviewConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<TagToReviewConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Review>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type TagToReviewConnectionEdge = {
  __typename?: "TagToReviewConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Review>
}

/** The Review type */
export type Review = Node & {
  __typename?: "Review"
  /** @deprecated  */
  ReviewFields?: Maybe<Review_Reviewfields>
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated
   */
  reviewId: Scalars["Int"]
  /**
   * Ancestors of the object
   * @deprecated
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated
   */
  author?: Maybe<User>
  /**
   * Gutenberg blocks
   * @deprecated
   */
  blocks?: Maybe<Array<Maybe<Block>>>
  /**
   * Gutenberg blocks as json string
   * @deprecated
   */
  blocksRaw?: Maybe<Scalars["BlockJsonArray"]>
  /**
   * Connection between the Review type and the Review type
   * @deprecated
   */
  categories?: Maybe<ReviewToCategoryConnection>
  /**
   * Connection between the Review type and the Review type
   * @deprecated
   */
  childReviews?: Maybe<ReviewToReviewConnection>
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated
   */
  commentStatus?: Maybe<Scalars["String"]>
  /**
   * The content of the post.
   * @deprecated
   */
  content?: Maybe<Scalars["String"]>
  /**
   * Post publishing date.
   * @deprecated
   */
  date?: Maybe<Scalars["String"]>
  /**
   * The publishing date set in GMT.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars["String"]>
  /**
   * The desired slug of the post
   * @deprecated
   */
  desiredSlug?: Maybe<Scalars["String"]>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  editLast?: Maybe<User>
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated
   */
  editLock?: Maybe<EditLock>
  /**
   * The RSS enclosure for the object
   * @deprecated
   */
  enclosure?: Maybe<Scalars["String"]>
  /**
   * The excerpt of the post.
   * @deprecated
   */
  excerpt?: Maybe<Scalars["String"]>
  /**
   * The featured image for the object
   * @deprecated
   */
  featuredImage?: Maybe<MediaItem>
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated
   */
  guid?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the review object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The permalink of the post
   * @deprecated
   */
  link?: Maybe<Scalars["String"]>
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated
   */
  menuOrder?: Maybe<Scalars["Int"]>
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated
   */
  modified?: Maybe<Scalars["String"]>
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated
   */
  modifiedGmt?: Maybe<Scalars["String"]>
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated
   */
  parent?: Maybe<PostObjectUnion>
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated
   */
  pingStatus?: Maybe<Scalars["String"]>
  /**
   * URLs that have been pinged.
   * @deprecated
   */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The Yoast SEO data of the Review
   * @deprecated
   */
  seo?: Maybe<Seo>
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * The current status of the object
   * @deprecated
   */
  status?: Maybe<Scalars["String"]>
  /**
   * Connection between the Review type and the Review type
   * @deprecated
   */
  tags?: Maybe<ReviewToTagConnection>
  /**
   * Terms connected to the Review
   * @deprecated
   */
  termNames?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the Review
   * @deprecated
   */
  termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Terms connected to the Review
   * @deprecated
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URLs queued to be pinged.
   * @deprecated
   */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * URI path for the resource
   * @deprecated
   */
  uri?: Maybe<Scalars["String"]>
}

/** The Review type */
export type ReviewAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>
}

/** The Review type */
export type ReviewBlocksArgs = {
  json?: Maybe<Scalars["String"]>
}

/** The Review type */
export type ReviewCategoriesArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<ReviewToCategoryConnectionWhereArgs>
}

/** The Review type */
export type ReviewChildReviewsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<ReviewToReviewConnectionWhereArgs>
}

/** The Review type */
export type ReviewContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The Review type */
export type ReviewExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The Review type */
export type ReviewTagsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<ReviewToTagConnectionWhereArgs>
}

/** The Review type */
export type ReviewTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Review type */
export type ReviewTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Review type */
export type ReviewTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The Review type */
export type ReviewTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** Field Group */
export type Review_Reviewfields = {
  __typename?: "Review_Reviewfields"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  rating?: Maybe<Scalars["Int"]>
}

/** Arguments for filtering the ReviewToCategoryConnection connection */
export type ReviewToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the Review type and the Review type */
export type ReviewToCategoryConnection = {
  __typename?: "ReviewToCategoryConnection"
  /**
   * Edges for the ReviewToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<ReviewToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type ReviewToCategoryConnectionEdge = {
  __typename?: "ReviewToCategoryConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the ReviewToReviewConnection connection */
export type ReviewToReviewConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the Review type and the Review type */
export type ReviewToReviewConnection = {
  __typename?: "ReviewToReviewConnection"
  /**
   * Edges for the ReviewToReviewConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<ReviewToReviewConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Review>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type ReviewToReviewConnectionEdge = {
  __typename?: "ReviewToReviewConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Review>
}

/** Arguments for filtering the ReviewToTagConnection connection */
export type ReviewToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the Review type and the Review type */
export type ReviewToTagConnection = {
  __typename?: "ReviewToTagConnection"
  /**
   * Edges for the ReviewToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<ReviewToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type ReviewToTagConnectionEdge = {
  __typename?: "ReviewToTagConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the category type and the category type */
export type CategoryToPostConnection = {
  __typename?: "CategoryToPostConnection"
  /**
   * Edges for the CategoryToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
  __typename?: "CategoryToPostConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** Arguments for filtering the CategoryToReviewConnection connection */
export type CategoryToReviewConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the category type and the category type */
export type CategoryToReviewConnection = {
  __typename?: "CategoryToReviewConnection"
  /**
   * Edges for the CategoryToReviewConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToReviewConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Review>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type CategoryToReviewConnectionEdge = {
  __typename?: "CategoryToReviewConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Review>
}

/** Arguments for filtering the EventToCategoryConnection connection */
export type EventToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the Event type and the Event type */
export type EventToCategoryConnection = {
  __typename?: "EventToCategoryConnection"
  /**
   * Edges for the EventToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<EventToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type EventToCategoryConnectionEdge = {
  __typename?: "EventToCategoryConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the EventToEventConnection connection */
export type EventToEventConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the Event type and the Event type */
export type EventToEventConnection = {
  __typename?: "EventToEventConnection"
  /**
   * Edges for the EventToEventConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<EventToEventConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Event>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type EventToEventConnectionEdge = {
  __typename?: "EventToEventConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Event>
}

/** Arguments for filtering the EventToTagConnection connection */
export type EventToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the Event type and the Event type */
export type EventToTagConnection = {
  __typename?: "EventToTagConnection"
  /**
   * Edges for the EventToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<EventToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type EventToTagConnectionEdge = {
  __typename?: "EventToTagConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** Arguments for filtering the UserToInspirationConnection connection */
export type UserToInspirationConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToInspirationConnection = {
  __typename?: "UserToInspirationConnection"
  /**
   * Edges for the UserToInspirationConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToInspirationConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToInspirationConnectionEdge = {
  __typename?: "UserToInspirationConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Inspiration>
}

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToMediaItemConnection = {
  __typename?: "UserToMediaItemConnection"
  /**
   * Edges for the UserToMediaItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
  __typename?: "UserToMediaItemConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MediaItem>
}

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToPageConnection = {
  __typename?: "UserToPageConnection"
  /**
   * Edges for the UserToPageConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Page>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToPageConnectionEdge = {
  __typename?: "UserToPageConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Page>
}

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToPostConnection = {
  __typename?: "UserToPostConnection"
  /**
   * Edges for the UserToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToPostConnectionEdge = {
  __typename?: "UserToPostConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** Arguments for filtering the UserToReviewConnection connection */
export type UserToReviewConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToReviewConnection = {
  __typename?: "UserToReviewConnection"
  /**
   * Edges for the UserToReviewConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToReviewConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Review>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToReviewConnectionEdge = {
  __typename?: "UserToReviewConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Review>
}

/** Arguments for filtering the UserToRevisionConnection connection */
export type UserToRevisionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the User type and the User type */
export type UserToRevisionConnection = {
  __typename?: "UserToRevisionConnection"
  /**
   * Edges for the UserToRevisionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToRevisionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Revision>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type UserToRevisionConnectionEdge = {
  __typename?: "UserToRevisionConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Revision>
}

/** Connection between the User type and the User type */
export type UserToUserRoleConnection = {
  __typename?: "UserToUserRoleConnection"
  /**
   * Edges for the UserToUserRoleConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
  __typename?: "UserToUserRoleConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<UserRole>
}

/** A user role object */
export type UserRole = Node & {
  __typename?: "UserRole"
  /**
   * The capabilities that belong to this role
   * @deprecated
   */
  capabilities?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * The globally unique identifier for the user role object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * The UI friendly name of the role
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the post type and the post type */
export type PostToCategoryConnection = {
  __typename?: "PostToCategoryConnection"
  /**
   * Edges for the PostToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
  __typename?: "PostToCategoryConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars["String"]>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars["String"]>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars["String"]>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars["String"]>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars["ID"]>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars["String"]>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars["Int"]>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars["Int"]>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars["Int"]>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars["String"]>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars["String"]>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars["ID"]>
}

/** Connection between the post type and the post type */
export type PostToCommentConnection = {
  __typename?: "PostToCommentConnection"
  /**
   * Edges for the PostToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
  __typename?: "PostToCommentConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
  __typename?: "PostToRevisionConnection"
  /**
   * Edges for the PostToRevisionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Revision>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
  __typename?: "PostToRevisionConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Revision>
}

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the post type and the post type */
export type PostToTagConnection = {
  __typename?: "PostToTagConnection"
  /**
   * Edges for the PostToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type PostToTagConnectionEdge = {
  __typename?: "PostToTagConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars["String"]>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars["String"]>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars["String"]>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars["String"]>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars["ID"]>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars["String"]>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars["Int"]>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars["Int"]>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars["Int"]>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars["String"]>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars["String"]>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars["ID"]>
}

/** Connection between the mediaItem type and the mediaItem type */
export type MediaItemToCommentConnection = {
  __typename?: "MediaItemToCommentConnection"
  /**
   * Edges for the MediaItemToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
  __typename?: "MediaItemToCommentConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: "MediaDetails"
  /**
   * The height of the mediaItem
   * @deprecated
   */
  file?: Maybe<Scalars["String"]>
  /**
   * The height of the mediaItem
   * @deprecated
   */
  height?: Maybe<Scalars["Int"]>
  /** @deprecated  */
  meta?: Maybe<MediaItemMeta>
  /**
   * The available sizes of the mediaItem
   * @deprecated
   */
  sizes?: Maybe<Array<Maybe<MediaSize>>>
  /**
   * The width of the mediaItem
   * @deprecated
   */
  width?: Maybe<Scalars["Int"]>
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: "MediaItemMeta"
  /** @deprecated  */
  aperture?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  camera?: Maybe<Scalars["String"]>
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  copyright?: Maybe<Scalars["String"]>
  /** @deprecated  */
  createdTimestamp?: Maybe<Scalars["Int"]>
  /** @deprecated  */
  credit?: Maybe<Scalars["String"]>
  /** @deprecated  */
  focalLength?: Maybe<Scalars["Int"]>
  /** @deprecated  */
  iso?: Maybe<Scalars["Int"]>
  /** @deprecated  */
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** @deprecated  */
  orientation?: Maybe<Scalars["String"]>
  /** @deprecated  */
  shutterSpeed?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  title?: Maybe<Scalars["String"]>
}

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: "MediaSize"
  /**
   * The file of the for the referenced size
   * @deprecated
   */
  file?: Maybe<Scalars["String"]>
  /**
   * The height of the for the referenced size
   * @deprecated
   */
  height?: Maybe<Scalars["String"]>
  /**
   * The mime type of the resource
   * @deprecated
   */
  mimeType?: Maybe<Scalars["String"]>
  /**
   * The referenced size name
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * The url of the for the referenced size
   * @deprecated
   */
  sourceUrl?: Maybe<Scalars["String"]>
  /**
   * The width of the for the referenced size
   * @deprecated
   */
  width?: Maybe<Scalars["String"]>
}

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the featured_lg size */
  FeaturedLg = "FEATURED_LG",
  /** MediaItem with the featured_md size */
  FeaturedMd = "FEATURED_MD",
  /** MediaItem with the featured_sm size */
  FeaturedSm = "FEATURED_SM",
  /** MediaItem with the featured_xl size */
  FeaturedXl = "FEATURED_XL",
  /** MediaItem with the featured_xs size */
  FeaturedXs = "FEATURED_XS",
  /** MediaItem with the large size */
  Large = "LARGE",
  /** MediaItem with the medium size */
  Medium = "MEDIUM",
  /** MediaItem with the medium_large size */
  MediumLarge = "MEDIUM_LARGE",
  /** MediaItem with the ratio size */
  Ratio = "RATIO",
  /** MediaItem with the thumbnail size */
  Thumbnail = "THUMBNAIL",
}

/** Field Group */
export type CaseStudy_Casestudyfields_Intro = {
  __typename?: "CaseStudy_Casestudyfields_Intro"
  /** @deprecated  */
  description?: Maybe<Scalars["String"]>
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  illustration?: Maybe<MediaItem>
  /** @deprecated  */
  subtitle?: Maybe<Scalars["String"]>
  /** @deprecated  */
  title?: Maybe<Scalars["String"]>
}

export type CaseStudy_Casestudyfields_Related = CaseStudy

/** Field Group */
export type CaseStudy_Casestudyfields_Testimonials = {
  __typename?: "CaseStudy_Casestudyfields_testimonials"
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  testimonial?: Maybe<CaseStudy_Casestudyfields_Testimonials_Testimonial>
}

/** Field Group */
export type CaseStudy_Casestudyfields_Testimonials_Testimonial = {
  __typename?: "CaseStudy_Casestudyfields_testimonials_Testimonial"
  /** @deprecated  */
  author?: Maybe<Scalars["String"]>
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  logo?: Maybe<MediaItem>
  /** @deprecated  */
  media?: Maybe<MediaItem>
  /** @deprecated  */
  role?: Maybe<Scalars["String"]>
  /** @deprecated  */
  testimonial?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the CaseStudyToCategoryConnection connection */
export type CaseStudyToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the CaseStudy type and the CaseStudy type */
export type CaseStudyToCategoryConnection = {
  __typename?: "CaseStudyToCategoryConnection"
  /**
   * Edges for the CaseStudyToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CaseStudyToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type CaseStudyToCategoryConnectionEdge = {
  __typename?: "CaseStudyToCategoryConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the CaseStudyToCaseStudyConnection connection */
export type CaseStudyToCaseStudyConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the CaseStudy type and the CaseStudy type */
export type CaseStudyToCaseStudyConnection = {
  __typename?: "CaseStudyToCaseStudyConnection"
  /**
   * Edges for the CaseStudyToCaseStudyConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CaseStudyToCaseStudyConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type CaseStudyToCaseStudyConnectionEdge = {
  __typename?: "CaseStudyToCaseStudyConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<CaseStudy>
}

/** Arguments for filtering the CaseStudyToTagConnection connection */
export type CaseStudyToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the CaseStudy type and the CaseStudy type */
export type CaseStudyToTagConnection = {
  __typename?: "CaseStudyToTagConnection"
  /**
   * Edges for the CaseStudyToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CaseStudyToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type CaseStudyToTagConnectionEdge = {
  __typename?: "CaseStudyToTagConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** Arguments for filtering the RootQueryToSeriesConnection connection */
export type RootQueryToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToSeriesConnection = {
  __typename?: "RootQueryToSeriesConnection"
  /**
   * Edges for the RootQueryToSeriesConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToSeriesConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Series>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type RootQueryToSeriesConnectionEdge = {
  __typename?: "RootQueryToSeriesConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Series>
}

/** All of the registered settings */
export type Settings = {
  __typename?: "Settings"
  /**
   * Allow people to post comments on new articles.
   * @deprecated
   */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars["String"]>
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated
   */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars["String"]>
  /**
   * A date format for all date strings.
   * @deprecated
   */
  generalSettingsDateFormat?: Maybe<Scalars["String"]>
  /**
   * Site tagline.
   * @deprecated
   */
  generalSettingsDescription?: Maybe<Scalars["String"]>
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated
   */
  generalSettingsEmail?: Maybe<Scalars["String"]>
  /**
   * WordPress locale code.
   * @deprecated
   */
  generalSettingsLanguage?: Maybe<Scalars["String"]>
  /**
   * A day number of the week that the week should start on.
   * @deprecated
   */
  generalSettingsStartOfWeek?: Maybe<Scalars["Int"]>
  /**
   * A time format for all time strings.
   * @deprecated
   */
  generalSettingsTimeFormat?: Maybe<Scalars["String"]>
  /**
   * A city in the same timezone as you.
   * @deprecated
   */
  generalSettingsTimezone?: Maybe<Scalars["String"]>
  /**
   * Site title.
   * @deprecated
   */
  generalSettingsTitle?: Maybe<Scalars["String"]>
  /**
   * Site URL.
   * @deprecated
   */
  generalSettingsUrl?: Maybe<Scalars["String"]>
  /**
   * Blog pages show at most.
   * @deprecated
   */
  readingSettingsPostsPerPage?: Maybe<Scalars["Int"]>
  /**
   * Default post category.
   * @deprecated
   */
  writingSettingsDefaultCategory?: Maybe<Scalars["Int"]>
  /**
   * Default post format.
   * @deprecated
   */
  writingSettingsDefaultPostFormat?: Maybe<Scalars["String"]>
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated
   */
  writingSettingsUseSmilies?: Maybe<Scalars["Boolean"]>
}

/** Arguments for filtering the RootQueryToCaseStudyConnection connection */
export type RootQueryToCaseStudyConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCaseStudyConnection = {
  __typename?: "RootQueryToCaseStudyConnection"
  /**
   * Edges for the RootQueryToCaseStudyConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToCaseStudyConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<CaseStudy>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToCaseStudyConnectionEdge = {
  __typename?: "RootQueryToCaseStudyConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<CaseStudy>
}

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCategoryConnection = {
  __typename?: "RootQueryToCategoryConnection"
  /**
   * Edges for the RootQueryToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
  __typename?: "RootQueryToCategoryConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars["String"]>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars["String"]>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars["String"]>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars["String"]>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars["ID"]>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars["String"]>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars["Int"]>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars["Int"]>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars["Int"]>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars["String"]>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars["String"]>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars["ID"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCommentConnection = {
  __typename?: "RootQueryToCommentConnection"
  /**
   * Edges for the RootQueryToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
  __typename?: "RootQueryToCommentConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: "DiscussionSettings"
  /**
   * Allow people to post comments on new articles.
   * @deprecated
   */
  defaultCommentStatus?: Maybe<Scalars["String"]>
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated
   */
  defaultPingStatus?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the RootQueryToEventConnection connection */
export type RootQueryToEventConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToEventConnection = {
  __typename?: "RootQueryToEventConnection"
  /**
   * Edges for the RootQueryToEventConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToEventConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Event>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToEventConnectionEdge = {
  __typename?: "RootQueryToEventConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Event>
}

/** The general setting type */
export type GeneralSettings = {
  __typename?: "GeneralSettings"
  /**
   * A date format for all date strings.
   * @deprecated
   */
  dateFormat?: Maybe<Scalars["String"]>
  /**
   * Site tagline.
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated
   */
  email?: Maybe<Scalars["String"]>
  /**
   * WordPress locale code.
   * @deprecated
   */
  language?: Maybe<Scalars["String"]>
  /**
   * A day number of the week that the week should start on.
   * @deprecated
   */
  startOfWeek?: Maybe<Scalars["Int"]>
  /**
   * A time format for all time strings.
   * @deprecated
   */
  timeFormat?: Maybe<Scalars["String"]>
  /**
   * A city in the same timezone as you.
   * @deprecated
   */
  timezone?: Maybe<Scalars["String"]>
  /**
   * Site title.
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * Site URL.
   * @deprecated
   */
  url?: Maybe<Scalars["String"]>
}

/** Arguments for filtering the RootQueryToInspirationConnection connection */
export type RootQueryToInspirationConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToInspirationConnection = {
  __typename?: "RootQueryToInspirationConnection"
  /**
   * Edges for the RootQueryToInspirationConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToInspirationConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Inspiration>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToInspirationConnectionEdge = {
  __typename?: "RootQueryToInspirationConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Inspiration>
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMediaItemConnection = {
  __typename?: "RootQueryToMediaItemConnection"
  /**
   * Edges for the RootQueryToMediaItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
  __typename?: "RootQueryToMediaItemConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MediaItem>
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = Node & {
  __typename?: "Menu"
  /**
   * The number of items in the menu
   * @deprecated
   */
  count?: Maybe<Scalars["Int"]>
  /**
   * The globally unique identifier of the nav menu object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * WP ID of the nav menu.
   * @deprecated
   */
  menuId?: Maybe<Scalars["Int"]>
  /**
   * Connection between the Menu type and the Menu type
   * @deprecated
   */
  menuItems?: Maybe<MenuToMenuItemConnection>
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
}

/** Registered menu locations */
export enum MenuLocationEnum {
  FooterFour = "FOOTER_FOUR",
  FooterOne = "FOOTER_ONE",
  FooterThree = "FOOTER_THREE",
  FooterTwo = "FOOTER_TWO",
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
}

/** Connection between the Menu type and the Menu type */
export type MenuToMenuItemConnection = {
  __typename?: "MenuToMenuItemConnection"
  /**
   * Edges for the MenuToMenuItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
  __typename?: "MenuToMenuItemConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MenuItem>
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = Node & {
  __typename?: "MenuItem"
  /**
   * Connection between the MenuItem type and the MenuItem type
   * @deprecated
   */
  childItems?: Maybe<MenuItemToMenuItemConnection>
  /**
   * The object connected to this menu item.
   * @deprecated
   */
  connectedObject?: Maybe<MenuItemObjectUnion>
  /**
   * Class attribute for the menu item link
   * @deprecated
   */
  cssClasses?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Description of the menu item.
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the nav menu item object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * Label or title of the menu item.
   * @deprecated
   */
  label?: Maybe<Scalars["String"]>
  /**
   * Link relationship (XFN) of the menu item.
   * @deprecated
   */
  linkRelationship?: Maybe<Scalars["String"]>
  /**
   * WP ID of the menu item.
   * @deprecated
   */
  menuItemId?: Maybe<Scalars["Int"]>
  /**
   * Target attribute for the menu item link.
   * @deprecated
   */
  target?: Maybe<Scalars["String"]>
  /**
   * Title attribute for the menu item link
   * @deprecated
   */
  title?: Maybe<Scalars["String"]>
  /**
   * URL or destination of the menu item.
   * @deprecated
   */
  url?: Maybe<Scalars["String"]>
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>
}

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
}

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
  __typename?: "MenuItemToMenuItemConnection"
  /**
   * Edges for the MenuItemToMenuItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
  __typename?: "MenuItemToMenuItemConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MenuItem>
}

export type MenuItemObjectUnion =
  | Post
  | Page
  | CaseStudy
  | Event
  | Inspiration
  | Review
  | Category
  | Tag
  | Series
  | MenuItem

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMenuItemConnection = {
  __typename?: "RootQueryToMenuItemConnection"
  /**
   * Edges for the RootQueryToMenuItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
  __typename?: "RootQueryToMenuItemConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MenuItem>
}

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMenuConnection = {
  __typename?: "RootQueryToMenuConnection"
  /**
   * Edges for the RootQueryToMenuConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Menu>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
  __typename?: "RootQueryToMenuConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Menu>
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPageConnection = {
  __typename?: "RootQueryToPageConnection"
  /**
   * Edges for the RootQueryToPageConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Page>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
  __typename?: "RootQueryToPageConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Page>
}

/** An plugin object */
export type Plugin = Node & {
  __typename?: "Plugin"
  /**
   * Name of the plugin author(s), may also be a company name.
   * @deprecated
   */
  author?: Maybe<Scalars["String"]>
  /**
   * URI for the related author(s)/company website.
   * @deprecated
   */
  authorUri?: Maybe<Scalars["String"]>
  /**
   * Description of the plugin.
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the plugin object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * Display name of the plugin.
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * URI for the plugin website. This is useful for directing users for support requests etc.
   * @deprecated
   */
  pluginUri?: Maybe<Scalars["String"]>
  /**
   * Current version of the plugin.
   * @deprecated
   */
  version?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPluginConnection = {
  __typename?: "RootQueryToPluginConnection"
  /**
   * Edges for the RootQueryToPluginConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Plugin>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
  __typename?: "RootQueryToPluginConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Plugin>
}

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPostConnection = {
  __typename?: "RootQueryToPostConnection"
  /**
   * Edges for the RootQueryToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
  __typename?: "RootQueryToPostConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** The reading setting type */
export type ReadingSettings = {
  __typename?: "ReadingSettings"
  /**
   * Blog pages show at most.
   * @deprecated
   */
  postsPerPage?: Maybe<Scalars["Int"]>
}

/** Arguments for filtering the RootQueryToReviewConnection connection */
export type RootQueryToReviewConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToReviewConnection = {
  __typename?: "RootQueryToReviewConnection"
  /**
   * Edges for the RootQueryToReviewConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToReviewConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Review>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToReviewConnectionEdge = {
  __typename?: "RootQueryToReviewConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Review>
}

/** Arguments for filtering the RootQueryToRevisionConnection connection */
export type RootQueryToRevisionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars["Int"]>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars["String"]>
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Category ID */
  categoryId?: Maybe<Scalars["Int"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars["String"]>
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars["Boolean"]>
  /** Specific ID of the object */
  id?: Maybe<Scalars["Int"]>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars["String"]>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars["String"]>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars["String"]>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars["String"]>
  /** Tag Slug */
  tag?: Maybe<Scalars["String"]>
  /** Use Tag ID */
  tagId?: Maybe<Scalars["String"]>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Title of the object */
  title?: Maybe<Scalars["String"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToRevisionConnection = {
  __typename?: "RootQueryToRevisionConnection"
  /**
   * Edges for the RootQueryToRevisionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToRevisionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Revision>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  postTypeInfo?: Maybe<PostType>
}

/** An edge in a connection */
export type RootQueryToRevisionConnectionEdge = {
  __typename?: "RootQueryToRevisionConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Revision>
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars["String"]>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars["Int"]>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars["Boolean"]>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars["String"]>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars["Boolean"]>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars["Boolean"]>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars["String"]>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars["Boolean"]>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars["Int"]>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars["String"]>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars["Boolean"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToTagConnection = {
  __typename?: "RootQueryToTagConnection"
  /**
   * Edges for the RootQueryToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
  /**
   * Information about the type of content being queried
   * @deprecated
   */
  taxonomyInfo?: Maybe<Taxonomy>
}

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
  __typename?: "RootQueryToTagConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** A theme object */
export type Theme = Node & {
  __typename?: "Theme"
  /**
   * Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   * @deprecated
   */
  author?: Maybe<Scalars["String"]>
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ).
   * @deprecated
   */
  authorUri?: Maybe<Scalars["String"]>
  /**
   * The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ).
   * @deprecated
   */
  description?: Maybe<Scalars["String"]>
  /**
   * The globally unique identifier of the theme object.
   * @deprecated
   */
  id: Scalars["ID"]
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars["Boolean"]>
  /**
   * Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ).
   * @deprecated
   */
  name?: Maybe<Scalars["String"]>
  /**
   * The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot().
   * @deprecated
   */
  screenshot?: Maybe<Scalars["String"]>
  /**
   * The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet().
   * @deprecated
   */
  slug?: Maybe<Scalars["String"]>
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ).
   * @deprecated
   */
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>
  /**
   * A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   * @deprecated
   */
  themeUri?: Maybe<Scalars["String"]>
  /**
   * The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ).
   * @deprecated
   */
  version?: Maybe<Scalars["Float"]>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToThemeConnection = {
  __typename?: "RootQueryToThemeConnection"
  /**
   * Edges for the RootQueryToThemeConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Theme>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
  __typename?: "RootQueryToThemeConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Theme>
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToUserRoleConnection = {
  __typename?: "RootQueryToUserRoleConnection"
  /**
   * Edges for the RootQueryToUserRoleConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
  __typename?: "RootQueryToUserRoleConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<UserRole>
}

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<PostTypeEnum>>>
  /** Array of userIds to include. */
  include?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** The user login. */
  login?: Maybe<Scalars["String"]>
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Scalars["Int"]>
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Scalars["Int"]>
  /** The user nicename. */
  nicename?: Maybe<Scalars["String"]>
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: Maybe<UserRoleEnum>
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<Scalars["String"]>
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum
  order?: Maybe<OrderEnum>
}

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = "DISPLAY_NAME",
  /** Order by email address */
  Email = "EMAIL",
  /** Order by login */
  Login = "LOGIN",
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = "LOGIN_IN",
  /** Order by nice name */
  NiceName = "NICE_NAME",
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = "NICE_NAME_IN",
  /** Order by registration date */
  Registered = "REGISTERED",
  /** Order by URL */
  Url = "URL",
}

/** Names of available user roles */
export enum UserRoleEnum {
  Administrator = "ADMINISTRATOR",
  Author = "AUTHOR",
  Contributor = "CONTRIBUTOR",
  Editor = "EDITOR",
  SeoEditor = "SEO_EDITOR",
  SeoManager = "SEO_MANAGER",
  Subscriber = "SUBSCRIBER",
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToUserConnection = {
  __typename?: "RootQueryToUserConnection"
  /**
   * Edges for the RootQueryToUserConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<User>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
  __typename?: "RootQueryToUserConnectionEdge"
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars["String"]>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<User>
}

/** The writing setting type */
export type WritingSettings = {
  __typename?: "WritingSettings"
  /**
   * Default post category.
   * @deprecated
   */
  defaultCategory?: Maybe<Scalars["Int"]>
  /**
   * Default post format.
   * @deprecated
   */
  defaultPostFormat?: Maybe<Scalars["String"]>
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated
   */
  useSmilies?: Maybe<Scalars["Boolean"]>
}

/** The root mutation */
export type RootMutation = {
  __typename?: "RootMutation"
  /**
   * The payload for the UpdateCategory mutation
   * @deprecated
   */
  updateCategory?: Maybe<UpdateCategoryPayload>
  /**
   * The payload for the UpdateSeries mutation
   * @deprecated
   */
  updateSeries?: Maybe<UpdateSeriesPayload>
  /**
   * The payload for the UpdateTag mutation
   * @deprecated
   */
  updateTag?: Maybe<UpdateTagPayload>
  /**
   * The payload for the createCaseStudy mutation
   * @deprecated
   */
  createCaseStudy?: Maybe<CreateCaseStudyPayload>
  /**
   * The payload for the createCategory mutation
   * @deprecated
   */
  createCategory?: Maybe<CreateCategoryPayload>
  /**
   * The payload for the createComment mutation
   * @deprecated
   */
  createComment?: Maybe<CreateCommentPayload>
  /**
   * The payload for the createEvent mutation
   * @deprecated
   */
  createEvent?: Maybe<CreateEventPayload>
  /**
   * The payload for the createInspiration mutation
   * @deprecated
   */
  createInspiration?: Maybe<CreateInspirationPayload>
  /**
   * The payload for the createMediaItem mutation
   * @deprecated
   */
  createMediaItem?: Maybe<CreateMediaItemPayload>
  /**
   * The payload for the createPage mutation
   * @deprecated
   */
  createPage?: Maybe<CreatePagePayload>
  /**
   * The payload for the createPost mutation
   * @deprecated
   */
  createPost?: Maybe<CreatePostPayload>
  /**
   * The payload for the createReview mutation
   * @deprecated
   */
  createReview?: Maybe<CreateReviewPayload>
  /**
   * The payload for the createSeries mutation
   * @deprecated
   */
  createSeries?: Maybe<CreateSeriesPayload>
  /**
   * The payload for the createTag mutation
   * @deprecated
   */
  createTag?: Maybe<CreateTagPayload>
  /**
   * The payload for the createUser mutation
   * @deprecated
   */
  createUser?: Maybe<CreateUserPayload>
  /**
   * The payload for the deleteCaseStudy mutation
   * @deprecated
   */
  deleteCaseStudy?: Maybe<DeleteCaseStudyPayload>
  /**
   * The payload for the deleteCategory mutation
   * @deprecated
   */
  deleteCategory?: Maybe<DeleteCategoryPayload>
  /**
   * The payload for the deleteComment mutation
   * @deprecated
   */
  deleteComment?: Maybe<DeleteCommentPayload>
  /**
   * The payload for the deleteEvent mutation
   * @deprecated
   */
  deleteEvent?: Maybe<DeleteEventPayload>
  /**
   * The payload for the deleteInspiration mutation
   * @deprecated
   */
  deleteInspiration?: Maybe<DeleteInspirationPayload>
  /**
   * The payload for the deleteMediaItem mutation
   * @deprecated
   */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>
  /**
   * The payload for the deletePage mutation
   * @deprecated
   */
  deletePage?: Maybe<DeletePagePayload>
  /**
   * The payload for the deletePost mutation
   * @deprecated
   */
  deletePost?: Maybe<DeletePostPayload>
  /**
   * The payload for the deleteReview mutation
   * @deprecated
   */
  deleteReview?: Maybe<DeleteReviewPayload>
  /**
   * The payload for the deleteRevision mutation
   * @deprecated
   */
  deleteRevision?: Maybe<DeleteRevisionPayload>
  /**
   * The payload for the deleteSeries mutation
   * @deprecated
   */
  deleteSeries?: Maybe<DeleteSeriesPayload>
  /**
   * The payload for the deleteTag mutation
   * @deprecated
   */
  deleteTag?: Maybe<DeleteTagPayload>
  /**
   * The payload for the deleteUser mutation
   * @deprecated
   */
  deleteUser?: Maybe<DeleteUserPayload>
  /** @deprecated  */
  increaseCount?: Maybe<Scalars["Int"]>
  /**
   * The payload for the registerUser mutation
   * @deprecated
   */
  registerUser?: Maybe<RegisterUserPayload>
  /**
   * The payload for the resetUserPassword mutation
   * @deprecated
   */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>
  /**
   * The payload for the restoreComment mutation
   * @deprecated
   */
  restoreComment?: Maybe<RestoreCommentPayload>
  /**
   * The payload for the sendPasswordResetEmail mutation
   * @deprecated
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>
  /**
   * The payload for the updateCaseStudy mutation
   * @deprecated
   */
  updateCaseStudy?: Maybe<UpdateCaseStudyPayload>
  /**
   * The payload for the updateComment mutation
   * @deprecated
   */
  updateComment?: Maybe<UpdateCommentPayload>
  /**
   * The payload for the updateEvent mutation
   * @deprecated
   */
  updateEvent?: Maybe<UpdateEventPayload>
  /**
   * The payload for the updateInspiration mutation
   * @deprecated
   */
  updateInspiration?: Maybe<UpdateInspirationPayload>
  /**
   * The payload for the updateMediaItem mutation
   * @deprecated
   */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>
  /**
   * The payload for the updatePage mutation
   * @deprecated
   */
  updatePage?: Maybe<UpdatePagePayload>
  /**
   * The payload for the updatePost mutation
   * @deprecated
   */
  updatePost?: Maybe<UpdatePostPayload>
  /**
   * The payload for the updateReview mutation
   * @deprecated
   */
  updateReview?: Maybe<UpdateReviewPayload>
  /**
   * The payload for the updateSettings mutation
   * @deprecated
   */
  updateSettings?: Maybe<UpdateSettingsPayload>
  /**
   * The payload for the updateUser mutation
   * @deprecated
   */
  updateUser?: Maybe<UpdateUserPayload>
}

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput
}

/** The root mutation */
export type RootMutationUpdateSeriesArgs = {
  input: UpdateSeriesInput
}

/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput
}

/** The root mutation */
export type RootMutationCreateCaseStudyArgs = {
  input: CreateCaseStudyInput
}

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput
}

/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput
}

/** The root mutation */
export type RootMutationCreateEventArgs = {
  input: CreateEventInput
}

/** The root mutation */
export type RootMutationCreateInspirationArgs = {
  input: CreateInspirationInput
}

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput
}

/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput
}

/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput
}

/** The root mutation */
export type RootMutationCreateReviewArgs = {
  input: CreateReviewInput
}

/** The root mutation */
export type RootMutationCreateSeriesArgs = {
  input: CreateSeriesInput
}

/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput
}

/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput
}

/** The root mutation */
export type RootMutationDeleteCaseStudyArgs = {
  input: DeleteCaseStudyInput
}

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput
}

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput
}

/** The root mutation */
export type RootMutationDeleteEventArgs = {
  input: DeleteEventInput
}

/** The root mutation */
export type RootMutationDeleteInspirationArgs = {
  input: DeleteInspirationInput
}

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput
}

/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput
}

/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput
}

/** The root mutation */
export type RootMutationDeleteReviewArgs = {
  input: DeleteReviewInput
}

/** The root mutation */
export type RootMutationDeleteRevisionArgs = {
  input: DeleteRevisionInput
}

/** The root mutation */
export type RootMutationDeleteSeriesArgs = {
  input: DeleteSeriesInput
}

/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput
}

/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput
}

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: Maybe<Scalars["Int"]>
}

/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput
}

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput
}

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput
}

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput
}

/** The root mutation */
export type RootMutationUpdateCaseStudyArgs = {
  input: UpdateCaseStudyInput
}

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput
}

/** The root mutation */
export type RootMutationUpdateEventArgs = {
  input: UpdateEventInput
}

/** The root mutation */
export type RootMutationUpdateInspirationArgs = {
  input: UpdateInspirationInput
}

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput
}

/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput
}

/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput
}

/** The root mutation */
export type RootMutationUpdateReviewArgs = {
  input: UpdateReviewInput
}

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput
}

/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput
}

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The description of the category object */
  description?: Maybe<Scalars["String"]>
  /** The ID of the category object to update */
  id: Scalars["ID"]
  /** The name of the category object to mutate */
  name?: Maybe<Scalars["String"]>
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars["ID"]>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
  __typename?: "UpdateCategoryPayload"
  /**
   * The created category
   * @deprecated
   */
  category?: Maybe<Category>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the UpdateSeries mutation */
export type UpdateSeriesInput = {
  /** The slug that the taxonomy_series will be an alias of */
  aliasOf?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The description of the taxonomy_series object */
  description?: Maybe<Scalars["String"]>
  /** The ID of the Series object to update */
  id: Scalars["ID"]
  /** The name of the taxonomy_series object to mutate */
  name?: Maybe<Scalars["String"]>
  /** The ID of the taxonomy_series that should be set as the parent */
  parentId?: Maybe<Scalars["ID"]>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the UpdateSeries mutation */
export type UpdateSeriesPayload = {
  __typename?: "UpdateSeriesPayload"
  /**
   * The created taxonomy_series
   * @deprecated
   */
  series?: Maybe<Series>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The description of the post_tag object */
  description?: Maybe<Scalars["String"]>
  /** The ID of the tag object to update */
  id: Scalars["ID"]
  /** The name of the post_tag object to mutate */
  name?: Maybe<Scalars["String"]>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
  __typename?: "UpdateTagPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The created post_tag
   * @deprecated
   */
  tag?: Maybe<Tag>
}

/** Input for the createCaseStudy mutation */
export type CreateCaseStudyInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the CaseStudy and categories */
  categories?: Maybe<CaseStudyCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the CaseStudy and tags */
  tags?: Maybe<CaseStudyTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Set relationships between the CaseStudy to categories */
export type CaseStudyCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<CaseStudyCategoriesNodeInput>>>
}

/** List of categories to connect the CaseStudy to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type CaseStudyCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the category. If present, this will be used to connect to the CaseStudy. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** Set relationships between the CaseStudy to tags */
export type CaseStudyTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<CaseStudyTagsNodeInput>>>
}

/** List of tags to connect the CaseStudy to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type CaseStudyTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the tag. If present, this will be used to connect to the CaseStudy. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createCaseStudy mutation */
export type CreateCaseStudyPayload = {
  __typename?: "CreateCaseStudyPayload"
  /** @deprecated  */
  caseStudy?: Maybe<CaseStudy>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The description of the category object */
  description?: Maybe<Scalars["String"]>
  /** The name of the category object to mutate */
  name: Scalars["String"]
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars["ID"]>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
  __typename?: "CreateCategoryPayload"
  /**
   * The created category
   * @deprecated
   */
  category?: Maybe<Category>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the createComment mutation */
export type CreateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars["String"]>
  /** The approval status of the comment. */
  approved?: Maybe<Scalars["String"]>
  /** The name of the comment's author. */
  author?: Maybe<Scalars["String"]>
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars["String"]>
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars["String"]>
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars["Int"]>
  /** Content of the comment. */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars["ID"]>
  /** Type of comment. */
  type?: Maybe<Scalars["String"]>
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars["Int"]>
}

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
  __typename?: "CreateCommentPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The comment that was created
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated
   */
  success?: Maybe<Scalars["Boolean"]>
}

/** Input for the createEvent mutation */
export type CreateEventInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the Event and categories */
  categories?: Maybe<EventCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the Event and tags */
  tags?: Maybe<EventTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Set relationships between the Event to categories */
export type EventCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<EventCategoriesNodeInput>>>
}

/** List of categories to connect the Event to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type EventCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the category. If present, this will be used to connect to the Event. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** Set relationships between the Event to tags */
export type EventTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<EventTagsNodeInput>>>
}

/** List of tags to connect the Event to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type EventTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the tag. If present, this will be used to connect to the Event. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createEvent mutation */
export type CreateEventPayload = {
  __typename?: "CreateEventPayload"
  /** @deprecated  */
  event?: Maybe<Event>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the createInspiration mutation */
export type CreateInspirationInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the Inspiration and categories */
  categories?: Maybe<InspirationCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the Inspiration and tags */
  tags?: Maybe<InspirationTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Set relationships between the Inspiration to categories */
export type InspirationCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<InspirationCategoriesNodeInput>>>
}

/** List of categories to connect the Inspiration to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type InspirationCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the category. If present, this will be used to connect to the Inspiration. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** Set relationships between the Inspiration to tags */
export type InspirationTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<InspirationTagsNodeInput>>>
}

/** List of tags to connect the Inspiration to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type InspirationTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the tag. If present, this will be used to connect to the Inspiration. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createInspiration mutation */
export type CreateInspirationPayload = {
  __typename?: "CreateInspirationPayload"
  /** @deprecated  */
  inspiration?: Maybe<Inspiration>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars["String"]>
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars["ID"]>
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars["String"]>
  /** The date of the mediaItem */
  date?: Maybe<Scalars["String"]>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars["String"]>
  /** Description of the mediaItem */
  description?: Maybe<Scalars["String"]>
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars["String"]>
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars["String"]>
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars["String"]>
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: Maybe<Scalars["String"]>
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = "AUTO_DRAFT",
  /** Objects with the inherit status */
  Inherit = "INHERIT",
  /** Objects with the private status */
  Private = "PRIVATE",
  /** Objects with the trash status */
  Trash = "TRASH",
}

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
  __typename?: "CreateMediaItemPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the createPage mutation */
export type CreatePageInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The payload for the createPage mutation */
export type CreatePagePayload = {
  __typename?: "CreatePagePayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  page?: Maybe<Page>
}

/** Input for the createPost mutation */
export type CreatePostInput = {
  /** Set connections between the post and Serieses */
  serieses?: Maybe<PostSeriesesInput>
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Set relationships between the post to Serieses */
export type PostSeriesesInput = {
  /** If true, this will append the Series to existing related Serieses. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<PostSeriesesNodeInput>>>
}

/** List of Serieses to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostSeriesesNodeInput = {
  /** The description of the Series. This field is used to set a description of the Series if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the Series. If present, this will be used to connect to the post. If no existing Series exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the Series. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the Series. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>
}

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>
}

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createPost mutation */
export type CreatePostPayload = {
  __typename?: "CreatePostPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  post?: Maybe<Post>
}

/** Input for the createReview mutation */
export type CreateReviewInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the Review and categories */
  categories?: Maybe<ReviewCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the Review and tags */
  tags?: Maybe<ReviewTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** Set relationships between the Review to categories */
export type ReviewCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<ReviewCategoriesNodeInput>>>
}

/** List of categories to connect the Review to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ReviewCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the category. If present, this will be used to connect to the Review. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** Set relationships between the Review to tags */
export type ReviewTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars["Boolean"]>
  nodes?: Maybe<Array<Maybe<ReviewTagsNodeInput>>>
}

/** List of tags to connect the Review to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ReviewTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars["String"]>
  /** The ID of the tag. If present, this will be used to connect to the Review. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars["ID"]>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars["String"]>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createReview mutation */
export type CreateReviewPayload = {
  __typename?: "CreateReviewPayload"
  /** @deprecated  */
  review?: Maybe<Review>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the createSeries mutation */
export type CreateSeriesInput = {
  /** The slug that the taxonomy_series will be an alias of */
  aliasOf?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The description of the taxonomy_series object */
  description?: Maybe<Scalars["String"]>
  /** The name of the taxonomy_series object to mutate */
  name: Scalars["String"]
  /** The ID of the taxonomy_series that should be set as the parent */
  parentId?: Maybe<Scalars["ID"]>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createSeries mutation */
export type CreateSeriesPayload = {
  __typename?: "CreateSeriesPayload"
  /**
   * The created taxonomy_series
   * @deprecated
   */
  series?: Maybe<Series>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the createTag mutation */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The description of the post_tag object */
  description?: Maybe<Scalars["String"]>
  /** The name of the post_tag object to mutate */
  name: Scalars["String"]
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars["String"]>
}

/** The payload for the createTag mutation */
export type CreateTagPayload = {
  __typename?: "CreateTagPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The created post_tag
   * @deprecated
   */
  tag?: Maybe<Tag>
}

/** Input for the createUser mutation */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** A string containing content about the user. */
  description?: Maybe<Scalars["String"]>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars["String"]>
  /** A string containing the user's email address. */
  email?: Maybe<Scalars["String"]>
  /** 	The user's first name. */
  firstName?: Maybe<Scalars["String"]>
  /** User's Jabber account. */
  jabber?: Maybe<Scalars["String"]>
  /** The user's last name. */
  lastName?: Maybe<Scalars["String"]>
  /** User's locale. */
  locale?: Maybe<Scalars["String"]>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars["String"]>
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars["String"]>
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars["String"]>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars["String"]>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars["String"]>
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** A string that contains the user's username for logging in. */
  username: Scalars["String"]
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars["String"]>
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars["String"]>
}

/** The payload for the createUser mutation */
export type CreateUserPayload = {
  __typename?: "CreateUserPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  user?: Maybe<User>
}

/** Input for the deleteCaseStudy mutation */
export type DeleteCaseStudyInput = {
  clientMutationId: Scalars["String"]
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the CaseStudy to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteCaseStudy mutation */
export type DeleteCaseStudyPayload = {
  __typename?: "DeleteCaseStudyPayload"
  /**
   * The object before it was deleted
   * @deprecated
   */
  caseStudy?: Maybe<CaseStudy>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
}

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
  clientMutationId: Scalars["String"]
  /** The ID of the category to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
  __typename?: "DeleteCategoryPayload"
  /**
   * The deteted term object
   * @deprecated
   */
  category?: Maybe<Category>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
}

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
  clientMutationId: Scalars["String"]
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The deleted comment ID */
  id: Scalars["ID"]
}

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
  __typename?: "DeleteCommentPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The deleted comment object
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * The deleted comment ID
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
}

/** Input for the deleteEvent mutation */
export type DeleteEventInput = {
  clientMutationId: Scalars["String"]
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the Event to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteEvent mutation */
export type DeleteEventPayload = {
  __typename?: "DeleteEventPayload"
  /**
   * The object before it was deleted
   * @deprecated
   */
  event?: Maybe<Event>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
}

/** Input for the deleteInspiration mutation */
export type DeleteInspirationInput = {
  clientMutationId: Scalars["String"]
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the Inspiration to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteInspiration mutation */
export type DeleteInspirationPayload = {
  __typename?: "DeleteInspirationPayload"
  /**
   * The object before it was deleted
   * @deprecated
   */
  inspiration?: Maybe<Inspiration>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
}

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
  clientMutationId: Scalars["String"]
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the mediaItem to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
  __typename?: "DeleteMediaItemPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted mediaItem
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
  /**
   * The mediaItem before it was deleted
   * @deprecated
   */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the deletePage mutation */
export type DeletePageInput = {
  clientMutationId: Scalars["String"]
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the page to delete */
  id: Scalars["ID"]
}

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
  __typename?: "DeletePagePayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
  /**
   * The object before it was deleted
   * @deprecated
   */
  page?: Maybe<Page>
}

/** Input for the deletePost mutation */
export type DeletePostInput = {
  clientMutationId: Scalars["String"]
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the post to delete */
  id: Scalars["ID"]
}

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
  __typename?: "DeletePostPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
  /**
   * The object before it was deleted
   * @deprecated
   */
  post?: Maybe<Post>
}

/** Input for the deleteReview mutation */
export type DeleteReviewInput = {
  clientMutationId: Scalars["String"]
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the Review to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteReview mutation */
export type DeleteReviewPayload = {
  __typename?: "DeleteReviewPayload"
  /**
   * The object before it was deleted
   * @deprecated
   */
  review?: Maybe<Review>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
}

/** Input for the deleteRevision mutation */
export type DeleteRevisionInput = {
  clientMutationId: Scalars["String"]
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars["Boolean"]>
  /** The ID of the revision to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteRevision mutation */
export type DeleteRevisionPayload = {
  __typename?: "DeleteRevisionPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
  /**
   * The object before it was deleted
   * @deprecated
   */
  revision?: Maybe<Revision>
}

/** Input for the deleteSeries mutation */
export type DeleteSeriesInput = {
  clientMutationId: Scalars["String"]
  /** The ID of the Series to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteSeries mutation */
export type DeleteSeriesPayload = {
  __typename?: "DeleteSeriesPayload"
  /**
   * The deteted term object
   * @deprecated
   */
  series?: Maybe<Series>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
}

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
  clientMutationId: Scalars["String"]
  /** The ID of the tag to delete */
  id: Scalars["ID"]
}

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
  __typename?: "DeleteTagPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
  /**
   * The deteted term object
   * @deprecated
   */
  tag?: Maybe<Tag>
}

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
  clientMutationId: Scalars["String"]
  /** The ID of the user you want to delete */
  id: Scalars["ID"]
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<Scalars["ID"]>
}

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
  __typename?: "DeleteUserPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The ID of the user that you just deleted
   * @deprecated
   */
  deletedId?: Maybe<Scalars["ID"]>
  /**
   * The deleted user object
   * @deprecated
   */
  user?: Maybe<User>
}

/** Input for the registerUser mutation */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** A string containing content about the user. */
  description?: Maybe<Scalars["String"]>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars["String"]>
  /** A string containing the user's email address. */
  email?: Maybe<Scalars["String"]>
  /** 	The user's first name. */
  firstName?: Maybe<Scalars["String"]>
  /** User's Jabber account. */
  jabber?: Maybe<Scalars["String"]>
  /** The user's last name. */
  lastName?: Maybe<Scalars["String"]>
  /** User's locale. */
  locale?: Maybe<Scalars["String"]>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars["String"]>
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars["String"]>
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars["String"]>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars["String"]>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars["String"]>
  /** A string that contains the user's username. */
  username: Scalars["String"]
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars["String"]>
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars["String"]>
}

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
  __typename?: "RegisterUserPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  user?: Maybe<User>
}

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
  clientMutationId: Scalars["String"]
  /** Password reset key */
  key?: Maybe<Scalars["String"]>
  /** The user's login (username). */
  login?: Maybe<Scalars["String"]>
  /** The new password. */
  password?: Maybe<Scalars["String"]>
}

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
  __typename?: "ResetUserPasswordPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  user?: Maybe<User>
}

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
  clientMutationId: Scalars["String"]
  /** The ID of the comment to be restored */
  id: Scalars["ID"]
}

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
  __typename?: "RestoreCommentPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The restored comment object
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * The ID of the restored comment
   * @deprecated
   */
  restoredId?: Maybe<Scalars["ID"]>
}

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
  clientMutationId: Scalars["String"]
  /** A string that contains the user's username or email address. */
  username: Scalars["String"]
}

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
  __typename?: "SendPasswordResetEmailPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The user that the password reset email was sent to
   * @deprecated
   */
  user?: Maybe<User>
}

/** Input for the updateCaseStudy mutation */
export type UpdateCaseStudyInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the CaseStudy and categories */
  categories?: Maybe<CaseStudyCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** The ID of the CaseStudy object */
  id: Scalars["ID"]
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the CaseStudy and tags */
  tags?: Maybe<CaseStudyTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The payload for the updateCaseStudy mutation */
export type UpdateCaseStudyPayload = {
  __typename?: "UpdateCaseStudyPayload"
  /** @deprecated  */
  caseStudy?: Maybe<CaseStudy>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars["String"]>
  /** The approval status of the comment. */
  approved?: Maybe<Scalars["String"]>
  /** The name of the comment's author. */
  author?: Maybe<Scalars["String"]>
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars["String"]>
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars["String"]>
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars["Int"]>
  /** Content of the comment. */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The ID of the comment being updated. */
  id: Scalars["ID"]
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars["ID"]>
  /** Type of comment. */
  type?: Maybe<Scalars["String"]>
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars["Int"]>
}

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
  __typename?: "UpdateCommentPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /**
   * The comment that was created
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated
   */
  success?: Maybe<Scalars["Boolean"]>
}

/** Input for the updateEvent mutation */
export type UpdateEventInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the Event and categories */
  categories?: Maybe<EventCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** The ID of the Event object */
  id: Scalars["ID"]
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the Event and tags */
  tags?: Maybe<EventTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The payload for the updateEvent mutation */
export type UpdateEventPayload = {
  __typename?: "UpdateEventPayload"
  /** @deprecated  */
  event?: Maybe<Event>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the updateInspiration mutation */
export type UpdateInspirationInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the Inspiration and categories */
  categories?: Maybe<InspirationCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** The ID of the Inspiration object */
  id: Scalars["ID"]
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the Inspiration and tags */
  tags?: Maybe<InspirationTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The payload for the updateInspiration mutation */
export type UpdateInspirationPayload = {
  __typename?: "UpdateInspirationPayload"
  /** @deprecated  */
  inspiration?: Maybe<Inspiration>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars["String"]>
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars["ID"]>
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars["String"]>
  /** The date of the mediaItem */
  date?: Maybe<Scalars["String"]>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars["String"]>
  /** Description of the mediaItem */
  description?: Maybe<Scalars["String"]>
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars["String"]>
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>
  /** The ID of the mediaItem object */
  id: Scalars["ID"]
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars["String"]>
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars["String"]>
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: Maybe<Scalars["String"]>
}

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
  __typename?: "UpdateMediaItemPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the updatePage mutation */
export type UpdatePageInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** The ID of the page object */
  id: Scalars["ID"]
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
  __typename?: "UpdatePagePayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  page?: Maybe<Page>
}

/** Input for the updatePost mutation */
export type UpdatePostInput = {
  /** Set connections between the post and Serieses */
  serieses?: Maybe<PostSeriesesInput>
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** The ID of the post object */
  id: Scalars["ID"]
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
  __typename?: "UpdatePostPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  post?: Maybe<Post>
}

/** Input for the updateReview mutation */
export type UpdateReviewInput = {
  /** The userId to assign as the author of the post */
  authorId?: Maybe<Scalars["ID"]>
  /** Set connections between the Review and categories */
  categories?: Maybe<ReviewCategoriesInput>
  clientMutationId: Scalars["String"]
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars["Int"]>
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars["String"]>
  /** The content of the object */
  content?: Maybe<Scalars["String"]>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars["String"]>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars["String"]>
  /** The ID of the Review object */
  id: Scalars["ID"]
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars["Int"]>
  /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
  mimeType?: Maybe<MimeTypeEnum>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars["ID"]>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars["String"]>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars["String"]>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** The slug of the object */
  slug?: Maybe<Scalars["String"]>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the Review and tags */
  tags?: Maybe<ReviewTagsInput>
  /** The title of the post */
  title?: Maybe<Scalars["String"]>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars["String"]>>>
}

/** The payload for the updateReview mutation */
export type UpdateReviewPayload = {
  __typename?: "UpdateReviewPayload"
  /** @deprecated  */
  review?: Maybe<Review>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
}

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
  clientMutationId: Scalars["String"]
  /** Allow people to post comments on new articles. */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars["String"]>
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars["String"]>
  /** A date format for all date strings. */
  generalSettingsDateFormat?: Maybe<Scalars["String"]>
  /** Site tagline. */
  generalSettingsDescription?: Maybe<Scalars["String"]>
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: Maybe<Scalars["String"]>
  /** WordPress locale code. */
  generalSettingsLanguage?: Maybe<Scalars["String"]>
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: Maybe<Scalars["Int"]>
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: Maybe<Scalars["String"]>
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: Maybe<Scalars["String"]>
  /** Site title. */
  generalSettingsTitle?: Maybe<Scalars["String"]>
  /** Site URL. */
  generalSettingsUrl?: Maybe<Scalars["String"]>
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: Maybe<Scalars["Int"]>
  /** Default post category. */
  writingSettingsDefaultCategory?: Maybe<Scalars["Int"]>
  /** Default post format. */
  writingSettingsDefaultPostFormat?: Maybe<Scalars["String"]>
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: Maybe<Scalars["Boolean"]>
}

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
  __typename?: "UpdateSettingsPayload"
  /** @deprecated  */
  allSettings?: Maybe<Settings>
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>
}

/** Input for the updateUser mutation */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars["String"]>
  clientMutationId: Scalars["String"]
  /** A string containing content about the user. */
  description?: Maybe<Scalars["String"]>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars["String"]>
  /** A string containing the user's email address. */
  email?: Maybe<Scalars["String"]>
  /** 	The user's first name. */
  firstName?: Maybe<Scalars["String"]>
  /** The ID of the user */
  id: Scalars["ID"]
  /** User's Jabber account. */
  jabber?: Maybe<Scalars["String"]>
  /** The user's last name. */
  lastName?: Maybe<Scalars["String"]>
  /** User's locale. */
  locale?: Maybe<Scalars["String"]>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars["String"]>
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars["String"]>
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars["String"]>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars["String"]>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars["String"]>
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars["String"]>
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars["String"]>
}

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
  __typename?: "UpdateUserPayload"
  /** @deprecated  */
  clientMutationId: Scalars["String"]
  /** @deprecated  */
  user?: Maybe<User>
}

/** yoast/how-to-block block */
export type YoastHowToBlockBlock = Block & {
  __typename?: "YoastHowToBlockBlock"
  /** @deprecated  */
  attributes?: Maybe<YoastHowToBlockBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type YoastHowToBlockBlockAttributes = {
  __typename?: "YoastHowToBlockBlockAttributes"
  /** @deprecated  */
  additionalListCssClasses?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  days?: Maybe<Scalars["String"]>
  /** @deprecated  */
  defaultDurationText?: Maybe<Scalars["String"]>
  /** @deprecated  */
  description?: Maybe<Scalars["BlockAttributesArray"]>
  /** @deprecated  */
  durationText?: Maybe<Scalars["String"]>
  /** @deprecated  */
  hasDuration?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  hours?: Maybe<Scalars["String"]>
  /** @deprecated  */
  jsonDescription?: Maybe<Scalars["String"]>
  /** @deprecated  */
  minutes?: Maybe<Scalars["String"]>
  /** @deprecated  */
  steps?: Maybe<Scalars["BlockAttributesArray"]>
  /** @deprecated  */
  unorderedList?: Maybe<Scalars["Boolean"]>
}

/** yoast/faq-block block */
export type YoastFaqBlockBlock = Block & {
  __typename?: "YoastFaqBlockBlock"
  /** @deprecated  */
  attributes?: Maybe<YoastFaqBlockBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type YoastFaqBlockBlockAttributes = {
  __typename?: "YoastFaqBlockBlockAttributes"
  /** @deprecated  */
  additionalListCssClasses?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  questions?: Maybe<Scalars["BlockAttributesArray"]>
}

/** acf/code block */
export type AcfCodeBlock = Block & {
  __typename?: "AcfCodeBlock"
  /** @deprecated  */
  acf?: Maybe<AcfCodeBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfCodeBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfCodeBlockFields = {
  __typename?: "AcfCodeBlockFields"
  /** @deprecated  */
  code?: Maybe<Scalars["String"]>
  /** @deprecated  */
  language?: Maybe<AcfCodeBlockFieldsLanguage>
}

export enum AcfCodeBlockFieldsLanguage {
  Bash = "bash",
  Css = "css",
  Git = "git",
  Graphql = "graphql",
  Handlebars = "handlebars",
  Html = "html",
  Javascript = "javascript",
  Json = "json",
  Jsx = "jsx",
  Markup = "markup",
  Nginx = "nginx",
  Php = "php",
  Pug = "pug",
  Scss = "scss",
  Sql = "sql",
  Svg = "svg",
  Toml = "toml",
  Tsx = "tsx",
  Twig = "twig",
  Typescript = "typescript",
  Xml = "xml",
  Yaml = "yaml",
}

export type AcfCodeBlockAttributes = {
  __typename?: "AcfCodeBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/dribbble block */
export type AcfDribbbleBlock = Block & {
  __typename?: "AcfDribbbleBlock"
  /** @deprecated  */
  acf?: Maybe<AcfDribbbleBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfDribbbleBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfDribbbleBlockFields = {
  __typename?: "AcfDribbbleBlockFields"
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
  /** @deprecated  */
  count?: Maybe<Scalars["Float"]>
}

export type AcfDribbbleBlockAttributes = {
  __typename?: "AcfDribbbleBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/github block */
export type AcfGithubBlock = Block & {
  __typename?: "AcfGithubBlock"
  /** @deprecated  */
  acf?: Maybe<AcfGithubBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfGithubBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfGithubBlockFields = {
  __typename?: "AcfGithubBlockFields"
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
}

export type AcfGithubBlockAttributes = {
  __typename?: "AcfGithubBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/hero block */
export type AcfHeroBlock = Block & {
  __typename?: "AcfHeroBlock"
  /** @deprecated  */
  acf?: Maybe<AcfHeroBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfHeroBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfHeroBlockFields = {
  __typename?: "AcfHeroBlockFields"
  /** @deprecated  */
  background_colour?: Maybe<Scalars["AcfColor"]>
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
  /** @deprecated  */
  duotone?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  media?: Maybe<MediaItem>
  /** @deprecated  */
  overlay?: Maybe<Scalars["Boolean"]>
}

export type AcfHeroBlockAttributes = {
  __typename?: "AcfHeroBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/intro block */
export type AcfIntroBlock = Block & {
  __typename?: "AcfIntroBlock"
  /** @deprecated  */
  acf?: Maybe<AcfIntroBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfIntroBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfIntroBlockFields = {
  __typename?: "AcfIntroBlockFields"
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
  /** @deprecated  */
  heading?: Maybe<Scalars["String"]>
  /** @deprecated  */
  subheading?: Maybe<Scalars["String"]>
}

export type AcfIntroBlockAttributes = {
  __typename?: "AcfIntroBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/link block */
export type AcfLinkBlock = Block & {
  __typename?: "AcfLinkBlock"
  /** @deprecated  */
  acf?: Maybe<AcfLinkBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfLinkBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfLinkBlockFields = {
  __typename?: "AcfLinkBlockFields"
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

export type AcfLinkBlockAttributes = {
  __typename?: "AcfLinkBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/presentations block */
export type AcfPresentationsBlock = Block & {
  __typename?: "AcfPresentationsBlock"
  /** @deprecated  */
  acf?: Maybe<AcfPresentationsBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfPresentationsBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfPresentationsBlockFields = {
  __typename?: "AcfPresentationsBlockFields"
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
  /** @deprecated  */
  count?: Maybe<Scalars["Float"]>
}

export type AcfPresentationsBlockAttributes = {
  __typename?: "AcfPresentationsBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/row block */
export type AcfRowBlock = Block & {
  __typename?: "AcfRowBlock"
  /** @deprecated  */
  acf?: Maybe<AcfRowBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfRowBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfRowBlockFields = {
  __typename?: "AcfRowBlockFields"
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
  /** @deprecated  */
  link?: Maybe<Scalars["String"]>
  /** @deprecated  */
  media?: Maybe<MediaItem>
}

export type AcfRowBlockAttributes = {
  __typename?: "AcfRowBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/testimonials block */
export type AcfTestimonialsBlock = Block & {
  __typename?: "AcfTestimonialsBlock"
  /** @deprecated  */
  acf?: Maybe<AcfTestimonialsBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfTestimonialsBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfTestimonialsBlockFields = {
  __typename?: "AcfTestimonialsBlockFields"
  /** @deprecated  */
  testimonials?: Maybe<Array<AcfTestimonialsBlockFieldsTestimonials>>
}

export type AcfTestimonialsBlockFieldsTestimonials = {
  __typename?: "AcfTestimonialsBlockFieldsTestimonials"
  /** @deprecated  */
  author?: Maybe<Scalars["String"]>
  /** @deprecated  */
  logo?: Maybe<MediaItem>
  /** @deprecated  */
  media?: Maybe<MediaItem>
  /** @deprecated  */
  role?: Maybe<Scalars["String"]>
  /** @deprecated  */
  testimonial?: Maybe<Scalars["String"]>
}

export type AcfTestimonialsBlockAttributes = {
  __typename?: "AcfTestimonialsBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/youtube block */
export type AcfYoutubeBlock = Block & {
  __typename?: "AcfYoutubeBlock"
  /** @deprecated  */
  acf?: Maybe<AcfYoutubeBlockFields>
  /** @deprecated  */
  attributes?: Maybe<AcfYoutubeBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfYoutubeBlockFields = {
  __typename?: "AcfYoutubeBlockFields"
  /** @deprecated  */
  media?: Maybe<Scalars["String"]>
}

export type AcfYoutubeBlockAttributes = {
  __typename?: "AcfYoutubeBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** acf/youtubechannel block */
export type AcfYoutubechannelBlock = Block & {
  __typename?: "AcfYoutubechannelBlock"
  /** @deprecated  */
  attributes?: Maybe<AcfYoutubechannelBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type AcfYoutubechannelBlockAttributes = {
  __typename?: "AcfYoutubechannelBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  data?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  id?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mode?: Maybe<Scalars["String"]>
  /** @deprecated  */
  name?: Maybe<Scalars["String"]>
}

/** core/paragraph block */
export type CoreParagraphBlock = Block & {
  __typename?: "CoreParagraphBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreParagraphBlockAttributesUnion>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreParagraphBlockAttributesUnion =
  | CoreParagraphBlockAttributes
  | CoreParagraphBlockAttributesV2
  | CoreParagraphBlockAttributesV3

export type CoreParagraphBlockAttributes = {
  __typename?: "CoreParagraphBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content: Scalars["String"]
  /** @deprecated  */
  customBackgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customFontSize?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  customTextColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  direction?: Maybe<Scalars["String"]>
  /** @deprecated  */
  dropCap: Scalars["Boolean"]
  /** @deprecated  */
  fontSize?: Maybe<Scalars["String"]>
  /** @deprecated  */
  placeholder?: Maybe<Scalars["String"]>
  /** @deprecated  */
  textColor?: Maybe<Scalars["String"]>
}

export type CoreParagraphBlockAttributesV2 = {
  __typename?: "CoreParagraphBlockAttributesV2"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content: Scalars["String"]
  /** @deprecated Deprecated without breaking change. */
  customBackgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated Deprecated without breaking change. */
  customFontSize?: Maybe<Scalars["Float"]>
  /** @deprecated Deprecated without breaking change. */
  customTextColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  direction?: Maybe<Scalars["String"]>
  /** @deprecated  */
  dropCap: Scalars["Boolean"]
  /** @deprecated  */
  fontSize?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  placeholder?: Maybe<Scalars["String"]>
  /** @deprecated  */
  textColor?: Maybe<Scalars["String"]>
}

export type CoreParagraphBlockAttributesV3 = {
  __typename?: "CoreParagraphBlockAttributesV3"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content: Scalars["String"]
  /** @deprecated  */
  customBackgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customFontSize?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  customTextColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  direction?: Maybe<Scalars["String"]>
  /** @deprecated  */
  dropCap: Scalars["Boolean"]
  /** @deprecated  */
  fontSize?: Maybe<Scalars["String"]>
  /** @deprecated  */
  placeholder?: Maybe<Scalars["String"]>
  /** @deprecated  */
  textColor?: Maybe<Scalars["String"]>
  /** @deprecated Deprecated without breaking change. */
  width?: Maybe<Scalars["String"]>
}

/** core/image block */
export type CoreImageBlock = Block & {
  __typename?: "CoreImageBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreImageBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreImageBlockAttributes = {
  __typename?: "CoreImageBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  alt: Scalars["String"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  height?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  href?: Maybe<Scalars["String"]>
  /** @deprecated  */
  id?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  linkClass?: Maybe<Scalars["String"]>
  /** @deprecated  */
  linkDestination: Scalars["String"]
  /** @deprecated  */
  linkTarget?: Maybe<Scalars["String"]>
  /** @deprecated  */
  rel?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
  /** @deprecated  */
  width?: Maybe<Scalars["Float"]>
}

/** core/heading block */
export type CoreHeadingBlock = Block & {
  __typename?: "CoreHeadingBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreHeadingBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreHeadingBlockAttributes = {
  __typename?: "CoreHeadingBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  anchor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content: Scalars["String"]
  /** @deprecated  */
  level: Scalars["Float"]
  /** @deprecated Deprecated without breaking change. */
  nodeName: Scalars["String"]
  /** @deprecated  */
  placeholder?: Maybe<Scalars["String"]>
}

/** core/gallery block */
export type CoreGalleryBlock = Block & {
  __typename?: "CoreGalleryBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreGalleryBlockAttributesUnion>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreGalleryBlockAttributesUnion =
  | CoreGalleryBlockAttributes
  | CoreGalleryBlockAttributesV2

export type CoreGalleryBlockAttributes = {
  __typename?: "CoreGalleryBlockAttributes"
  /** @deprecated  */
  align: Scalars["String"]
  /** @deprecated  */
  columns?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  ids: Scalars["BlockAttributesArray"]
  /** @deprecated  */
  imageCrop: Scalars["Boolean"]
  /** @deprecated  */
  images: Scalars["BlockAttributesArray"]
  /** @deprecated  */
  linkTo: Scalars["String"]
}

export type CoreGalleryBlockAttributesV2 = {
  __typename?: "CoreGalleryBlockAttributesV2"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  columns?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  ids: Scalars["BlockAttributesArray"]
  /** @deprecated  */
  imageCrop: Scalars["Boolean"]
  /** @deprecated  */
  images: Scalars["BlockAttributesArray"]
  /** @deprecated  */
  linkTo: Scalars["String"]
}

/** core/list block */
export type CoreListBlock = Block & {
  __typename?: "CoreListBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreListBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreListBlockAttributes = {
  __typename?: "CoreListBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated Deprecated without breaking change. */
  nodeName: Scalars["String"]
  /** @deprecated  */
  ordered: Scalars["Boolean"]
  /** @deprecated  */
  values: Scalars["String"]
}

/** core/quote block */
export type CoreQuoteBlock = Block & {
  __typename?: "CoreQuoteBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreQuoteBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreQuoteBlockAttributes = {
  __typename?: "CoreQuoteBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  citation: Scalars["String"]
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated Deprecated without breaking change. */
  style: Scalars["Float"]
  /** @deprecated  */
  value: Scalars["String"]
}

/** core/shortcode block */
export type CoreShortcodeBlock = Block & {
  __typename?: "CoreShortcodeBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreShortcodeBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreShortcodeBlockAttributes = {
  __typename?: "CoreShortcodeBlockAttributes"
  /** @deprecated  */
  text?: Maybe<Scalars["String"]>
}

/** core/archives block */
export type CoreArchivesBlock = Block & {
  __typename?: "CoreArchivesBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreArchivesBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreArchivesBlockAttributes = {
  __typename?: "CoreArchivesBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  displayAsDropdown: Scalars["Boolean"]
  /** @deprecated  */
  showPostCounts: Scalars["Boolean"]
}

/** core/audio block */
export type CoreAudioBlock = Block & {
  __typename?: "CoreAudioBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreAudioBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreAudioBlockAttributes = {
  __typename?: "CoreAudioBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  autoplay?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  id?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  loop?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  preload?: Maybe<Scalars["String"]>
  /** @deprecated  */
  src?: Maybe<Scalars["String"]>
}

/** core/button block */
export type CoreButtonBlock = Block & {
  __typename?: "CoreButtonBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreButtonBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreButtonBlockAttributes = {
  __typename?: "CoreButtonBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated Deprecated without breaking change. */
  color?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customBackgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customTextColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  text?: Maybe<Scalars["String"]>
  /** @deprecated  */
  textColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  title?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core/calendar block */
export type CoreCalendarBlock = Block & {
  __typename?: "CoreCalendarBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreCalendarBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreCalendarBlockAttributes = {
  __typename?: "CoreCalendarBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  month?: Maybe<Scalars["Int"]>
  /** @deprecated  */
  year?: Maybe<Scalars["Int"]>
}

/** core/categories block */
export type CoreCategoriesBlock = Block & {
  __typename?: "CoreCategoriesBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreCategoriesBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreCategoriesBlockAttributes = {
  __typename?: "CoreCategoriesBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  displayAsDropdown: Scalars["Boolean"]
  /** @deprecated  */
  showHierarchy: Scalars["Boolean"]
  /** @deprecated  */
  showPostCounts: Scalars["Boolean"]
}

/** core/code block */
export type CoreCodeBlock = Block & {
  __typename?: "CoreCodeBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreCodeBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreCodeBlockAttributes = {
  __typename?: "CoreCodeBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
}

/** core/columns block */
export type CoreColumnsBlock = Block & {
  __typename?: "CoreColumnsBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreColumnsBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreColumnsBlockAttributes = {
  __typename?: "CoreColumnsBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  columns: Scalars["Float"]
}

/** core/column block */
export type CoreColumnBlock = Block & {
  __typename?: "CoreColumnBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreColumnBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreColumnBlockAttributes = {
  __typename?: "CoreColumnBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
}

/** core/cover block */
export type CoreCoverBlock = Block & {
  __typename?: "CoreCoverBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreCoverBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreCoverBlockAttributes = {
  __typename?: "CoreCoverBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  backgroundType: Scalars["String"]
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated Deprecated without breaking change. */
  contentAlign: Scalars["String"]
  /** @deprecated  */
  customOverlayColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  dimRatio: Scalars["Float"]
  /** @deprecated  */
  focalPoint?: Maybe<Scalars["BlockAttributesObject"]>
  /** @deprecated  */
  hasParallax: Scalars["Boolean"]
  /** @deprecated  */
  id?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  overlayColor?: Maybe<Scalars["String"]>
  /** @deprecated Deprecated without breaking change. */
  title?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core/embed block */
export type CoreEmbedBlock = Block & {
  __typename?: "CoreEmbedBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedBlockAttributes = {
  __typename?: "CoreEmbedBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/twitter block */
export type CoreEmbedTwitterBlock = Block & {
  __typename?: "CoreEmbedTwitterBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedTwitterBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedTwitterBlockAttributes = {
  __typename?: "CoreEmbedTwitterBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/youtube block */
export type CoreEmbedYoutubeBlock = Block & {
  __typename?: "CoreEmbedYoutubeBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedYoutubeBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedYoutubeBlockAttributes = {
  __typename?: "CoreEmbedYoutubeBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/facebook block */
export type CoreEmbedFacebookBlock = Block & {
  __typename?: "CoreEmbedFacebookBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedFacebookBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedFacebookBlockAttributes = {
  __typename?: "CoreEmbedFacebookBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/instagram block */
export type CoreEmbedInstagramBlock = Block & {
  __typename?: "CoreEmbedInstagramBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedInstagramBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedInstagramBlockAttributes = {
  __typename?: "CoreEmbedInstagramBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/wordpress block */
export type CoreEmbedWordpressBlock = Block & {
  __typename?: "CoreEmbedWordpressBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedWordpressBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedWordpressBlockAttributes = {
  __typename?: "CoreEmbedWordpressBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/soundcloud block */
export type CoreEmbedSoundcloudBlock = Block & {
  __typename?: "CoreEmbedSoundcloudBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSoundcloudBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedSoundcloudBlockAttributes = {
  __typename?: "CoreEmbedSoundcloudBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/spotify block */
export type CoreEmbedSpotifyBlock = Block & {
  __typename?: "CoreEmbedSpotifyBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSpotifyBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedSpotifyBlockAttributes = {
  __typename?: "CoreEmbedSpotifyBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/flickr block */
export type CoreEmbedFlickrBlock = Block & {
  __typename?: "CoreEmbedFlickrBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedFlickrBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedFlickrBlockAttributes = {
  __typename?: "CoreEmbedFlickrBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/vimeo block */
export type CoreEmbedVimeoBlock = Block & {
  __typename?: "CoreEmbedVimeoBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedVimeoBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedVimeoBlockAttributes = {
  __typename?: "CoreEmbedVimeoBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/animoto block */
export type CoreEmbedAnimotoBlock = Block & {
  __typename?: "CoreEmbedAnimotoBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedAnimotoBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedAnimotoBlockAttributes = {
  __typename?: "CoreEmbedAnimotoBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/cloudup block */
export type CoreEmbedCloudupBlock = Block & {
  __typename?: "CoreEmbedCloudupBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedCloudupBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedCloudupBlockAttributes = {
  __typename?: "CoreEmbedCloudupBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/collegehumor block */
export type CoreEmbedCollegehumorBlock = Block & {
  __typename?: "CoreEmbedCollegehumorBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedCollegehumorBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedCollegehumorBlockAttributes = {
  __typename?: "CoreEmbedCollegehumorBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/crowdsignal block */
export type CoreEmbedCrowdsignalBlock = Block & {
  __typename?: "CoreEmbedCrowdsignalBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedCrowdsignalBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedCrowdsignalBlockAttributes = {
  __typename?: "CoreEmbedCrowdsignalBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/dailymotion block */
export type CoreEmbedDailymotionBlock = Block & {
  __typename?: "CoreEmbedDailymotionBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedDailymotionBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedDailymotionBlockAttributes = {
  __typename?: "CoreEmbedDailymotionBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/hulu block */
export type CoreEmbedHuluBlock = Block & {
  __typename?: "CoreEmbedHuluBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedHuluBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedHuluBlockAttributes = {
  __typename?: "CoreEmbedHuluBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/imgur block */
export type CoreEmbedImgurBlock = Block & {
  __typename?: "CoreEmbedImgurBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedImgurBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedImgurBlockAttributes = {
  __typename?: "CoreEmbedImgurBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/issuu block */
export type CoreEmbedIssuuBlock = Block & {
  __typename?: "CoreEmbedIssuuBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedIssuuBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedIssuuBlockAttributes = {
  __typename?: "CoreEmbedIssuuBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/kickstarter block */
export type CoreEmbedKickstarterBlock = Block & {
  __typename?: "CoreEmbedKickstarterBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedKickstarterBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedKickstarterBlockAttributes = {
  __typename?: "CoreEmbedKickstarterBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/meetup-com block */
export type CoreEmbedMeetupComBlock = Block & {
  __typename?: "CoreEmbedMeetupComBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedMeetupComBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedMeetupComBlockAttributes = {
  __typename?: "CoreEmbedMeetupComBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/mixcloud block */
export type CoreEmbedMixcloudBlock = Block & {
  __typename?: "CoreEmbedMixcloudBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedMixcloudBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedMixcloudBlockAttributes = {
  __typename?: "CoreEmbedMixcloudBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/polldaddy block */
export type CoreEmbedPolldaddyBlock = Block & {
  __typename?: "CoreEmbedPolldaddyBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedPolldaddyBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedPolldaddyBlockAttributes = {
  __typename?: "CoreEmbedPolldaddyBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/reddit block */
export type CoreEmbedRedditBlock = Block & {
  __typename?: "CoreEmbedRedditBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedRedditBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedRedditBlockAttributes = {
  __typename?: "CoreEmbedRedditBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/reverbnation block */
export type CoreEmbedReverbnationBlock = Block & {
  __typename?: "CoreEmbedReverbnationBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedReverbnationBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedReverbnationBlockAttributes = {
  __typename?: "CoreEmbedReverbnationBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/screencast block */
export type CoreEmbedScreencastBlock = Block & {
  __typename?: "CoreEmbedScreencastBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedScreencastBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedScreencastBlockAttributes = {
  __typename?: "CoreEmbedScreencastBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/scribd block */
export type CoreEmbedScribdBlock = Block & {
  __typename?: "CoreEmbedScribdBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedScribdBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedScribdBlockAttributes = {
  __typename?: "CoreEmbedScribdBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/slideshare block */
export type CoreEmbedSlideshareBlock = Block & {
  __typename?: "CoreEmbedSlideshareBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSlideshareBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedSlideshareBlockAttributes = {
  __typename?: "CoreEmbedSlideshareBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/smugmug block */
export type CoreEmbedSmugmugBlock = Block & {
  __typename?: "CoreEmbedSmugmugBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSmugmugBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedSmugmugBlockAttributes = {
  __typename?: "CoreEmbedSmugmugBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/speaker block */
export type CoreEmbedSpeakerBlock = Block & {
  __typename?: "CoreEmbedSpeakerBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSpeakerBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedSpeakerBlockAttributes = {
  __typename?: "CoreEmbedSpeakerBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/speaker-deck block */
export type CoreEmbedSpeakerDeckBlock = Block & {
  __typename?: "CoreEmbedSpeakerDeckBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedSpeakerDeckBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedSpeakerDeckBlockAttributes = {
  __typename?: "CoreEmbedSpeakerDeckBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/ted block */
export type CoreEmbedTedBlock = Block & {
  __typename?: "CoreEmbedTedBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedTedBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedTedBlockAttributes = {
  __typename?: "CoreEmbedTedBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/tumblr block */
export type CoreEmbedTumblrBlock = Block & {
  __typename?: "CoreEmbedTumblrBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedTumblrBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedTumblrBlockAttributes = {
  __typename?: "CoreEmbedTumblrBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/videopress block */
export type CoreEmbedVideopressBlock = Block & {
  __typename?: "CoreEmbedVideopressBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedVideopressBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedVideopressBlockAttributes = {
  __typename?: "CoreEmbedVideopressBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/wordpress-tv block */
export type CoreEmbedWordpressTvBlock = Block & {
  __typename?: "CoreEmbedWordpressTvBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedWordpressTvBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedWordpressTvBlockAttributes = {
  __typename?: "CoreEmbedWordpressTvBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core-embed/amazon-kindle block */
export type CoreEmbedAmazonKindleBlock = Block & {
  __typename?: "CoreEmbedAmazonKindleBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreEmbedAmazonKindleBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreEmbedAmazonKindleBlockAttributes = {
  __typename?: "CoreEmbedAmazonKindleBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  allowResponsive: Scalars["Boolean"]
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  providerNameSlug?: Maybe<Scalars["String"]>
  /** @deprecated  */
  type?: Maybe<Scalars["String"]>
  /** @deprecated  */
  url?: Maybe<Scalars["String"]>
}

/** core/file block */
export type CoreFileBlock = Block & {
  __typename?: "CoreFileBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreFileBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreFileBlockAttributes = {
  __typename?: "CoreFileBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  downloadButtonText: Scalars["String"]
  /** @deprecated  */
  fileName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  href?: Maybe<Scalars["String"]>
  /** @deprecated  */
  id?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  showDownloadButton: Scalars["Boolean"]
  /** @deprecated  */
  textLinkHref?: Maybe<Scalars["String"]>
  /** @deprecated  */
  textLinkTarget?: Maybe<Scalars["String"]>
}

/** core/freeform block */
export type CoreFreeformBlock = Block & {
  __typename?: "CoreFreeformBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreFreeformBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreFreeformBlockAttributes = {
  __typename?: "CoreFreeformBlockAttributes"
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
}

/** core/html block */
export type CoreHtmlBlock = Block & {
  __typename?: "CoreHtmlBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreHtmlBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreHtmlBlockAttributes = {
  __typename?: "CoreHtmlBlockAttributes"
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
}

/** core/media-text block */
export type CoreMediaTextBlock = Block & {
  __typename?: "CoreMediaTextBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreMediaTextBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreMediaTextBlockAttributes = {
  __typename?: "CoreMediaTextBlockAttributes"
  /** @deprecated  */
  align: Scalars["String"]
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customBackgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  isStackedOnMobile: Scalars["Boolean"]
  /** @deprecated  */
  mediaAlt: Scalars["String"]
  /** @deprecated  */
  mediaId?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  mediaPosition: Scalars["String"]
  /** @deprecated  */
  mediaType?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mediaUrl?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mediaWidth: Scalars["Float"]
}

/** core/latest-comments block */
export type CoreLatestCommentsBlock = Block & {
  __typename?: "CoreLatestCommentsBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreLatestCommentsBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreLatestCommentsBlockAttributes = {
  __typename?: "CoreLatestCommentsBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  commentsToShow: Scalars["Float"]
  /** @deprecated  */
  displayAvatar: Scalars["Boolean"]
  /** @deprecated  */
  displayDate: Scalars["Boolean"]
  /** @deprecated  */
  displayExcerpt: Scalars["Boolean"]
}

/** core/latest-posts block */
export type CoreLatestPostsBlock = Block & {
  __typename?: "CoreLatestPostsBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreLatestPostsBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreLatestPostsBlockAttributes = {
  __typename?: "CoreLatestPostsBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  categories?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  columns: Scalars["Float"]
  /** @deprecated  */
  displayPostDate: Scalars["Boolean"]
  /** @deprecated  */
  order: Scalars["String"]
  /** @deprecated  */
  orderBy: Scalars["String"]
  /** @deprecated  */
  postLayout: Scalars["String"]
  /** @deprecated  */
  postsToShow: Scalars["Float"]
}

/** core/missing block */
export type CoreMissingBlock = Block & {
  __typename?: "CoreMissingBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreMissingBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreMissingBlockAttributes = {
  __typename?: "CoreMissingBlockAttributes"
  /** @deprecated  */
  originalContent?: Maybe<Scalars["String"]>
  /** @deprecated  */
  originalName?: Maybe<Scalars["String"]>
  /** @deprecated  */
  originalUndelimitedContent?: Maybe<Scalars["String"]>
}

/** core/more block */
export type CoreMoreBlock = Block & {
  __typename?: "CoreMoreBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreMoreBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreMoreBlockAttributes = {
  __typename?: "CoreMoreBlockAttributes"
  /** @deprecated  */
  customText?: Maybe<Scalars["String"]>
  /** @deprecated  */
  noTeaser: Scalars["Boolean"]
}

/** core/nextpage block */
export type CoreNextpageBlock = Block & {
  __typename?: "CoreNextpageBlock"
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

/** core/preformatted block */
export type CorePreformattedBlock = Block & {
  __typename?: "CorePreformattedBlock"
  /** @deprecated  */
  attributes?: Maybe<CorePreformattedBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CorePreformattedBlockAttributes = {
  __typename?: "CorePreformattedBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content: Scalars["String"]
}

/** core/pullquote block */
export type CorePullquoteBlock = Block & {
  __typename?: "CorePullquoteBlock"
  /** @deprecated  */
  attributes?: Maybe<CorePullquoteBlockAttributesUnion>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CorePullquoteBlockAttributesUnion =
  | CorePullquoteBlockAttributes
  | CorePullquoteBlockAttributesV2

export type CorePullquoteBlockAttributes = {
  __typename?: "CorePullquoteBlockAttributes"
  /** @deprecated  */
  align: Scalars["String"]
  /** @deprecated  */
  citation?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customMainColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customTextColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mainColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  textColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  value?: Maybe<Scalars["String"]>
}

export type CorePullquoteBlockAttributesV2 = {
  __typename?: "CorePullquoteBlockAttributesV2"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  citation: Scalars["String"]
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customMainColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  customTextColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  mainColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  textColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  value?: Maybe<Scalars["String"]>
}

/** core/rss block */
export type CoreRssBlock = Block & {
  __typename?: "CoreRssBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreRssBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreRssBlockAttributes = {
  __typename?: "CoreRssBlockAttributes"
  /** @deprecated  */
  blockLayout: Scalars["String"]
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  columns: Scalars["Float"]
  /** @deprecated  */
  displayAuthor: Scalars["Boolean"]
  /** @deprecated  */
  displayDate: Scalars["Boolean"]
  /** @deprecated  */
  displayExcerpt: Scalars["Boolean"]
  /** @deprecated  */
  excerptLength: Scalars["Float"]
  /** @deprecated  */
  feedURL: Scalars["String"]
  /** @deprecated  */
  itemsToShow: Scalars["Float"]
}

/** core/search block */
export type CoreSearchBlock = Block & {
  __typename?: "CoreSearchBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreSearchBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreSearchBlockAttributes = {
  __typename?: "CoreSearchBlockAttributes"
  /** @deprecated  */
  buttonText: Scalars["String"]
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  label: Scalars["String"]
  /** @deprecated  */
  placeholder: Scalars["String"]
}

/** core/separator block */
export type CoreSeparatorBlock = Block & {
  __typename?: "CoreSeparatorBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreSeparatorBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreSeparatorBlockAttributes = {
  __typename?: "CoreSeparatorBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
}

/** core/spacer block */
export type CoreSpacerBlock = Block & {
  __typename?: "CoreSpacerBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreSpacerBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreSpacerBlockAttributes = {
  __typename?: "CoreSpacerBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  height: Scalars["Float"]
}

/** core/subhead block */
export type CoreSubheadBlock = Block & {
  __typename?: "CoreSubheadBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreSubheadBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreSubheadBlockAttributes = {
  __typename?: "CoreSubheadBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content?: Maybe<Scalars["String"]>
}

/** core/table block */
export type CoreTableBlock = Block & {
  __typename?: "CoreTableBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreTableBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreTableBlockAttributes = {
  __typename?: "CoreTableBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  backgroundColor?: Maybe<Scalars["String"]>
  /** @deprecated  */
  body: Scalars["BlockAttributesArray"]
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  foot: Scalars["BlockAttributesArray"]
  /** @deprecated  */
  hasFixedLayout: Scalars["Boolean"]
  /** @deprecated  */
  head: Scalars["BlockAttributesArray"]
}

/** core/tag-cloud block */
export type CoreTagCloudBlock = Block & {
  __typename?: "CoreTagCloudBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreTagCloudBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Server side rendered content.
   * @deprecated
   */
  renderedContent: Scalars["String"]
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreTagCloudBlockAttributes = {
  __typename?: "CoreTagCloudBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  showTagCounts: Scalars["Boolean"]
  /** @deprecated  */
  taxonomy: Scalars["String"]
}

/** core/template block */
export type CoreTemplateBlock = Block & {
  __typename?: "CoreTemplateBlock"
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

/** core/text-columns block */
export type CoreTextColumnsBlock = Block & {
  __typename?: "CoreTextColumnsBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreTextColumnsBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreTextColumnsBlockAttributes = {
  __typename?: "CoreTextColumnsBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  columns: Scalars["Float"]
  /** @deprecated  */
  content: Scalars["BlockAttributesArray"]
  /** @deprecated  */
  width?: Maybe<Scalars["String"]>
}

/** core/verse block */
export type CoreVerseBlock = Block & {
  __typename?: "CoreVerseBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreVerseBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreVerseBlockAttributes = {
  __typename?: "CoreVerseBlockAttributes"
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  content: Scalars["String"]
  /** @deprecated  */
  textAlign?: Maybe<Scalars["String"]>
}

/** core/video block */
export type CoreVideoBlock = Block & {
  __typename?: "CoreVideoBlock"
  /** @deprecated  */
  attributes?: Maybe<CoreVideoBlockAttributes>
  /**
   * Inner blocks.
   * @deprecated
   */
  innerBlocks: Array<Maybe<Block>>
  /**
   * Block validation assumes an idempotent operation from source block to serialized block
   * @deprecated
   */
  isValid: Scalars["Boolean"]
  /**
   * Name of the block.
   * @deprecated
   */
  name: Scalars["String"]
  /**
   * Original HTML content.
   * @deprecated
   */
  originalContent: Scalars["String"]
  /**
   * Prent post.
   * @deprecated
   */
  parent?: Maybe<PostObjectTypesUnion>
  /**
   * Parent post id.
   * @deprecated
   */
  parentId?: Maybe<Scalars["Int"]>
  /**
   * Original HTML content with inner blocks.
   * @deprecated
   */
  saveContent: Scalars["String"]
}

export type CoreVideoBlockAttributes = {
  __typename?: "CoreVideoBlockAttributes"
  /** @deprecated  */
  align?: Maybe<Scalars["String"]>
  /** @deprecated  */
  autoplay?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  caption?: Maybe<Scalars["String"]>
  /** @deprecated  */
  className?: Maybe<Scalars["String"]>
  /** @deprecated  */
  controls: Scalars["Boolean"]
  /** @deprecated  */
  id?: Maybe<Scalars["Float"]>
  /** @deprecated  */
  loop?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  muted?: Maybe<Scalars["Boolean"]>
  /** @deprecated  */
  poster?: Maybe<Scalars["String"]>
  /** @deprecated  */
  preload: Scalars["String"]
  /** @deprecated  */
  src?: Maybe<Scalars["String"]>
}
