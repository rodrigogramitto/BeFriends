import React from 'react';
import PropTypes from 'prop-types';

const ProfileBanner = ({ profilePic }) => {
  //dummy image
  // const profileImg = "https://picsum.photos/id/237/300/300"

  return (
    <div className="profile-banner">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={profilePic} alt="Profile image" />
        </div>
      </div>
    </div>
  )
}

ProfileBanner.propTypes = {
  profilePic: PropTypes.string.isRequired,
};

export default ProfileBanner