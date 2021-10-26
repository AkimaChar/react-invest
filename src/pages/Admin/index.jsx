import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { errorMessage, successMessage, warningMessage } from "../../utils";
import AdminLayout from "./index.layout";
import { createDealService } from "../../services/deals";
import { updateUserDeals } from "../../redux/slices/user";

export default function Admin() {
  const { coins } = useSelector(state => state.coins);
  const { portfolio } = useSelector(state => state.user.data);
  const [coinsList, setCoinsList] = useState();
  const [activeCoin, setActiveCoin] = useState();
  const [isCommentTextareaVisible, setCommentTextareaVisible] = useState(false);
  const [newDeal, setNewDeal] = useState({
    qty: 0,
    value: 15,
    time: "week",
    type: "buy",
    behavior: "increase",
    comment: "",
  });

  const updateNewDeal = pair => {
    setNewDeal(props => {
      return {
        ...props,
        ...pair,
      };
    });
  };
  const handleVisibleCommentTextarea = flag => {
    setCommentTextareaVisible(flag);
  };
  const handleUpdateComment = e => {
    updateNewDeal({ comment: e.target.value });
  };

  const handleSearchCoin = e => {
    if (e.target.value.length) {
      setCoinsList(
        coins.filter(
          coin =>
            coin.name.startsWith(e.target.value.toLowerCase()) ||
            coin.short_name.startsWith(e.target.value.toLowerCase())
        )
      );
    } else {
      setCoinsList(coins);
    }
  };
  const handleChooseCoin = id => {
    setActiveCoin(coinsList.find(coin => coin._id === id));
  };
  const handleUpdateBehavior = e => {
    updateNewDeal({ [e.target.name]: e.target.value });
  };
  const handleUpdateTime = time => {
    updateNewDeal({ time });
  };
  const handleUpdateValue = value => {
    updateNewDeal({ value });
  };

  const handleChangeQty = qty => {
    updateNewDeal({ qty });
  };

  const handleChooseAction = async type => {
    updateNewDeal({ type });
    if (!activeCoin) {
      warningMessage("Choose coin");
    } else if (newDeal.qty < 1) {
      warningMessage("Enter coins quantity");
    } else if (!newDeal.comment.length) {
      warningMessage("Deal comment is required");
    } else {
      const { data } = await createDealService({
        coin: activeCoin?.name,
        count: newDeal.qty,
        type: newDeal.type,
        value:
          newDeal.behavior === "decrease" ? newDeal.value * -1 : newDeal.value,
        time: newDeal.time,
        comment: newDeal.comment,
      });
      if (data.error) {
        errorMessage(data.error);
      } else {
        updateUserDeals(data);
        successMessage("Deal created");
      }
    }
  };

  useEffect(() => {
    setCoinsList(coins);
  }, [coins]);

  return !!coins.length && !!coinsList ? (
    <AdminLayout
      coinsList={coinsList}
      activeCoin={activeCoin}
      newDeal={newDeal}
      handleSearchCoin={handleSearchCoin}
      handleChooseCoin={handleChooseCoin}
      handleChangeQty={handleChangeQty}
      handleUpdateValue={handleUpdateValue}
      handleUpdateTime={handleUpdateTime}
      handleUpdateBehavior={handleUpdateBehavior}
      handleChooseAction={handleChooseAction}
      isCommentTextareaVisible={isCommentTextareaVisible}
      handleVisibleCommentTextarea={handleVisibleCommentTextarea}
      handleUpdateComment={handleUpdateComment}
      deals={portfolio.deals}
    />
  ) : (
    <Loader />
  );
}
