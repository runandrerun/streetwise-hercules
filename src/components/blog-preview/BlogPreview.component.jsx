import React from 'react';
import BlogPreviewCard from '../blog-preview-card/BlogPreviewCard.component';
import './BlogPreview.styles.scss';

const BlogPreview = () => {
  return (
    <section className="blog-preview">
      <div className="row">
        <div className="col-1-of-4">
          <BlogPreviewCard
            type={"heart"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
        <div className="col-1-of-4">
          <BlogPreviewCard
            type={"compass"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
        <div className="col-1-of-4">
          <BlogPreviewCard
            type={"world"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
        <div className="col-1-of-4">
          <BlogPreviewCard
            type={"heart"}
            title={"Love"}
            copy={"Lorem ipsum"}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
