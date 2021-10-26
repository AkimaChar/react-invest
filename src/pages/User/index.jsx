import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatar, updateUserData } from "../../redux/slices/user";
import Userlayout from "./index.layout";
import {
  updateDescriptionPortfolioService,
  updateDescriptionUserService,
  updateUserAvatarService,
  updateUserCredentialsService,
  updateUserEmailService,
} from "../../services/user";
import { errorMessage, successMessage, warningMessage } from "../../utils";
import { isEmail } from "validator";

export default function User() {
  const [isUpdatingAvatar, setUpdatingAvatar] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const [newCreds, setNewCreds] = useState({});
  const [portfolioDescCount, setPortfolioDescCount] = useState(
    user?.portfolio.description.length || 0
  );
  const [userDescCount, setUserDescCount] = useState(
    user?.description.length || 0
  );

  const handleUpdateEmail = async e => {
    e.preventDefault();
    if (!e.target[0].value.length) {
      warningMessage('Enter email and then press "Enter"');
    } else if (!isEmail(e.target[0].value)) {
      warningMessage("Enter valid email");
    } else {
      const { data } = await updateUserEmailService(e.target[0].value);
      if (data.error) {
        errorMessage(data.error);
      } else {
        dispatch(updateUserData(data));
        successMessage("Email updated");
      }
    }
  };

  const handleUpdateCreds = e => {
    setNewCreds(props => {
      return {
        ...props,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSendNewCreds = async type => {
    if (
      (type === "name" && newCreds[type] === user[type]) ||
      !newCreds[type]?.length
    ) {
      warningMessage(`Enter new ${type}`);
    } else {
      const { data } = await updateUserCredentialsService(newCreds, type);
      if (data.error) {
        errorMessage(data.error);
      } else {
        dispatch(updateUserData(data));
        successMessage(type[0].toUpperCase() + type.substring(1) + " updated");
      }
    }
  };

  const handleUpdatePortfolioDesc = async e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (!e.target.value.length) {
        warningMessage("Portfolio description can't be empty");
      } else {
        const { data } = await updateDescriptionPortfolioService(
          e.target.value
        );
        if (data.error) {
          errorMessage(data.error);
        } else {
          successMessage("Portfolio description updated");
        }
      }
    }
  };
  const handleUpdateUserDesc = async e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (!e.target.value.length) {
        warningMessage("User description can't be empty");
      } else {
        const { data } = await updateDescriptionUserService(e.target.value);
        if (data.error) {
          errorMessage(data.error);
        } else {
          successMessage("User description updated");
        }
      }
    }
  };

  const handleUpdateUserDescLength = e => {
    setUserDescCount(e.target.value.length);
  };
  const handleUpdatePortfolioDescLength = e => {
    setPortfolioDescCount(e.target.value.length);
  };

  const handleUploadUserAvatar = async e => {
    if (e.target.files) {
      setUpdatingAvatar(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const { data } = await updateUserAvatarService(formData);
      console.log(data);
      setUpdatingAvatar(false);
      if (data.error) {
        errorMessage(data.error);
      } else {
        dispatch(updateUserAvatar(data.url));
      }
    }
  };

  return (
    <Userlayout
      user={user}
      portfolioDescCount={portfolioDescCount}
      userDescCount={userDescCount}
      handleUpdateEmail={handleUpdateEmail}
      handleUpdateCreds={handleUpdateCreds}
      handleSendNewCreds={handleSendNewCreds}
      handleUpdatePortfolioDesc={handleUpdatePortfolioDesc}
      handleUpdateUserDesc={handleUpdateUserDesc}
      handleUpdateUserDescLength={handleUpdateUserDescLength}
      handleUpdatePortfolioDescLength={handleUpdatePortfolioDescLength}
      handleUploadUserAvatar={handleUploadUserAvatar}
      isUpdatingAvatar={isUpdatingAvatar}
    />
  );
}
