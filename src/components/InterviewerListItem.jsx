import React from "react";

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {

  const interviewer = {
    key: props.id,
    name: props.name,
    avatar: props.avatar
  }

  return (
    <li onClick={() => {props.setInterviewer(props.id)}}>
      <img
      className="interviewers__item-image" 
      src={props.avatar}
      alt={props.name}
      />
      {props.name}
    </li>
  )
}