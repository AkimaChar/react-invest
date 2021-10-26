import styled from "styled-components";

export const Container = styled.div``;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin: 0 auto;
  max-width: 900px;
  margin-bottom: 50px;
  align-items: flex-start;
`;

export const Column = styled.div``;

export const AvatarContainer = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  margin-bottom: 17px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UpdateAvatar = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  input {
    display: none;
  }
  section {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const UpdateAvatarButton = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: 300ms;
  &:hover {
    opacity: 1;
  }
  svg {
    width: 62px;
    height: 62px;
  }
`;

export const Email = styled.input`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const Created = styled.span`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 13px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.5);
`;

export const DateCreated = styled(Created)`
  color: #00a3ff;
`;

export const GrayBlock = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border-radius: 30px;
`;

export const UserCreds = styled(GrayBlock)`
  padding: 35px 30px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 25px;
  max-width: 540px;
  flex-grow: 1;
`;

export const CredentialContainer = styled(GrayBlock)`
  padding: 20px 35px;
`;

export const CredentialHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;

export const CredentialLabel = styled.label`
  text-transform: capitalize;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.4;
`;

export const UpdateCredential = styled.button`
  text-transform: capitalize;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #00a3ff;
`;

export const Credetial = styled.input`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  width: 100%;
`;

export const DecriptionBlock = styled(GrayBlock)`
  padding: 25px 30px;
  margin-bottom: 20px;
  textarea {
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const DescriptionHeader = styled(CredentialHeader)`
  margin-bottom: 10px;
`;

export const DescriptionTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #00a3ff;
`;

export const DescriptionCount = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.2;
`;

export const SubscriptionsSection = styled(GrayBlock)`
  padding: 30px 40px;
`;

export const SubscriptionsTitle = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const NoSubscriptions = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.6;
`;

export const SubscriptionList = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 18px;
`;

export const Subscription = styled(GrayBlock)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const SubscriptionInfo = styled.div`
  padding: 30px 0 30px 35px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Unfollow = styled.button`
  display: block;
  height: 100%;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-radius: inherit;
  flex-grow: 1;
  max-width: 320px;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: #00a3ff;
  transition: 300ms;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const SubscriptionAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SubscriptionTextInfo = styled.div``;

export const SubscriptionName = styled.p`
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 7px;
`;

export const SubscriptionStars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    width: 15px;
    height: 15px;
  }
`;
