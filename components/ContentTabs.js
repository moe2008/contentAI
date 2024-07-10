import React from "react";

const ContentTabs = (props) => {
  const active = (e) => {
    const elementBefore = document.getElementsByClassName("active");
    for (let element of elementBefore) {
      element.classList.remove("active");
    }
    e.target.classList.add("active");
  };
  return (
    <div class="border-b border-gray-200 dark:border-gray-700 p-4 mb-4">
      <ul class="flex flex-wrap -mb-px text-xs font-medium text-center text-gray-500 dark:text-gray-400 justify-center">
        <li class="me-2">
          <a
            href="#"
            onClick={(e) => {
              props.setTab("Social Media Post");
              active(e);
            }}
            class="active inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            Social Media Post
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            onClick={(e) => {
              props.setTab("Product Description");
              active(e);
            }}
            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            Product Description
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            onClick={(e) => {
              props.setTab("Blog Post");
              active(e);
            }}
          >
            Blog Post
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            onClick={(e) => {
              props.setTab("Thumbnail");
              active(e);
            }}
          >
            Thumbnails
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            onClick={(e) => {
              props.setTab("Video Script");
              active(e);
            }}
          >
            Video Scripts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContentTabs;
