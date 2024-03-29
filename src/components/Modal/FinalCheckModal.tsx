import React, { useEffect, useRef } from "react";
import classes from "./FinalCheckModal.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/redux/store";
import axios from "axios";
import saveIcon from "../../assets/saveIcon.png";

interface ModalProps {
  onClose: () => void;
}

const FinalCheckModal: React.FC<ModalProps> = ({ onClose }) => {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  const handleDocumentation = async () => {
    const body = JSON.stringify(userInfo);
    console.log(body);

    try {
      const response = await axios.post("http://localhost:8080/zs", body, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "blob", // 응답을 blob으로 받기 위해 설정
      });

      if (response) {
        console.log(response.data);
      }
      // 파일 다운로드 처리
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "jamiepoint.hwp"); // 다운로드할 파일명 설정
      document.body.appendChild(link);
      link.click();

      if (link.parentNode) {
        link.parentNode.removeChild(link);
      } else {
        document.body.removeChild(link); // parentNode가 없는 예외적인 상황을 대비
      }
      alert("문서 변환이 성공적으로 완료되었습니다!");
      onClose();
    } catch (error) {
      console.error("문서화 실패 : ", error);
      alert("문서 변환에 실패하였습니다!");
      onClose();
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div>
      <div className={classes.modalOverlay} onClick={onClose}>
        <div
          className={classes.modalContent}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          <div className={classes.big_title}>내용을 확인해주세요!</div>
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>활동 수</th>
                  <th>활동 점수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SW핵심역량</td>
                  <td>{userInfo.swCoreInfo.activityCount}</td>
                  <td>{userInfo.swCoreInfo.totalPoint}</td>
                </tr>
                <tr>
                  <td>SW산학협력·창업역량</td>
                  <td>{userInfo.swCooperationInfo.activityCount}</td>
                  <td>{userInfo.swCooperationInfo.totalPoint}</td>
                </tr>
                <tr>
                  <td>SW가치확산역량</td>
                  <td>{userInfo.swValueInfo.activityCount}</td>
                  <td>{userInfo.swValueInfo.totalPoint}</td>
                </tr>
                <tr>
                  <td>SW융합역량</td>
                  <td>{userInfo.swConvergenceInfo.activityCount}</td>
                  <td>{userInfo.swConvergenceInfo.totalPoint}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.saveButtonContainer}>
            <button
              className={classes.saveButton}
              onClick={handleDocumentation}
            >
              <img src={saveIcon} alt="saveIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCheckModal;
