import { format } from "date-fns";
import React from "react";
import Title from "../../components/Title";
import { ReactComponent as Camera } from "../../assets/camera.svg";
import Star from "../../assets/star.js";
import * as U from "./index.styled";
import { Input } from "antd";
import { Line } from "../../index.styled";
import Loader from "../../components/Loader";
const { TextArea } = Input;

export default function Userlayout({
  user,
  portfolioDescCount,
  userDescCount,
  handleUpdateEmail,
  handleUpdateCreds,
  handleSendNewCreds,
  handleUpdatePortfolioDesc,
  handleUpdateUserDesc,
  handleUpdateUserDescLength,
  handleUpdatePortfolioDescLength,
  handleUploadUserAvatar,
  isUpdatingAvatar,
}) {
  return (
    <U.Container>
      <Title mb={50}>Personal Details</Title>
      <U.MainInfo>
        <U.Column>
          <U.AvatarContainer>
            <U.Avatar src={user.avatar} alt="avatar" />
            <U.UpdateAvatar>
              {isUpdatingAvatar ? (
                <Loader />
              ) : (
                <>
                  <input
                    type="file"
                    id="avatar"
                    accept=".jpg, .jpeg .png"
                    onChange={handleUploadUserAvatar}
                  />
                  <U.UpdateAvatarButton htmlFor="avatar">
                    <Camera />
                  </U.UpdateAvatarButton>
                </>
              )}
            </U.UpdateAvatar>
          </U.AvatarContainer>
          <form onSubmit={handleUpdateEmail}>
            <U.Email
              type="text"
              defaultValue={user.email || ""}
              placeholder="Set email"
              className="email_row"
            />
          </form>
          <U.Created>
            Created:{" "}
            <U.DateCreated>
              {format(new Date(user.created), "dd.MM.yyyy")}
            </U.DateCreated>
          </U.Created>
        </U.Column>
        <U.UserCreds>
          <U.CredentialContainer>
            <U.CredentialHeader>
              <U.CredentialLabel>name</U.CredentialLabel>
              <U.UpdateCredential onClick={() => handleSendNewCreds("name")}>
                add
              </U.UpdateCredential>
            </U.CredentialHeader>
            <U.Credetial
              type="text"
              name="name"
              defaultValue={user.name}
              onChange={handleUpdateCreds}
            />
          </U.CredentialContainer>
          <U.CredentialContainer>
            <U.CredentialHeader>
              <U.CredentialLabel>password</U.CredentialLabel>
              <U.UpdateCredential
                onClick={() => handleSendNewCreds("password")}
              >
                change
              </U.UpdateCredential>
            </U.CredentialHeader>
            <U.Credetial
              type="password"
              name="password"
              placeholder="New password"
              defaultValue=""
              onChange={handleUpdateCreds}
            />
          </U.CredentialContainer>
        </U.UserCreds>
      </U.MainInfo>
      <U.DecriptionBlock>
        <U.DescriptionHeader>
          <U.DescriptionTitle>
            Portfolio description and purpose
          </U.DescriptionTitle>
          <U.DescriptionCount>{portfolioDescCount}/200</U.DescriptionCount>
        </U.DescriptionHeader>
        <TextArea
          placeholder="Type here"
          autoSize={{ minRows: 2 }}
          bordered={false}
          maxLength={200}
          defaultValue={user.portfolio?.description}
          onKeyDown={handleUpdatePortfolioDesc}
          onChange={handleUpdatePortfolioDescLength}
        />
      </U.DecriptionBlock>
      <U.DecriptionBlock>
        <U.DescriptionHeader>
          <U.DescriptionTitle>Description</U.DescriptionTitle>
          <U.DescriptionCount>{userDescCount}/50</U.DescriptionCount>
        </U.DescriptionHeader>
        <TextArea
          placeholder="Type here"
          autoSize={{ minRows: 2 }}
          bordered={false}
          maxLength={200}
          defaultValue={user.description}
          onKeyDown={handleUpdateUserDesc}
          onChange={handleUpdateUserDescLength}
        />
      </U.DecriptionBlock>
      <Line mv={45} />
      <U.SubscriptionsSection>
        <U.SubscriptionsTitle>My subscriptions</U.SubscriptionsTitle>
        <U.SubscriptionList>
          {!user.subscriptions.length && (
            <U.NoSubscriptions>
              You dont have any subscriptions
            </U.NoSubscriptions>
          )}
          {user.subscriptions.lenth &&
            user.subscriptions.map(s => (
              <U.Subscription>
                <U.SubscriptionInfo>
                  <U.SubscriptionAvatar>
                    <img src={s.avatar} alt="subscription" />
                  </U.SubscriptionAvatar>
                  <U.SubscriptionTextInfo>
                    <U.SubscriptionName>{s.name}</U.SubscriptionName>
                    <U.SubscriptionStars>
                      {[1, 2, 3, 4, 5].map(r => (
                        <Star active={s.rate ? r <= s.rate : false} />
                      ))}
                    </U.SubscriptionStars>
                  </U.SubscriptionTextInfo>
                </U.SubscriptionInfo>
                <U.Unfollow>Unfollow</U.Unfollow>
              </U.Subscription>
            ))}
        </U.SubscriptionList>
      </U.SubscriptionsSection>
    </U.Container>
  );
}
