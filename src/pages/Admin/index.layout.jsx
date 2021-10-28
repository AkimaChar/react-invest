import React from "react";
import Title from "../../components/Title";
import { Container } from "../../index.styled";
import * as A from "./index.styled";
import { Dropdown, InputNumber, Input, Popover, Modal } from "antd";
import { ReactComponent as Comment } from "../../assets/comm.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/use-window-size";
const { TextArea } = Input;

export default function AdminLayout({
  coinsList,
  activeCoin,
  newDeal,
  handleChooseCoin,
  handleSearchCoin,
  handleChangeQty,
  handleUpdateValue,
  handleUpdateTime,
  handleChooseAction,
  handleUpdateBehavior,
  handleUpdateComment,
  isCommentTextareaVisible,
  handleVisibleCommentTextarea,
  portfolio,
  isForecastModalVisible,
  showModal,
  closeModal,
}) {
  const { width } = useWindowSize();
  return (
    <Container>
      <Modal
        title={false}
        footer={false}
        visible={isForecastModalVisible}
        closable={false}
        onCancel={closeModal}
        centered
      >
        <A.NewDeal_ForecastModal>
          {forecastBody(
            handleUpdateTime,
            newDeal,
            handleUpdateBehavior,
            handleUpdateValue
          )}
        </A.NewDeal_ForecastModal>
      </Modal>
      <Title mb={10}>Admin Page</Title>
      <A.Header>
        <A.PortfolioStatisticContainer>
          <A.PortfolioStatisticColumn>
            <A.PercentStats>25%</A.PercentStats> Portfolio Profit
          </A.PortfolioStatisticColumn>
          <A.PortfolioStatisticColumn>
            <A.PercentStats>300%</A.PercentStats> of successful deals
          </A.PortfolioStatisticColumn>
          <A.PortfolioStatisticColumn>
            <A.PercentStats>152</A.PercentStats> followers
          </A.PortfolioStatisticColumn>
        </A.PortfolioStatisticContainer>
        <A.CoinsList>
          {coinsList.map(coin => (
            <A.CoinItem
              key={coin._id}
              onClick={() => handleChooseCoin(coin._id)}
              active={activeCoin?._id === coin._id}
            >
              <A.CoinItemLogo src={coin.logo} alt={coin.short_name} />
              <A.CoinName>{coin.short_name}</A.CoinName>
            </A.CoinItem>
          ))}
        </A.CoinsList>
        <A.SearchContainer>
          <A.SearchTitle>Search Coins</A.SearchTitle>
          <A.SearchInput
            type="text"
            placeholder="Search"
            onChange={handleSearchCoin}
          />
        </A.SearchContainer>
      </A.Header>
      <A.NewDealContainer>
        <A.NewDealHeader>
          <A.NewDealHeaderText>Coin</A.NewDealHeaderText>
          <A.NewDealHeaderText>Price</A.NewDealHeaderText>
          <A.NewDealHeaderText>Qty</A.NewDealHeaderText>
          <A.NewDealHeaderText>Sum</A.NewDealHeaderText>
          <A.NewDealHeaderText>Forecast</A.NewDealHeaderText>
          <A.NewDealHeaderText>Comment</A.NewDealHeaderText>
        </A.NewDealHeader>
        <A.NewDealTemplate>
          <A.NewDeal_Coin>
            <A.NewDeal_CoinLogo coin={!!activeCoin}>
              {!!activeCoin && (
                <img src={activeCoin.logo} alt={activeCoin.short_name} />
              )}
            </A.NewDeal_CoinLogo>
            <A.NewDeal_CoinName>{activeCoin?.short_name}</A.NewDeal_CoinName>
          </A.NewDeal_Coin>
          <A.NewDeal_Price>{activeCoin?.price || 0}$</A.NewDeal_Price>
          <A.NewDeal_Qty>
            {width < 1230 && <A.NewDeal_Title>Qty</A.NewDeal_Title>}
            <InputNumber
              value={newDeal.qty || "Edit"}
              bordered={false}
              min={0}
              style={{
                color: "#00a3ff",
              }}
              onChange={handleChangeQty}
            />
          </A.NewDeal_Qty>
          <A.NewDeal_Sum>
            {activeCoin ? newDeal.qty * activeCoin.price : 0}$
          </A.NewDeal_Sum>
          {width > 1230 ? (
            <A.NewDeal_Forecast>
              {forecastBody(
                handleUpdateTime,
                newDeal,
                handleUpdateBehavior,
                handleUpdateValue
              )}
            </A.NewDeal_Forecast>
          ) : (
            <A.NewDeal_ForecastMobile>
              <A.NewDeal_Title>Forecast</A.NewDeal_Title>
              <A.NewDeal_Qty onClick={showModal}>Edit</A.NewDeal_Qty>
            </A.NewDeal_ForecastMobile>
          )}
          {width > 1230 ? (
            <Popover
              content={
                <A.CommentContainer>
                  <TextArea
                    placeholder="Deal comment"
                    autoSize={{ minRows: 2 }}
                    bordered={false}
                    maxLength={50}
                    autoFocus
                    onChange={handleUpdateComment}
                  />
                </A.CommentContainer>
              }
              trigger="click"
              placement="bottomRight"
              title={false}
              visible={isCommentTextareaVisible}
              onVisibleChange={handleVisibleCommentTextarea}
            >
              <A.CommentButton>
                <Comment />
              </A.CommentButton>
            </Popover>
          ) : (
            <A.NewDeal_CommentRow>
              <A.NewDeal_Title>Comment</A.NewDeal_Title>
              <TextArea
                placeholder="Deal comment"
                autoSize={{ minRows: 2 }}
                bordered={false}
                maxLength={50}
                onChange={handleUpdateComment}
              />
            </A.NewDeal_CommentRow>
          )}
          <A.NewDeal_Action>
            <A.NewDeal_RadioButton onClick={() => handleChooseAction("buy")}>
              buy
            </A.NewDeal_RadioButton>
            <A.RadioGroupDivider>/</A.RadioGroupDivider>
            <A.NewDeal_RadioButton onClick={() => handleChooseAction("sell")}>
              sell
            </A.NewDeal_RadioButton>
          </A.NewDeal_Action>
        </A.NewDealTemplate>
      </A.NewDealContainer>
      <Title mb={20}>History</Title>
      <A.HistoryHeader>
        <A.HistoryText>Coin</A.HistoryText>
        <A.HistoryText>Price</A.HistoryText>
        <A.HistoryText>Forecast</A.HistoryText>
        <A.HistoryText>Comment</A.HistoryText>
        <A.HistoryText>Action</A.HistoryText>
      </A.HistoryHeader>
      <A.DealsList>
        {portfolio.deals.map(deal => (
          <A.DealContainer key={deal._id}>
            <Link to={`/coins/${deal.coin.name}`}>
              <A.NewDeal_Coin>
                <A.NewDeal_CoinLogo coin>
                  <img src={deal.coin.logo} alt={deal.coin.short_name} />
                </A.NewDeal_CoinLogo>
                <A.NewDeal_CoinName>{deal.coin.short_name}</A.NewDeal_CoinName>
              </A.NewDeal_Coin>
            </Link>
            <A.BlueText>{deal.coin.price}$</A.BlueText>
            <A.Forecast>
              <A.BlueText>
                {deal.value > 0 && "+"}
                {deal.value}%
              </A.BlueText>
              <span>per {deal.time}</span>
            </A.Forecast>
            <A.Comment>
              {width <= 870 && (
                <A.NewDeal_Title>Forecast comment</A.NewDeal_Title>
              )}
              {deal.comment.content}
            </A.Comment>
            <A.Action>
              {width <= 870 && (
                <A.NewDeal_Title>Forecast action</A.NewDeal_Title>
              )}
              {deal.type}
            </A.Action>
          </A.DealContainer>
        ))}
      </A.DealsList>
    </Container>
  );
}

const forecastBody = (
  handleUpdateTime,
  newDeal,
  handleUpdateBehavior,
  handleUpdateValue
) => (
  <>
    <Dropdown
      overlay={() => (
        <A.NewDeal_TimeContainer>
          <A.NewDeal_TimeItem
            onClick={() => handleUpdateTime("week")}
            active={newDeal.time === "week"}
          >
            week
          </A.NewDeal_TimeItem>
          <A.NewDeal_TimeItem
            onClick={() => handleUpdateTime("month")}
            active={newDeal.time === "month"}
          >
            month
          </A.NewDeal_TimeItem>
          <A.NewDeal_TimeItem
            onClick={() => handleUpdateTime("quarter")}
            active={newDeal.time === "quarter"}
          >
            quarter
          </A.NewDeal_TimeItem>
          <A.NewDeal_TimeItem
            onClick={() => handleUpdateTime("year")}
            active={newDeal.time === "year"}
          >
            year
          </A.NewDeal_TimeItem>
        </A.NewDeal_TimeContainer>
      )}
      trigger={["click"]}
      placement="bottomRight"
    >
      <A.NewDeal_TimeLabel>
        <A.NewDeal_Time>{newDeal.time}</A.NewDeal_Time>
        <Arrow />
      </A.NewDeal_TimeLabel>
    </Dropdown>
    <A.NewDeal_RadioGroup>
      <div>
        <input
          type="radio"
          name="behavior"
          id="increase"
          value="increase"
          defaultChecked
          onChange={handleUpdateBehavior}
        />
        <A.NewDeal_RadioButton htmlFor="increase">
          Increase
        </A.NewDeal_RadioButton>
      </div>
      <A.RadioGroupDivider>/</A.RadioGroupDivider>
      <div>
        <input
          type="radio"
          name="behavior"
          id="decrease"
          value="decrease"
          onChange={handleUpdateBehavior}
        />
        <A.NewDeal_RadioButton htmlFor="decrease">
          Decrease
        </A.NewDeal_RadioButton>
      </div>
    </A.NewDeal_RadioGroup>
    <A.NewDeal_Value>
      <InputNumber
        defaultValue={15}
        bordered={false}
        formatter={value => `${value}%`}
        parser={value => value.replace("%", "")}
        max={2000}
        min={1}
        onChange={handleUpdateValue}
      />
    </A.NewDeal_Value>
  </>
);
