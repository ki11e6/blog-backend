import mongoose from "mongoose";
import slugify from "slugify";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
      maxlength: [100, "title can not be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: [true, "category is required"],
    },
    numViews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "author is required"],
    },
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
        index: true,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
    status: {
      type: String,
      enum: ["draft", "published", "deleted"],
      default: "draft",
    },
    featuredImage: {
      type: String,
      trim: true,
    },
    language: {
      type: String,
      enum: ["en", "fr", "es", "de", "other"],
      default: "en",
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

//generate unique slug
const generateUniqueSlug = async (title, postId) => {
  let slug = slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });

  //check if slug already exists
  let slugExists = await Post.findOne({ slug, _id: { $ne: postId } });
  let counter = 1;

  //number the post if slug already exists
  while (slugExists) {
    slug = `${slug}-${counter}`;
    counter++;
    slugExists = await Post.findOne({ slug, _id: { $ne: postId } });
  }
  return slug;
};

// pre-save hook
postSchema.pre("save", async (next) => {
  try {
    if (this.isModified("title")) {
      this.slug = await generateUniqueSlug(this.title, this._id);
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Post = mongoose.model("Post", postSchema);
export default Post;
