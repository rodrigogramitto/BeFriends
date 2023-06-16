import React, { useState, useRef } from "react";

export default function AddPost({ dummyFeed, setDummyFeed }) {
  const [newPost, setNewPost] = useState("");
  const [addedPhoto, setAddedPhoto] = useState(null);
  const modalRef = useRef(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (newPost.trim() === "") {
      return;
    }

    setDummyFeed([...dummyFeed, newPost]);
    setNewPost("");
    closeModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const checkPhotoSubmit = (e) => {
    const file = e.target.files[0];
    setAddedPhoto(file);
  };

  return (
    <div>
      <button
        className="edit-profile-button"
        type="button"
        onClick={() => modalRef.current.showModal()}
      >
        Add Post
      </button>
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <form method="dialog" className="modal-box add-post-modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="add-post-input">
            New Post:
            <textarea
              className="textarea-lg add-post-textarea"
              maxLength="1000"
              placeholder="Write your new post here..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
          </div>

          <div className="add-post-photo">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              accept="image/*"
              onChange={checkPhotoSubmit}
            />

            {addedPhoto && (
              <img
                className="added-photo"
                src={URL.createObjectURL(addedPhoto)}
              />
            )}
          </div>
          <button
            type="button"
            className="edit-profile-button"
            onClick={handlePostSubmit}
          >
            Add Post!
          </button>
        </form>
      </dialog>
    </div>
  );
}
