import { insertLog } from "@/service/logService";
import { v4 } from "uuid";

export const addLog = async (action: string) => {
  const getLodId = localStorage.getItem("logId");

  if (getLodId) {
    const body = {
      log_id: getLodId,
      action: action,
    };
    const res = await insertLog(body);
    console.log("로그 주입 ", action, res);
  } else {
    const logid = v4();
    localStorage.setItem("logId", logid);

    const body = {
      log_id: logid,
      action: action,
    };
    const res = await insertLog(body);
    console.log("res : ", action, res);
  }
};
