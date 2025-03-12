import React, { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { insertApplication } from "@/service/applyService";

const border_style =
  "px-2 rounded-[4px] transition-all duration-200 mt-2 border-[1.4px] border-gray-300 bg-gray-100 border-1 w-full resize-none outline-none focus:outline-none focus:ring-0 focus:border-black";

type ApplyModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

const ApplyModal = ({ isModalOpen, setIsModalOpen }: ApplyModalProps) => {
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");
  // GenerateModal, UploadModal 열 때 유저 정보가 없어 열리는 모달이기에 isGenerationModalOpen과 isUploadModalOpen으로 관리됨
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const submit = async () => {
    if (mail.length < 5) return;
    const getLogId = localStorage.getItem("logId");

    if (getLogId) {
      const res = await insertApplication({
        comment: comment,
        mail: mail,
        log_id: getLogId,
      });
      console.log("insert 끝", res);
    } else {
      console.log("없어서 못함");
    }

    setSubmitted(true);
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      title={submitted ? "Submitted" : "Join"}
    >
      <div className="w-full text-[1em] text-gray-800 flex flex-col justify-start items-start">
        <div className="text-left">
          {!submitted ? (
            <>Please leave an email and a comment.</>
          ) : (
            <>
              Thanks for joining our waitlist!&nbsp;
              <br />
            </>
          )}{" "}
          We{"'"}ll notify you as soon as the service launches.
          <br />
          <div className="text-gray-400 text-[15px] mt-2">
            Sleeve will be released at 2025.03.21
          </div>
        </div>
        {!submitted && (
          <>
            <input
              type="text"
              placeholder="example@gmail.com"
              className={`w-full ${border_style} mt-6 py-1.5`}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <textarea
              placeholder="please leave a comment (optional)"
              className={`w-full ${border_style} py-1`}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default React.memo(ApplyModal);
