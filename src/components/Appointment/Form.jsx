import React, { useState } from "react";

import Button from "components/Button";

import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    return setStudent("") &&
    setInterviewer(null)
  };

  const cancel = () => {
    return reset() &&
    props.onCancel
  }


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form 
          onSubmit={event => event.preventDefault()}
          autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={student}
            type="text"
            placeholder="Enter Student Name"
            onChange={(studentName) => setStudent(studentName.target.value)}
          />
        </form>
        <InterviewerList
           interviewers={props.interviewers}
           value={interviewer}
           onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave} >Save</Button>
        </section>
      </section>
    </main>
  )
}