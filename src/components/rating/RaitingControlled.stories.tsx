import React, { useState } from "react";
import { RatingControlled } from "./RaitingControlled";
import { ratingValueType } from "../../App";

export default {
  title: "RatingControlled",
  component: RatingControlled,
};

export const BaseState = () => {
  const [ratingValue, setRatingValue] = useState<ratingValueType>(0);
  return <RatingControlled onClick={setRatingValue} value={ratingValue} />;
};

export const State1 = () => <RatingControlled onClick={() => {}} value={1} />;
export const State2 = () => <RatingControlled onClick={() => {}} value={2} />;
export const State3 = () => <RatingControlled onClick={() => {}} value={3} />;
export const State4 = () => <RatingControlled onClick={() => {}} value={4} />;
export const State5 = () => <RatingControlled onClick={() => {}} value={5} />;
