import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "post is required"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
    content: {
      type: String,
      required: [true, "comment is required"],
      minlength: [1, "comment must be at least 1 characters"],
      maxlength: [200, "comment can not be more than 500 characters"],
    },
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    edited: {
      type: Boolean,
      default: false,
    },
    flagged: {
      type: Boolean,
      default: false,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    attachments: [
      {
        value: {
          type: String,
          required: true,
          trim: true,
        },
        type: {
          type: String,
          enum: ["emoji", "image", "link"],
          default: "emoji",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//validate attachment if added
const MAX_ATTACHMENTS = 3;
commentSchema.path("attachments").validate((attachment) => {
  if (attachment.length > MAX_ATTACHMENTS) {
    throw new Error(`you can't add more than ${MAX_ATTACHMENTS} attachments`);
  }
}, `Maximun number of attachments is ${MAX_ATTACHMENTS}`);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
